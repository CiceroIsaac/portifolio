import Image from "next/image";
import iexpressImage from "@/assets/portfolio/iexpress.png";
import portraitImage from "@/assets/portfolio/isaac-office.png";

/**
 * Seções sem interatividade própria do portfólio (Server Components).
 * Marcação e classes iguais às da versão original em HTML.
 */

/** Faixa de tecnologias. A ordem começa por TypeScript, JavaScript e NestJS. */
export function StackStrip() {
  return (
    <div className="stack-strip" aria-label="Tecnologias">
      <div className="container stack-inner">
        <span className="stack-label">
          MINHA CAIXA
          <br />
          DE FERRAMENTAS
        </span>
        <span>
          <b className="ts-square">TS</b> TypeScript
        </span>
        <span>
          <b className="ts-square js-square">JS</b> JavaScript
        </span>
        <span>
          <b className="nest-symbol" aria-hidden="true">
            N
          </b>{" "}
          NestJS
        </span>
        <span>
          <svg width="26" height="26" viewBox="0 0 30 30" fill="none" stroke="currentColor" aria-hidden="true">
            <ellipse cx="15" cy="15" rx="13" ry="5" />
            <ellipse cx="15" cy="15" rx="13" ry="5" transform="rotate(60 15 15)" />
            <ellipse cx="15" cy="15" rx="13" ry="5" transform="rotate(120 15 15)" />
            <circle cx="15" cy="15" r="2" fill="currentColor" />
          </svg>{" "}
          React
        </span>
        <span>
          <b className="next-symbol">N</b> Next.js
        </span>
        <span>
          <b>⬡</b> Node.js
        </span>
        <span>
          <b className="figma-mini">◒</b> Figma
        </span>
        <span>
          <b>⑂</b> Git
        </span>
      </div>
    </div>
  );
}

/** Seção UI & Figma: apenas o estudo iExpress, com a prévia local. */
export function FigmaSection() {
  return (
    <section className="figma-section" id="figma" aria-labelledby="figma-title">
      <div className="container figma-layout">
        <div className="figma-copy">
          <span className="eyebrow">
            <span className="figma-symbol" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>{" "}
            DO FIGMA PARA O MUNDO
          </span>
          <h2 id="figma-title">
            Antes do código,
            <br />
            uma boa <span className="serif">ideia.</span>
          </h2>
          <p>
            Também penso no caminho até a tela: hierarquia visual, componentes e fluxos que tornam uma interface mais
            simples de usar.
          </p>
          <div className="design-topics">
            <span>
              01 <b>Direção visual</b>
            </span>
            <span>
              02 <b>Interfaces & componentes</b>
            </span>
            <span>
              03 <b>Prototipagem</b>
            </span>
          </div>
          {/* `data-project` é tratado pelo componente Projects (abre o diálogo). */}
          <button className="button light" data-project="iexpress">
            Explorar o estudo iExpress <span>↗</span>
          </button>
          <p className="figma-note">Conceito de interface · marca fictícia · sem vínculo comercial</p>
        </div>
        <div className="figma-board">
          <div className="board-toolbar">
            <span>⌘ &nbsp; iExpress / Interface study</span>
            <span>Design &nbsp; ◉</span>
          </div>
          <div className="board-canvas">
            <div className="design-selection">
              <div className="selection-name">Home / Desktop</div>
              <Image
                src={iexpressImage}
                alt="Estudo visual iExpress no Figma: início da landing page de uma marca fictícia de iPhones"
              />
              <span className="handle tl"></span>
              <span className="handle tr"></span>
              <span className="handle bl"></span>
              <span className="handle br"></span>
            </div>
            <span className="canvas-cursor">
              ↖ <b>Isaac</b>
            </span>
            <div className="palette">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <span>UI EXPLORATION</span>
            </div>
          </div>
          <div className="board-bottom">
            <span>FRAME 01 — LANDING PAGE</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Sobre: foto local (tratamento P&B no CSS), formação e inglês 80/100. */
export function About() {
  return (
    <section className="about section container" id="sobre" aria-labelledby="about-title">
      <div className="section-kicker">
        <span>02 / QUEM ESTÁ POR TRÁS</span>
        <span>&lt;ABOUT /&gt;</span>
      </div>
      <div className="about-grid">
        <div className="portrait-card">
          <Image src={portraitImage} alt="Retrato de Cícero Isaac em preto e branco, com fundo de escritório" />
          <div className="portrait-grid"></div>
          <div className="portrait-caption">
            <span>CÍCERO ISAAC</span>
            <span>DEV. DESIGN. CURIOSIDADE.</span>
          </div>
          <div className="portrait-sticker">
            Feito no
            <br />
            <b>Cariri ↗</b>
          </div>
        </div>
        <div className="about-copy">
          <h2 id="about-title">
            Prazer, Isaac<span className="lime">.</span>
            <br />
            Movido a <span className="serif">possibilidades.</span>
          </h2>
          <p className="lead">
            Gosto de entender como as coisas funcionam.
            <br />E de imaginar como poderiam funcionar melhor.
          </p>
          <p>
            Sou graduando em Ciência da Computação na UFCA e técnico em Desenvolvimento de Sistemas pela EEEP Aderson
            Borges de Carvalho. Comecei a desenvolver aos 15 anos e sigo conectando o que aprendo com projetos que posso
            colocar no mundo.
          </p>
          <p>
            Meu interesse está no encontro entre desenvolvimento web e design de interfaces. Do protótipo à implementação,
            busco clareza, consistência e atenção aos detalhes.
          </p>
          <div className="about-facts">
            <div>
              <small>FORMAÇÃO</small>
              <b>Ciência da Computação</b>
              <span>UFCA · em andamento</span>
            </div>
            <div>
              <small>BASE TÉCNICA</small>
              <b>Técnico em Desenvolvimento de Sistemas</b>
              <span>EEEP Aderson Borges de Carvalho</span>
            </div>
          </div>
          <section className="language-card" aria-labelledby="language-title">
            <div className="language-card-heading">
              <div>
                <span className="eyebrow">COMUNICAÇÃO & COLABORAÇÃO</span>
                <h3 id="language-title">
                  <span aria-hidden="true">EN</span> Inglês
                </h3>
              </div>
              <strong>
                80<span>/100</span>
              </strong>
            </div>
            <meter
              className="language-meter"
              min={0}
              max={100}
              value={80}
              aria-label="Inglês: autoavaliação de 80 em 100"
            >
              80 de 100
            </meter>
            <p>Mais possibilidades para aprender, trocar ideias e colaborar em projetos.</p>
            <small>Autoavaliação · nível informado por mim</small>
          </section>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/isaac-sousa-a57b7a259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mais sobre minha trajetória <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/** Caixa de ferramentas: desenvolvimento e design. */
export function Toolbox() {
  const dev = ["TypeScript", "JavaScript", "NestJS", "React", "Next.js", "Node.js", "Java"];
  const design = ["Figma", "UI Design", "Prototipagem", "Git / GitHub"];
  return (
    <section className="toolbox container" aria-labelledby="toolbox-title">
      <div className="toolbox-intro">
        <span className="eyebrow">O QUE EU CONECTO</span>
        <h2 id="toolbox-title">
          Da estrutura
          <br /> ao detalhe<span className="lime">.</span>
        </h2>
      </div>
      <div className="toolbox-column">
        <span className="toolbox-icon">&lt;/&gt;</span>
        <h3>Desenvolvimento</h3>
        <p>Interfaces web e lógica de aplicação.</p>
        <div className="tags">
          {dev.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="toolbox-column">
        <span className="toolbox-icon">⌘</span>
        <h3>Design & processo</h3>
        <p>Do primeiro fluxo à versão utilizável.</p>
        <div className="tags">
          {design.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Rodapé do portfólio. */
export function Footer() {
  return (
    <footer className="footer container">
      <a className="brand" href="#inicio">
        <span className="brand-symbol">{"{i}"}</span> isaac<span className="brand-dot">.</span>
      </a>
      <span>© 2026 Cícero Isaac · Código com intenção.</span>
      <a href="#inicio">Voltar ao topo ↑</a>
    </footer>
  );
}
