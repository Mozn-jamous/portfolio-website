import Link from "next/link";
import { T } from "@/components/i18n/T";

const pageLinks = [
  { href: "/projects", label: "Projects", labelAr: "المشاريع" },
  { href: "/odoo", label: "Systems", labelAr: "الأنظمة" },
  { href: "/about", label: "About", labelAr: "عنّي" },
  { href: "/contact", label: "Contact", labelAr: "تواصل" },
  { href: "/cv", label: "Résumé", labelAr: "السيرة الذاتية" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem]">
            {pageLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[var(--ink-muted)] hover:text-[var(--ink)]"
              >
                <T en={l.label} ar={l.labelAr} />
              </Link>
            ))}
          </nav>
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
        <p className="mt-6 font-mono text-[0.7rem] text-[var(--ink-faint)]">
          © {new Date().getFullYear()}{" "}
          <T en="Mozn Jamous · Damascus" ar="مزن جاموس · دمشق" />
        </p>
      </div>
    </footer>
  );
}
