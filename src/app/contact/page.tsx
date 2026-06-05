import type { Metadata } from "next";
import { ContactFull } from "@/components/contact/ContactFull";

const DESCRIPTION =
  "Get in touch with Mozn Jamous — open to product engineering, product design, and Flutter roles. Email, LinkedIn, GitHub, and résumé.";

export const metadata: Metadata = {
  title: "Contact — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Contact — Mozn Jamous",
    description: DESCRIPTION,
    type: "website",
    url: "https://moznjamous.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Mozn Jamous",
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return <ContactFull />;
}
