"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "@/components/site/Modal";
import { withBase } from "@/lib/base-path";
import { T } from "@/components/i18n/T";
import type { Certification, Education, CredentialLink } from "@/lib/scenes-content";

/** A unified shape the modal can render, whether it's the degree or a cert. */
type Credential = {
  title: string;
  titleAr?: string;
  subtitle: string;
  subtitleAr?: string;
  year: string;
  image?: string;
  related?: CredentialLink[];
};

/**
 * Credentials — the Education & certifications cards, made interactive.
 * Click the degree or any certificate to open it: the certificate scan (or a
 * labelled placeholder until the image is added) plus the work that credential
 * is backed by. Client island so the surrounding About section stays server.
 */
export function Credentials({
  education,
  certifications,
}: {
  education: Education;
  certifications: Certification[];
}) {
  const [active, setActive] = useState<Credential | null>(null);

  const degree: Credential = {
    title: education.degree,
    titleAr: education.degreeAr,
    subtitle: education.school,
    subtitleAr: education.schoolAr,
    year: education.year,
    image: education.image,
    related: education.related,
  };

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {/* Education */}
        <div className="panel flex h-full flex-col rounded-2xl p-6 lg:p-7">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--accent)]">
            <T en="Education" ar="التعليم" />
          </span>
          <button
            type="button"
            onClick={() => setActive(degree)}
            className="group focus-ring mt-4 block w-full rounded-lg text-start"
          >
            <span className="flex items-baseline justify-between gap-4">
              <span className="font-display text-xl font-medium leading-snug text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
                <T en={education.degree} ar={education.degreeAr ?? education.degree} />
              </span>
              <span className="shrink-0 font-mono text-[0.72rem] tracking-[0.16em] text-[var(--accent-deep)]">
                {education.year}
              </span>
            </span>
            <span className="mt-1.5 flex items-center gap-2 text-[0.95rem] text-[var(--ink-muted)]">
              <T en={education.school} ar={education.schoolAr ?? education.school} />
              <span
                aria-hidden
                className="text-[var(--accent)] opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100 rtl:-scale-x-100"
              >
                →
              </span>
            </span>
          </button>
          {education.note && (
            <p className="mt-4 border-t border-[var(--border)] pt-4 text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
              <T en={education.note} ar={education.noteAr ?? education.note} />
            </p>
          )}
        </div>

        {/* Certifications */}
        <div className="panel flex h-full flex-col rounded-2xl p-6 lg:p-7">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--accent)]">
            <T en="Certifications" ar="الشهادات" />
          </span>
          <ul className="mt-3">
            {certifications.map((c) => (
              <li
                key={c.title}
                className="border-t border-[var(--border)] first:border-t-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActive({
                      title: c.title,
                      titleAr: c.titleAr,
                      subtitle: c.issuer,
                      subtitleAr: c.issuerAr,
                      year: c.year,
                      image: c.image,
                      related: c.related,
                    })
                  }
                  className="group focus-ring flex w-full items-baseline justify-between gap-4 rounded-lg py-3.5 text-start"
                >
                  <span>
                    <span className="block font-display text-base font-medium leading-snug text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
                      <T en={c.title} ar={c.titleAr ?? c.title} />
                    </span>
                    <span className="mt-0.5 block text-[0.85rem] text-[var(--ink-muted)]">
                      <T en={c.issuer} ar={c.issuerAr ?? c.issuer} />
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="font-mono text-[0.72rem] tracking-[0.16em] text-[var(--accent-deep)]">
                      {c.year}
                    </span>
                    <span
                      aria-hidden
                      className="text-[var(--accent)] opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100 rtl:-scale-x-100"
                    >
                      →
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 border-t border-[var(--border)] pt-3 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            <T en="Tap a credential to view it" ar="اضغط على شهادة لعرضها" />
          </p>
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        label={active?.title ?? "Credential"}
        placement="center"
        panelClassName="relative max-h-[88vh] w-[92vw] max-w-2xl overflow-y-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 shadow-soft-lg lg:p-8"
      >
        {active && (
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-medium text-[var(--ink)]">
                  <T en={active.title} ar={active.titleAr ?? active.title} />
                </h3>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  <T
                    en={`${active.subtitle} · ${active.year}`}
                    ar={`${active.subtitleAr ?? active.subtitle} · ${active.year}`}
                  />
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="focus-ring grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--ink)] transition hover:border-[var(--accent)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* certificate scan or placeholder */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-2)]/40">
              {active.image ? (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={withBase(active.image)}
                    alt={`${active.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 92vw, 672px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex min-h-[200px] items-center justify-center p-8 text-center">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                      <T en="Certificate" ar="الشهادة" />
                    </p>
                    <p className="mt-1.5 text-sm text-[var(--ink-muted)]">
                      <T
                        en="Image placeholder · add the certificate scan"
                        ar="صورة مؤقتة · أضف مسح الشهادة"
                      />
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* related work */}
            {active.related && active.related.length > 0 && (
              <div className="mt-5">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                  <T en="Related work" ar="عمل ذو صلة" />
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {active.related.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={() => setActive(null)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-white/10 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
                    >
                      <T en={r.label} ar={r.labelAr ?? r.label} />
                      <span aria-hidden className="rtl:-scale-x-100">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
