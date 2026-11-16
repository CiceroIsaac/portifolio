/** Raio gráfico amarelo, elemento recorrente do conceito Nescau (decorativo). */
export function Bolt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path d="M84 0 30 104h34L40 200 112 78H76L104 0Z" fill="currentColor" />
    </svg>
  );
}
