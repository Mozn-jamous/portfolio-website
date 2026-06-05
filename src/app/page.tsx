import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Capabilities } from "@/components/home/Capabilities";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Stack } from "@/components/home/Stack";
import { Trajectory } from "@/components/home/Trajectory";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Capabilities />
      <SelectedWork />
      <Stack />
      <Trajectory />
      <Contact />
    </>
  );
}
