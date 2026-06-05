"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/cv", label: "CV" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--glass-border)] bg-white/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--ink)]"
        >
          <span
            aria-hidden
            className="orb relative inline-block h-6 w-6 align-middle"
          >
            <span className="orb-glow" style={{ inset: "-30%" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="orb-img" src="/demo/character.png" alt="" />
          </span>
          Mozn Jamous
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {items.map((item) => {
            const active =
              item.href !== "/" && pathname.startsWith(item.href.replace("/#work", "/").replace("/#about", "/"));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="text-[0.85rem] text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="mailto:moznjamous9@gmail.com"
            className="link-underline text-[0.85rem] text-[var(--ink)]"
          >
            moznjamous9@gmail.com
          </a>
        </nav>

        {/* Mobile email shortcut */}
        <a
          href="mailto:moznjamous9@gmail.com"
          className="text-[0.8rem] text-[var(--accent)] md:hidden"
        >
          Email →
        </a>
      </div>
    </header>
  );
}
