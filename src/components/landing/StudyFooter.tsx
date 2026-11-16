import { WRAP } from "./ui";

interface StudyFooterProps {
  /** Nome da marca, usado no aviso para leitores de tela. */
  brand: string;
  /** Wordmark/logo exibido à esquerda. */
  logo: React.ReactNode;
  className?: string;
  /** Classe do texto secundário (cor discreta de cada marca). */
  mutedClassName?: string;
}

/**
 * Rodapé comum: identifica a página como estudo de portfólio não oficial
 * e oferece o caminho de volta ao portfólio.
 */
export function StudyFooter({ brand, logo, className = "", mutedClassName = "opacity-70" }: StudyFooterProps) {
  return (
    <footer className={className}>
      <div className={`${WRAP} flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between`}>
        <div>{logo}</div>
        <div className="flex flex-col gap-2 sm:items-end sm:text-right">
          <p className="text-sm">Conceito por Cícero Isaac</p>
          <p className={`text-[11px] tracking-[0.12em] uppercase ${mutedClassName}`}>
            Estudo de portfólio · não oficial
            <span className="sr-only">
              . Página conceitual sem vínculo, contratação ou parceria com {brand}. Nenhuma oferta ou serviço real é
              apresentado.
            </span>
          </p>
          {/* Link relativo: funciona em qualquer endereço onde o site for publicado. */}
          <a href="../../" className="inline-block py-2 text-sm underline underline-offset-4">
            ← Voltar ao portfólio
          </a>
        </div>
      </div>
    </footer>
  );
}
