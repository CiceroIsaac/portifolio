import type { Metadata } from "next";
import { RevealObserver } from "@/components/shared/RevealObserver";
import { manrope } from "@/lib/fonts";
import "./landing.css";

export const metadata: Metadata = {
  title: { template: "%s · Estudo de landing page — Cícero Isaac", default: "Estudo de landing page — Cícero Isaac" },
  // Estudos de portfólio: não devem aparecer em buscas como páginas das marcas.
  robots: { index: false, follow: true },
};

/**
 * Layout raiz das landing pages (grupo de rotas `(landing)`).
 * Separado do layout do portfólio para que o Tailwind não afete o CSS original.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body className="font-sans antialiased">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
