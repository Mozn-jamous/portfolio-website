import Link from "next/link";
import Image from "next/image";
import { clientSitesContent } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";
import { T } from "@/components/i18n/T";

/**
 * "Client & brand websites" — a third facet of range alongside the product grid
 * (Flutter/AI) and the ERP hub (/odoo). These are vanilla HTML/CSS/JS brand
 * sites designed AND built for real clients; each card links to its own case
 * study under /projects/<slug>. Mirrors the BusinessSystems gateway pattern.
 */
export function ClientSites() {
  const { eyebrow, eyebrowAr, heading, headingAr, intro, introAr, sites } =
    clientSitesContent;

  return (
    <section
      id="websites"
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      <SceneBackground src="/scenes/trajectory.webp" position="center 50%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="block font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            <T en={eyebrow} ar={eyebrowAr} />
          </span>
          <h2 className="font-display mt-4 max-w-3xl text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] lg:text-[2.75rem]">
            <T en={heading} ar={headingAr} />
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-[1.7] text-[var(--ink-muted)]">
            <T en={intro} ar={introAr} />
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {sites.map((site) => (
            <Reveal key={site.name}>
              <Link
                href={site.href}
                className="group panel block h-full overflow-hidden rounded-3xl p-0 transition hover:border-[var(--accent)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)]">
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7 lg:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium text-[var(--ink)]">
                      {site.name}
                    </h3>
                    <span className="font-mono text-[0.7rem] text-[var(--ink-faint)]">
                      {site.year}
                    </span>
                  </div>

                  <span className="mt-1 block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--accent)]">
                    <T en={site.eyebrow} ar={site.eyebrowAr} />
                  </span>

                  <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--ink-muted)]">
                    <T en={site.body} ar={site.bodyAr} />
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {site.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[var(--border-strong)] bg-white/10 px-3 py-1 font-mono text-[0.68rem] text-[var(--ink)] backdrop-blur"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.78rem] font-semibold text-[var(--accent-deep)]">
                    <T en="Read case study" ar="اقرأ دراسة الحالة" />
                    <span aria-hidden className="transition group-hover:translate-x-0.5 rtl:-scale-x-100">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
