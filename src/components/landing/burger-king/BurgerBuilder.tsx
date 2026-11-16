"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import bun from "@/assets/landing/burger-king/bk-bun.png";
import lettuce from "@/assets/landing/burger-king/bk-lettuce.png";
import meat from "@/assets/landing/burger-king/bk-meat.png";
import tomato from "@/assets/landing/burger-king/bk-tomato.png";

/**
 * Seção "Monte o seu": brincadeira visual de montar o sanduíche.
 * Cada ingrediente adicionado "cai" na pilha (animação drop).
 * Não é um pedido: sem preços, carrinho ou envio de dados.
 */

interface Ingredient {
  id: string;
  name: string;
  image: StaticImageData;
}

const INGREDIENTS: Ingredient[] = [
  { id: "carne", name: "Carne grelhada", image: meat },
  { id: "alface", name: "Alface", image: lettuce },
  { id: "tomate", name: "Tomate", image: tomato },
];

/** Altura da "fatia" na pilha e largura da imagem de cada ingrediente. */
const LAYER: Record<string, { height: string; width: string }> = {
  carne: { height: "h-9", width: "w-56" },
  alface: { height: "h-8", width: "w-40" },
  tomate: { height: "h-7", width: "w-48" },
};

/** Limite para a pilha caber na tela. */
const MAX_LAYERS = 7;
/** Montagem inicial: um clássico. */
const START = ["carne", "alface", "tomate"];

export function BurgerBuilder() {
  const [layers, setLayers] = useState<string[]>(START);
  const full = layers.length >= MAX_LAYERS;
  const names = layers.map((id) => INGREDIENTS.find((i) => i.id === id)!.name.toLowerCase());

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Pilha: cresce de baixo para cima, entre os dois pães */}
      <div aria-hidden="true" className="flex h-[400px] flex-col-reverse items-center justify-start overflow-hidden rounded-3xl bg-[#ead6bb] pb-12 sm:h-[460px]">
        {/* Pão de baixo (forma em CSS) */}
        <div className="relative z-0 h-10 w-52 rounded-t-xl rounded-b-[45%] bg-[#e89a4f] shadow-[inset_0_-6px_0_rgba(0,0,0,.08)] sm:w-60" />
        {layers.map((id, index) => {
          const ingredient = INGREDIENTS.find((i) => i.id === id)!;
          return (
            // Cada camada é uma "fatia" de altura fixa; a imagem (quadrada, com
            // margens vazias) fica centralizada e transborda sobre a vizinha.
            // `key` com índice + id: só a camada nova anima ao entrar.
            <div key={`${index}-${id}`} className={`relative w-full ${LAYER[id].height}`}>
              <Image
                src={ingredient.image}
                alt=""
                className={`absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 ${LAYER[id].width} motion-safe:animate-drop`}
              />
            </div>
          );
        })}
        {/* Pão de cima: cai de novo sempre que a pilha muda */}
        <div key={`topo-${layers.length}`} className="relative h-20 w-full">
          <Image src={bun} alt="" className="absolute bottom-[-56px] left-1/2 w-60 max-w-none -translate-x-1/2 motion-safe:animate-drop sm:w-64" />
        </div>
      </div>

      <div>
        <p className="text-base lg:text-lg">Escolha as camadas e veja seu sanduíche ganhar altura.</p>
        <div role="group" aria-label="Adicionar ingrediente" className="mt-6 flex flex-wrap gap-3">
          {INGREDIENTS.map((ing) => (
            <button
              key={ing.id}
              type="button"
              disabled={full}
              onClick={() => setLayers((l) => [...l, ing.id])}
              className="group flex items-center gap-3 rounded-full border-2 border-bk-brown/20 bg-white py-2 pr-5 pl-2 font-bold transition-all duration-200 hover:-translate-y-0.5 hover:border-bk-red focus-visible:outline-bk-red disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span className="grid size-10 place-items-center rounded-full bg-bk-bg transition-transform duration-300 group-hover:rotate-12">
                <Image src={ing.image} alt="" className="w-8" />
              </span>
              + {ing.name}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
          <button
            type="button"
            onClick={() => setLayers((l) => l.slice(0, -1))}
            disabled={layers.length === 0}
            className="rounded-full px-4 py-2.5 underline underline-offset-4 hover:text-bk-red disabled:opacity-40"
          >
            Desfazer
          </button>
          <button
            type="button"
            onClick={() => setLayers(START)}
            className="rounded-full px-4 py-2.5 underline underline-offset-4 hover:text-bk-red"
          >
            Recomeçar
          </button>
        </div>
        {/* Resumo lido por leitores de tela a cada mudança */}
        <p role="status" className="mt-6 rounded-2xl bg-white/70 p-5 text-[15px]">
          <strong className="font-bookman">Seu sanduíche:</strong> pão
          {names.length > 0 && `, ${names.join(", ")}`} e pão.
          {full && " Chegou ao limite de camadas!"}
        </p>
        <p className="mt-3 text-xs text-bk-brown/60">Brincadeira visual: não é um pedido nem um item do cardápio.</p>
      </div>
    </div>
  );
}
