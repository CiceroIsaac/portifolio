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

/** Tipos de capa desenhados no CSS do portfólio (`.cover-<tipo>`). */
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
  /** Imagem estática exibida no diálogo (apenas iExpress). */
  image?: boolean;
  note: string;
}

/** Texto padrão de aviso das landing pages. */
const LANDING_NOTE =
  "Estudo independente para portfólio, sem vínculo, contratação ou parceria com a marca. A capa identifica um espaço reservado; não representa uma página pronta.";

/** Cria a entrada de uma landing page ainda não implementada. */
function landingPlaceholder(id: string, brand: string, slot: string): Project {
  return {
    id,
    name: `${brand} — landing page`,
    brand,
    label: "ESTUDO / EM DESENVOLVIMENTO",
    filters: ["dev", "academic"],
    description: "Espaço reservado para um estudo de landing page. Design e código em desenvolvimento.",
    tags: ["Landing page", "Estudo independente", "Em breve"],
    cover: "landing",
    tone: id,
    slot,
    summary: `Este espaço está reservado para uma landing page conceitual inspirada na marca ${brand}. O design e a implementação serão desenvolvidos em uma próxima etapa.`,
    points: [
      "Direção visual e composição a desenvolver.",
      "Implementação e versão responsiva a desenvolver.",
      "Links de demonstração e código ainda não disponíveis.",
    ],
    repo: "",
    site: "",
    note: LANDING_NOTE,
  };
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
      "Landing page conceitual inspirada na Farinha Dona Benta: creme, azul e terracota, serifa Bookman e fotografia de receitas em um clima acolhedor e editorial.",
    points: [
      "Hero com arco, foto circular e card do produto, reorganizada no mobile.",
      "Caderno de receitas com cards responsivos e <details> no lugar de links sem destino.",
      "Fontes locais (URW Bookman e Manrope) carregadas com next/font.",
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
  landingPlaceholder("doritos", "Doritos", "05"),
  {
    id: "iexpress",
    name: "iExpress — interface study",
    label: "UI DESIGN / CONCEITO",
    filters: ["figma"],
    showInAll: false,
    description: "Estudo de landing page para uma marca fictícia de tecnologia, desenvolvido no Figma.",
    tags: ["Figma", "UI Design", "Landing page"],
    cover: "iexpress",
    summary:
      "Uma proposta de interface para a página inicial da iExpress, marca fictícia de iPhones. O estudo explora hierarquia visual, apresentação de produto e chamadas para ação.",
    points: [
      "Direção visual clara, com roxo como cor de destaque.",
      "Composição de hero com produto, mensagem e chamadas para ação.",
      "Apresentação da interface por uma prévia estática do Figma.",
    ],
    image: true,
    note: "Conceito visual de marca fictícia, sem vínculo comercial. Apenas o recorte da página inicial é exibido; o arquivo Figma, painéis internos e dados administrativos não são disponibilizados. Não representa uma aplicação implementada.",
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
