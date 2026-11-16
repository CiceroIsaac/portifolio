"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { REDUCED_MOTION_QUERY } from "@/lib/motion";

/**
 * Hero aprovada do portfólio. A marcação e as classes são as mesmas da versão
 * original em HTML; a aparência vem de `hero-typing.css`, que não foi alterado.
 */

/** Linhas escritas e apagadas, uma de cada vez, no editor ilustrativo. */
const LINES = [
  "const ideia = await imaginar();",
  "const tela = desenhar(ideia);",
  "const produto = desenvolver();",
  "return publicar(produto);",
];

/** Tempos da animação (ms), idênticos aos da versão original. */
const DELAY = {
  start: 850, // primeira letra após carregar
  type: 65, // cada letra escrita
  hold: 1500, // pausa com a linha completa
  erase: 30, // cada letra apagada
  nextLine: 350, // troca de linha
  resume: 100, // retomada pelo botão
  motionResume: 700, // retomada ao desligar "movimento reduzido"
  visible: 400, // retomada ao voltar para a aba
};

interface TypingState {
  line: number;
  character: number;
  deleting: boolean;
  /** Espera antes do próximo passo. */
  delay: number;
}

/** Calcula o próximo passo da digitação (escrever, segurar, apagar, trocar linha). */
function nextStep(s: TypingState): TypingState {
  const text = LINES[s.line];
  if (!s.deleting) {
    if (s.character < text.length) return { ...s, character: s.character + 1, delay: DELAY.type };
    return { ...s, deleting: true, delay: DELAY.hold };
  }
  if (s.character > 0) return { ...s, character: s.character - 1, delay: DELAY.erase };
  return { line: (s.line + 1) % LINES.length, character: 0, deleting: false, delay: DELAY.nextLine };
}

/** Assina mudanças da preferência "movimento reduzido" do sistema. */
function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
/** `true` só no navegador (depois da hidratação); `false` no HTML gerado. */
const noopSubscribe = () => () => {};

export function Hero() {
  const [typing, setTyping] = useState<TypingState>({ line: 0, character: 0, deleting: false, delay: DELAY.start });
  // Escolha manual do botão; `null` = seguir a preferência do sistema.
  const [manualPause, setManualPause] = useState<boolean | null>(null);
  const [hidden, setHidden] = useState(false);

  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, () => false);
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const paused = manualPause ?? reducedMotion;
  // Pausado pelo sistema: a linha aparece completa, sem animação.
  const pausedBySystem = manualPause === null && reducedMotion;

  // Mudança da preferência durante a visita: volta a segui-la.
  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      setManualPause(null);
      setTyping((s) =>
        event.matches
          ? { ...s, deleting: false, character: LINES[s.line].length }
          : { ...s, delay: DELAY.motionResume }
      );
    };
    // Aba oculta: interrompe a animação; ao voltar, retoma.
    const onVisibility = () => {
      setHidden(document.hidden);
      if (!document.hidden) setTyping((s) => ({ ...s, delay: DELAY.visible }));
    };
    query.addEventListener("change", onChange);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      query.removeEventListener("change", onChange);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Agenda o próximo passo sempre que o estado muda.
  useEffect(() => {
    if (!hydrated || paused || hidden) return;
    const timer = setTimeout(() => setTyping(nextStep), typing.delay);
    return () => clearTimeout(timer);
  }, [typing, paused, hidden, hydrated]);

  function togglePause() {
    // Saindo da pausa do sistema: continua a partir da linha completa.
    if (pausedBySystem) setTyping((s) => ({ ...s, character: LINES[s.line].length, deleting: false }));
    setManualPause(!paused);
    setTyping((s) => ({ ...s, delay: DELAY.resume }));
  }

  // Antes do JavaScript, ou com movimento reduzido, a linha aparece completa.
  const visibleCharacters = !hydrated || pausedBySystem ? LINES[typing.line].length : typing.character;

  // Texto de estado exibido na barra inferior do editor.
  const holding = typing.deleting && typing.character === LINES[typing.line].length;
  const stateLabel = paused ? "PAUSADO" : holding ? "PRÓXIMA IDEIA" : typing.deleting ? "APAGANDO" : "ESCREVENDO";

  return (
    <section className="hero container" id="inicio" aria-labelledby="hero-title">
      <div className="hero-top">
        <span className="eyebrow">
          <span className="status-dot"></span> CÍCERO ISAAC · DESENVOLVEDOR & DESIGNER
        </span>
        <span className="edition">PORTFÓLIO / VOL. 01 — 2026</span>
      </div>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="code-comment">{"// do primeiro rascunho ao último commit"}</p>
          <h1 id="hero-title">
            Código com
            <br />
            <span className="intent">intenção.</span>
            <br />
            <span className="hero-accent">
              Design com
              <br />
              personalidade.
            </span>
          </h1>
          <p className="hero-description">
            Sou Isaac. Conecto desenvolvimento e design para transformar ideias em experiências digitais que fazem sentido.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Explorar projetos <span>↘</span>
            </a>
            <a className="text-link" href="https://github.com/CiceroIsaac" target="_blank" rel="noopener noreferrer">
              Meu GitHub <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Editor plano com linhas de código sendo escritas e apagadas">
          <div className="art-label">
            <span>WORKSPACE / ISAAC</span>
            <span>IDEIA → CÓDIGO</span>
          </div>
          <div className={`typing-editor${paused ? " is-paused" : ""}`}>
            <div className="typing-tabs">
              <span className="typing-tab">
                <b>TS</b> ideas.ts
              </span>
              <span className="typing-tab-muted">README.md</span>
              <span className="typing-dots" aria-hidden="true">
                ···
              </span>
            </div>
            <div className="typing-body" aria-hidden="true">
              <div className="typing-row">
                <span className="line-number">01</span>
                <code className="typing-comment">{"// criatividade em execução"}</code>
              </div>
              <div className="typing-row">
                <span className="line-number">02</span>
                <code>
                  <span className="syntax-blue">async function</span> construir() {"{"}
                </code>
              </div>
              <div className="typing-row typing-current">
                <span className="line-number">03</span>
                <code>
                  {"  "}
                  <span id="typing-code">{LINES[typing.line].slice(0, visibleCharacters)}</span>
                  <span className="typing-caret"></span>
                </code>
              </div>
              <div className="typing-row">
                <span className="line-number">04</span>
                <code>{"}"}</code>
              </div>
              <div className="typing-row typing-empty">
                <span className="line-number">05</span>
              </div>
            </div>
            <p className="sr-only">
              Animação ilustrativa de código: imaginar uma ideia, desenhar uma interface, desenvolver e publicar. O texto é
              escrito e apagado em sequência.
            </p>
            <div className="typing-status">
              <span>
                <span className="tiny-dot"></span> main
              </span>
              <span id="typing-state" aria-hidden="true">
                {stateLabel}
              </span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="typing-footer">
            <div className="typing-steps" aria-hidden="true">
              {LINES.map((_, index) => (
                <i key={index} className={index === typing.line ? "active" : undefined}></i>
              ))}
              <span id="typing-step-label">0{typing.line + 1} / 04</span>
            </div>
            <button id="typing-toggle" aria-pressed={paused} onClick={togglePause}>
              {paused ? (
                <>
                  Reproduzir animação <span aria-hidden="true">▷</span>
                </>
              ) : (
                <>
                  Pausar animação <span aria-hidden="true">Ⅱ</span>
                </>
              )}
            </button>
          </div>
          <div className="typing-caption">
            <span className="caption-mark" aria-hidden="true">
              &gt;_
            </span>
            <p>
              Da ideia à interface.
              <br />
              <b>Uma linha de cada vez.</b>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          <span className="location-cross">⌖</span> JUAZEIRO DO NORTE, CE · BRASIL
        </span>
        <a href="#projetos">
          ROLE PARA DESCOBRIR <span>↓</span>
        </a>
      </div>
    </section>
  );
}
