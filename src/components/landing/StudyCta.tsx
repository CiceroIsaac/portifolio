"use client";

import { useId, useState } from "react";

interface StudyCtaProps {
  /** Texto do botão, como no design (ex.: "Conhecer o Itaú"). */
  children: React.ReactNode;
  brand: string;
  className?: string;
  /** Classes da mensagem exibida após o clique. */
  noteClassName?: string;
}

/**
 * CTA final das landing pages.
 * No design ele levaria a um destino oficial da marca, que um estudo de
 * portfólio não pode oferecer. Em vez de um link vazio (href="#") ou de um
 * endereço inventado, o botão revela uma nota explicando o conceito.
 */
export function StudyCta({ children, brand, className = "", noteClassName = "" }: StudyCtaProps) {
  const [shown, setShown] = useState(false);
  const noteId = useId();

  return (
    <div className="flex flex-col items-start gap-3 sm:items-end">
      <button
        type="button"
        aria-expanded={shown}
        aria-controls={noteId}
        onClick={() => setShown((s) => !s)}
        className={className}
      >
        {children}
      </button>
      <p id={noteId} role="status" className={`max-w-sm text-sm sm:text-right ${noteClassName}`}>
        {shown &&
          `Esta é uma página conceitual de portfólio, sem vínculo com ${brand}. Para produtos e serviços reais, procure os canais oficiais da marca.`}
      </p>
    </div>
  );
}
