# Laticínio Vovozinha

Landing page do Laticínio Vovozinha (Extrema, MG) — Next.js 16 (App Router), React 19, TypeScript 5.9 e Tailwind CSS 4.

Direção visual: **Minas rural contemporânea**. Objetivo da página: transformar visita em ação — chegar ao balcão, mandar mensagem no WhatsApp ou abrir a rota.

## Requisitos

- Node.js >= 20.9 (`.nvmrc` fixa a 24)
- npm 10+

## Comandos

```bash
npm install          # instala dependencias
cp .env.example .env.local   # ajuste NEXT_PUBLIC_SITE_URL
npm run dev          # http://localhost:3000
```

| Script              | O que faz                                             |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento (Turbopack, padrao no 16) |
| `npm run build`     | Build de producao                                     |
| `npm run start`     | Sobe o build de producao                              |
| `npm run typecheck` | `next typegen` + `tsc --noEmit`                       |
| `npm run lint`      | ESLint (flat config)                                  |
| `npm run format`    | Prettier                                              |
| `npm run check`     | typecheck + lint + format:check                       |

## Estrutura

```
src/
├── app/                  # rotas, metadata, SEO
│   ├── layout.tsx        # <html>, fontes, metadata global, schema.org, Header/Footer/MobileBar
│   ├── page.tsx          # apenas orquestra as sections, na ordem da jornada
│   ├── globals.css       # paleta, tokens, texturas, keyframes
│   ├── sitemap.ts        # /sitemap.xml
│   ├── robots.ts         # /robots.txt
│   ├── opengraph-image.tsx  # imagem social gerada por codigo
│   └── icon.tsx          # favicon gerado por codigo
├── components/
│   ├── layout/           # Container, Section, Logo, Header, MobileNav, MobileBar, Footer
│   ├── ui/               # Button, Badge, Card, Icon, PhotoSlot, RatingProof
│   └── sections/         # uma section por arquivo
│       ├── Hero.tsx           # descobrir
│       ├── Proof.tsx          # nota 4,6 no Google
│       ├── Experience.tsx     # loja da fabrica, campo, natureza, familia, sabor
│       ├── Story.tsx          # historia
│       ├── Flavors.tsx        # variedade + degustacao
│       ├── Family.tsx         # experiencia familiar
│       ├── CheeseRoute.tsx    # Rota do Queijo de Extrema
│       ├── Gallery.tsx        # galeria editorial assimetrica
│       ├── Testimonials.tsx   # estrutura para avaliacoes reais
│       ├── FinalCta.tsx       # como chegar / whatsapp
│       └── Visit.tsx          # endereco, horario, mapa
├── content/
│   └── home.ts           # toda a copy e as fotos (placeholders)
├── lib/
│   ├── site.ts           # dados reais: contato, endereco, horario, nota, links de mapa
│   ├── seo.ts            # helper de metadata para paginas futuras
│   └── utils.ts          # cn(), slugify()
└── types/                # tipos de dominio
```

Regras de organizacao:

- **Copy e dados** ficam em `src/content/home.ts`, nunca dentro do JSX.
- **Dados do estabelecimento** (endereco, telefone, horario, nota) ficam em `src/lib/site.ts`.
- **Fotos nunca sao geradas por IA.** Enquanto `photo.src` for `undefined`, o `PhotoSlot` desenha um marcador com a instrucao do que a imagem deve mostrar.
- **Tokens visuais** ficam no `@theme` de `src/app/globals.css`; nao introduza valores arbitrarios nos componentes.
- `ui/` nao conhece `sections/`. `sections/` nao conhece `app/`.

## Paleta e tokens

A paleta bruta vive em `:root` (`--palette-*`) e e exposta como tokens semanticos em `@theme inline`, o que gera as utilitarias.

| Cor         | Token     | Uso                            |
| ----------- | --------- | ------------------------------ |
| Verde mata  | `mata`    | dominante: rodape, CTAs, texto |
| Verde folha | `folha`   | hover e detalhes               |
| Verde oliva | `oliva`   | eyebrows, icones, bordas       |
| Verde musgo | `musgo`   | acentos sobre fundo escuro     |
| Madeira     | `madeira` | apoio em secoes escuras        |
| Terra       | `terra`   | estrelas e detalhes quentes    |
| Creme       | `creme`   | secoes alternadas              |
| Off-white   | `papel`   | fundo da pagina                |
| Carvão      | `carvao`  | texto                          |

Alias semanticos: `canvas` (papel), `canvas-soft` (creme), `surface` (linho), `line`, `ink`, `ink-muted`.

Tipografia: **DM Serif Display** nos titulos (`font-display`), **Manrope** no texto.

Utilitarios proprios: `container-page`, `grain`, `paper`, `wood`, `light-wash`, `frame-wood`, `text-organic`, `mask-fade-b`.

Animacoes: `animate-fade-up`, `animate-fade-in`, `reveal`, `reveal-scale` e `parallax` — todas via CSS `scroll-driven`, sem JavaScript, e desligadas em `prefers-reduced-motion`.

## Fotografia

1. Coloque o arquivo em `public/` (preferencialmente `.webp`).
2. Preencha `src` e mantenha o `alt` ja escrito em `content/home.ts`.
3. O `label` e apenas instrucao para o time de conteudo e nunca aparece na pagina.

O `PhotoSlot` detecta o `src` sozinho e passa a renderizar com `next/image`. Para a imagem principal, use `preload` (o `priority` foi descontinuado no Next 16). `quality` aceita apenas os valores em `next.config.ts` → `images.qualities`.

## Avaliacoes

`Testimonials` nao tem nenhum texto. Enquanto `pending` for `true`, renderiza um marcador tecnico. Para publicar, preencha `quote`/`author` em `content/home.ts` e troque `pending` para `false`.

## SEO

- Metadata global no `src/app/layout.tsx`, reaproveitada por `buildPageMetadata` em `src/lib/seo.ts`.
- Dados estruturados `schema.org/Store` (endereco, horario, nota) embutidos no layout.
- `NEXT_PUBLIC_SITE_URL` e obrigatorio: sem ele, `metadataBase`, o sitemap e o robots usam `http://localhost:3000`.
- A imagem de compartilhamento e gerada em `src/app/opengraph-image.tsx` — sem arquivo PNG para manter.

## Deploy na Vercel

1. Suba o repositorio para o GitHub/GitLab/Bitbucket.
2. Na Vercel: **Add New → Project** e importe o repositorio. O framework e detectado automaticamente.
3. Ajuste as variaveis de ambiente:

   | Variavel               | Valor                       |
   | ---------------------- | --------------------------- |
   | `NEXT_PUBLIC_SITE_URL` | `https://seudominio.com.br` |

4. Deploy. `vercel.json` nao e necessario: com `build` e `start` no `package.json`, a Vercel usa o preset Next.js.

Antes do primeiro deploy, rode `npm run check && npm run build`.

## Git

```bash
git init
git add .
git commit -m "chore: setup inicial do projeto"
```
