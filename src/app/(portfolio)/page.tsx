import { Contact } from "@/components/portfolio/Contact";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Journey } from "@/components/portfolio/Journey";
import { Projects } from "@/components/portfolio/Projects";
import { About, FigmaSection, Footer, StackStrip, Toolbox } from "@/components/portfolio/StaticSections";
import { RevealObserver } from "@/components/shared/RevealObserver";

/** Página inicial: o portfólio completo, seção por seção. */
export default function PortfolioPage() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <StackStrip />
        <Projects />
        <FigmaSection />
        <About />
        <Toolbox />
        <Journey />
        <Contact />
      </main>
      <Footer />
      {/* Revela as seções (fora da hero) conforme a rolagem */}
      <RevealObserver />
    </>
  );
}
