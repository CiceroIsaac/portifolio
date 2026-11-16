# Continuidade do portfólio de Cícero Isaac

## Fonte de verdade e objetivo

Este arquivo reúne as decisões mais recentes do usuário. O site é um app **Next.js 16 + TypeScript + Tailwind CSS v4** com export estático, na raiz do repositório (`src/`). Os cinco conceitos aprovados estão em `designs/` e as cinco landing pages já estão implementadas em `src/app/(landing)/projetos/<marca>/`.

A migração de HTML/CSS/JS para Next.js com Tailwind foi pedida explicitamente pelo usuário em 2026-11-15. A pasta `portfolio/` guarda a versão estática original apenas como referência (fora do build, do lint e do TypeScript).

Commits: Conventional Commits em português, sempre em nome do usuário; `Co-Authored-By` do Claude apenas nos commits principais (configuração, migração, cada landing page).

## Arquivos de entrada

| Marca | Pasta dos SVGs | Pasta dos assets | ID no array de projetos |
|---|---|---|---|
| Itaú | `designs/01-itau/` | `assets-landing-pages/itau/` | `itau` |
| Nescau | `designs/02-nescau/` | `assets-landing-pages/nescau/` | `nescau` |
| Farinha Dona Benta | `designs/03-dona-benta/` | `assets-landing-pages/dona-benta/` | `dona-benta` |
| Burger King | `designs/04-burger-king/` | `assets-landing-pages/burger-king/` | `burger-king` |
| Doritos | `designs/05-doritos/` | `assets-landing-pages/doritos/` | `doritos` |

Consulte `documentacao/design-tokens.json` para cores, fontes e enquadramentos. `documentacao/conteudo-dos-designs.json` lista os textos visíveis em ordem de composição e evita gastar contexto com o base64 incorporado nos SVGs. Abra/renderize os SVGs visualmente para conferir a composição. Os textos foram convertidos em curvas para preservar a aparência; não tente reconstruir a copy a partir dos paths.

## O que preservar no portfólio

- Hero inteira, incluindo aparência, animação, código ilustrativo, ritmo da digitação e controles. O usuário foi explícito: não mexer.
- Organização, cores, seções, filtros, diálogos e contato.
- Menu mobile animado e suporte a `prefers-reduced-motion`.
- Tecnologias começando por TypeScript, JavaScript e NestJS.
- Donuts Game.
- As cinco marcas em Desenvolvimento e Acadêmicos. Não classificá-las como trabalhos profissionais contratados.
- Aba Profissionais exatamente como está, inclusive encaminhamento ao contato de Isaac.
- Apenas iExpress na seção de UI/Figma. Usar a prévia local existente. Não adicionar o endereço privado do Figma, parâmetros de acesso, comentários ou telas administrativas.
- Formação técnica: Desenvolvimento de Sistemas pela EEEP Aderson Borges de Carvalho; Ciência da Computação na UFCA em andamento.
- Inglês destacado como autoavaliação de 80/100, sem inventar certificação ou equivalência CEFR.
- Foto local atual e tratamento visual no CSS. Não gerar uma nova pessoa, não alterar corpo, pose ou enquadramento.

## Código atual

- `src/app/(portfolio)/`: layout raiz e página do portfólio. Usa o CSS original (`src/styles/portfolio/`), **sem Tailwind**, para não alterar a aparência aprovada; `hero-typing.css` é idêntico ao original. Ordem: `style.css`, `theme-light.css`, `hero-typing.css`.
- `src/components/portfolio/`: seções do portfólio em React (Hero, Header com menu mobile e ⌘K, Projects com filtros e diálogo, Journey, Contact...).
- `src/data/projects.ts`: array `projects` tipado (IDs, filtros, `showInAll`, `site`, `repo`).
- `src/app/(landing)/`: layout raiz das landing pages com Tailwind (`landing.css` tem os tokens das marcas) e uma rota por marca.
- `src/components/landing/`: peças compartilhadas (MobileMenu, StudyFooter, StudyCta) e componentes por marca (ex.: `ProductCrop`, `PackCrop`).
- `src/lib/fonts.ts`: fontes locais via `next/font`; arquivos e licenças em `src/fonts/`.

Os dois grupos de rotas têm layouts raiz separados: a navegação entre portfólio e landing pages recarrega a página e os estilos não vazam.

## Implementação das marcas

1. Todas as cinco páginas estão implementadas (Itaú, Nescau, Dona Benta, Burger King, Doritos) e vinculadas aos cards com `site: "projetos/<id>/"`.
2. Cada página fica em `src/app/(landing)/projetos/<marca>/page.tsx`, com assets em `src/assets/landing/<marca>/` importados estaticamente (funciona em qualquer caminho de publicação).
3. Implemente conteúdo semântico real, não uma imagem/SVG da página inteira usada como site. Use as referências para hierarquia, ritmo, tipografia, cores, proporções, fotos e detalhes.
4. Preserve proporções de fotos e produtos. Nos SVGs alguns assets têm margens transparentes ou brancas e são enquadrados por viewBox; consulte as notas em `design-tokens.json`. Não deformar produtos para caber.
5. Resolva o comportamento entre 390 e 1440 px com CSS responsivo. Não fazer uma página desktop inteira reduzida por `transform: scale`. Verifique também 360, 768 e 1024 px.
6. Navegação deve levar a seções existentes; menu mobile acessível, foco visível, estados hover e foco, teclado, Escape e fechamento ao selecionar uma seção. Use animações discretas e respeite movimento reduzido.
7. Os botões dos SVGs expressam intenções, não integrações já existentes. Use âncoras e conteúdo local para os fluxos do conceito. Não criar checkout, login bancário, coleta de dados, transações, números de conta ou APIs fictícias. Não deixar CTAs com `href="#"` sem efeito.
8. Informações comerciais, preços, benefícios financeiros, dados nutricionais e métricas não devem ser inventados. O material é um estudo visual, não uma oferta oficial.
9. Mantenha indicação discreta de estudo de portfólio não oficial nas páginas.
10. Depois de cada página funcionar, pode vinculá-la ao campo `site` do projeto com um caminho relativo real. Enquanto não existir destino, mantenha `site` vazio. `repo` continua vazio até haver um repositório real. Não inventar endereço publicado.
11. Ao integrar os cards, preserve os IDs, os filtros e o campo `showInAll` dos itens que já usam esse controle. Atualize a descrição para refletir o estágio real da implementação.

## Direções visuais

- **Itaú**: laranja, azul profundo, fundo quente claro, Manrope; interface de app e cartão ilustrativos, composição limpa.
- **Nescau**: vermelho e amarelo, títulos fortes em caixa alta, raio gráfico, produto protagonista e conteúdo de receitas.
- **Dona Benta**: creme, azul e terracota, serifas Bookman, fotografia de receitas, clima acolhedor e editorial.
- **Burger King**: creme, marrom e vermelho; Bookman pesada, sanduíche grande, ingredientes e acompanhamentos.
- **Doritos**: preto, vermelho, amarelo e roxo; tipografia inclinada, triângulos e composição gráfica. O wordmark do cabeçalho é uma interpretação tipográfica do conceito; os packs usam fotos reais.

## Validação e entrega

- Verifique desktop e mobile por renderização/screenshot, com atenção a cortes, sobreposição, margens, scroll horizontal e tamanho dos controles.
- Confirme que todas as imagens/fontes locais carregam e que `npm run build` gera `out/` funcionando sozinho em um servidor estático.
- Teste os controles das novas páginas e faça uma revisão rápida dos filtros, modal, navegação e hero do portfólio para detectar regressões.
- Não publicar o site automaticamente. Comandos: `npm install`, `npm run dev`, `npm run lint`, `npm run build`.
- Informe o que foi implementado e qualquer CTA ainda dependente de um destino real.
