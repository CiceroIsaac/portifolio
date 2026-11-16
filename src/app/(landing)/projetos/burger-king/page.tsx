import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { BurgerBuilder } from "@/components/landing/burger-king/BurgerBuilder";
import { ProductCrop } from "@/components/landing/burger-king/ProductCrop";
import { Marquee } from "@/components/landing/Marquee";
import { MobileMenu, type NavLink } from "@/components/landing/MobileMenu";
import { StudyCta } from "@/components/landing/StudyCta";
import { StudyFooter } from "@/components/landing/StudyFooter";
import { ArrowRight, WRAP } from "@/components/landing/ui";
import { bookman } from "@/lib/fonts";
import bun from "@/assets/landing/burger-king/bk-bun.png";
import chicken from "@/assets/landing/burger-king/bk-chicken.png";
import coke from "@/assets/landing/burger-king/bk-coke.png";
import double from "@/assets/landing/burger-king/bk-double.png";
import fries from "@/assets/landing/burger-king/bk-fries.png";
import lettuce from "@/assets/landing/burger-king/bk-lettuce.png";
import logo from "@/assets/landing/burger-king/bk-logo.svg";
import meat from "@/assets/landing/burger-king/bk-meat.png";
import tomato from "@/assets/landing/burger-king/bk-tomato.png";
import whopper from "@/assets/landing/burger-king/bk-whopper-new.png";

export const metadata: Metadata = {
  title: "Burger King",
  description: "Estudo conceitual de landing page inspirado no Burger King. Projeto de portfólio, não oficial.",
};

const NAV: NavLink[] = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#do-seu-jeito", label: "Do seu jeito" },
  { href: "#restaurantes", label: "Restaurantes" },
];

/**
 * Sanduíches do cardápio. `crop` descreve onde o produto está dentro do PNG
 * (largura, altura e centro vertical), medido nos arquivos originais.
 */
const MENU: {
  name: string;
  text: string;
  image: StaticImageData;
  alt: string;
  crop: { w: number; h: number; cy: number };
}[] = [
  { name: "Whopper", text: "O clássico do seu jeito.", image: whopper, alt: "Sanduíche Whopper", crop: { w: 0.62, h: 0.39, cy: 57 } },
  {
    name: "Whopper Duplo",
    text: "Para uma vontade em dobro.",
    image: double,
    alt: "Sanduíche Whopper Duplo",
    crop: { w: 0.64, h: 0.43, cy: 55 },
  },
  { name: "BK Chicken", text: "Outra forma de matar a fome.", image: chicken, alt: "Porção de BK Chicken", crop: { w: 0.69, h: 0.31, cy: 60 } },
];

const INGREDIENTS: { name: string; image: StaticImageData }[] = [
  { name: "Pão com gergelim", image: bun },
  { name: "Carne grelhada", image: meat },
  { name: "Alface", image: lettuce },
  { name: "Tomate", image: tomato },
];

/** Títulos: URW Bookman Demi (pesada). */
const HEADING = "font-bookman font-bold leading-[1.12]";
const EYEBROW = "text-xs font-bold tracking-[0.14em] uppercase";
const BTN = "items-center justify-between gap-6 rounded-full px-6 py-3.5 text-[15px] font-bold transition-colors duration-200";
const BTN_RED = `${BTN} bg-bk-red text-white hover:bg-[#b51e00] focus-visible:outline-bk-red`;
const BTN_CREAM = `${BTN} bg-bk-bg text-bk-brown hover:bg-white focus-visible:outline-bk-bg`;

export default function BurgerKingPage() {
  return (
    <div className={`${bookman.variable} overflow-x-clip bg-bk-bg text-bk-brown`}>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 bg-bk-bg/95 backdrop-blur">
        <div className={`${WRAP} relative flex h-20 items-center justify-between lg:h-24`}>
          <a href="#inicio" aria-label="Burger King, início do conceito" className="rounded-lg">
            <Image src={logo} alt="" priority className="size-12 lg:size-16" />
          </a>
          <nav aria-label="Seções da página" className="hidden gap-20 lg:flex">
            {NAV.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold hover:text-bk-red">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#cardapio" className={`${BTN_RED} hidden lg:inline-flex`}>
            Explorar o cardápio <ArrowRight />
          </a>
          <MobileMenu
            links={[...NAV, { href: "#cardapio", label: "Explorar o cardápio" }]}
            buttonClassName="text-bk-brown hover:bg-[#ead7bb]"
            panelClassName="border-b border-bk-brown/10 bg-bk-bg shadow-lg"
            linkClassName="font-bold hover:text-bk-red"
          />
        </div>
      </header>

      <main>
        {/* Hero centralizada */}
        <section id="inicio" aria-labelledby="bk-title" className={`${WRAP} pt-6 pb-12 text-center lg:pt-2 lg:pb-14`}>
          <p className={`${EYEBROW} text-bk-red motion-safe:animate-hero-in`}>Quando a vontade chama...</p>
          <h1 id="bk-title" className={`${HEADING} anim-delay-1 mx-auto mt-4 max-w-[12ch] motion-safe:animate-hero-in text-[clamp(2.4rem,6.1vw,5.5rem)] md:max-w-none`}>
            Bateu a fome? <br className="hidden md:block" />
            Vai de Whopper.
          </h1>

          <div className="relative mx-auto mt-8 max-w-[1080px]">
            {/* Palavra gigante ao fundo (decorativa) */}
            <p
              aria-hidden="true"
              className={`${HEADING} absolute inset-x-0 top-[18%] hidden text-[clamp(6rem,13.5vw,12.2rem)] leading-none text-[#ead6b6] select-none md:block`}
            >
              WHOPPER
            </p>
            <div className="relative mx-auto w-full max-w-[660px] pt-[5%]">
              <div aria-hidden="true" className="anim-delay-1 absolute top-0 left-1/2 aspect-square w-[84%] -translate-x-1/2 rounded-full bg-[#f2c477] motion-safe:animate-pop" />
              <ProductCrop
                src={whopper}
                alt="Sanduíche Whopper com alface, tomate, cebola, picles, queijo e carne grelhada"
                productWidth={0.62}
                productHeight={0.39}
                centerY={57}
                priority
                sizes="(min-width: 768px) 660px, 100vw"
                // O sanduíche "cai" no lugar ao carregar a página.
                className="anim-delay-3 relative mx-auto w-full drop-shadow-[0_24px_24px_rgba(80,35,20,.25)] motion-safe:animate-drop"
              />
              <p className="relative mt-3 text-lg lg:text-[21px]">O clássico que chega chegando.</p>
            </div>
            {/* Selo "grelhado no fogo": círculo no desktop, etiqueta no mobile */}
            <p
              className={`${HEADING} absolute top-0 right-0 rotate-[-4deg] rounded-full bg-bk-red px-4 py-1.5 font-sans text-xs text-white uppercase md:top-[14%] md:right-[8%] md:grid md:size-[150px] md:rotate-[14deg] md:place-items-center md:p-0 md:font-bookman md:text-lg md:leading-tight motion-safe:animate-wobble`}
            >
              Grelhado <br className="hidden md:block" />
              no fogo
            </p>
          </div>
          <a href="#cardapio" className={`${BTN_RED} anim-delay-4 relative z-10 mt-6 inline-flex w-full motion-safe:animate-hero-in sm:w-[310px]`}>
            Conheça o Whopper <ArrowRight />
          </a>
        </section>

        {/* Faixa marrom */}
        <Marquee
          items={["Sabor grande.", "Vontade maior ainda.", "Grelhado no fogo.", "Do seu jeito."]}
          separator={<span className="text-bk-orange">★</span>}
          className="bg-bk-brown py-5 text-bk-bg"
          itemClassName={`${HEADING} text-[clamp(1.2rem,2.3vw,2.05rem)] uppercase`}
        />

        {/* Cardápio */}
        <section id="cardapio" aria-labelledby="cardapio-title" className={`${WRAP} py-16 lg:py-24`}>
          <p className={`${EYEBROW} reveal text-bk-red`}>Qual é o seu favorito?</p>
          <h2 id="cardapio-title" className={`${HEADING} reveal mt-5 text-[clamp(1.9rem,3.2vw,2.9rem)]`}>
            Escolha sua próxima mordida.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {MENU.map((item, i) => (
              <li key={item.name} className="reveal flex" style={{ "--reveal-delay": `${i * 130}ms` } as React.CSSProperties}>
                {/* Hover: card sobe e o produto dá um "pulo" inclinado */}
                <div className="group flex w-full flex-col rounded-3xl bg-[#ead6bb] p-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(80,35,20,.15)] lg:p-7">
                <div className="flex h-48 items-center justify-center lg:h-52">
                  <ProductCrop
                    src={item.image}
                    alt={item.alt}
                    productWidth={item.crop.w}
                    productHeight={item.crop.h}
                    centerY={item.crop.cy}
                    sizes="400px"
                    className="w-full max-w-[340px] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3 group-hover:scale-105"
                  />
                </div>
                <h3 className={`${HEADING} mt-6 text-[clamp(1.5rem,2vw,1.75rem)]`}>{item.name}</h3>
                <p className="mt-2 text-[15px]">{item.text}</p>
                <a
                  href="#do-seu-jeito"
                  className="mt-5 hidden size-11 place-items-center self-end rounded-full bg-bk-red text-white transition-transform hover:scale-105 focus-visible:outline-bk-red md:grid"
                >
                  <ArrowRight className="size-5" />
                  <span className="sr-only">Monte do seu jeito: {item.name}</span>
                </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Do seu jeito */}
        <section id="do-seu-jeito" aria-labelledby="jeito-title" className="bg-bk-red text-bk-bg">
          <div className={`${WRAP} grid gap-12 py-16 lg:grid-cols-2 lg:py-20`}>
            <div className="reveal">
              <p className={EYEBROW}>A combinação é sua.</p>
              <h2 id="jeito-title" className={`${HEADING} mt-5 text-[clamp(1.9rem,4.4vw,3.95rem)]`}>
                Do seu jeito. <br />
                Até a última <br className="hidden lg:block" />
                mordida.
              </h2>
            </div>
            <ul className="reveal grid grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-16">
              {INGREDIENTS.map((ing, i) => (
                <li key={ing.name} className="flex flex-col items-center gap-4 text-center text-sm font-bold">
                  <span
                    className="play-on-reveal grid aspect-square w-full max-w-[148px] place-items-center rounded-full bg-[#e8604a] transition-transform duration-300 hover:scale-110 hover:rotate-6 motion-safe:animate-pop"
                    style={{ animationDelay: `${200 + i * 150}ms` }}
                  >
                    <Image src={ing.image} alt="" className="w-[64%]" />
                  </span>
                  {ing.name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Nova seção: monte o seu (interativa) */}
        <section id="monte" aria-labelledby="monte-title" className={`${WRAP} pt-16 lg:pt-24`}>
          <div className="reveal">
            <p className={`${EYEBROW} text-bk-red`}>Monte o seu</p>
            <h2 id="monte-title" className={`${HEADING} mt-5 mb-10 text-[clamp(1.9rem,3.2vw,2.9rem)]`}>
              Uma camada de cada vez.
            </h2>
          </div>
          <div className="reveal" style={{ "--reveal-delay": `${150}ms` } as React.CSSProperties}>
            <BurgerBuilder />
          </div>
        </section>

        {/* Acompanhamentos */}
        <section aria-labelledby="combo-title" className={`${WRAP} grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20`}>
          <div className="reveal reveal-left lg:row-span-2">
            <p className={`${EYEBROW} text-bk-red`}>Melhor ainda junto</p>
            <h2 id="combo-title" className={`${HEADING} mt-5 text-[clamp(1.9rem,3.6vw,3.25rem)]`}>
              Tem companhia <br />
              pra esse sabor.
            </h2>
            <p className="mt-6 max-w-[480px] text-base leading-relaxed lg:mt-12 lg:text-[19px]">
              Batata quentinha, sua bebida favorita e uma pausa merecida.
              <span className="hidden sm:inline"> Agora é só aproveitar.</span>
            </p>
            <a href="#cardapio" className={`${BTN_RED} mt-10 hidden w-[300px] lg:inline-flex`}>
              Explorar combinações <ArrowRight />
            </a>
          </div>
          <div className="reveal reveal-zoom relative mx-auto w-full max-w-[520px]">
            <div aria-hidden="true" className="mx-auto aspect-square w-[94%] rounded-full bg-[#f2c477]" />
            <div className="absolute inset-0 flex items-end justify-center gap-[2%] pb-[12%]">
              <ProductCrop
                src={fries}
                alt="Batata frita em embalagem do Burger King"
                productWidth={0.3}
                productHeight={0.49}
                centerY={52}
                sizes="260px"
                className="w-[44%] motion-safe:animate-float"
              />
              <ProductCrop src={coke} alt="Lata de refrigerante" productWidth={0.24} productHeight={0.43} centerY={54} sizes="260px" className="w-[42%] [animation-delay:-3s] motion-safe:animate-float" />
            </div>
          </div>
          <a href="#cardapio" className={`${BTN_RED} inline-flex w-full lg:hidden`}>
            Explorar combinações <ArrowRight />
          </a>
        </section>

        {/* Restaurantes / chamada final */}
        <section id="restaurantes" aria-labelledby="final-title" className="sm:px-6 sm:pb-16 md:px-10 lg:pb-12">
          <div className="reveal mx-auto flex max-w-[1280px] flex-col gap-8 bg-bk-brown px-6 py-12 text-bk-bg sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:px-11">
            <div>
              <h2 id="final-title" className={`${HEADING} text-[clamp(1.75rem,2.5vw,2.2rem)]`}>
                Sua próxima parada tem sabor.
              </h2>
              <p className="mt-4 text-base">Encontre um BK e venha do seu jeito.</p>
            </div>
            <StudyCta brand="o Burger King" className={`${BTN_CREAM} inline-flex w-full sm:w-[230px]`} noteClassName="text-bk-bg/80">
              Encontrar um BK <ArrowRight />
            </StudyCta>
          </div>
        </section>
      </main>

      <StudyFooter
        brand="o Burger King"
        className="bg-bk-bg"
        mutedClassName="text-bk-brown/60"
        logo={<span className={`${HEADING} text-3xl uppercase`}>Burger King</span>}
      />
    </div>
  );
}
