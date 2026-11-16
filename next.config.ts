import type { NextConfig } from "next";

/**
 * Configuração do Next.js.
 * - output "export": gera um site 100% estático em `out/`, publicável em
 *   qualquer hospedagem (GitHub Pages, Vercel, Netlify...), sem servidor Node.
 * - trailingSlash: cada rota vira uma pasta com index.html (ex.: /projetos/itau/),
 *   o que permite links relativos entre o portfólio e as landing pages.
 * - images.unoptimized: a otimização de imagens do Next exige servidor;
 *   no export estático as imagens são servidas como estão.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
