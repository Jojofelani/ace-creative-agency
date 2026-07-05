/**
 * Quiet single-line nav. The brief spends its boldness on the crystal, so this
 * stays disciplined: wordmark left, two anchors + one CTA right. The CTA label
 * ("Start a project") is the single contact-intent label used across the page.
 */
export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-paper"
        >
          ACE
        </a>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#work"
            className="hidden text-paper/70 transition-colors hover:text-paper sm:inline"
          >
            Work
          </a>
          <a
            href="#services"
            className="hidden text-paper/70 transition-colors hover:text-paper sm:inline"
          >
            Services
          </a>
          <a
            href="#contact"
            className="press rounded-full border border-paper/25 px-4 py-2 text-paper hover:border-paper hover:bg-paper hover:text-ink"
          >
            Start a project
          </a>
        </div>
      </nav>
    </header>
  );
}
