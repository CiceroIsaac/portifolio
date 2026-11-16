"use client";

import { useState } from "react";

const EMAIL = "ciceroisaacsc@gmail.com";

/** Seção de contato: e-mail, botão de copiar, GitHub e LinkedIn. */
export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus("E-mail copiado. Até já!");
    } catch {
      // Navegadores sem permissão de área de transferência.
      setCopyStatus(`Selecione e copie: ${EMAIL}`);
    }
  }

  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-top">
          <span className="eyebrow">
            <span className="status-dot"></span> 04 / PRÓXIMA CONVERSA
          </span>
          <span className="contact-code">&lt;let’s-build /&gt;</span>
        </div>
        <div className="contact-main">
          <h2 id="contact-title">
            Uma boa ideia
            <br />
            merece sair
            <br />
            do <span className="serif">rascunho.</span>
          </h2>
          <div className="contact-side">
            <p>Tem um projeto em mente, uma oportunidade ou uma ideia para trocar?</p>
            <a className="contact-cta" href={`mailto:${EMAIL}`}>
              Vamos construir juntos <span>↗</span>
            </a>
            <div className="email-row">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button id="copy-email" aria-label="Copiar endereço de e-mail" title="Copiar e-mail" onClick={copyEmail}>
                ▢
              </button>
            </div>
            <p id="copy-status" className="copy-status" role="status">
              {copyStatus}
            </p>
          </div>
        </div>
        <div className="contact-bottom">
          <span>DO CARIRI PARA QUALQUER LUGAR.</span>
          <div>
            <a href="https://github.com/CiceroIsaac" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/isaac-sousa-a57b7a259/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
