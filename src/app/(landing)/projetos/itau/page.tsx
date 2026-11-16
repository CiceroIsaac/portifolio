import type { Metadata } from "next";
import Image from "next/image";
import { AppIllustration } from "@/components/landing/itau/AppIllustration";
import { CardIcon, CheckCircleIcon, HeartIcon, PhoneIcon, SparkleIcon } from "@/components/landing/itau/icons";
import { MobileMenu, type NavLink } from "@/components/landing/MobileMenu";
import { StudyCta } from "@/components/landing/StudyCta";
import { StudyFooter } from "@/components/landing/StudyFooter";
import { ArrowRight, WRAP } from "@/components/landing/ui";
import hands from "@/assets/landing/itau/itau-hands.png";
import logo from "@/assets/landing/itau/itau-logo.png";
import person from "@/assets/landing/itau/itau-person.png";

export const metadata: Metadata = {
  title: "Itaú",
  description: "Estudo conceitual de landing page inspirado no Itaú. Projeto de portfólio, não oficial.",
};

/** Links do cabeçalho: cada um leva a uma seção desta página. */
const NAV: NavLink[] = [
  { href: "#vida", label: "Para você" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#no-seu-ritmo", label: "No seu ritmo" },
];

const HIGHLIGHTS = [
  { title: "Conta e cartões", text: "Para seus próximos passos", Icon: CardIcon },
  { title: "Tudo pelo app", text: "Na palma da sua mão", Icon: PhoneIcon },
  { title: "Seu dia a dia", text: "Mais simples de organizar", Icon: CheckCircleIcon },
  { title: "Perto de você", text: "Quando precisar", Icon: HeartIcon },
];

/** Cards de "Possibilidades". O link "Explorar" leva à seção relacionada. */
const SOLUTIONS = [
  {
    title: "Sua conta, seu ritmo",
    text: "Organize os movimentos do dia e encontre espaço para o que vem depois.",
    href: "#no-seu-ritmo",
    Icon: PhoneIcon,
  },
  {
    title: "Um cartão que acompanha",
    text: "Descubra possibilidades para suas compras e seus próximos destinos.",
    href: "#vida",
    Icon: CardIcon,
  },
  {
    title: "Planos que saem do papel",
    text: "Comece a organizar seus objetivos com mais clareza, um passo de cada vez.",
    href: "#proximo-passo",
    Icon: SparkleIcon,
  },
];

const CHECKLIST = [
  "Resolva o essencial em poucos toques.",
  "Encontre suas soluções em um só lugar.",
  "Leve o Itaú com você.",
];

/** Botões arredondados do design (laranja e azul). */
const BTN =
  "items-center justify-between gap-6 rounded-full px-6 py-3.5 text-[15px] font-bold transition-colors duration-200";
const BTN_ORANGE = `${BTN} inline-flex bg-itau-orange text-white hover:bg-[#d46400] focus-visible:outline-itau-ink`;
const BTN_INK = `${BTN} bg-itau-ink text-white hover:bg-[#0f2236] focus-visible:outline-itau-orange`;

export default function ItauPage() {
  return (
    <div className="bg-itau-bg text-itau-ink">
      {/* Cabeçalho fixo */}
      <header className="sticky top-0 z-40 border-b border-itau-ink/10 bg-itau-bg/95 backdrop-blur">
        <div className={`${WRAP} relative flex h-20 items-center justify-between lg:h-[115px]`}>
          <a href="#inicio" aria-label="Itaú, início do conceito">
            <Image src={logo} alt="" priority className="size-12 rounded-xl lg:size-16 lg:rounded-2xl" />
          </a>
          <nav aria-label="Seções da página" className="hidden gap-24 lg:flex">
            {NAV.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold hover:text-itau-orange">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#proximo-passo" className={`${BTN_INK} hidden lg:inline-flex`}>
            Conhecer o Itaú <ArrowRight />
          </a>
          <MobileMenu
            links={[...NAV, { href: "#proximo-passo", label: "Conhecer o Itaú" }]}
            buttonClassName="text-itau-ink hover:bg-itau-soft"
            panelClassName="border-b border-itau-ink/10 bg-itau-bg shadow-lg"
            linkClassName="font-bold hover:text-itau-orange"
          />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" aria-labelledby="itau-title" className="overflow-hidden">
          <div className={`${WRAP} grid items-center gap-12 pt-10 pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start xl:grid-cols-[1fr_620px] lg:gap-8 lg:pt-16`}>
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-itau-orange uppercase">
                Mais possibilidades para a sua vida
              </p>
              <h1
                id="itau-title"
                className="mt-6 text-[clamp(2.75rem,5.7vw,5.125rem)] leading-[1.1] font-bold tracking-[-0.02em] lg:mt-8"
              >
                Seu próximo passo começa aqui.
              </h1>
              <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-itau-ink/80 lg:mt-16 lg:text-[21px]">
                Um banco que acompanha seus planos. Do primeiro movimento às grandes conquistas.
              </p>
              <a href="#solucoes" className={`${BTN_ORANGE} mt-8 w-full sm:w-auto lg:mt-12`}>
                Descubra possibilidades <ArrowRight />
              </a>
              <p className="mt-8 text-[13px] text-itau-ink/70">Tudo no seu tempo. Tudo no seu app.</p>
            </div>
            <div className="mr-[-24px] ml-6 sm:mx-auto sm:w-[80%] lg:mx-0 lg:w-auto">
              <AppIllustration />
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section aria-label="Destaques" className={WRAP}>
          <ul className="grid gap-4 lg:grid-cols-4 lg:gap-0 lg:rounded-2xl lg:bg-white lg:px-7 lg:py-9">
            {HIGHLIGHTS.map(({ title, text, Icon }, i) => (
              <li
                key={title}
                className={`items-start gap-4 rounded-2xl bg-white px-6 py-6 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0 ${
                  // No mobile o design mostra só os dois primeiros destaques.
                  i > 1 ? "hidden sm:flex" : "flex"
                }`}
              >
                <Icon className="size-7 shrink-0 text-itau-orange" />
                <div>
                  <h2 className="text-[17px] font-bold">{title}</h2>
                  <p className="mt-1 text-xs text-itau-ink/60">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Possibilidades / soluções */}
        <section id="solucoes" aria-labelledby="solucoes-title" className={`${WRAP} pt-24 pb-24 lg:pt-32 lg:pb-28`}>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-itau-orange uppercase">Possibilidades</p>
              <h2 id="solucoes-title" className="mt-6 text-[clamp(2rem,3.4vw,3rem)] leading-[1.2] font-bold">
                Para cada plano,
                <br />
                um novo caminho.
              </h2>
            </div>
            <p className="hidden max-w-[380px] text-xl leading-relaxed text-itau-ink/70 lg:block">
              Escolha o que faz sentido para o seu momento.
            </p>
          </div>
          <ul className="mt-14 grid gap-5 lg:grid-cols-3">
            {SOLUTIONS.map(({ title, text, href, Icon }) => (
              <li key={title} className="flex flex-col rounded-2xl bg-itau-soft p-7 lg:min-h-[320px] lg:p-8">
                <Icon className="size-8 text-itau-orange" />
                <h3 className="mt-6 text-[22px] font-bold lg:text-2xl">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-itau-ink/70 lg:text-[17px]">{text}</p>
                <a
                  href={href}
                  className="group mt-8 flex items-center justify-between text-sm font-bold text-itau-orange lg:mt-auto"
                >
                  <span>
                    Explorar<span className="sr-only">: {title}</span>
                  </span>
                  <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* A vida acontece agora */}
        <section id="vida" aria-labelledby="vida-title" className="lg:px-10">
          <div className="mx-auto grid max-w-[1280px] overflow-hidden bg-[#f6d3ad] lg:grid-cols-2 lg:rounded-3xl">
            <div className="order-2 flex items-end justify-center px-6 pt-4 lg:order-1 lg:pt-14">
              <Image
                src={person}
                alt="Homem sorridente de óculos e camisa laranja usando o celular"
                sizes="(min-width: 1024px) 480px, 90vw"
                className="h-auto w-full max-w-[340px] lg:max-w-[480px]"
              />
            </div>
            <div className="order-1 self-center px-6 pt-20 lg:order-2 lg:px-0 lg:py-24 lg:pr-20">
              <p className="text-xs font-bold tracking-[0.14em] uppercase">A vida acontece agora</p>
              <h2 id="vida-title" className="mt-6 text-[clamp(1.85rem,3.3vw,2.95rem)] leading-[1.22] font-bold">
                Menos complicação. <br className="hidden lg:block" />
                Mais vida acontecendo.
              </h2>
              <p className="mt-6 max-w-[460px] text-base leading-relaxed lg:mt-10 lg:text-[19px]">
                O café no caminho, aquela viagem, um projeto novo. Suas escolhas merecem espaço no dia a dia.
              </p>
              <a href="#no-seu-ritmo" className={`${BTN_INK} mt-10 hidden lg:inline-flex`}>
                Conheça as soluções <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* App / no seu ritmo */}
        <section id="no-seu-ritmo" aria-labelledby="ritmo-title" className="bg-itau-ink text-white lg:mt-14">
          {/* Mobile: título → imagem → lista. Desktop: título e lista à esquerda, imagem à direita. */}
          <div className={`${WRAP} grid gap-10 py-16 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-8 lg:gap-y-16 lg:py-20`}>
            <div className="lg:self-end">
              <p className="text-xs font-bold tracking-[0.14em] text-[#ff9d3d] uppercase">Um app. Muitas possibilidades.</p>
              <h2 id="ritmo-title" className="mt-6 text-[clamp(2rem,4vw,3.6rem)] leading-[1.15] font-bold">
                Seu banco cabe <br />
                nos seus planos.
              </h2>
            </div>
            <ul className="order-last space-y-6 lg:order-none lg:col-start-1 lg:row-start-2">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-4 text-[17px]">
                  <CheckCircleIcon className="size-6 shrink-0 text-itau-orange" />
                  {item}
                </li>
              ))}
            </ul>
            <figure className="flex flex-col items-center gap-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
              <Image
                src={hands}
                alt="Mãos segurando um celular com uma tela de organização financeira ilustrativa"
                sizes="(min-width: 1024px) 470px, 90vw"
                className="h-auto w-full max-w-[470px] rounded-2xl"
              />
              <figcaption className="rounded-full bg-white/10 px-8 py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase">
                Ilustração de experiência
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Próximo passo */}
        <section id="proximo-passo" aria-labelledby="proximo-title" className={`${WRAP} py-16 lg:py-20`}>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="proximo-title" className="text-[clamp(1.75rem,2.9vw,2.6rem)] leading-tight font-bold">
              Vamos dar o próximo passo?
            </h2>
            <StudyCta brand="o Itaú" className={`${BTN_ORANGE} w-full sm:w-[270px]`} noteClassName="text-itau-ink/70">
              Conhecer o Itaú <ArrowRight />
            </StudyCta>
          </div>
        </section>
      </main>

      <StudyFooter
        brand="o Itaú"
        className="bg-itau-soft"
        mutedClassName="text-itau-ink/60"
        logo={<span className="text-3xl font-bold tracking-tight">itaú</span>}
      />
    </div>
  );
}
