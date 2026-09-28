import { Categories } from "@/components/sections/Categories";
import { CheeseRoute } from "@/components/sections/CheeseRoute";
import { Experience } from "@/components/sections/Experience";
import { Family } from "@/components/sections/Family";
import { FinalCta } from "@/components/sections/FinalCta";
import { Flavors } from "@/components/sections/Flavors";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Manifesto } from "@/components/sections/Manifesto";
import { Testimonials } from "@/components/sections/Testimonials";
import { Visit } from "@/components/sections/Visit";

/**
 * Jornada da landing, na ordem do briefing:
 * DESCOBRIR -> DESEJAR -> CONFIAR -> VISITAR
 *
 * Esta pagina apenas orquestra as sections. Todo texto e dado visual
 * vem de `src/content` e `src/lib/site.ts`.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Proof />
      <Experience />
      <Manifesto />
      <Flavors />
      <Family />
      <CheeseRoute />
      <Gallery />
      <Testimonials />
      <FinalCta />
      <Visit />
    </>
  );
}
