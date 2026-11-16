import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { MobileMenu, type NavLink } from "@/components/landing/MobileMenu";
import { StudyFooter } from "@/components/landing/StudyFooter";
import { ArrowRight, WRAP } from "@/components/landing/ui";
import { bookman } from "@/lib/fonts";
import brownie from "@/assets/landing/dona-benta/dona-brownie.jpg";
import cake from "@/assets/landing/dona-benta/dona-cake.jpg";
import flour from "@/assets/landing/dona-benta/dona-flour.jpg";
import lasagna from "@/assets/landing/dona-benta/dona-lasagna.jpg";
import logo from "@/assets/landing/dona-benta/dona-logo.png";

export const metadata: Metadata = {
  title: "Farinha Dona Benta",
  description: "Estudo conceitual de landing page inspirado na Farinha Dona Benta. Projeto de portfólio, não oficial.",
};

const NAV: NavLink[] = [
  { href: "#receitas", label: "Receitas" },
  { href: "#produtos", label: "Nossos produtos" },
  { href: "#afeto", label: "Cozinha com afeto" },
];

const RECIPES: { tag: string; title: string; image: StaticImageData; alt: string }[] = [
  { tag: "Doce · Bolo", title: "Bolo para compartilhar", image: cake, alt: "Bolo com cobertura e raspas de laranja" },
  {
    tag: "Doce · Brownie",
    title: "Um carinho de chocolate",
    image: brownie,
    alt: "Brownie em ramequim com sorvete, calda de chocolate e frutas vermelhas",
  },
  { tag: "Salgado · Massas", title: "Almoço que reúne", image: lasagna, alt: "Massa gratinada em travessa de vidro" },
];

const USES = ["Para o bolo do fim de tarde", "Para uma massa feita em casa", "Para descobrir sua próxima receita"];

/** Títulos: URW Bookman Light (serifa editorial). */
const HEADING = "font-bookman font-light leading-[1.15] tracking-[-0.01em]";
const EYEBROW = "text-xs font-bold tracking-[0.14em] uppercase";
const BTN = "items-center justify-between gap-6 rounded-full px-6 py-3.5 text-[15px] font-bold transition-colors duration-200";
const BTN_BLUE = `${BTN} bg-benta-blue text-white hover:bg-[#162a46] focus-visible:outline-benta-blue`;
const BTN_CREAM = `${BTN} bg-benta-bg text-benta-blue hover:bg-white focus-visible:outline-benta-bg`;

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.6 2.6L16.2 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DonaBentaPage() {
  return (
    <div className={`${bookman.variable} overflow-x-clip bg-benta-bg text-benta-blue`}>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 bg-benta-bg/95 backdrop-blur">
        <div className={`${WRAP} relative flex h-20 items-center justify-between lg:h-[118px]`}>
          <a href="#inicio" aria-label="Dona Benta, início do conceito" className="rounded-full">
            <Image src={logo} alt="" priority className="size-14 lg:size-[100px]" />
          </a>
          <nav aria-label="Seções da página" className="hidden gap-16 lg:flex xl:gap-20">
            {NAV.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold hover:text-benta-terracotta">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#receitas" className={`${BTN_BLUE} hidden lg:inline-flex`}>
            Encontre uma receita <ArrowRight />
          </a>
          <MobileMenu
            links={[...NAV, { href: "#receitas", label: "Encontre uma receita" }]}
            buttonClassName="text-benta-blue hover:bg-benta-soft"
            panelClassName="border-b border-benta-blue/10 bg-benta-bg shadow-lg"
            linkClassName="font-bold hover:text-benta-terracotta"
          />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" aria-labelledby="benta-title" className={WRAP}>
          <div className="grid items-center gap-10 pt-8 pb-14 lg:grid-cols-[1fr_minmax(0,560px)] lg:pt-4 lg:pb-16">
            <div>
              <p className={`${EYEBROW} text-benta-terracotta`}>O melhor ingrediente é estar junto.</p>
              <h1 id="benta-title" className={`${HEADING} mt-5 text-[clamp(2.4rem,5.35vw,4.8rem)] lg:mt-6`}>
                Tem carinho <br />
                nessa receita.
              </h1>
              <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-benta-blue/75 lg:mt-12 lg:text-[21px]">
                Da primeira colher de farinha ao último pedaço: histórias boas começam na cozinha.
              </p>
              <a href="#receitas" className={`${BTN_BLUE} mt-8 inline-flex w-full sm:w-auto lg:mt-12`}>
                Vamos cozinhar? <ArrowRight />
              </a>
              <p className={`${EYEBROW} mt-20 hidden lg:block`}>A mesa fica melhor com histórias.</p>
            </div>

            {/* Arco bege + foto circular + card do produto */}
            <div className="relative mx-auto w-full max-w-[460px] pb-10 lg:max-w-[560px]">
              <div aria-hidden="true" className="absolute top-0 right-0 hidden h-[88%] w-[96%] rounded-t-full bg-benta-soft sm:block" />
              <Image
                src={cake}
                alt="Bolo com cobertura de açúcar e raspas de laranja em um prato azul"
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="relative ml-auto aspect-square w-[94%] rounded-full object-cover sm:mt-[3%] sm:mr-[2%]"
              />
              <figure className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(32,59,96,.12)] sm:left-[-4%] sm:p-5">
                <Image src={flour} alt="Pacote de Farinha de Trigo Dona Benta" sizes="80px" className="h-auto w-14 sm:w-20" />
                <figcaption className="font-bookman text-sm leading-snug sm:text-base">
                  Um clássico <br />
                  da sua cozinha.
                  <span aria-hidden="true" className="mt-3 block h-0.5 w-16 bg-benta-terracotta" />
                </figcaption>
              </figure>
            </div>
          </div>
          <hr className="hidden border-benta-blue/15 lg:block" />
        </section>

        {/* Caderno de receitas */}
        <section id="receitas" aria-labelledby="receitas-title" className={`${WRAP} py-16 lg:py-24`}>
          <p className={`${EYEBROW} text-benta-terracotta`}>Caderno de receitas</p>
          <h2 id="receitas-title" className={`${HEADING} mt-5 text-[clamp(2rem,3.4vw,3.05rem)]`}>
            Hoje tem gostinho de quê?
          </h2>
          <p className="mt-4 hidden text-lg text-benta-blue/70 sm:block">Escolha uma ideia e coloque a mão na massa.</p>
          <ul className="mt-10 grid gap-12 md:grid-cols-3 md:gap-6">
            {RECIPES.map((r) => (
              <li key={r.title}>
                <Image
                  src={r.image}
                  alt={r.alt}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover md:aspect-[1.25]"
                />
                <p className={`${EYEBROW} mt-5 text-benta-terracotta`}>{r.tag}</p>
                <h3 className={`${HEADING} mt-3 text-[clamp(1.35rem,1.8vw,1.6rem)]`}>{r.title}</h3>
                {/* Sem receitas oficiais: o "caderno" explica o estudo, sem link vazio. */}
                <details className="group mt-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-bold">
                    Abrir o caderno
                    <ArrowRight className="size-6 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="pt-1 text-sm text-benta-blue/70">
                    Página reservada para a receita completa. Este estudo apresenta a proposta visual, sem receitas
                    oficiais.
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        {/* Produto */}
        <section id="produtos" aria-labelledby="produtos-title" className="bg-benta-blue text-benta-bg">
          <div className={`${WRAP} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-x-24 lg:py-20`}>
            <div className="lg:col-start-2 lg:row-start-1">
              <p className={`${EYEBROW} text-[#f0c9a0]`}>Para criar novas memórias</p>
              <h2 id="produtos-title" className={`${HEADING} mt-5 text-[clamp(1.9rem,3.3vw,2.95rem)] lg:mt-8`}>
                Todo começo pede <br className="hidden sm:block" />
                um pouco de farinha.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-relaxed text-benta-bg/85 lg:mt-12 lg:text-xl">
                Tem receita que passa de mão em mão. E tem aquela que você inventa hoje. O importante é o que acontece ao
                redor da mesa.
              </p>
            </div>
            <div className="mx-auto grid aspect-square w-[80%] max-w-[450px] place-items-center rounded-full bg-white lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:w-full">
              <Image
                src={flour}
                alt="Pacote de Farinha de Trigo Tradicional Dona Benta"
                sizes="300px"
                className="h-auto w-[66%] object-contain"
              />
            </div>
            <div className="lg:col-start-2 lg:row-start-2 lg:self-start">
              <a href="#afeto" className={`${BTN_CREAM} inline-flex w-full sm:w-auto sm:min-w-[320px]`}>
                Conheça nossos produtos <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* Cozinha com afeto */}
        <section id="afeto" aria-labelledby="afeto-title" className={`${WRAP} grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24`}>
          <div>
            <p className={`${EYEBROW} text-benta-terracotta`}>Farinha de trigo tradicional</p>
            <h2 id="afeto-title" className={`${HEADING} mt-5 text-[clamp(2rem,3.75vw,3.4rem)]`}>
              O começo de <br />
              tantas coisas boas.
            </h2>
            <p className="mt-6 hidden max-w-[540px] text-lg leading-relaxed text-benta-blue/70 sm:block lg:mt-12">
              Pães, bolos, massas e ideias que ainda vão surgir. Um ingrediente do dia a dia, muitas possibilidades na sua
              cozinha.
            </p>
            <ul className="mt-8 space-y-4 lg:mt-12">
              {USES.map((u) => (
                <li key={u} className="flex items-center gap-3 text-[15px]">
                  <CheckIcon className="size-6 shrink-0 text-benta-terracotta" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={brownie}
            alt="Brownie com sorvete, calda de chocolate e frutas vermelhas em um ramequim laranja"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] w-full rounded-3xl object-cover lg:ml-auto lg:aspect-square lg:max-w-[562px]"
          />
        </section>

        {/* Chamada final */}
        <section aria-labelledby="final-title" className={`${WRAP} pb-16 lg:pb-24`}>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:bg-benta-soft sm:px-11 sm:py-12">
            <div>
              <h2 id="final-title" className={`${HEADING} text-[clamp(1.9rem,2.7vw,2.45rem)]`}>
                O que vamos preparar juntos?
              </h2>
              <p className="mt-4 hidden text-base sm:block">Abra o caderno. Escolha uma receita. Crie uma lembrança.</p>
            </div>
            <a href="#receitas" className={`${BTN_BLUE} inline-flex w-full shrink-0 sm:w-[230px]`}>
              Ver receitas <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <StudyFooter
        brand="a Dona Benta"
        className="bg-benta-blue text-benta-bg"
        mutedClassName="text-benta-bg/70"
        logo={<span className="font-bookman text-3xl font-bold">Dona Benta</span>}
      />
    </div>
  );
}
