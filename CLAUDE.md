# Continuidade do portfólio de Cícero Isaac

## Fonte de verdade e objetivo

Este arquivo reúne as decisões mais recentes do usuário. O código atual está em `portfolio/`. Os cinco conceitos aprovados estão em `designs/`. Desenvolva as landing pages em HTML, CSS e JavaScript seguindo essas referências e a organização existente.

O usuário aprovou os designs em SVG e pediu este pacote para continuar no Claude. O portfólio já funciona; as cinco páginas das marcas ainda não estão implementadas. Referências dentro dos cards que dizem que o design ainda será criado estão desatualizadas e poderão ser ajustadas ao integrar as páginas.

Não migrar automaticamente para Next.js, não adicionar framework nem substituir a infraestrutura. A menção à futura migração em documentação anterior não é autorização atual para fazê-la.

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

- `portfolio/index.html`: conteúdo e estrutura.
- `portfolio/style.css`: estrutura e responsividade.
- `portfolio/theme-light.css`: identidade clara e ajustes visuais.
- `portfolio/hero-typing.css`: hero aprovada.
- `portfolio/app.js`: array `projects`, filtros, diálogos, navegação, menu mobile e animações.
- `portfolio/assets/`: imagens e fontes locais.

A ordem atual dos estilos é `style.css`, `theme-light.css`, `hero-typing.css`.

## Implementação das marcas

1. Comece por Itaú e reproduza as versões desktop e mobile. Em seguida Nescau, Dona Benta, Burger King e Doritos.
2. Sugestão compatível com a base: `portfolio/landing-pages/<marca>/index.html`, `styles.css`, `script.js` e `assets/`. Copie os assets necessários para dentro de cada página; a pasta `portfolio/` deve continuar autossuficiente para publicação.
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
- Confirme que todas as imagens/fontes locais carregam e que a pasta `portfolio/` funciona sozinha.
- Teste os controles das novas páginas e faça uma revisão rápida dos filtros, modal, navegação e hero do portfólio para detectar regressões.
- Não publicar automaticamente. Entregue os arquivos completos e comandos simples para executar localmente.
- Informe o que foi implementado e qualquer CTA ainda dependente de um destino real.
