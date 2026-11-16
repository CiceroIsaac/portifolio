"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import breakfast from "@/assets/landing/nescau/nescau-breakfast.png";
import drink from "@/assets/landing/nescau/nescau-drink.png";
import pancakes from "@/assets/landing/nescau/nescau-pancakes.jpg";

/**
 * Seção "Qual é o seu momento?": o visitante escolhe um momento do dia e a
 * sugestão troca com animação. Textos de clima e ocasião apenas — sem
 * receitas com quantidades, benefícios ou dados nutricionais.
 */

interface Moment {
  id: string;
  label: string;
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  /** Foto (cover) ou produto recortado (contain). */
  fit: "cover" | "contain";
  bg: string;
}

const MOMENTS: Moment[] = [
  {
    id: "manha",
    label: "De manhã",
    title: "Começar com energia de play",
    text: "Mesa posta, caneca cheia e o dia entrando no ritmo.",
    image: breakfast,
    alt: "Café da manhã com caneca, ovos mexidos e lata de Nescau",
    fit: "cover",
    bg: "bg-nescau-yellow",
  },
  {
    id: "tarde",
    label: "Na pausa da tarde",
    title: "Uma pausa que vira momento",
    text: "Panquecas, um copo gelado e dez minutos só seus.",
    image: pancakes,
    alt: "Panquecas com mel ao lado de uma lata de Nescau e um copo de achocolatado",
    fit: "cover",
    bg: "bg-[#fde3d6]",
  },
  {
    id: "galera",
    label: "Com a galera",
    title: "Tem para todo mundo",
    text: "Copo na mão, conversa boa e o sabor de sempre no meio da roda.",
    image: drink,
    alt: "Lata de Nescau ao lado de um copo de achocolatado",
    fit: "contain",
    bg: "bg-[#f0d5d2]",
  },
];

export function MomentPicker() {
  const [active, setActive] = useState(0);
  const moment = MOMENTS[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
      {/* Opções: botões com aria-pressed (grupo de escolha única) */}
      <div role="group" aria-label="Escolha um momento" className="flex flex-col gap-3">
        {MOMENTS.map((m, i) => {
          const selected = i === active;
          return (
            <button
              key={m.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(i)}
              className={`group flex items-center justify-between rounded-2xl border-2 px-6 py-5 text-left font-condensed text-xl font-bold uppercase transition-all duration-300 focus-visible:outline-nescau-red lg:text-2xl ${
                selected
                  ? "translate-x-2 border-nescau-red bg-nescau-red text-white shadow-[0_12px_30px_rgba(205,23,43,.3)]"
                  : "border-nescau-ink/15 hover:translate-x-1 hover:border-nescau-red"
              }`}
            >
              {m.label}
              <span
                aria-hidden="true"
                className={`grid size-9 place-items-center rounded-full transition-transform duration-300 ${
                  selected ? "rotate-0 bg-nescau-yellow text-nescau-ink" : "-rotate-45 bg-nescau-red/10 text-nescau-red"
                }`}
              >
                →
              </span>
            </button>
          );
        })}
      </div>

      {/* Resultado: `key` reinicia a animação a cada escolha */}
      <div key={moment.id} aria-live="polite" className={`overflow-hidden rounded-3xl ${moment.bg} motion-safe:animate-pop`}>
        <div className="relative h-64 sm:h-80">
          <Image
            src={moment.image}
            alt={moment.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className={moment.fit === "cover" ? "object-cover" : "object-contain p-6"}
          />
        </div>
        <div className="p-7 lg:p-9">
          <p className="text-xs font-bold tracking-[0.14em] text-nescau-red uppercase">{moment.label}</p>
          <h3 className="mt-3 font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight font-bold uppercase">
            {moment.title}
          </h3>
          <p className="mt-3 text-base lg:text-lg">{moment.text}</p>
        </div>
      </div>
    </div>
  );
}
