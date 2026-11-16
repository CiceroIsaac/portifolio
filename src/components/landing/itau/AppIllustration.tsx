import Image from "next/image";
import logo from "@/assets/landing/itau/itau-logo.png";
import { CardIcon, CheckCircleIcon, PhoneIcon } from "./icons";

/**
 * Ilustração da hero: círculo pêssego, celular com uma interface conceitual
 * e um cartão ilustrativo inclinado.
 *
 * Tudo é medido em `cqw` (1% da largura do container), então a composição
 * mantém as proporções do design em qualquer largura de tela.
 * É decorativa para leitores de tela: a legenda descreve o conteúdo.
 */
export function AppIllustration() {
  return (
    <figure className="relative mx-auto w-full max-w-[620px]">
      <div className="@container relative aspect-square" aria-hidden="true">
        {/* Círculo de fundo + traço laranja */}
        <div className="absolute inset-0 rounded-full bg-itau-peach" />
        <svg viewBox="0 0 620 620" className="absolute inset-0 size-full overflow-visible" fill="none">
          <path d="M175 24 A318 318 0 0 0 -6 380" stroke="#ec7000" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* Celular */}
        <div className="absolute top-[12.6%] left-[27.7%] flex h-[90%] w-[45%] flex-col overflow-hidden rounded-[7cqw] border-[1cqw] border-itau-ink bg-white">
          <div className="mx-auto mt-[2.2cqw] h-[3.6cqw] w-[14cqw] rounded-full bg-itau-ink" />
          <div className="mt-[3.4cqw] bg-itau-orange px-[3.6cqw] py-[4cqw] text-white">
            <p className="text-[2.1cqw] font-bold">Olá, seu próximo passo.</p>
            <p className="mt-[2.4cqw] text-[4cqw] font-medium leading-none">Meu dia a dia</p>
            <p className="mt-[2.6cqw] text-[1.9cqw]">Tudo em um só lugar</p>
          </div>
          <div className="flex justify-between px-[3.3cqw] pt-[3cqw]">
            {[
              { label: "Cartões", Icon: CardIcon },
              { label: "Pix", Icon: CheckCircleIcon },
              { label: "Pagar", Icon: PhoneIcon },
            ].map(({ label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-[1.4cqw]">
                <span className="grid size-[9.2cqw] place-items-center rounded-full bg-[#fcecdc] text-itau-orange">
                  <Icon className="size-[4cqw]" />
                </span>
                <span className="text-[1.6cqw] text-itau-ink">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-[4cqw] px-[3.3cqw] text-[2.4cqw] font-bold text-itau-ink">Seus planos, mais perto</p>
          <div className="mx-[3.3cqw] mt-[3cqw] rounded-[2cqw] bg-[#eee6da] px-[3.6cqw] py-[3.4cqw]">
            <p className="text-[1.9cqw] font-bold text-itau-ink">Um novo começo</p>
            <p className="mt-[1.4cqw] text-[1.6cqw] text-itau-ink/70">Explore possibilidades</p>
          </div>
          <div className="mx-auto mt-auto mb-[4.4cqw] h-[0.5cqw] w-[13cqw] rounded-full bg-itau-ink" />
        </div>

        {/* Cartão ilustrativo inclinado */}
        <div className="absolute top-[57%] left-[0.5%] aspect-[1.62] w-[44%] -rotate-12 rounded-[2.6cqw] bg-itau-ink p-[3.6cqw] text-white shadow-[0_2cqw_4cqw_rgba(23,50,77,.25)]">
          <Image src={logo} alt="" className="size-[7.4cqw] rounded-[1.4cqw]" />
          <p className="mt-[3.2cqw] text-[3.3cqw] font-medium">Seu mundo</p>
          <p className="mt-[1.6cqw] text-[1.45cqw] tracking-[0.14em] text-white/60">CARTÃO ILUSTRATIVO</p>
          <span className="absolute top-[47%] right-[9%] flex">
            <span className="size-[4.8cqw] rounded-full bg-itau-orange" />
            <span className="-ml-[2cqw] size-[4.8cqw] rounded-full bg-[#ffa63d]/90" />
          </span>
        </div>
      </div>
      <figcaption className="mx-auto mt-4 w-fit rounded-full bg-white px-6 py-1.5 text-[11px] font-bold tracking-[0.08em] text-itau-ink uppercase">
        Interface conceitual
      </figcaption>
    </figure>
  );
}
