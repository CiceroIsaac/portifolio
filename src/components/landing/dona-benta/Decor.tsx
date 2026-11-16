import { useId } from "react";

/**
 * Peças decorativas da página da Dona Benta (todas aria-hidden).
 */

/**
 * Padrão de azulejo, inspirado na estampa da embalagem da farinha.
 * Preenche o elemento pai (que precisa ser `relative`).
 */
export function TilePattern({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg aria-hidden="true" className={`pointer-events-none absolute inset-0 size-full ${className}`}>
      <defs>
        <pattern id={id} width="64" height="64" patternUnits="userSpaceOnUse">
          {/* Flor de quatro pétalas + cantos de losango */}
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M32 18c5 6 5 10 0 14-5-4-5-8 0-14ZM32 46c-5-6-5-10 0-14 5 4 5 8 0 14ZM18 32c6-5 10-5 14 0-4 5-8 5-14 0ZM46 32c-6 5-10 5-14 0 4-5 8-5 14 0Z" />
            <path d="M0 8 8 0M56 0l8 8M64 56l-8 8M8 64 0 56" />
          </g>
          <circle cx="32" cy="32" r="2.2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Borda recortada (festonê), como o selo do logotipo.
 * `color` é a cor da seção de cima, que "escorre" sobre a de baixo.
 */
export function ScallopEdge({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative z-10 h-4 w-full ${flip ? "rotate-180" : ""}`}
      style={{
        background: `radial-gradient(circle at 16px 0, ${color} 15.5px, transparent 16px) 0 0 / 32px 16px repeat-x`,
      }}
    />
  );
}

/** Selo amarelo em forma de estrela/flor, com texto ao centro. */
export function Sticker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 size-full text-benta-yellow drop-shadow-[0_8px_16px_rgba(23,43,90,.2)]">
        {/* Estrela de 12 pontas arredondada */}
        <path
          fill="currentColor"
          d="M50 2l8.3 11.4 13.6-4.3.6 14.2 13.3 5-6 12.9 9.2 10.8-12.4 6.9 1.7 14.1-14.1-1.6-6.9 12.4L47.5 85l-12.9 6-5-13.3-14.2-.6 4.3-13.6L8.3 55.2 15.2 42.8 5 30.6l13.3-5 .6-14.2 13.6 4.3Z"
        />
      </svg>
      <span className="relative text-center text-[11px] leading-tight font-bold tracking-[0.06em] text-benta-navy uppercase">
        {children}
      </span>
    </div>
  );
}
