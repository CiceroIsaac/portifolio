"use client";

import { useEffect } from "react";

/** Chave na sessionStorage: a abertura toca uma vez por sessão. */
const SEEN_KEY = "isaac-intro-vista";

/**
 * Script executado no <head>, antes da primeira pintura, para decidir se a
 * abertura toca (evita a página "piscar" antes dela). Não toca quando:
 * - já foi vista nesta sessão;
 * - o visitante prefere movimento reduzido;
 * - a URL aponta para uma seção (#projetos, #contato...).
 * Há um limite de segurança: a classe sai sozinha após 4 s.
 */
export const INTRO_SCRIPT = `(function(){try{
var d=document.documentElement;
if(sessionStorage.getItem("${SEEN_KEY}")||location.hash||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
d.classList.add("intro-playing");
setTimeout(function(){d.classList.remove("intro-playing","intro-skipping")},4000);
}catch(e){}})();`;

/**
 * Abertura do portfólio: selo {i}, "isaac." e a tela subindo.
 * O visual e o tempo ficam em styles/portfolio/intro.css; este componente
 * só encerra a abertura (fim da animação, botão "Pular" ou Escape).
 */
export function Intro() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("intro-playing")) return;

    const intro = document.querySelector<HTMLElement>(".intro");
    const finish = () => {
      root.classList.remove("intro-playing", "intro-skipping");
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // sessionStorage indisponível (modo privado): a abertura pode repetir.
      }
    };
    // A abertura termina quando a animação de saída da tela acaba.
    const onEnd = (event: AnimationEvent) => {
      if (event.target === intro && event.animationName === "intro-exit") finish();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") root.classList.add("intro-skipping");
    };
    intro?.addEventListener("animationend", onEnd);
    document.addEventListener("keydown", onKey);
    return () => {
      intro?.removeEventListener("animationend", onEnd);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/* Visual decorativo: leitores de tela vão direto ao conteúdo. */}
      <div className="intro" aria-hidden="true">
        <div className="intro-logo">
          <span className="intro-badge">
            <span>
              <span className="intro-brace-l">{"{"}</span>
              <span className="intro-i">i</span>
              <span className="intro-brace-r">{"}"}</span>
            </span>
          </span>
          <span className="intro-word">
            <span className="intro-name">isaac</span>
            <span className="intro-dot">.</span>
          </span>
        </div>
        <p className="intro-caption">Código &amp; design</p>
        <span className="intro-bar" />
      </div>
      <button
        type="button"
        className="intro-skip"
        onClick={() => document.documentElement.classList.add("intro-skipping")}
      >
        Pular intro <span aria-hidden="true">→</span>
      </button>
    </>
  );
}
