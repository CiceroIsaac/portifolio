# Isaac — portfólio + designs para o Claude

> **Atualização (2026-11-15):** o portfólio foi migrado para Next.js + Tailwind e as cinco landing pages foram implementadas. Veja o `README.md` para executar o projeto. O conteúdo abaixo descreve o pacote original e a pasta `portfolio/`, mantida como referência.

Pacote de continuidade com o código atual do portfólio e os cinco designs aprovados em desktop e mobile.

## Conteúdo

- `portfolio/`: portfólio completo em HTML, CSS e JavaScript, com imagens, fontes e licenças locais. O código e os assets foram preservados da versão mais recente entregue.
- `designs/`: os 10 SVGs aprovados, organizados por marca. Desktop com 1440 px; mobile com 390 px de largura.
- `assets-landing-pages/`: fotos de produto e logos separados por marca, para implementar as páginas sem precisar extrair as imagens dos SVGs.
- `fonts-landing-pages/`: fontes adicionais usadas nos conceitos e suas licenças. Manrope está em `portfolio/assets/`.
- `documentacao/`: conteúdo textual das páginas, paletas, arquivos de referência e fontes das imagens.
- `CLAUDE.md`: contexto atualizado, requisitos e sequência de implementação.

## Abrir o portfólio

Abra `portfolio/index.html` no navegador. Não há dependências para instalar.

Para servir os arquivos por HTTP, se tiver Python instalado, execute na raiz deste pacote:

```sh
python -m http.server 8000
```

Depois abra `http://localhost:8000/portfolio/`.

## Mensagem para enviar ao Claude

> Leia primeiro `CLAUDE.md` e `documentacao/design-tokens.json`. O pacote contém meu portfólio atual e os SVGs desktop/mobile aprovados de Itaú, Nescau, Dona Benta, Burger King e Doritos. Implemente as cinco páginas seguindo esses designs, reutilizando os assets locais e mantendo a infraestrutura e a hero do portfólio. Os layouts devem virar HTML/CSS responsivo e elementos interativos reais. Comece pelo Itaú, valide desktop e mobile e depois avance nas outras marcas. Use `documentacao/conteudo-dos-designs.json` para consultar os textos sem ler o base64 dos SVGs. Ao final, entregue todos os arquivos organizados e explique como executar.

## Estado da entrega

O portfólio está codificado. Os cinco layouts das marcas estão aprovados em SVG; a implementação das cinco páginas é a próxima etapa para o Claude. Este pacote não apresenta essas páginas como sites já implementados.

As marcas são referências de estudos independentes de portfólio. Não representam clientes, contratos ou parcerias.
