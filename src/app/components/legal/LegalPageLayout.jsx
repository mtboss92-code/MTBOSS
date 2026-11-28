import fs from "fs";
import path from "path";
import Link from "next/link";
import LegalSection from "./LegalSection";
import LegalTableOfContents from "./LegalTableOfContents";
import RenderBlocks from "./RenderBlocks";

function buildToc(sections) {
  const items = [];
  let lastPart = null;
  sections.forEach((section) => {
    if (section.part && section.part.id !== lastPart) {
      items.push({
        id: section.part.id,
        label: `${section.part.label}. ${section.part.title}`,
        level: 2,
      });
      lastPart = section.part.id;
    }
    items.push({
      id: section.id,
      label: section.number ? `${section.number}. ${section.title}` : section.title,
      level: section.part ? 3 : 2,
    });
  });
  return items;
}

function pdfExists(pdfPath) {
  if (!pdfPath?.startsWith("/")) return false;
  return fs.existsSync(path.join(process.cwd(), "public", pdfPath));
}

export default function LegalPageLayout({
  eyebrow = "Legal",
  title,
  description,
  version,
  pdfPath,
  path,
  sections = [],
  intro = [],
  tocItems,
  children,
}) {
  const toc = tocItems || buildToc(sections);
  const fileReady = pdfExists(pdfPath);

  return (
    <main className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="font-semibold text-[var(--brand-blue-ink)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-blue)] dark:text-[var(--brand-blue-light)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-zinc-700 dark:text-zinc-300" aria-current="page">{title}</li>
          </ol>
        </nav>

        <header className="mt-6 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue-ink)] dark:text-[var(--brand-blue-light)]">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">{title}</h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">{description}</p>
          {version ? <p className="mt-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">{version}</p> : null}
        </header>

        <div className={`mt-8 grid grid-cols-1 gap-8 ${toc.length ? "lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start" : ""}`}>
          {toc.length ? <LegalTableOfContents items={toc} /> : null}
          <article className="min-w-0 max-w-3xl">
            {intro.length ? (
              <div className="mb-8 space-y-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
                <RenderBlocks blocks={intro} currentPath={path} />
              </div>
            ) : null}
            <div className="space-y-8">
              {sections.map((section, index) => {
                const previous = sections[index - 1];
                const showPart = section.part && previous?.part?.id !== section.part.id;
                const heading = section.number ? `${section.number}. ${section.title}` : section.title;
                return (
                  <div key={section.id} className="space-y-6">
                    {showPart ? (
                      <h2 id={section.part.id} className="scroll-mt-28 text-2xl font-bold tracking-tight text-[var(--brand-blue-ink)] dark:text-[var(--brand-blue-light)]">
                        {section.part.label}: {section.part.title}
                      </h2>
                    ) : null}
                    <LegalSection id={section.id} title={heading} level={section.part ? 3 : 2}>
                      <RenderBlocks blocks={section.blocks} currentPath={path} />
                    </LegalSection>
                  </div>
                );
              })}
            </div>
            {children}
            <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
              {fileReady ? (
                <a
                  href={pdfPath}
                  download
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--brand-blue)] bg-[var(--brand-blue)] px-4 py-2 text-sm font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-blue-ink)]"
                >
                  Download PDF
                </a>
              ) : (
                <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950" role="status">
                  The original PDF file is not available right now. The full document is still shown on this page.
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
