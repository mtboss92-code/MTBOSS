export default function LegalSection({ id, title, level = 2, children }) {
  const Heading = level === 3 ? "h3" : "h2";
  return (
    <section aria-labelledby={id} className="scroll-mt-28 border-t border-zinc-200 pt-8 first:border-t-0 first:pt-0 dark:border-zinc-800">
      <Heading id={id} className={level === 3 ? "text-xl font-bold tracking-tight text-zinc-950 dark:text-white" : "text-2xl font-bold tracking-tight text-zinc-950 dark:text-white"}>
        {title}
      </Heading>
      <div className="mt-4 space-y-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}
