"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** Carrossel "Formação & prática": botões, setas do teclado e barra de progresso. */
export function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ index: 0, progress: 0, atStart: true, atEnd: false });

  /** Largura de um card + espaçamento: o tamanho de um "passo". */
  function slideStep() {
    const track = trackRef.current!;
    const first = track.firstElementChild as HTMLElement;
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
  }

  function moveSlide(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: slideStep() * direction, behavior: prefersReducedMotion() ? "instant" : "smooth" });
  }

  // Atualiza posição, progresso e estado dos botões ao rolar ou redimensionar.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setPosition({
        index: Math.round(track.scrollLeft / slideStep()),
        progress: Math.min(100, ((track.scrollLeft + track.clientWidth) / track.scrollWidth) * 100),
        atStart: track.scrollLeft < 3,
        atEnd: track.scrollLeft >= max - 3,
      });
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="journey section container" id="trajetoria" aria-labelledby="journey-title">
      <div className="section-kicker reveal">
        <span>03 / FORMAÇÃO & PRÁTICA</span>
        <span>CONHECIMENTO APLICADO EM PROJETOS</span>
      </div>
      <div className="section-heading reveal">
        <h2 id="journey-title">
          Aprendizado que
          <br />
          vira <span className="serif">construção.</span>
        </h2>
        <div className="carousel-controls">
          <button id="prev-slide" aria-label="Experiência anterior" disabled={position.atStart} onClick={() => moveSlide(-1)}>
            ←
          </button>
          <button id="next-slide" aria-label="Próxima experiência" disabled={position.atEnd} onClick={() => moveSlide(1)}>
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="journey-track reveal-stagger"
        id="journey-track"
        tabIndex={0}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Formação e prática em desenvolvimento"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            moveSlide(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            moveSlide(-1);
          }
        }}
      >
        <article className="journey-card" aria-label="1 de 4">
          <div className="journey-cover coding">
            <span className="journey-year">FORMAÇÃO TÉCNICA</span>
            <div className="code-sketch" aria-hidden="true">
              <span>const base = {"{"}</span>
              <span>&nbsp; lógica: aprender(),</span>
              <span>&nbsp; sistemas: criar()</span>
              <span>{"};"}</span>
            </div>
            <strong>
              EEEP<span>Desenvolvimento de Sistemas</span>
            </strong>
          </div>
          <div className="journey-content">
            <span className="eyebrow">EEEP ADERSON BORGES DE CARVALHO</span>
            <h3>Uma base para construir</h3>
            <p>
              Formação técnica em Desenvolvimento de Sistemas: o ponto de partida para conectar lógica, programação e
              construção de software.
            </p>
            <span className="journey-foot">
              Técnico em Desenvolvimento de Sistemas <span>↗</span>
            </span>
          </div>
        </article>
        <article className="journey-card" aria-label="2 de 4">
          <div className="journey-cover university">
            <span className="journey-year">EM ANDAMENTO</span>
            <div className="uni-shapes">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <strong>
              UFCA<span>Ciência da Computação</span>
            </strong>
          </div>
          <div className="journey-content">
            <span className="eyebrow">FORMAÇÃO ACADÊMICA</span>
            <h3>Aprender construindo</h3>
            <p>Fundamentos de computação, estruturas de dados e programação orientada a objetos aplicados em projetos.</p>
            <span className="journey-foot">
              Da teoria para a prática <span>↗</span>
            </span>
          </div>
        </article>
        <article className="journey-card" aria-label="3 de 4">
          <div className="journey-cover freelance">
            <span className="journey-year">PRÁTICA PROFISSIONAL</span>
            <div className="freelance-window">
              <span>briefing.md</span>
              <p>
                ideia<span>→</span>design<span>→</span>web
              </p>
            </div>
            <strong>
              Build.<span>Refine. Repeat.</span>
            </strong>
          </div>
          <div className="journey-content">
            <span className="eyebrow">DESENVOLVIMENTO & DESIGN</span>
            <h3>Projetos independentes</h3>
            <p>Prototipagem e desenvolvimento web, com foco em transformar necessidades de negócios em interfaces.</p>
            <span className="journey-foot">
              Conversa, conceito e construção <span>↗</span>
            </span>
          </div>
        </article>
        <article className="journey-card" aria-label="4 de 4">
          <div className="journey-cover technical language-cover">
            <span className="journey-year">INGLÊS / AUTOAVALIAÇÃO</span>
            <div className="language-code" aria-hidden="true">
              hello, world_
            </div>
            <strong>
              80<span>de 100 · em evolução</span>
            </strong>
          </div>
          <div className="journey-content">
            <span className="eyebrow">COMUNICAÇÃO & APRENDIZADO</span>
            <h3>Conexões além do código</h3>
            <p>
              O inglês amplia meu acesso a conhecimento, documentação e conversas sobre tecnologia, design e
              desenvolvimento.
            </p>
            <span className="journey-foot">
              Aprender, comunicar e colaborar <span>↗</span>
            </span>
          </div>
        </article>
      </div>

      <div className="carousel-bottom">
        <span id="carousel-position" aria-live="polite">
          0{position.index + 1} / 04
        </span>
        <span>FORMAÇÃO, CÓDIGO E COLABORAÇÃO</span>
        <div className="progress-line">
          <i id="carousel-progress" style={{ width: `${position.progress}%` }}></i>
        </div>
      </div>
    </section>
  );
}
