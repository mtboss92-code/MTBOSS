const TEXT_KEYS = [
  'invoice_number', 'invoice_date', 'order_id', 'place_of_supply', 'reverse_charge', 'dispatch_date', 'due_date',
  'billing_name', 'billing_address', 'billing_state', 'billing_gstin', 'billing_contact',
  'shipping_name', 'shipping_address', 'shipping_state', 'shipping_contact',
  'item_description', 'hsn', 'qty', 'unit', 'rate', 'discount', 'gst_percent', 'terms', 'legal_name',
  'gst_type', 'taxable_amount', 'cgst_amount', 'sgst_amount', 'igst_amount', 'grand_total', 'amount_in_words',
];

const clean = (value, max = 500) => String(value ?? '').trim().slice(0, max);

function cleanItem(item) {
  return {
    description: clean(item?.description || item?.item_description, 250),
    hsn: clean(item?.hsn, 50),
    qty: clean(item?.qty, 30),
    unit: clean(item?.unit, 50),
    rate: clean(item?.rate, 30),
    discount: clean(item?.discount, 30),
    gst_percent: clean(item?.gst_percent, 30),
  };
}

function itemHasContent(item) {
  return Object.values(item || {}).some((value) => String(value || '').trim());
}

export function sanitizeInvoiceDetails(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  const details = {};
  for (const key of TEXT_KEYS) {
    const max = key === 'terms' ? 1500 : key === 'billing_address' || key === 'shipping_address' || key === 'amount_in_words' ? 500 : 100;
    const text = clean(value[key], key === 'terms' ? 1500 : max);
    if (text) details[key] = text;
  }
  const items = Array.isArray(value.items) ? value.items.slice(0, 30).map(cleanItem).filter(itemHasContent) : [];
  if (items.length) details.items = items;
  if (value.linked_payment_id) details.linked_payment_id = clean(value.linked_payment_id, 20);
  return details;
}

export function hasInvoiceDetails(value) {
  const details = value && typeof value === 'object' ? value : {};
  if (Array.isArray(details.items) && details.items.some(itemHasContent)) return true;
  return TEXT_KEYS.some((key) => key !== 'gst_type' && String(details[key] || '').trim());
}

const COMPLETED_INVOICE_KEYS = TEXT_KEYS.filter((key) => key !== 'invoice_number' && key !== 'gst_type');

export function isCompletedInvoice(value) {
  const details = value && typeof value === 'object' ? value : {};
  if (Array.isArray(details.items) && details.items.some(itemHasContent)) return true;
  if (String(details.linked_payment_id || '').trim() && hasInvoiceDetails(details)) return true;
  return COMPLETED_INVOICE_KEYS.some((key) => String(details[key] || '').trim());
}

function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function paymentAmountLabel(value) {
  const amount = Number(value);
  const formatted = (Number.isFinite(amount) ? amount : 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `₹${formatted}`;
}

function paymentDateLabel(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeZone: 'Asia/Kolkata' }).format(value);
  }
  const text = String(value || '').trim();
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    const parsed = new Date(`${iso[1]}-${iso[2]}-${iso[3]}T00:00:00+05:30`);
    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeZone: 'Asia/Kolkata' }).format(parsed);
  }
  return text;
}

function paymentMethodLabel(mode) {
  return { bank: 'Bank Transfer', cheque: 'Cheque', cash: 'Cash', upi: 'UPI' }[String(mode || '').toLowerCase()] || String(mode || '').trim() || 'Payment';
}

export function clientInvoiceEmail(row) {
  const lines = [
    'Thank you for your payment.',
    `Actual amount received: ${paymentAmountLabel(row?.amount)}`,
    `Payment date: ${paymentDateLabel(row?.payment_date)}`,
    `Payment method: ${paymentMethodLabel(row?.mode)}`,
    `Payment receipt number: ${row?.receipt_number || ''}`,
  ];
  return {
    lines,
    text: lines.join('\n'),
    html: lines.map((line) => escapeHtml(line)).join('<br>\n'),
  };
}

function num(value, fallback = 0) {
  if (value === null || value === undefined || String(value).trim() === '') return fallback;
  const parsed = Number(String(value).replace(/,/g, '').replace(/[^\d.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function formatInr(value) {
  return num(value).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatInvoiceDate(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[3]}-${iso[2]}-${iso[1]}`;
  const dmy = text.match(/^(\d{2})[-/](\d{2})[-/](\d{4})/);
  if (dmy) return `${dmy[1]}-${dmy[2]}-${dmy[3]}`;
  return text;
}

const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function underHundred(value) {
  if (value < 20) return ONES[value];
  return `${TENS[Math.floor(value / 10)]}${value % 10 ? ` ${ONES[value % 10]}` : ''}`;
}

function underThousand(value) {
  const hundred = Math.floor(value / 100);
  const rest = value % 100;
  return [hundred ? `${ONES[hundred]} Hundred` : '', rest ? underHundred(rest) : ''].filter(Boolean).join(' ');
}

export function amountInWords(value) {
  const rounded = Math.round(num(value) * 100) / 100;
  let rupees = Math.floor(rounded);
  const paise = Math.round((rounded - rupees) * 100);
  const parts = [];
  const crore = Math.floor(rupees / 10000000);
  rupees %= 10000000;
  const lakh = Math.floor(rupees / 100000);
  rupees %= 100000;
  const thousand = Math.floor(rupees / 1000);
  rupees %= 1000;
  if (crore) parts.push(`${underThousand(crore)} Crore`);
  if (lakh) parts.push(`${underHundred(lakh)} Lakh`);
  if (thousand) parts.push(`${underHundred(thousand)} Thousand`);
  if (rupees) parts.push(underThousand(rupees));
  const rupeeWords = parts.join(' ') || 'Zero';
  const paiseWords = paise ? ` and ${underHundred(paise)} Paise` : '';
  return `Rupees ${rupeeWords}${paiseWords} only`;
}

function paymentModeLabel(mode) {
  return { bank: 'Bank Transfer', cheque: 'Cheque', cash: 'Cash', upi: 'UPI' }[String(mode || '').toLowerCase()] || String(mode || '').trim() || 'N.A.';
}

function isInterState(details) {
  if (String(details.gst_type || '').toLowerCase() === 'inter') return true;
  if (String(details.gst_type || '').toLowerCase() === 'intra') return false;
  const place = `${details.place_of_supply || ''} ${details.billing_state || ''}`.trim();
  if (!place) return false;
  return !/(uttar\s*pradesh|\bup\b|\b09\b)/i.test(place);
}

function collectItems(details) {
  const first = cleanItem(details);
  const extras = Array.isArray(details.items) ? details.items.map(cleanItem) : [];
  const items = [first, ...extras].filter(itemHasContent);
  return items.length ? items : [cleanItem({})];
}

function lineValues(item) {
  const qtyBlank = String(item.qty || '').trim() === '';
  const qty = qtyBlank ? (String(item.rate || '').trim() ? 1 : 0) : num(item.qty);
  const rate = num(item.rate);
  const discount = num(item.discount);
  const taxable = Math.max(0, Math.round((qty * rate - discount) * 100) / 100);
  const gstPercent = num(item.gst_percent);
  const gstAmount = Math.round(taxable * gstPercent) / 100;
  return {
    description: item.description || 'N.A.',
    hsn: item.hsn || 'N.A.',
    qty: qtyBlank && !String(item.rate || '').trim() ? '0' : (qtyBlank ? '1' : String(item.qty).trim()),
    unit: item.unit || 'N.A.',
    rate: formatInr(rate),
    discount: formatInr(discount),
    taxable,
    gstPercent: String(item.gst_percent || '').trim() || '0',
    gstAmount,
    total: Math.round((taxable + gstAmount) * 100) / 100,
  };
}

export function invoicePlaceholderValues(row) {
  const details = sanitizeInvoiceDetails(row?.invoice_details || {});
  const lines = collectItems(details).map(lineValues);
  const computedTaxable = Math.round(lines.reduce((sum, line) => sum + line.taxable, 0) * 100) / 100;
  const computedGst = Math.round(lines.reduce((sum, line) => sum + line.gstAmount, 0) * 100) / 100;
  const explicitTax = ['cgst_amount', 'sgst_amount', 'igst_amount'].some((key) => String(details[key] || '').trim());
  let cgst = 0;
  let sgst = 0;
  let igst = 0;
  if (explicitTax) {
    cgst = num(details.cgst_amount);
    sgst = num(details.sgst_amount);
    igst = num(details.igst_amount);
  } else if (isInterState(details)) {
    igst = computedGst;
  } else {
    cgst = Math.round((computedGst / 2) * 100) / 100;
    sgst = Math.round((computedGst - cgst) * 100) / 100;
  }
  const taxable = String(details.taxable_amount || '').trim() ? num(details.taxable_amount) : computedTaxable;
  const grand = String(details.grand_total || '').trim()
    ? num(details.grand_total)
    : Math.round((taxable + cgst + sgst + igst) * 100) / 100;
  const textOrNa = (value) => String(value || '').trim() || 'N.A.';
  const values = [
    textOrNa(details.invoice_number),
    formatInvoiceDate(details.invoice_date || row?.payment_date) || 'N.A.',
    textOrNa(details.order_id),
    paymentModeLabel(row?.mode),
    textOrNa(details.place_of_supply),
    textOrNa(details.reverse_charge || 'No'),
    formatInvoiceDate(details.dispatch_date) || 'N.A.',
    formatInvoiceDate(details.due_date) || 'N.A.',
    textOrNa(details.billing_name || row?.party_name),
    textOrNa(details.billing_address),
    textOrNa(details.billing_state),
    textOrNa(details.billing_gstin),
    textOrNa(details.billing_contact),
    textOrNa(details.shipping_name || details.billing_name || row?.party_name),
    textOrNa(details.shipping_address || details.billing_address),
    textOrNa(details.shipping_state || details.billing_state),
    textOrNa(details.shipping_contact || details.billing_contact),
  ];
  for (const line of lines) {
    values.push(line.description, line.hsn, line.qty, line.unit, line.rate, line.discount, formatInr(line.taxable), line.gstPercent, formatInr(line.gstAmount), formatInr(line.total));
  }
  values.push(
    formatInr(taxable),
    formatInr(cgst),
    formatInr(sgst),
    formatInr(igst),
    formatInr(grand),
    details.amount_in_words || amountInWords(grand),
    textOrNa(details.terms),
    textOrNa(details.legal_name || process.env.COMPANY_NAME || 'MTBOSS CONSTRUCTION PRIVATE LIMITED'),
  );
  return { values, invoiceNumber: details.invoice_number || '', grandTotal: grand, lineCount: lines.length };
}

export function safeInvoiceFilePart(invoiceNumber) {
  const safe = String(invoiceNumber || 'Invoice').replace(/[^\w.-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80);
  return safe || 'Invoice';
}

export const DOCX_MIME = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
