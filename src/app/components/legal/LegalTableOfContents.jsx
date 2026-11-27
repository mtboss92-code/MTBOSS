"use client";

import { useEffect, useState } from "react";

function TocLinks({ items, activeId }) {
  return (
    <ol className="space-y-1.5">
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
            <a
              href={`#${item.id}`}
              aria-current={active ? "true" : undefined}
              className={`block rounded-md px-2 py-1.5 text-sm leading-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-blue)] ${
                active
                  ? "bg-[var(--brand-blue-soft)] font-semibold text-[var(--brand-blue-ink)] dark:bg-zinc-800 dark:text-[var(--brand-blue-light)]"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function LegalTableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!headings.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4, 1] }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <details className="rounded-xl border border-zinc-200 bg-white lg:hidden dark:border-zinc-800 dark:bg-zinc-950">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-bold text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-blue)] dark:text-white [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-3">
            On this page
          </span>
        </summary>
        <nav aria-label="Table of contents" className="border-t border-zinc-200 px-2 py-3 dark:border-zinc-800">
          <TocLinks items={items} activeId={activeId} />
        </nav>
      </details>
      <nav aria-label="Table of contents" className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-4 lg:block dark:border-zinc-800 dark:bg-zinc-950">
        <p className="px-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">On this page</p>
        <div className="mt-3">
          <TocLinks items={items} activeId={activeId} />
        </div>
      </nav>
    </>
  );
}
