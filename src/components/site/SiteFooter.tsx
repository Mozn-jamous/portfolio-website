export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 lg:px-8">
        <p className="font-mono text-[0.7rem] text-[var(--ink-faint)]">
          © {new Date().getFullYear()} Mozn Jamous · Damascus
        </p>
        <ul className="flex flex-wrap gap-5 text-[0.8rem]">
          <li>
            <a
              href="mailto:moznjamous9@gmail.com"
              className="link-underline text-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Mozn-jamous"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mozn-jamous"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
