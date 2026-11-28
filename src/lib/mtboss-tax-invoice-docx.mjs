import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { strFromU8, strToU8, unzipSync, zipSync } from 'fflate';
import { DOCX_MIME, invoicePlaceholderValues, safeInvoiceFilePart } from './tax-invoice-values.mjs';

function assetPath(name) {
  return path.join(process.cwd(), 'src', 'assets', 'invoice', name);
}

function decodeXml(value) {
  return value.replace(/&(#[0-9]+|#x[0-9a-fA-F]+|amp|lt|gt|quot|apos);/g, (all, entity) => {
    if (entity === 'amp') return '&';
    if (entity === 'lt') return '<';
    if (entity === 'gt') return '>';
    if (entity === 'quot') return '"';
    if (entity === 'apos') return "'";
    const code = entity[1] === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
    return Number.isFinite(code) ? String.fromCodePoint(code) : all;
  });
}

function encodeXml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function expandItemRows(xml, count) {
  const matches = [];
  const re = /<w:tr\b[\s\S]*?<\/w:tr>/g;
  let match;
  while ((match = re.exec(xml))) {
    if (match[0].includes('[Product / Material]')) matches.push({ start: match.index, end: match.index + match[0].length, xml: match[0] });
  }
  if (!matches.length) throw new Error('Invoice template is missing the styled item row');
  const clones = Array.from({ length: Math.max(1, count) }, (_, index) => (
    matches[0].xml.replace(/<w:t(\s[^>]*)?>\d+<\/w:t>/, `<w:t$1>${index + 1}</w:t>`)
  ));
  let out = xml;
  for (let index = matches.length - 1; index >= 1; index -= 1) {
    out = out.slice(0, matches[index].start) + out.slice(matches[index].end);
  }
  const first = matches[0];
  return out.slice(0, first.start) + clones.join('') + out.slice(first.end);
}

function replacePlaceholders(xml, values) {
  const re = /<w:t(\s[^>]*)?>([^<]*)<\/w:t>/g;
  const nodes = [];
  let match;
  while ((match = re.exec(xml))) {
    nodes.push({ start: match.index, end: match.index + match[0].length, attrs: match[1] || '', raw: match[2], text: decodeXml(match[2]) });
  }
  let full = '';
  const map = [];
  nodes.forEach((node, nodeIndex) => {
    for (let offset = 0; offset < node.text.length; offset += 1) map.push({ nodeIndex, offset });
    full += node.text;
  });
  const spans = [];
  const placeholder = /\[[^\]]*\]/g;
  while ((match = placeholder.exec(full))) spans.push({ start: match.index, end: match.index + match[0].length, token: match[0] });
  if (spans.length !== values.length) {
    throw new Error(`Invoice template has ${spans.length} placeholders; ${values.length} values were prepared (${spans.map((span) => span.token).join(', ')})`);
  }
  const pieces = nodes.map((node) => node.text);
  for (let index = spans.length - 1; index >= 0; index -= 1) {
    const span = spans[index];
    const start = map[span.start];
    const end = map[span.end - 1];
    const value = String(values[index] ?? '');
    if (start.nodeIndex === end.nodeIndex) {
      const text = pieces[start.nodeIndex];
      pieces[start.nodeIndex] = text.slice(0, start.offset) + value + text.slice(end.offset + 1);
    } else {
      pieces[start.nodeIndex] = pieces[start.nodeIndex].slice(0, start.offset) + value;
      for (let nodeIndex = start.nodeIndex + 1; nodeIndex < end.nodeIndex; nodeIndex += 1) pieces[nodeIndex] = '';
      pieces[end.nodeIndex] = pieces[end.nodeIndex].slice(end.offset + 1);
    }
  }
  let out = xml;
  for (let index = nodes.length - 1; index >= 0; index -= 1) {
    if (pieces[index] === nodes[index].text) continue;
    const text = pieces[index];
    let attrs = nodes[index].attrs || '';
    if ((/^\s|\s$/.test(text)) && !/xml:space=/.test(attrs)) attrs += ' xml:space="preserve"';
    out = `${out.slice(0, nodes[index].start)}<w:t${attrs}>${encodeXml(text)}</w:t>${out.slice(nodes[index].end)}`;
  }
  const visible = [...out.matchAll(/<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g)].map((item) => decodeXml(item[1])).join('');
  const unresolved = visible.match(/\[[^\]]+\]/);
  if (unresolved) throw new Error(`Unresolved invoice placeholder ${unresolved[0]}`);
  return out;
}

function jpegSize(bytes) {
  const buffer = Buffer.from(bytes);
  let index = 2;
  while (index < buffer.length - 8) {
    if (buffer[index] !== 0xff) break;
    const marker = buffer[index + 1];
    const length = buffer.readUInt16BE(index + 2);
    if (marker === 0xc0 || marker === 0xc2) return { width: buffer.readUInt16BE(index + 7), height: buffer.readUInt16BE(index + 5) };
    index += 2 + length;
  }
  return { width: 1, height: 1 };
}

function ensureLogo(files, documentXml) {
  const mediaKey = Object.keys(files).find((key) => key.startsWith('word/media/') && !key.endsWith('/'));
  if (mediaKey && documentXml.includes('<a:blip')) return documentXml;
  const logoFile = assetPath('mtboss-logo.jpeg');
  if (!existsSync(logoFile)) throw new Error('Official MT BOSS logo asset is missing');
  const logo = readFileSync(logoFile);
  const { width, height } = jpegSize(logo);
  const cx = 1143000;
  const cy = Math.max(1, Math.round(cx * (height / width)));
  files['word/media/image1.jpeg'] = logo;
  const relKey = 'word/_rels/document.xml.rels';
  let rels = strFromU8(files[relKey]);
  if (!rels.includes('media/image1.jpeg')) {
    rels = rels.replace('</Relationships>', '<Relationship Id="rIdLogo" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image1.jpeg"/></Relationships>');
    files[relKey] = strToU8(rels);
  }
  const typesKey = '[Content_Types].xml';
  let types = strFromU8(files[typesKey]);
  if (!/Extension="jpeg"/.test(types)) {
    files[typesKey] = strToU8(types.replace('</Types>', '<Default Extension="jpeg" ContentType="image/jpeg"/></Types>'));
  }
  const drawing = `<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:noProof/></w:rPr><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="1" name="MTBOSS Logo"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="1" name="MTBOSS Logo"/><pic:cNvPicPr><a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></pic:cNvPicPr></pic:nvPicPr><pic:blipFill><a:blip r:embed="rIdLogo"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
  if (!documentXml.includes('<w:body')) throw new Error('Invoice template body is missing');
  return documentXml.replace('<w:body>', `<w:body>${drawing}`);
}

export function buildTaxInvoiceDocx(row) {
  const templateFile = assetPath('MTBOSS_Tax_Invoice_Template.docx');
  if (!existsSync(templateFile)) throw new Error('Invoice template MTBOSS_Tax_Invoice_Template.docx is missing');
  const prepared = invoicePlaceholderValues(row);
  const files = unzipSync(new Uint8Array(readFileSync(templateFile)));
  if (!files['word/document.xml']) throw new Error('Invoice template is not a valid Word document');
  let documentXml = strFromU8(files['word/document.xml']);
  documentXml = ensureLogo(files, documentXml);
  if (!documentXml.includes('<a:blip') || !Object.keys(files).some((key) => key.startsWith('word/media/'))) {
    throw new Error('Official MT BOSS logo asset is missing');
  }
  documentXml = expandItemRows(documentXml, prepared.lineCount);
  documentXml = replacePlaceholders(documentXml, prepared.values);
  files['word/document.xml'] = strToU8(documentXml);
  return {
    buffer: Buffer.from(zipSync(files, { level: 6 })),
    filename: `MTBOSS_Tax_Invoice_${safeInvoiceFilePart(prepared.invoiceNumber)}.docx`,
    contentType: DOCX_MIME,
    invoiceNumber: prepared.invoiceNumber,
    grandTotal: prepared.grandTotal,
  };
}
