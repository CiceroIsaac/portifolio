import { Poppins } from "next/font/google";
import localFont from "next/font/local";

/**
 * Fontes locais das landing pages (licenças em src/fonts/).
 * O `next/font` gera o @font-face, faz o preload e expõe cada família
 * como variável CSS, usada no tema do Tailwind (landing.css).
 */

/** Manrope: texto de todas as páginas e títulos do Itaú. */
export const manrope = localFont({
  src: [
    { path: "../fonts/manrope-400.ttf", weight: "400" },
    { path: "../fonts/manrope-500.ttf", weight: "500" },
    { path: "../fonts/manrope-700.ttf", weight: "700" },
  ],
  variable: "--ff-manrope",
  display: "swap",
});

/** DejaVu Sans Condensed Bold: títulos de Nescau e Doritos (com itálico). */
export const dejavuCondensed = localFont({
  src: [
    { path: "../fonts/DejaVuSansCondensed-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/DejaVuSansCondensed-BoldOblique.ttf", weight: "700", style: "italic" },
  ],
  variable: "--ff-condensed",
  display: "swap",
});

/**
 * Poppins: todo o texto da página da Dona Benta (pedido do usuário).
 * O next/font/google baixa a fonte no build e a serve junto do site,
 * sem requisições ao Google no navegador do visitante.
 */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-poppins",
  display: "swap",
});

/** URW Bookman Demi (pesada): títulos do Burger King. */
export const bookman = localFont({
  src: [
    { path: "../fonts/URWBookman-Demi.otf", weight: "700" },
  ],
  variable: "--ff-bookman",
  display: "swap",
});
