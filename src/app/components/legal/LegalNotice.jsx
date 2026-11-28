import { RichText } from "./RichText";

export default function LegalNotice({ title, items, text, currentPath }) {
  return (
    <aside className="my-6 rounded-xl border border-[var(--brand-blue-pale)] bg-[var(--brand-blue-faint)] px-4 py-4 sm:px-5 dark:border-zinc-700 dark:bg-zinc-900" role="note">
      {title ? <p className="text-sm font-bold text-zinc-950 dark:text-white">{title}</p> : null}
      {text ? <p className={`text-sm leading-7 text-zinc-700 dark:text-zinc-300 ${title ? "mt-2" : ""}`}><RichText text={text} currentPath={currentPath} /></p> : null}
      {items?.length ? (
        <ul className={`list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700 marker:text-[var(--brand-blue-ink)] dark:text-zinc-300 ${title || text ? "mt-3" : ""}`}>
          {items.map((item) => (
            <li key={item}><RichText text={item} currentPath={currentPath} /></li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
