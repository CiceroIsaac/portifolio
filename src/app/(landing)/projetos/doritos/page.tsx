import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { IntensityMeter } from "@/components/landing/doritos/IntensityMeter";
import { PackCrop, type CropRect } from "@/components/landing/doritos/PackCrop";
import { Marquee } from "@/components/landing/Marquee";
import { MobileMenu, type NavLink } from "@/components/landing/MobileMenu";
import { StudyFooter } from "@/components/landing/StudyFooter";
import { ArrowRight, WRAP } from "@/components/landing/ui";
import { dejavuCondensed } from "@/lib/fonts";
import chili from "@/assets/landing/doritos/doritos-chili.jpg";
import nacho from "@/assets/landing/doritos/doritos-nacho.jpg";

export const metadata: Metadata = {
  title: "Doritos",
  description: "Estudo conceitual de landing page inspirado em Doritos. Projeto de portfólio, não oficial.",
};

const NAV: NavLink[] = [
  { href: "#sabores", label: "Sabores" },
  { href: "#momentos", label: "No seu momento" },
  { href: "#marca", label: "A marca" },
];

/** Recortes de referência dos pacotes (documentacao/design-tokens.json). */
const NACHO_CROP: CropRect = { x: 177, y: 25, width: 640, height: 950 };
const CHILI_CROP: CropRect = { x: 200, y: 15, width: 600, height: 970 };

const FLAVORS: { n: string; name: string; text: string; image: StaticImageData; crop: CropRect; bg: string }[] = [
  { n: "01", name: "Queijo Nacho", text: "O clássico que rouba a cena.", image: nacho, crop: NACHO_CROP, bg: "bg-doritos-red" },
  { n: "02", name: "Sweet Chili", text: "Um encontro de sabores intensos.", image: chili, crop: CHILI_CROP, bg: "bg-[#7461c0]" },
];

/** Títulos: DejaVu Sans Condensed Bold Oblique, em caixa alta. */
const HEADING = "font-condensed font-bold italic uppercase leading-[1.08]";
const EYEBROW = "text-xs font-bold tracking-[0.14em] uppercase text-doritos-yellow";
/** Botões retos (sem arredondamento), como no conceito. */
const BTN =
  "items-center justify-between gap-6 bg-doritos-yellow px-6 py-3.5 text-[15px] font-bold text-doritos-black transition-colors duration-200 hover:bg-white focus-visible:outline-doritos-yellow";

/** Triângulo de contorno, elemento gráfico recorrente (decorativo). */
function Triangle({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className} overflow="visible">
      <path d="M4 6 96 22 40 96Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="miter" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Ícones dos momentos (decorativos). */
const MomentIcons = {
  play: (
    <svg viewBox="0 0 120 72" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true" className="h-16 w-auto lg:h-20">
      <rect x="3" y="3" width="114" height="66" rx="18" />
      <path d="M22 36h22M33 25v22" strokeLinecap="round" />
      <circle cx="84" cy="28" r="4" fill="currentColor" />
      <circle cx="96" cy="44" r="4" fill="currentColor" />
    </svg>
  ),
  role: (
    <svg viewBox="0 0 120 72" fill="currentColor" aria-hidden="true" className="h-16 w-auto lg:h-20">
      <path d="M18 8c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12ZM60 24c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12ZM102 8c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z" />
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 120 84" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true" className="h-16 w-auto lg:h-20">
      <rect x="3" y="3" width="114" height="62" rx="4" />
      <path d="M48 20v28l24-14Z" fill="currentColor" stroke="none" />
      <path d="M42 80h36" strokeLinecap="round" />
    </svg>
  ),
};

const MOMENTS = [
  { title: "No play", text: "Próxima fase: sabor.", icon: MomentIcons.play, bg: "bg-doritos-yellow" },
  { title: "No rolê", text: "O encontro começa aqui.", icon: MomentIcons.role, bg: "bg-doritos-red", light: true },
  { title: "No sofá", text: "Sua série tem companhia.", icon: MomentIcons.sofa, bg: "bg-doritos-purple" },
];

export default function DoritosPage() {
  return (
    <div className={`${dejavuCondensed.variable} overflow-x-clip bg-doritos-black text-doritos-cream`}>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 bg-doritos-black/95 backdrop-blur">
        <div className={`${WRAP} relative flex h-20 items-center justify-between lg:h-24`}>
          {/* Wordmark: interpretação tipográfica do conceito (não é o logotipo oficial). */}
          <a href="#inicio" aria-label="Doritos, início do conceito" className="relative px-1 py-2">
            <Triangle className="absolute top-1 left-2 h-11 w-12 text-doritos-red" />
            <span className="relative font-condensed text-2xl font-bold italic lg:text-[28px]">Doritos</span>
          </a>
          <nav aria-label="Seções da página" className="hidden gap-20 lg:flex">
            {NAV.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold hover:text-doritos-yellow">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#sabores" className={`${BTN} hidden lg:inline-flex`}>
            Escolha seu sabor <ArrowRight />
          </a>
          <MobileMenu
            links={[...NAV, { href: "#sabores", label: "Escolha seu sabor" }]}
            buttonClassName="text-doritos-cream hover:bg-white/10"
            panelClassName="border-b border-white/10 bg-doritos-black shadow-lg"
            linkClassName="font-bold hover:text-doritos-yellow"
          />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" aria-labelledby="doritos-title" className={`${WRAP} grid items-center gap-10 pt-8 pb-16 lg:grid-cols-2 lg:pt-6 lg:pb-20`}>
          <div>
            <p className={`${EYEBROW} motion-safe:animate-hero-in`}>Intensidade não segue roteiro.</p>
            <h1 id="doritos-title" className={`${HEADING} anim-delay-1 mt-5 text-[clamp(2.6rem,7.5vw,6.75rem)] motion-safe:animate-hero-in`}>
              O óbvio <br />
              não tem <br className="hidden lg:block" />
              vez.
            </h1>
            <p className="anim-delay-2 mt-6 max-w-[540px] text-lg leading-relaxed text-doritos-cream/80 motion-safe:animate-hero-in lg:mt-10 lg:text-[21px]">
              Quebre a rotina. Aumente o sabor. Transforme qualquer momento no seu próximo rolê.
            </p>
            <a href="#sabores" className={`${BTN} anim-delay-3 mt-8 inline-flex w-full motion-safe:animate-hero-in sm:w-auto lg:mt-12`}>
              Descubra os sabores <ArrowRight />
            </a>
          </div>
          <figure className="anim-delay-2 relative mx-auto w-full max-w-[560px] py-[6%] motion-safe:animate-pop">
            {/* Triângulos girando devagar, em sentidos opostos */}
            <Triangle strokeWidth={10} className="absolute top-[2%] left-[4%] h-[100%] w-[96%] text-doritos-red motion-safe:animate-spin-slow" />
            <Triangle className="absolute top-[12%] left-[-4%] h-[74%] w-[92%] rotate-[160deg] text-doritos-red/50 motion-safe:animate-spin-slow-reverse" />
            <div className="relative mx-auto w-[60%] rotate-[8deg] bg-white p-[4%] shadow-[0_30px_60px_rgba(0,0,0,.45)] motion-safe:animate-wobble">
              <PackCrop src={nacho} alt="Pacote de Doritos Queijo Nacho" crop={NACHO_CROP} priority sizes="300px" />
            </div>
            <figcaption className="relative mx-auto -mt-3 w-fit -rotate-2 rounded-full bg-doritos-red px-8 py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase">
              Sabor no máximo
            </figcaption>
          </figure>
        </section>

        {/* Faixa amarela */}
        <Marquee
          items={["Aumente o sabor", "Quebre a rotina", "Vai de Doritos", "O óbvio não tem vez"]}
          separator={<span className="text-doritos-red">▲</span>}
          className="bg-doritos-yellow py-5 text-doritos-black"
          itemClassName="font-condensed text-[clamp(1.3rem,2.15vw,1.95rem)] font-bold uppercase italic"
        />

        {/* Sabores */}
        <section id="sabores" aria-labelledby="sabores-title" className={`${WRAP} pt-16 lg:pt-24`}>
          <p className={`${EYEBROW} reveal`}>Escolha seu lado intenso</p>
          <h2 id="sabores-title" className={`${HEADING} reveal mt-5 text-[clamp(2rem,4.3vw,3.9rem)]`}>
            Qual é a sua vibe?
          </h2>
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {FLAVORS.map((f, i) => (
              <li key={f.name} className={`reveal ${i === 0 ? "reveal-left" : "reveal-right"} flex`}>
                {/* Hover: o pacote inclina e o triângulo gira */}
                <div className={`group relative flex w-full flex-col overflow-hidden p-6 sm:p-8 ${f.bg}`}>
                <Triangle className="absolute top-[8%] right-[7%] hidden h-[64%] w-[38%] text-white/80 transition-transform duration-700 group-hover:rotate-[24deg] sm:block" />
                <span className="font-condensed text-xl font-bold">{f.n}</span>
                <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="mx-auto w-[56%] max-w-[220px] bg-white p-[3%] shadow-[0_16px_30px_rgba(0,0,0,.25)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-6 sm:mx-0 sm:w-[37%]">
                    <PackCrop src={f.image} alt={`Pacote de Doritos ${f.name}`} crop={f.crop} sizes="220px" />
                  </div>
                  <div className="relative">
                    <h3 className="font-condensed text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.08] font-bold uppercase sm:max-w-[6ch]">{f.name}</h3>
                    <p className="mt-4 text-base sm:mt-10">{f.text}</p>
                  </div>
                </div>
                <a href="#momentos" className="mt-6 self-end p-2 transition-transform hover:translate-x-1">
                  <ArrowRight className="size-7" />
                  <span className="sr-only">Momentos para {f.name}</span>
                </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Momentos */}
        <section id="momentos" aria-labelledby="momentos-title" className={`${WRAP} py-16 lg:py-24`}>
          <p className={`${EYEBROW} reveal`}>Seu momento pede mais</p>
          <h2 id="momentos-title" className={`${HEADING} reveal mt-5 text-[clamp(1.75rem,4vw,3.55rem)]`}>
            Não é só uma pausa. <br />É a sua pausa.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {MOMENTS.map((m, i) => (
              // `reveal` no <li>; o hover (inclinar) fica no card interno.
              <li key={m.title} className="reveal flex" style={{ "--reveal-delay": `${i * 130}ms` } as React.CSSProperties}>
                <div className={`group flex w-full flex-col gap-6 p-7 transition-transform duration-300 hover:-rotate-2 hover:scale-[1.03] ${m.bg} ${m.light ? "text-doritos-cream" : "text-doritos-black"}`}>
                  <div className="flex justify-center transition-transform duration-300 group-hover:scale-110">{m.icon}</div>
                  <div>
                    <h3 className={`${HEADING} text-[clamp(1.6rem,2.6vw,2.4rem)]`}>{m.title}</h3>
                    <p className="mt-3 text-base">{m.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nova seção: medidor de intensidade (interativo) */}
        <section id="intensidade" aria-labelledby="intensidade-title" className={`${WRAP} pb-16 lg:pb-24`}>
          <div className="reveal">
            <p className={EYEBROW}>Termômetro do rolê</p>
            <h2 id="intensidade-title" className={`${HEADING} mt-5 mb-10 text-[clamp(1.75rem,4vw,3.55rem)]`}>
              Qual é a sua intensidade hoje?
            </h2>
          </div>
          <div className="reveal reveal-zoom" style={{ "--reveal-delay": `${150}ms` } as React.CSSProperties}>
            <IntensityMeter />
          </div>
        </section>

        {/* A marca / chamada final */}
        <section id="marca" aria-labelledby="marca-title" className={WRAP}>
          <div className="grid items-center gap-10 border-t border-white/15 py-16 lg:grid-cols-2 lg:py-20">
            <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:block">
              <Triangle strokeWidth={8} className="absolute inset-[6%] text-doritos-red motion-safe:animate-spin-slow" />
              <Triangle strokeWidth={3} className="absolute inset-[10%] rotate-[110deg] text-doritos-yellow motion-safe:animate-spin-slow-reverse" />
            </div>
            <div className="reveal reveal-right">
              <p className={EYEBROW}>Sem espaço para o tanto faz.</p>
              <h2 id="marca-title" className={`${HEADING} mt-5 text-[clamp(1.9rem,3.7vw,3.3rem)]`}>
                Aperte o play <br />
                no inesperado.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-relaxed text-doritos-cream/80 lg:mt-12 lg:text-[19px]">
                O próximo momento pode começar com um convite, uma ideia ou um pacote aberto.
              </p>
              <a href="#sabores" className={`${BTN} mt-8 inline-flex w-full sm:w-[320px] lg:mt-10`}>
                Encontre seu Doritos <ArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <StudyFooter
        brand="Doritos"
        mutedClassName="text-doritos-cream/60"
        logo={<span className="font-condensed text-3xl font-bold uppercase">Doritos</span>}
      />
    </div>
  );
}
