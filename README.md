# Isaac — Código & Design

Portfólio de **Cícero Isaac**, estudante de Ciência da Computação na UFCA e técnico em Desenvolvimento de Sistemas. O site reúne projetos, estudos de interface e cinco landing pages conceituais desenvolvidas como estudos independentes.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, export estático)
- TypeScript + React 19
- [Tailwind CSS v4](https://tailwindcss.com/) nas landing pages
- ESLint (`eslint-config-next`)
- Fontes via `next/font` (Manrope, DejaVu Sans Condensed e URW Bookman locais; Poppins do Google Fonts, servida pelo próprio site)

## Executar localmente

Requisitos: Node.js 20 ou superior.

```sh
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento em http://localhost:3000
npm run lint     # verificação de código
npm run build    # gera o site estático em out/
```

A pasta `out/` pode ser publicada em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify). Para conferir o build localmente: `npx serve out`.

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Portfólio: hero, projetos com filtros, UI & Figma, sobre, trajetória e contato |
| `/projetos/itau/` | Estudo de landing page inspirado no Itaú |
| `/projetos/nescau/` | Estudo de landing page inspirado no Nescau |
| `/projetos/dona-benta/` | Estudo de landing page inspirado na Farinha Dona Benta |
| `/projetos/burger-king/` | Estudo de landing page inspirado no Burger King |
| `/projetos/doritos/` | Estudo de landing page inspirado em Doritos |

## Estrutura

```text
src/
├── app/
│   ├── (portfolio)/          # layout raiz + página do portfólio (CSS original)
│   └── (landing)/            # layout raiz das landing pages (Tailwind)
│       └── projetos/<marca>/ # uma rota por marca
├── components/
│   ├── portfolio/            # seções do portfólio
│   └── landing/              # menu mobile, rodapé e peças de cada marca
├── data/projects.ts          # projetos exibidos no portfólio
├── lib/                      # fontes e utilitários
├── styles/portfolio/         # CSS original do portfólio
├── assets/                   # imagens
└── fonts/                    # fontes locais e licenças

designs/               # referências aprovadas (SVG desktop e mobile)
documentacao/          # tokens de design, textos e origem dos assets
assets-landing-pages/  # assets originais das marcas
fonts-landing-pages/   # fontes originais e licenças
portfolio/             # versão estática original (HTML/CSS/JS), mantida como referência
```

### Decisões técnicas

- **Dois layouts raiz** (`(portfolio)` e `(landing)`): o portfólio mantém o CSS aprovado sem o reset do Tailwind, e as landing pages usam Tailwind sem herdar estilos do portfólio.
- **Export estático com `trailingSlash`**: cada rota vira uma pasta com `index.html`, e os links entre portfólio e landing pages são relativos.
- **Produtos sem distorção**: `ProductCrop` (Burger King) e `PackCrop` (Doritos) enquadram fotos com margens transparentes ou brancas mantendo a proporção original.
- **Acessibilidade**: navegação por âncoras, menu mobile com teclado e Escape, foco visível e respeito a `prefers-reduced-motion`.
- **Animações**: entrada ao rolar com um único `IntersectionObserver` (`RevealObserver`), tokens de animação no tema do Tailwind e `motion.css` no portfólio (a hero não é alterada). Sem JavaScript ou com movimento reduzido, tudo aparece parado.
- **Abertura do portfólio**: vinheta de ~2,6 s na primeira visita da sessão, com botão "Pular" e tecla Escape; não toca com movimento reduzido nem quando a URL aponta para uma seção.

### Seções interativas das landing pages

| Página | Seção |
|---|---|
| Itaú | "Um objetivo de cada vez": abas com etapas e barra de progresso |
| Nescau | "Qual é o seu momento?": seletor de momentos do dia |
| Dona Benta | "Da farinha à mesa": linha do tempo que se desenha ao rolar |
| Burger King | "Monte o seu": montador de sanduíche em camadas |
| Doritos | "Qual é a sua intensidade hoje?": medidor com slider |

## Sobre as landing pages

As cinco páginas são **estudos de portfólio não oficiais**, sem vínculo, contratação ou parceria com as marcas. Elas não apresentam preços, ofertas, dados nutricionais ou serviços reais. Os botões que, em um site real, levariam a canais oficiais (como "Conhecer o Itaú" ou "Encontrar um BK") exibem uma nota explicando o conceito, sem links vazios nem endereços inventados.

Marcas, logotipos e fotos de produtos pertencem aos respectivos titulares. A origem dos assets está em `documentacao/origem-dos-assets.json`.

## Convenção de commits

O projeto segue [Conventional Commits](https://www.conventionalcommits.org/pt-br/), em português:

- `feat`: nova funcionalidade ou página
- `fix`: correção
- `build`: dependências e configuração de build
- `docs`: documentação
- `style`: ajustes visuais sem mudança de comportamento
- `chore`: tarefas de manutenção

## Contato

- E-mail: [ciceroisaacsc@gmail.com](mailto:ciceroisaacsc@gmail.com)
- GitHub: [CiceroIsaac](https://github.com/CiceroIsaac)
- LinkedIn: [isaac-sousa-a57b7a259](https://www.linkedin.com/in/isaac-sousa-a57b7a259/)
