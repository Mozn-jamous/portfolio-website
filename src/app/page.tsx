import { Hero } from "@/components/home/Hero";
import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";
import { ProductProcess } from "@/components/home/ProductProcess";
import { SystemArchitecture } from "@/components/home/SystemArchitecture";
import { DecisionLog } from "@/components/home/DecisionLog";
import { BusinessSystems } from "@/components/home/BusinessSystems";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutFull } from "@/components/about/AboutFull";
import { ContactFull } from "@/components/contact/ContactFull";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsDirectory />
      <ProductProcess />
      <SystemArchitecture />
      <DecisionLog />
      <BusinessSystems />
      <Testimonials />
      <AboutFull />
      <ContactFull />
    </>
  );
}
