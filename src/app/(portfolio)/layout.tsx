import type { Metadata, Viewport } from "next";

// CSS original do portfólio, na mesma ordem da versão em HTML.
// Ele NÃO usa Tailwind de propósito: o reset (preflight) e alguns utilitários
// do Tailwind (ex.: `.container`, `.outline`) mudariam a aparência aprovada.
import "@/styles/portfolio/style.css";
import "@/styles/portfolio/theme-light.css";
import "@/styles/portfolio/hero-typing.css";
// Animações de entrada e detalhes em movimento (não afeta a hero).
import "@/styles/portfolio/motion.css";

export const metadata: Metadata = {
  title: "Isaac — Código & Design",
  description:
    "Cícero Isaac — desenvolvimento web e design de interfaces. Conheça projetos, estudos e a trajetória de um estudante de Ciência da Computação na UFCA.",
  openGraph: {
    title: "Isaac — Código com intenção. Design com personalidade.",
    description: "Desenvolvimento, interfaces e ideias que saem do papel. Portfólio de Cícero Isaac.",
  },
};

export const viewport: Viewport = { themeColor: "#fafbfe" };

/**
 * Layout raiz do portfólio. As landing pages têm outro layout raiz
 * (grupo `(landing)`), então os estilos de um não vazam para o outro.
 */
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
