const LINK_RULES = [
  { pattern: "Return, Refund and Cancellation Policy", href: "/return-refund-cancellation-policy" },
  { pattern: "Privacy Policy", href: "/privacy-policy" },
  { pattern: "Terms and Conditions", href: "/terms-and-conditions" },
  { pattern: "MTBOSS2016@gmail.com", href: "mailto:MTBOSS2016@gmail.com" },
  { pattern: "legal@mtboss.in", href: "mailto:legal@mtboss.in" },
  { pattern: "+91 94584 10866", href: "tel:+919458410866" },
  { pattern: "www.mtboss.in", href: "https://www.mtboss.in" },
];

function isExternal(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function findMatch(text, from) {
  let best = null;
  for (const rule of LINK_RULES) {
    const index = text.indexOf(rule.pattern, from);
    if (index === -1) continue;
    if (!best || index < best.index || (index === best.index && rule.pattern.length > best.rule.pattern.length)) {
      best = { index, rule };
    }
  }
  return best;
}

export function RichText({ text, currentPath }) {
  if (!text) return null;
  const nodes = [];
  let cursor = 0;
  let key = 0;

  while (cursor < text.length) {
    const match = findMatch(text, cursor);
    if (!match) {
      nodes.push(text.slice(cursor));
      break;
    }
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const { href, pattern } = match.rule;
    const selfLink = currentPath && href === currentPath;
    if (selfLink) {
      nodes.push(pattern);
    } else {
      const external = isExternal(href);
      nodes.push(
        <a
          key={key}
          href={href}
          className="font-semibold text-[var(--brand-blue-ink)] underline decoration-[var(--brand-blue-lighter)] underline-offset-2 hover:decoration-[var(--brand-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-blue)] dark:text-[var(--brand-blue-light)]"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {pattern}
        </a>
      );
      key += 1;
    }
    cursor = match.index + pattern.length;
  }

  return nodes;
}
