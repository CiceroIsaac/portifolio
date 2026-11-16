"use client";

import { useId, useState } from "react";

/**
 * Seção "Qual é a sua intensidade hoje?": um slider de 1 a 5 acende
 * triângulos e muda a cor do painel. Fala do clima do momento — não
 * descreve sabor, picância ou qualquer característica real do produto.
 */

const LEVELS = [
  { name: "Modo sofá", text: "Série pausada, pacote aberto, zero pressa.", bg: "bg-doritos-purple", ink: "text-doritos-black" },
  { name: "Esquentando", text: "Alguém mandou mensagem no grupo. Vai que…", bg: "bg-[#7461c0]", ink: "text-doritos-cream" },
  { name: "Rolê confirmado", text: "Tênis no pé e o plano já saiu do papel.", bg: "bg-doritos-yellow", ink: "text-doritos-black" },
  { name: "Sem roteiro", text: "Ninguém sabe onde termina. Esse é o ponto.", bg: "bg-[#ff7a2e]", ink: "text-doritos-black" },
  { name: "Intensidade máxima", text: "Volume no talo. O óbvio ficou para trás.", bg: "bg-doritos-red", ink: "text-doritos-cream" },
];

export function IntensityMeter() {
  const [level, setLevel] = useState(3);
  const id = useId();
  const current = LEVELS[level - 1];

  return (
    <div className={`relative overflow-hidden p-7 transition-colors duration-500 sm:p-10 lg:p-14 ${current.bg} ${current.ink}`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          {/* `key`: o nome do nível "pula" a cada mudança */}
          <p key={current.name} aria-live="polite" className="font-condensed text-[clamp(2.2rem,5vw,4.5rem)] leading-none font-bold uppercase italic motion-safe:animate-pop">
            {current.name}
          </p>
          <p className="mt-4 max-w-[420px] text-lg">{current.text}</p>
        </div>

        <div>
          {/* Triângulos: acendem até o nível escolhido */}
          <div aria-hidden="true" className="flex items-end justify-between gap-2">
            {LEVELS.map((_, i) => {
              const on = i < level;
              return (
                <svg
                  key={i}
                  viewBox="0 0 100 100"
                  className={`w-[18%] transition-all duration-300 ${on ? "scale-100 opacity-100" : "scale-75 opacity-40"}`}
                  style={{ height: `${44 + i * 14}px`, transitionDelay: `${i * 60}ms` }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 6 96 22 40 96Z"
                    fill={on ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              );
            })}
          </div>

          <label htmlFor={id} className="mt-8 block text-xs font-bold tracking-[0.14em] uppercase">
            Arraste para escolher
          </label>
          <input
            id={id}
            type="range"
            min={1}
            max={LEVELS.length}
            step={1}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            aria-valuetext={`Nível ${level} de ${LEVELS.length}: ${current.name}`}
            className="mt-3 h-11 w-full cursor-pointer accent-doritos-black"
          />
          <div aria-hidden="true" className="mt-1 flex justify-between text-xs font-bold">
            <span>Leve</span>
            <span>No máximo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
