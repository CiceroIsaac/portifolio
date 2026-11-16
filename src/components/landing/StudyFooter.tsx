import { WRAP } from "./ui";

interface StudyFooterProps {
  /** Nome da marca, usado no aviso de estudo (ex.: "o Itaú"). */
  brand: string;
  /** Wordmark/logo exibido à esquerda. */
  logo: React.ReactNode;
  className?: string;
  /** Classe do texto secundário (cor discreta de cada marca). */
  mutedClassName?: string;
}

/**
 * Rodapé comum das landing pages.
 * Traz, sempre em destaque, o aviso de que a página foi desenvolvida
 * somente para estudo (sem vínculo com a marca) e o caminho de volta
 * ao portfólio.
 */
export function StudyFooter({ brand, logo, className = "", mutedClassName = "opacity-70" }: StudyFooterProps) {
  return (
    <footer className={className}>
      <div className={`${WRAP} py-10`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>{logo}</div>
          <div className="flex flex-col gap-1 sm:items-end sm:text-right">
            <p className="text-sm">Conceito por Cícero Isaac</p>
            {/* Link relativo: funciona em qualquer endereço onde o site for publicado. */}
            <a href="../../" className="inline-block py-2 text-sm font-bold underline underline-offset-4">
              ← Voltar ao portfólio
            </a>
          </div>
        </div>

        {/* Aviso de estudo: visível e em destaque em todas as landing pages */}
        <aside
          aria-label="Aviso sobre esta página"
          className="mt-8 flex items-start gap-3 rounded-2xl border border-current/20 px-5 py-4 text-sm leading-relaxed"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M12 11v6M12 7.5v.01" strokeLinecap="round" />
          </svg>
          <p>
            <strong className="font-bold">Projeto de estudo.</strong>{" "}
            <span className={mutedClassName}>
              Página desenvolvida somente para fins de estudo e portfólio, sem vínculo, contratação ou parceria com{" "}
              {brand}. Nenhuma oferta, produto ou serviço real é apresentado.
            </span>
          </p>
        </aside>
      </div>
    </footer>
  );
}
