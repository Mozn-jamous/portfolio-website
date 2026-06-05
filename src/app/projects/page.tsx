import type { Metadata } from "next";
import {
  ProjectsDirectory,
  projectsDescription,
} from "@/components/projects/ProjectsDirectory";

export const metadata: Metadata = {
  title: "Projects — Mozn Jamous",
  description: projectsDescription,
  openGraph: {
    title: "Selected Work — Mozn Jamous",
    description: projectsDescription,
    type: "website",
    url: "https://moznjamous.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work — Mozn Jamous",
    description: projectsDescription,
  },
};

export default function ProjectsPage() {
  return <ProjectsDirectory />;
}
