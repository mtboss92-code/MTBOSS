import LegalNotice from "./LegalNotice";
import ResponsiveLegalTable from "./ResponsiveLegalTable";
import { RichText } from "./RichText";

export default function RenderBlocks({ blocks = [], currentPath }) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`;
    if (block.type === "p") {
      return (
        <p key={key}>
          <RichText text={block.text} currentPath={currentPath} />
        </p>
      );
    }
    if (block.type === "ul") {
      return (
        <ul key={key} className="list-disc space-y-2 pl-5 marker:text-[var(--brand-blue-ink)]">
          {block.items.map((item) => (
            <li key={item}><RichText text={item} currentPath={currentPath} /></li>
          ))}
        </ul>
      );
    }
    if (block.type === "notice") {
      return <LegalNotice key={key} title={block.title} text={block.text} items={block.items} currentPath={currentPath} />;
    }
    if (block.type === "table") {
      return (
        <ResponsiveLegalTable
          key={key}
          caption={block.caption}
          columns={block.columns}
          rows={block.rows}
          currentPath={currentPath}
        />
      );
    }
    return null;
  });
}
