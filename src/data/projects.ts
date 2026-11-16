/**
 * Dados dos projetos exibidos na seção "Projetos" do portfólio.
 *
 * Regras de conteúdo (ver CLAUDE.md):
 * - As cinco marcas são estudos independentes (Desenvolvimento + Acadêmicos),
 *   nunca trabalhos profissionais contratados.
 * - `repo` fica vazio até existir um repositório real.
 * - `site` só recebe um caminho quando a página existe de fato.
 */

/** Filtros disponíveis nos botões da seção de projetos. */
export type ProjectFilter = "all" | "dev" | "academic" | "figma" | "professional";

/**
 * Tipos de capa desenhados no CSS do portfólio (`.cover-<tipo>`).
 * "iexpress" é o nome do estilo original de capa com prévia do Figma
 * (hoje usado pelo estudo Optiz).
 */
export type ProjectCover = "donuts" | "landing" | "iexpress" | "private";

export interface Project {
  id: string;
  name: string;
  /** Nome curto da marca, usado na capa das landing pages. */
  brand?: string;
  label: string;
  filters: Exclude<ProjectFilter, "all">[];
  /** Quando `false`, o projeto não aparece no filtro "Todos". */
  showInAll?: boolean;
  description: string;
  tags: string[];
  cover: ProjectCover;
  /** Variação de cor da capa das landing pages (`.tone-<marca>`). */
  tone?: string;
  /** Número exibido na capa das landing pages ("01" a "05"). */
  slot?: string;
  summary: string;
  points: string[];
  repo?: string;
  site?: string;
  /** Prévia estática do Figma exibida na capa e no diálogo (estudo Optiz). */
  image?: boolean;
  note: string;
}

/** Detalhes específicos de uma landing page já implementada. */
interface LandingDetails {
  summary: string;
  points: string[];
}

/**
 * Cria a entrada de uma landing page implementada. `site` é um caminho
 * relativo real (a página fica em src/app/(landing)/projetos/<id>/).
 */
function landingStudy(id: string, brand: string, slot: string, details: LandingDetails): Project {
  return {
    id,
    name: `${brand} — landing page`,
    brand,
    label: "ESTUDO / LANDING PAGE",
    filters: ["dev", "academic"],
    description: "Estudo independente de landing page responsiva, implementado em Next.js e Tailwind CSS a partir de um conceito visual próprio.",
    tags: ["Next.js", "Tailwind CSS", "Landing page", "Estudo independente"],
    cover: "landing",
    tone: id,
    slot,
    ...details,
    repo: "",
    site: `projetos/${id}/`,
    note: "Estudo independente para portfólio, sem vínculo, contratação ou parceria com a marca. Página conceitual: não apresenta ofertas, preços, dados ou serviços reais.",
  };
}

export const projects: Project[] = [
  {
    id: "donuts",
    name: "Donuts Game",
    label: "ESTUDO / LÓGICA & ESTRUTURAS",
    filters: ["dev", "academic"],
    description: "Um jogo em C para exercitar lógica, estruturas de dados e estratégias no terminal.",
    tags: ["C", "Estruturas de dados", "Terminal"],
    cover: "donuts",
    summary:
      "Um projeto em C que usa um jogo no terminal como contexto para praticar lógica de programação e estruturas de dados.",
    points: [
      "Aprendizado por meio da construção de um jogo.",
      "Exploração de lógica e estruturas de dados em C.",
      "Interação no terminal.",
    ],
    repo: "https://github.com/CiceroIsaac/Donuts_Game",
    note: "Descrição baseada no README público do projeto. A capa é uma composição ilustrativa; a interface do jogo é no terminal.",
  },
  landingStudy("itau", "Itaú", "01", {
    summary:
      "Landing page conceitual inspirada no Itaú: laranja, azul profundo e fundo quente claro, com uma interface de app e um cartão ilustrativos construídos em HTML e CSS.",
    points: [
      "Hero com ilustração de app e cartão em unidades de container, proporcional de 360 a 1440 px.",
      "Navegação por âncoras com menu mobile acessível (teclado, Escape e foco visível).",
      "Seções de soluções, estilo de vida e app; CTA final sem destino comercial inventado.",
    ],
  }),
  landingStudy("nescau", "Nescau", "02", {
    summary:
      "Landing page conceitual inspirada no Nescau: vermelho e amarelo, títulos fortes em caixa alta, raio gráfico e produto protagonista, com seções de formatos e ideias de receitas.",
    points: [
      "Hero com o produto sobre o raio, ampliado sem deformar o PNG (margens transparentes).",
      "Cards de formatos e de ideias; fotos de receita com enquadramento em cover.",
      "Nenhum preço, peso ou dado nutricional inventado; \"Ver ideia\" explica o estudo sem link vazio.",
    ],
  }),
  landingStudy("dona-benta", "Farinha Dona Benta", "03", {
    summary:
      "Landing page conceitual inspirada na Farinha Dona Benta: rosa, azul e amarelo, tipografia Poppins, padrão de azulejo inspirado na embalagem e fotografia de receitas em um clima acolhedor.",
    points: [
      "Hero com grifo no título, foto circular com anel animado, selo e card do produto.",
      "Caderno de receitas com cards responsivos e <details> no lugar de links sem destino.",
      "Linha do tempo \"Da farinha à mesa\" que se desenha ao rolar e bordas recortadas como o selo da marca.",
    ],
  }),
  landingStudy("burger-king", "Burger King", "04", {
    summary:
      "Landing page conceitual inspirada no Burger King: creme, marrom e vermelho, Bookman pesada, sanduíche em destaque, ingredientes e acompanhamentos.",
    points: [
      "Componente ProductCrop: enquadra produtos de PNGs com margens transparentes sem deformá-los.",
      "Hero centralizada com selo responsivo (círculo no desktop, etiqueta no mobile).",
      "Cardápio, ingredientes e acompanhamentos sem preços ou ofertas inventadas.",
    ],
  }),
  landingStudy("doritos", "Doritos", "05", {
    summary:
      "Landing page conceitual inspirada em Doritos: preto, vermelho, amarelo e roxo, tipografia inclinada, triângulos e composição gráfica, com fotos reais dos pacotes.",
    points: [
      "Wordmark do cabeçalho como interpretação tipográfica; pacotes com os recortes de referência do design.",
      "Cards de sabores e momentos em blocos de cor, responsivos de 360 a 1440 px.",
      "Triângulos em SVG com traço constante, independentes do tamanho da tela.",
    ],
  }),
  {
    id: "optiz",
    name: "Optiz — interface study",
    label: "UI DESIGN / FIGMA",
    filters: ["figma"],
    showInAll: false,
    description: "Seções de landing page para uma ótica, desenhadas no Figma.",
    tags: ["Figma", "UI Design", "Landing page"],
    cover: "iexpress",
    tone: "optiz",
    summary:
      "Recorte de seções da landing page Optiz: hero de óculos infantis, carrossel de depoimentos de clientes e chamada para contato. O estudo explora hierarquia tipográfica, fotografia em destaque e navegação por carrossel.",
    points: [
      "Hero com título condensado em verde profundo e fotografia ocupando a maior parte da área.",
      "Carrossel de depoimentos com cards de foto, nome e texto, além de controles e indicadores.",
      "Apresentação por uma prévia estática exportada do Figma.",
    ],
    image: true,
    note: "Os textos dos depoimentos são marcadores de conteúdo (lorem ipsum) do protótipo. Apenas o recorte das seções é exibido; o arquivo Figma, comentários e telas administrativas não são disponibilizados. Não representa uma aplicação implementada.",
  },
  {
    id: "private",
    name: "Catálogo & gestão comercial",
    label: "PROJETO PROFISSIONAL / RESERVADO",
    filters: ["professional"],
    showInAll: false,
    description: "Espaço reservado para um case profissional de prototipagem e desenvolvimento.",
    tags: ["Projeto colaborativo", "UI / UX", "Web"],
    cover: "private",
    summary:
      "Esta base reserva espaço para apresentar um projeto comercial, com contexto, papel individual, decisões de interface e implementação. Nome do cliente, telas e resultados permanecem fora da apresentação até a definição do material que pode ser divulgado.",
    points: [
      "Contexto do desafio e escopo do trabalho.",
      "Contribuição individual e participação dos colaboradores.",
      "Fluxos, telas e resultados a inserir após confirmação.",
    ],
    note: "Apresentação reservada. Nenhuma contratação, resultado de negócio, lançamento ou autorização de divulgação é afirmado nesta base.",
  },
];
