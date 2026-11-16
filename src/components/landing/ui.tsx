/**
 * Peças pequenas compartilhadas pelas landing pages.
 */

/**
 * Largura do conteúdo: 1280 px úteis no desktop (margens de 80 px em 1440)
 * e margens de 24 px no mobile, como nos designs.
 */
export const WRAP = "mx-auto w-full max-w-[1360px] px-6 md:px-10";

/** Seta "→" usada nos botões e links dos designs. */
export function ArrowRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
