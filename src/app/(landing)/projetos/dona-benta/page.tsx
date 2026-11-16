import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { ScallopBadge, ScallopEdge, Sticker, TilePattern } from "@/components/landing/dona-benta/Decor";
import { Marquee } from "@/components/landing/Marquee";
import { MobileMenu, type NavLink } from "@/components/landing/MobileMenu";
import { StudyFooter } from "@/components/landing/StudyFooter";
import { ArrowRight, WRAP } from "@/components/landing/ui";
import { poppins } from "@/lib/fonts";
import brownie from "@/assets/landing/dona-benta/dona-brownie.jpg";
import cake from "@/assets/landing/dona-benta/dona-cake.jpg";
import flour from "@/assets/landing/dona-benta/dona-flour.jpg";
import lasagna from "@/assets/landing/dona-benta/dona-lasagna.jpg";
import logo from "@/assets/landing/dona-benta/dona-logo.png";

export const metadata: Metadata = {
  title: "Farinha Dona Benta",
  description: "Estudo conceitual de landing page inspirado na Farinha Dona Benta. Projeto de portfólio, não oficial.",
};

/**
 * Direção visual (revisão pedida pelo usuário): rosa, azul e amarelo,
 * Poppins, padrão de azulejo (estampa da embalagem) e bordas recortadas
 * (festonê, como o selo do logotipo).
 */

const NAV: NavLink[] = [
  { href: "#receitas", label: "Receitas" },
  { href: "#produtos", label: "Nossos produtos" },
  { href: "#afeto", label: "Cozinha com afeto" },
];

/** Cada receita tem uma cor de destaque (etiqueta e sombra do card). */
const RECIPES: { tag: string; title: string; image: StaticImageData; alt: string; accent: string; shadow: string }[] = [
  {
    tag: "Doce · Bolo",
    title: "Bolo para compartilhar",
    image: cake,
    alt: "Bolo com cobertura e raspas de laranja",
    accent: "bg-benta-pink text-benta-navy",
    shadow: "shadow-[8px_8px_0_var(--color-benta-pink)]",
  },
  {
    tag: "Doce · Brownie",
    title: "Um carinho de chocolate",
    image: brownie,
    alt: "Brownie em ramequim com sorvete, calda de chocolate e frutas vermelhas",
    accent: "bg-benta-yellow text-benta-navy",
    shadow: "shadow-[8px_8px_0_var(--color-benta-yellow)]",
  },
  {
    tag: "Salgado · Massas",
    title: "Almoço que reúne",
    image: lasagna,
    alt: "Massa gratinada em travessa de vidro",
    accent: "bg-benta-blue text-white",
    shadow: "shadow-[8px_8px_0_var(--color-benta-blue)]",
  },
];

/** Receitas que orbitam o pacote na hero (posições em 120°, raio de 41%). */
const ORBIT: { label: string; image: StaticImageData; alt: string; x: string; y: string; pill: string }[] = [
  { label: "Bolo", image: cake, alt: "Bolo com cobertura e raspas de laranja", x: "50%", y: "9%", pill: "bg-benta-yellow text-benta-navy" },
  { label: "Brownie", image: brownie, alt: "Brownie com sorvete e frutas vermelhas", x: "85.5%", y: "70.5%", pill: "bg-benta-blue text-white" },
  { label: "Massas", image: lasagna, alt: "Massa gratinada em travessa", x: "14.5%", y: "70.5%", pill: "bg-white text-benta-navy" },
];

/** Momentos do preparo (sem quantidades nem passo a passo de receita). */
const JOURNEY = [
  { title: "Separar", text: "Ingredientes na mesa e o caderno aberto na página certa." },
  { title: "Misturar", text: "Mão na massa, sem pressa, do jeito que alguém ensinou." },
  { title: "Esperar", text: "O cheiro do forno avisando que está quase." },
  { title: "Compartilhar", text: "A parte mais gostosa: dividir com quem você gosta." },
];

const USES = ["Para o bolo do fim de tarde", "Para uma massa feita em casa", "Para descobrir sua próxima receita"];

/** Títulos: Poppins SemiBold, espaçamento fechado. */
const HEADING = "font-poppins font-semibold leading-[1.1] tracking-[-0.03em]";
/** Etiqueta em pílula (sobretítulo das seções). */
const PILL = "inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.12em] uppercase";
const BTN = "group items-center justify-between gap-6 rounded-full px-6 py-3.5 text-[15px] font-bold transition-[background-color,translate] duration-200 hover:-translate-y-0.5";
const BTN_BLUE = `${BTN} bg-benta-blue text-white hover:bg-benta-navy focus-visible:outline-benta-blue`;
const BTN_YELLOW = `${BTN} bg-benta-yellow text-benta-navy hover:bg-white focus-visible:outline-benta-yellow`;
const ARROW = "size-5 transition-transform group-hover:translate-x-1";

/** Atraso escalonado para itens com a classe `reveal`. */
const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="m7.5 12.3 3 3L16.8 9" fill="none" stroke="#172b5a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Coração pequeno (decorativo). */
function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M12 21s-8.5-5.2-8.5-11.2A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 3.2C20.5 15.8 12 21 12 21Z" />
    </svg>
  );
}

export default function DonaBentaPage() {
  return (
    <div className={`${poppins.variable} overflow-x-clip bg-benta-bg font-poppins text-benta-navy`}>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 bg-benta-pink-soft/95 backdrop-blur">
        <div className={`${WRAP} relative flex h-20 items-center justify-between lg:h-24`}>
          <a href="#inicio" aria-label="Dona Benta, início do conceito" className="rounded-full">
            <Image src={logo} alt="" priority className="size-14 transition-transform duration-300 hover:-rotate-6 lg:size-[76px]" />
          </a>
          <nav aria-label="Seções da página" className="hidden gap-14 lg:flex">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-semibold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded after:bg-benta-pink after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#receitas" className={`${BTN_BLUE} hidden lg:inline-flex`}>
            Encontre uma receita <ArrowRight className={ARROW} />
          </a>
          <MobileMenu
            links={[...NAV, { href: "#receitas", label: "Encontre uma receita" }]}
            buttonClassName="text-benta-navy hover:bg-white/60"
            panelClassName="border-b border-benta-navy/10 bg-benta-pink-soft shadow-lg"
            linkClassName="font-semibold hover:text-benta-blue"
          />
        </div>
      </header>

      <main>
        {/* Hero: rosa com azulejos, grifo amarelo e composição do bolo */}
        <section id="inicio" aria-labelledby="benta-title" className="relative bg-benta-pink-soft">
          <TilePattern className="text-benta-pink/25" />
          <div className={`${WRAP} relative grid items-center gap-12 pt-8 pb-16 lg:grid-cols-[1.05fr_1fr] lg:pt-10 lg:pb-24`}>
            <div>
              <p className={`${PILL} bg-benta-yellow motion-safe:animate-hero-in`}>O melhor ingrediente é estar junto</p>
              <h1 id="benta-title" className={`${HEADING} anim-delay-1 mt-6 text-[clamp(2.7rem,6vw,5.6rem)] motion-safe:animate-hero-in`}>
                Tem{" "}
                {/* Grifo amarelo atrás da palavra-chave */}
                <span className="bg-[linear-gradient(transparent_58%,var(--color-benta-yellow)_58%,var(--color-benta-yellow)_92%,transparent_92%)] px-1">
                  carinho
                </span>{" "}
                nessa <span className="text-benta-blue">receita.</span>
              </h1>
              <p className="anim-delay-2 mt-6 max-w-[500px] text-lg leading-relaxed text-benta-navy/75 motion-safe:animate-hero-in lg:mt-8 lg:text-xl">
                Da primeira colher de farinha ao último pedaço: histórias boas começam na cozinha.
              </p>
              <div className="anim-delay-3 mt-8 flex flex-col gap-3 motion-safe:animate-hero-in sm:flex-row lg:mt-10">
                <a href="#receitas" className={`${BTN_BLUE} inline-flex`}>
                  Vamos cozinhar? <ArrowRight className={ARROW} />
                </a>
                <a
                  href="#produtos"
                  className={`${BTN} inline-flex border-2 border-benta-navy/15 bg-white/70 text-benta-navy hover:bg-white focus-visible:outline-benta-blue`}
                >
                  Conheça a farinha <ArrowRight className={ARROW} />
                </a>
              </div>
            </div>

            {/* Farinha protagonista: selo festonê com azulejos, pacote ao centro e receitas em órbita */}
            <div className="anim-delay-2 relative mx-auto aspect-square w-full max-w-[560px] motion-safe:animate-pop">
              {/* Selo rosa recortado, como o do logotipo */}
              <ScallopBadge className="absolute inset-[8%] size-[84%] text-benta-pink drop-shadow-[0_24px_40px_rgba(23,43,90,.18)]" />
              <div className="absolute inset-[16%] overflow-hidden rounded-full">
                <TilePattern className="text-white/35" />
              </div>
              {/* Disco branco: o JPG do pacote tem fundo branco e se integra aqui */}
              <div className="absolute inset-[24%] grid place-items-center overflow-hidden rounded-full bg-white ring-6 ring-benta-yellow">
                <Image
                  src={flour}
                  alt="Pacote de Farinha de Trigo Dona Benta"
                  priority
                  sizes="(min-width: 1024px) 260px, 45vw"
                  className="h-auto w-[74%] -rotate-3 motion-safe:animate-float"
                />
              </div>

              {/* Órbita: o anel gira devagar e cada foto gira ao contrário para ficar de pé */}
              <div className="absolute inset-0 motion-safe:animate-spin-slow">
                {ORBIT.map((item) => (
                  <div
                    key={item.label}
                    className="absolute size-[25%] -translate-x-1/2 -translate-y-1/2"
                    style={{ left: item.x, top: item.y }}
                  >
                    <div className="size-full motion-safe:animate-spin-slow-reverse">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        sizes="140px"
                        className="size-full rounded-full border-4 border-white object-cover shadow-[0_12px_24px_rgba(23,43,90,.25)]"
                      />
                      <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-bold whitespace-nowrap ${item.pill}`}>
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Sticker className="absolute top-[2%] right-[4%] size-[22%] motion-safe:animate-wobble">
                Feito
                <br />
                em casa
              </Sticker>
              <Heart className="absolute bottom-[8%] left-[6%] size-[8%] text-benta-blue motion-safe:animate-float" />
            </div>
          </div>
        </section>
        <ScallopEdge color="var(--color-benta-pink-soft)" />

        {/* Faixa amarela em loop */}
        <Marquee
          items={["Feito com carinho", "Receitas de família", "Do forno para a mesa", "Mão na massa"]}
          separator={<Heart className="size-5 text-benta-pink" />}
          className="-mx-4 mt-10 -rotate-1 bg-benta-yellow py-4 text-benta-navy"
          itemClassName="text-lg font-semibold lg:text-2xl"
        />

        {/* Caderno de receitas */}
        <section id="receitas" aria-labelledby="receitas-title" className={`${WRAP} py-16 lg:py-24`}>
          <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${PILL} bg-benta-pink-soft text-benta-blue`}>Caderno de receitas</p>
              <h2 id="receitas-title" className={`${HEADING} mt-5 text-[clamp(2rem,3.6vw,3.25rem)]`}>
                Hoje tem gostinho de quê?
              </h2>
            </div>
            <p className="max-w-[320px] text-base text-benta-navy/70">Escolha uma ideia e coloque a mão na massa.</p>
          </div>
          <ul className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {RECIPES.map((r, i) => (
              <li key={r.title} className="reveal" style={delay(i * 140)}>
                {/* Foto com sombra sólida colorida; inclina de leve no hover */}
                <div className={`group overflow-hidden rounded-3xl ${r.shadow} transition-transform duration-300 hover:-rotate-1`}>
                  <Image
                    src={r.image}
                    alt={r.alt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-[1.1]"
                  />
                </div>
                <p className={`${PILL} mt-6 ${r.accent}`}>{r.tag}</p>
                <h3 className={`${HEADING} mt-3 text-[clamp(1.3rem,1.8vw,1.55rem)]`}>{r.title}</h3>
                {/* Sem receitas oficiais: o "caderno" explica o estudo, sem link vazio. */}
                <details className="group mt-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-bold text-benta-blue">
                    Abrir o caderno
                    <ArrowRight className="size-6 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="pt-1 text-sm text-benta-navy/70">
                    Página reservada para a receita completa. Este estudo apresenta a proposta visual, sem receitas
                    oficiais.
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        {/* Produto: azul com azulejos */}
        <ScallopEdge color="var(--color-benta-blue)" flip />
        <section id="produtos" aria-labelledby="produtos-title" className="relative bg-benta-blue text-white">
          <TilePattern className="text-white/10" />
          <div className={`${WRAP} relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-x-24 lg:py-24`}>
            <div className="reveal lg:col-start-2 lg:row-start-1">
              <p className={`${PILL} bg-benta-yellow text-benta-navy`}>Para criar novas memórias</p>
              <h2 id="produtos-title" className={`${HEADING} mt-6 text-[clamp(2rem,3.6vw,3.3rem)]`}>
                Todo começo pede um pouco de <span className="text-benta-yellow">farinha.</span>
              </h2>
              <p className="mt-6 max-w-[540px] text-base leading-relaxed text-white/85 lg:text-lg">
                Tem receita que passa de mão em mão. E tem aquela que você inventa hoje. O importante é o que acontece ao
                redor da mesa.
              </p>
            </div>
            {/* Pacote num círculo branco com contorno rosa */}
            <div className="reveal reveal-zoom relative mx-auto aspect-square w-[78%] max-w-[440px] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:w-full">
              <div className="absolute inset-0 rounded-full bg-benta-pink" />
              <div className="absolute inset-[5%] grid place-items-center rounded-full bg-white">
                <Image
                  src={flour}
                  alt="Pacote de Farinha de Trigo Tradicional Dona Benta"
                  sizes="300px"
                  className="h-auto w-[64%] object-contain motion-safe:animate-float"
                />
              </div>
              <Sticker className="absolute -right-[2%] bottom-[6%] size-[30%] motion-safe:animate-wobble">
                Trigo
                <br />
                tradicional
              </Sticker>
            </div>
            <div className="reveal lg:col-start-2 lg:row-start-2 lg:self-start">
              <a href="#afeto" className={`${BTN_YELLOW} inline-flex w-full sm:w-auto sm:min-w-[320px]`}>
                Conheça nossos produtos <ArrowRight className={ARROW} />
              </a>
            </div>
          </div>
        </section>
        <ScallopEdge color="var(--color-benta-blue)" />

        {/* Cozinha com afeto */}
        <section id="afeto" aria-labelledby="afeto-title" className={`${WRAP} grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24`}>
          <div>
            <div className="reveal">
              <p className={`${PILL} bg-benta-pink-soft text-benta-blue`}>Farinha de trigo tradicional</p>
              <h2 id="afeto-title" className={`${HEADING} mt-5 text-[clamp(2rem,3.9vw,3.5rem)]`}>
                O começo de <span className="text-benta-pink">tantas coisas boas.</span>
              </h2>
              <p className="mt-6 hidden max-w-[520px] text-lg leading-relaxed text-benta-navy/70 sm:block">
                Pães, bolos, massas e ideias que ainda vão surgir. Um ingrediente do dia a dia, muitas possibilidades na
                sua cozinha.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {USES.map((u, i) => (
                <li key={u} className="reveal reveal-left flex items-center gap-3 font-medium" style={delay(200 + i * 140)}>
                  <CheckIcon className="size-7 shrink-0 text-benta-yellow" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal reveal-right relative lg:ml-auto lg:w-full lg:max-w-[540px]">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-benta-pink" />
            <Image
              src={brownie}
              alt="Brownie com sorvete, calda de chocolate e frutas vermelhas em um ramequim laranja"
              sizes="(min-width: 1024px) 540px, 100vw"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover lg:aspect-square"
            />
            <Heart className="absolute -top-5 -left-4 size-12 text-benta-blue motion-safe:animate-float" />
          </div>
        </section>

        {/* Da farinha à mesa: linha do tempo que se desenha ao rolar */}
        <ScallopEdge color="var(--color-benta-yellow-soft)" flip />
        <section aria-labelledby="mesa-title" className="bg-benta-yellow-soft py-16 lg:py-24">
          <div className={`${WRAP} reveal`}>
            <p className={`${PILL} bg-benta-yellow`}>Da farinha à mesa</p>
            <h2 id="mesa-title" className={`${HEADING} mt-5 text-[clamp(2rem,3.6vw,3.25rem)]`}>
              Toda receita tem uma história.
            </h2>
            <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
              {/* Linha: horizontal no desktop, vertical no mobile */}
              <span aria-hidden="true" className="line-grow absolute top-7 right-[12%] left-[12%] hidden h-1 rounded bg-benta-pink md:block" />
              <span aria-hidden="true" className="line-grow line-grow-y absolute top-7 bottom-7 left-[26px] w-1 rounded bg-benta-pink md:hidden" />
              {JOURNEY.map((step, i) => (
                <li key={step.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                  <span
                    className="play-on-reveal grid size-14 shrink-0 place-items-center rounded-full bg-benta-blue text-xl font-bold text-white shadow-[0_0_0_6px_var(--color-benta-yellow-soft)] motion-safe:animate-pop"
                    style={{ animationDelay: `${300 + i * 250}ms` }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`${HEADING} text-2xl`}>{step.title}</h3>
                    <p className="mt-2 text-[15px] text-benta-navy/75 md:mx-auto md:max-w-[220px]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <ScallopEdge color="var(--color-benta-yellow-soft)" />

        {/* Chamada final */}
        <section aria-labelledby="final-title" className={`${WRAP} py-16 lg:py-24`}>
          <div className="reveal relative flex flex-col gap-8 overflow-hidden rounded-[2rem] bg-benta-pink px-7 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <TilePattern className="text-white/20" />
            <div className="relative">
              <h2 id="final-title" className={`${HEADING} text-[clamp(1.9rem,2.9vw,2.6rem)]`}>
                O que vamos preparar juntos?
              </h2>
              <p className="mt-3 text-base">Abra o caderno. Escolha uma receita. Crie uma lembrança.</p>
            </div>
            <a href="#receitas" className={`${BTN_BLUE} relative inline-flex w-full shrink-0 sm:w-[230px]`}>
              Ver receitas <ArrowRight className={ARROW} />
            </a>
          </div>
        </section>
      </main>

      <StudyFooter
        brand="a Dona Benta"
        className="bg-benta-navy text-white"
        mutedClassName="text-white/70"
        logo={<span className="text-3xl font-bold tracking-tight">Dona Benta</span>}
      />
    </div>
  );
}
