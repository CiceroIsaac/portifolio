import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Marquee } from "@/components/landing/Marquee";
import { Bolt } from "@/components/landing/nescau/Bolt";
import { MomentPicker } from "@/components/landing/nescau/MomentPicker";
import { MobileMenu, type NavLink } from "@/components/landing/MobileMenu";
import { StudyFooter } from "@/components/landing/StudyFooter";
import { ArrowRight, WRAP } from "@/components/landing/ui";
import { dejavuCondensed } from "@/lib/fonts";
import bag from "@/assets/landing/nescau/nescau-bag.png";
import breakfast from "@/assets/landing/nescau/nescau-breakfast.png";
import can from "@/assets/landing/nescau/nescau-can.png";
import drink from "@/assets/landing/nescau/nescau-drink.png";
import logo from "@/assets/landing/nescau/nescau-logo.svg";
import pancakes from "@/assets/landing/nescau/nescau-pancakes.jpg";

export const metadata: Metadata = {
  title: "Nescau",
  description: "Estudo conceitual de landing page inspirado no Nescau. Projeto de portfólio, não oficial.",
};

const NAV: NavLink[] = [
  { href: "#produtos", label: "Produtos" },
  { href: "#receitas", label: "Receitas" },
  { href: "#momento", label: "Seu momento" },
];

/** Formatos apresentados. Sem preços, pesos ou dados nutricionais. */
const PRODUCTS: { title: string; text: string; image: StaticImageData; alt: string; bg: string }[] = [
  { title: "Nescau em pó", text: "O clássico da sua rotina", image: can, alt: "Lata de Nescau em pó", bg: "bg-[#fde3d6]" },
  { title: "Nescau refil", text: "Seu sabor, em outro formato", image: bag, alt: "Embalagem refil de Nescau", bg: "bg-[#f3e1bd]" },
  {
    title: "Seu momento Nescau",
    text: "A dupla que combina com você",
    image: drink,
    alt: "Lata de Nescau ao lado de um copo de achocolatado",
    bg: "bg-[#f0d5d2]",
  },
];

const IDEAS: { title: string; text: string; image: StaticImageData; alt: string }[] = [
  {
    title: "Panquecas de chocolate",
    text: "Uma pausa que merece capricho.",
    image: pancakes,
    alt: "Panquecas com mel ao lado de uma lata de Nescau e um copo de achocolatado",
  },
  {
    title: "Um café da manhã do seu jeito",
    text: "Combinações para começar diferente.",
    image: breakfast,
    alt: "Café da manhã com ovos mexidos, pão, frutas, caneca e lata de Nescau",
  },
];

/** Títulos: DejaVu Sans Condensed Bold em caixa alta. */
const HEADING = "font-condensed font-bold uppercase leading-[1.08]";
const BTN = "items-center justify-between gap-6 rounded-full px-6 py-3.5 text-[15px] font-bold transition-colors duration-200";
const BTN_YELLOW = `${BTN} bg-nescau-yellow text-nescau-ink hover:bg-[#ffe55c] focus-visible:outline-nescau-yellow`;
const BTN_RED = `${BTN} bg-nescau-red text-white hover:bg-[#b01425] focus-visible:outline-nescau-red`;
const EYEBROW = "text-xs font-bold tracking-[0.14em] uppercase";

export default function NescauPage() {
  return (
    <div className={`${dejavuCondensed.variable} overflow-x-clip bg-nescau-bg text-nescau-ink`}>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 bg-nescau-red text-white">
        <div className={`${WRAP} relative flex h-20 items-center justify-between lg:h-24`}>
          <a href="#inicio" aria-label="Nescau, início do conceito" className="rounded-lg">
            <Image src={logo} alt="" priority className="h-12 w-auto lg:h-16" />
          </a>
          <nav aria-label="Seções da página" className="hidden gap-24 lg:flex">
            {NAV.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold hover:text-nescau-yellow">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#produtos" className={`${BTN_YELLOW} hidden lg:inline-flex`}>
            Explorar sabores <ArrowRight />
          </a>
          <MobileMenu
            links={[...NAV, { href: "#produtos", label: "Explorar sabores" }]}
            buttonClassName="text-white hover:bg-white/10"
            panelClassName="bg-nescau-red text-white shadow-lg"
            linkClassName="font-bold hover:text-nescau-yellow"
          />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" aria-labelledby="nescau-title" className="overflow-hidden bg-nescau-red text-nescau-bg">
          <div className={`${WRAP} grid items-center gap-6 pt-8 pb-14 lg:grid-cols-[1.1fr_1fr] lg:pt-6 lg:pb-16`}>
            <div>
              <p className={`${EYEBROW} text-nescau-yellow motion-safe:animate-hero-in`}>Bora colocar o dia em movimento?</p>
              <h1 id="nescau-title" className={`${HEADING} anim-delay-1 mt-5 text-[clamp(2.6rem,7.1vw,6.4rem)] motion-safe:animate-hero-in lg:mt-8`}>
                Dá um play
                <br />
                no seu dia.
              </h1>
              <p className="anim-delay-2 mt-6 max-w-[540px] text-lg leading-relaxed motion-safe:animate-hero-in lg:mt-14 lg:text-[22px]">
                Tem sabor de chocolate. Tem seu jeito. Tem Nescau nos momentos que você faz acontecer.
              </p>
              <a href="#produtos" className={`${BTN_YELLOW} anim-delay-3 mt-8 inline-flex w-full motion-safe:animate-hero-in sm:w-auto lg:mt-14`}>
                Encontre seu Nescau <ArrowRight />
              </a>
              <p className={`${EYEBROW} mt-12 hidden lg:block lg:mt-20`}>Sabor que acompanha o seu ritmo</p>
            </div>
            {/* Produto protagonista sobre o raio */}
            <div className="anim-delay-2 relative mx-auto aspect-square w-full max-w-[560px] motion-safe:animate-pop">
              {/* Raio com um "choque" de tempos em tempos; lata flutuando */}
              <Bolt className="absolute top-[-3%] left-[2%] h-[106%] w-[96%] text-nescau-yellow motion-safe:animate-zap" />
              <Image
                src={can}
                alt="Lata de Nescau em pó"
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                // O PNG tem margens transparentes largas: a imagem é ampliada (118%)
                // para a lata ocupar a altura do design, sem deformar.
                className="absolute top-1/2 left-1/2 h-auto w-[118%] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain motion-safe:animate-float drop-shadow-[0_30px_30px_rgba(60,0,0,.35)]"
              />
            </div>
          </div>
        </section>

        {/* Faixa amarela */}
        {/* Faixa amarela em movimento contínuo (pausa ao passar o mouse) */}
        <Marquee
          items={["Seu dia.", "Seu ritmo.", "Seu Nescau.", "Dá um play."]}
          separator={<Bolt className="h-7 w-4 text-nescau-red" />}
          className="bg-nescau-yellow py-5"
          itemClassName={`${HEADING} text-[clamp(1.4rem,2.5vw,2.25rem)]`}
        />

        {/* Produtos */}
        <section id="produtos" aria-labelledby="produtos-title" className={`${WRAP} py-16 lg:py-24`}>
          <p className={`${EYEBROW} reveal text-nescau-red`}>Encontre o seu</p>
          <h2 id="produtos-title" className={`${HEADING} reveal mt-5 text-[clamp(2rem,3.4vw,3.05rem)]`}>
            Um sabor. <br className="sm:hidden" />
            Vários momentos.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-6">
            {PRODUCTS.map((p, i) => (
              <li key={p.title} className="reveal flex" style={{ "--reveal-delay": `${i * 130}ms` } as React.CSSProperties}>
                {/* Card interno: hover eleva o card e "pula" o produto */}
                <div className={`group flex w-full flex-col rounded-2xl ${p.bg} p-7 transition-[translate,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(53,32,31,.15)]`}>
                <div className="flex h-56 items-center justify-center lg:h-64">
                  <Image src={p.image} alt={p.alt} sizes="400px" className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                </div>
                <h3 className={`${HEADING} mt-6 text-[22px]`}>{p.title}</h3>
                <p className="mt-2 text-[15px]">{p.text}</p>
                <a
                  href="#receitas"
                  className="mt-6 grid size-11 place-items-center self-end rounded-full bg-nescau-red text-white transition-transform hover:scale-105 focus-visible:outline-nescau-red"
                >
                  <ArrowRight className="size-5" />
                  <span className="sr-only">Ideias de receitas com {p.title}</span>
                </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Receitas */}
        <section id="receitas" aria-labelledby="receitas-title" className="grid bg-[#35201f] text-nescau-bg lg:grid-cols-[47%_1fr]">
          <Image
            src={pancakes}
            alt="Panquecas com mel, lata de Nescau e copo de achocolatado sobre uma mesa de madeira"
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="reveal reveal-zoom h-72 w-full object-cover sm:h-96 lg:h-full"
          />
          <div className="reveal reveal-right px-6 py-14 md:px-10 lg:px-14 lg:py-20 xl:px-20">
            <p className={`${EYEBROW} text-nescau-yellow`}>Cozinha em modo play</p>
            <h2 id="receitas-title" className={`${HEADING} mt-5 text-[clamp(2rem,4.2vw,3.75rem)] lg:mt-8`}>
              Uma receita. <br />
              Mil jeitos <br className="hidden lg:block" />
              de curtir.
            </h2>
            <p className="mt-6 max-w-[500px] text-base leading-relaxed lg:mt-14 lg:text-[19px]">
              Da pausa da tarde ao encontro com a galera: transforme o sabor de sempre em novas ideias.
            </p>
            <a href="#ideias" className={`${BTN_YELLOW} mt-8 inline-flex w-full sm:w-auto lg:mt-10`}>
              Descobrir receitas <ArrowRight />
            </a>
          </div>
        </section>

        {/* Nova seção: escolha do momento (interativa) */}
        <section id="momento" aria-labelledby="momento-title" className="bg-white/60 py-16 lg:py-24">
          <div className={WRAP}>
            <p className={`${EYEBROW} reveal text-nescau-red`}>Seu momento</p>
            <h2 id="momento-title" className={`${HEADING} reveal mt-5 mb-10 text-[clamp(2rem,3.4vw,3.05rem)]`}>
              Qual é o seu momento?
            </h2>
            <div className="reveal" style={{ "--reveal-delay": `${150}ms` } as React.CSSProperties}>
              <MomentPicker />
            </div>
          </div>
        </section>

        {/* Ideias */}
        <section id="ideias" aria-labelledby="ideias-title" className={`${WRAP} py-16 lg:py-24`}>
          <p className={`${EYEBROW} reveal text-nescau-red`}>Ideias para tirar do papel</p>
          <h2 id="ideias-title" className={`${HEADING} reveal mt-5 text-[clamp(2rem,3.4vw,3.05rem)]`}>
            Qual vai ser a de hoje?
          </h2>
          <ul className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-6">
            {IDEAS.map((idea, i) => (
              <li key={idea.title} style={{ "--reveal-delay": `${i * 150}ms` } as React.CSSProperties} className="reveal grid overflow-hidden sm:grid-cols-[45%_1fr] sm:rounded-2xl sm:bg-[#f3e7d6]">
                <Image
                  src={idea.image}
                  alt={idea.alt}
                  sizes="(min-width: 640px) 300px, 100vw"
                  className="h-52 w-full rounded-2xl object-cover sm:h-full sm:min-h-[340px] sm:rounded-none"
                />
                <div className="flex flex-col pt-5 sm:p-6">
                  <p className={`${EYEBROW} hidden text-[11px] text-nescau-red sm:block`}>Na cozinha</p>
                  <h3 className={`${HEADING} text-[19px] sm:mt-4 lg:text-[21px]`}>{idea.title}</h3>
                  <p className="mt-2 text-[15px] sm:mt-auto sm:pt-8">{idea.text}</p>
                  {/* Sem receita oficial para mostrar: <details> explica, sem link vazio. */}
                  <details className="group mt-4 hidden sm:block">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-bold text-nescau-red">
                      Ver ideia
                      <ArrowRight className="size-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="pt-2 text-sm text-nescau-ink/75">
                      Espaço reservado para o passo a passo. Este estudo apresenta a proposta visual e não traz receitas
                      oficiais.
                    </p>
                  </details>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Chamada final */}
        <section aria-labelledby="final-title" className="bg-nescau-yellow">
          <div className={`${WRAP} reveal flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between lg:py-14`}>
            <h2 id="final-title" className={`${HEADING} text-[clamp(1.9rem,3vw,2.7rem)]`}>
              O próximo momento é seu.
            </h2>
            <a href="#produtos" className={`${BTN_RED} inline-flex w-full shrink-0 sm:w-[260px]`}>
              Escolha seu sabor <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <StudyFooter
        brand="o Nescau"
        className="bg-nescau-red text-nescau-bg"
        mutedClassName="text-nescau-bg/70"
        logo={<span className={`${HEADING} text-3xl`}>Nescau</span>}
      />
    </div>
  );
}
