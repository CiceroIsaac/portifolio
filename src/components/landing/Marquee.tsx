interface MarqueeProps {
  /** Frases exibidas em sequência. */
  items: string[];
  /** Separador visual entre as frases. */
  separator?: React.ReactNode;
  className?: string;
  /** Classes de cada frase (fonte, tamanho). */
  itemClassName?: string;
}

/**
 * Faixa de texto rolando continuamente.
 * O conteúdo é renderizado duas vezes e desliza 50%, criando um loop sem
 * emendas. A cópia é `aria-hidden`, então leitores de tela leem uma vez só.
 * Com movimento reduzido a faixa fica parada (motion-safe).
 */
export function Marquee({ items, separator = "•", className = "", itemClassName = "" }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className={`px-6 whitespace-nowrap ${itemClassName}`}>{item}</span>
          <span aria-hidden="true">{separator}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
