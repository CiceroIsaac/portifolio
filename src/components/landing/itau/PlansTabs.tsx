"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { CheckCircleIcon } from "./icons";

/**
 * Seção "Seus planos no app": abas com objetivos ilustrativos.
 * Cada objetivo mostra etapas e uma barra de progresso animada.
 * Simulação visual — sem valores, contas ou dados financeiros.
 */

const STEPS = ["Definir o objetivo", "Organizar as etapas", "Acompanhar no app", "Realizar"];

const PLANS = [
  { id: "viagem", label: "Viagem", title: "Aquela viagem", text: "Do destino escolhido à mala pronta, cada etapa no seu tempo.", done: 2 },
  { id: "casa", label: "Casa nova", title: "Um canto seu", text: "Planeje a mudança com calma e veja o caminho até a porta de casa.", done: 1 },
  { id: "estudos", label: "Estudos", title: "Um novo curso", text: "Organize o próximo passo da sua formação, sem perder o ritmo.", done: 3 },
];

export function PlansTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const plan = PLANS[active];
  const progress = (plan.done / STEPS.length) * 100;

  /** Setas, Home e End movem entre as abas (padrão WAI-ARIA de tabs). */
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const last = PLANS.length - 1;
    const next =
      event.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : event.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
      <div>
        <div role="tablist" aria-label="Objetivos de exemplo" className="inline-flex flex-wrap gap-2 rounded-full bg-itau-soft p-1.5">
          {PLANS.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              role="tab"
              id={`${baseId}-tab-${p.id}`}
              aria-selected={i === active}
              aria-controls={`${baseId}-panel`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300 focus-visible:outline-itau-orange ${
                i === active ? "bg-itau-ink text-white" : "text-itau-ink hover:bg-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <p className="mt-6 max-w-[420px] text-base leading-relaxed text-itau-ink/70 lg:text-lg">
          Escolha um objetivo e veja como ele pode ganhar forma, etapa por etapa.
        </p>
        <p className="mt-4 text-xs text-itau-ink/50">Simulação visual: sem valores, contas ou dados reais.</p>
      </div>

      {/* `key` reinicia as animações de entrada ao trocar de aba. */}
      <div
        key={plan.id}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${plan.id}`}
        className="rounded-3xl bg-white p-7 shadow-[0_20px_50px_rgba(23,50,77,.08)] motion-safe:animate-hero-in lg:p-10"
      >
        <p className="text-xs font-bold tracking-[0.14em] text-itau-orange uppercase">Meu objetivo</p>
        <h3 className="mt-3 text-[26px] font-bold lg:text-[32px]">{plan.title}</h3>
        <p className="mt-2 text-itau-ink/70">{plan.text}</p>

        <div className="mt-8 flex items-center justify-between text-sm font-bold">
          <span>Progresso</span>
          <span>
            Etapa {plan.done} de {STEPS.length}
          </span>
        </div>
        <div
          role="progressbar"
          aria-label={`Progresso de ${plan.title}`}
          aria-valuemin={0}
          aria-valuemax={STEPS.length}
          aria-valuenow={plan.done}
          className="mt-3 h-3 overflow-hidden rounded-full bg-itau-soft"
        >
          {/* Barra cresce do zero até o progresso da etapa. */}
          <div
            className="h-full origin-left rounded-full bg-itau-orange motion-safe:animate-grow"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ol className="mt-8 space-y-4">
          {STEPS.map((step, i) => {
            const done = i < plan.done;
            return (
              <li
                key={step}
                className="flex items-center gap-3 motion-safe:animate-hero-in"
                style={{ animationDelay: `${150 + i * 110}ms` }}
              >
                {done ? (
                  <CheckCircleIcon className="size-6 shrink-0 text-itau-orange" />
                ) : (
                  <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-itau-ink/20" />
                )}
                <span className={done ? "font-bold" : "text-itau-ink/60"}>{step}</span>
                <span className="sr-only">{done ? "(concluída)" : "(pendente)"}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
