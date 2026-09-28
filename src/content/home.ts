import type { ExperiencePillar, FlavorCategory, GoogleReview, Photo } from "@/types";

/**
 * Fotografia de fundo do hero.
 * Arquivo gerado a partir de `public/Hero section vovozinha 1.png`.
 */
export const heroPhoto = {
  src: "/images/hero.webp",
  alt: "A Vovóznha com uma bandeja de queijos artesanais dentro da loja da fábrica, com as prateleiras e a luz natural ao fundo",
  label: "Foto da Vovóznha com a bandeja de queijos",
} satisfies Photo;

export const hero = {
  eyebrow: "Da nossa casa para a sua",
  title: ["O sabor que parece", "feito na casa da Vovó."],
  description: "Queijos, laticínios e sabores da roça produzidos com carinho e tradição.",
  primaryCta: { label: "Conheça nossos produtos", href: "#sabores" },
  secondaryCta: { label: "Como chegar", href: "#visite" },
  photo: heroPhoto,
  /** Mantido por compatibilidade com o registro de fotos do briefing. */
  backgroundPhoto: heroPhoto,
} as const;

/**
 * Faixa de categorias logo abaixo do hero.
 * Cada item leva ao trecho correspondente da secao de Sabores.
 */
export const categories = [
  { name: "Queijos", icon: "cheese", href: "#queijos" },
  { name: "Leites", icon: "milk", href: "#sabores" },
  { name: "Doces", icon: "jar", href: "#doces" },
  { name: "Laticínios", icon: "bowl", href: "#sabores" },
  { name: "Produtos da Roça", icon: "leaf", href: "#regionais" },
] as const;
export const proof = {
  scoreLabel: "4,6",
  reviewsLabel: "+1.900 avaliações",
  source: "no Google",
  text: "Uma parada especial para quem busca sabores artesanais em Extrema.",
} as const;

export const experience = {
  eyebrow: "A experiência",
  title: ["Mais que uma parada.", "Uma experiência de Minas."],
  description:
    "Entre sabores artesanais, natureza e o ritmo tranquilo do campo, o Vovozinha é um lugar para conhecer, experimentar e aproveitar.",
  pillars: [
    {
      name: "Loja da fábrica",
      description: "Venda direto no local, com os produtos saindo da própria produção.",
      icon: "basket",
      photo: {
        src: "/images/balcao-interior.webp",
        alt: "Interior do Laticínio Vovozinha com o balcão de atendimento e as prateleiras da loja",
        label: "Balcão da loja",
      },
    },
    {
      name: "Campo",
      description: "Ambiente rural a poucos passos de Extrema, no interior de Minas.",
      icon: "sun",
      photo: {
        src: "/images/vista-jardim.webp",
        alt: "Jardim do Laticínio Vovozinha com a fonte, os vasos de flores, a serra e a cidade de Extrema ao fundo",
        label: "Campo e serra",
      },
    },
    {
      name: "Natureza",
      description: "Vegetação e paisagem que fazem parte do passeio.",
      icon: "leaf",
      photo: {
        src: "/images/moinho.webp",
        alt: "Moinho de madeira com vasos de flores ao lado do Laticínio Vovozinha, com a serra ao fundo",
        label: "Moinho e vegetação",
      },
    },
    {
      name: "Família",
      description: "Um espaço que recebe famílias e quem visita Extrema com calma.",
      icon: "people",
      photo: {
        src: "/images/fachada.webp",
        alt: "Fachada do Laticínio Vovozinha com o estacionamento, a fonte e as plantas",
        label: "Fachada e estacionamento",
      },
    },
    {
      name: "Sabor",
      description: "Queijos, doces e produtos regionais feitos no local.",
      icon: "cheese",
      photo: {
        src: "/images/doces-artesanais.webp",
        alt: "Potes de doce de leite artesanal do Laticínio Vovozinha expostos na prateleira",
        label: "Doces artesanais",
      },
    },
  ] satisfies ExperiencePillar[],
} as const;

/**
 * Manifesto da marca: quem esta por tras de cada produto.
 * Fica logo apos a secao "Mais que uma parada".
 */
export const manifesto = {
  title: ["Tem coisa que não se explica.", "Tem gosto que a gente", "reconhece."],
  text: "A Vovózinha nasceu para representar aquilo que existe por trás de cada produto: cuidado, tradição e aquele sabor que lembra a cozinha de casa.",
  cta: { label: "Nossa história", href: "https://www.instagram.com/laticiniovovozinha/" },
  note: "É tudo feito com muito carinho! ♡",
  photo: {
    src: "/images/vovozinha-manifesto.webp",
    alt: "Ilustração da Vovóznha olhando para o lado, com uma garrafa de leite e um pão em forma de rosca na mão",
    label: "Vovóznha",
  } satisfies Photo,
} as const;
export const flavors = {
  eyebrow: "Sabores",
  title: "Tem sabor para levar para casa.",
  description:
    "A seleção muda conforme a produção do dia. Por isso vale a pena chegar, olhar e perguntar o que está saindo agora.",
  highlight: {
    title: "Deguste antes de escolher",
    text: "A degustação faz parte da visita. Experimente o que foi preparado hoje e decida depois.",
  },
  categories: [
    {
      id: "queijos",
      name: "Queijos",
      description: "A especialidade da casa, com ampla variedade de tipos.",
      photo: {
        src: "/images/loja-interior.webp",
        alt: "Corredor de vitrines refrigeradas com os queijos do Laticínio Vovozinha",
        label: "Vitrines de queijos",
      },
    },
    {
      id: "doces",
      name: "Doces",
      description: "Doces tradicionais, entre os favoritos das visitas.",
      photo: {
        src: "/images/doces-artesanais.webp",
        alt: "Potes de doce de leite artesanal do Laticínio Vovozinha expostos na prateleira",
        label: "Doces artesanais",
      },
    },
    {
      id: "regionais",
      name: "Produtos regionais",
      description: "Seleção de produtos da região para levar embora.",
      photo: {
        src: "/images/cachacas.webp",
        alt: "Garrafas de cachaça e bebidas regionais na prateleira do Laticínio Vovozinha",
        label: "Produtos regionais",
      },
    },
    {
      id: "quitandas",
      name: "Quitandas",
      description: "Para a mesa, para o café e para presentear.",
      photo: {
        src: "/images/salgadinhos.webp",
        alt: "Salgadinhos artesanais do Laticínio Vovozinha empilhados para venda",
        label: "Salgadinhos e quitandas",
      },
    },
    {
      id: "degustacao",
      name: "Degustação",
      description: "Experimente o que foi preparado no dia antes de comprar.",
      photo: {
        src: "/images/interior-produtos.webp",
        alt: "Balcão do Laticínio Vovozinha com os produtos expostos e um cliente sendo atendido",
        label: "Escolhendo no balcão",
      },
    },
  ] as const satisfies readonly FlavorCategory[],
} as const;

export const family = {
  eyebrow: "Para toda a família",
  title: "Um lugar para parar, conhecer e aproveitar.",
  description:
    "Do parquinho para as crianças à mesa dos pais, o Vovozinha foi feito para uma visita sem pressa.",
  highlights: [
    { title: "Ambiente rural", description: "Campo, ar livre e espaço para andar.", icon: "tree" },
    {
      title: "Natureza",
      description: "Vegetação no entorno, para passeios sem pressa.",
      icon: "leaf",
    },
    { title: "Loja", description: "Loja da fábrica, com venda direta.", icon: "basket" },
    {
      title: "Parquinho",
      description: "Um cantinho reservado para as crianças.",
      icon: "sparkle",
    },
  ] as const,
  /** Fotos do entorno. Ainda não há foto do parquinho nem de famílias. */
  photos: [
    {
      src: "/images/jardim.webp",
      alt: "Jardim com vegetação, pedras e muro no entorno do Laticínio Vovozinha",
      label: "Jardim e vegetação",
    },
    {
      src: "/images/moinho.webp",
      alt: "Moinho de madeira com vasos de flores ao lado do Laticínio Vovozinha, com a serra ao fundo",
      label: "Moinho e vasos",
    },
  ] satisfies Photo[],
} as const;

export const route = {
  eyebrow: "Rota do Queijo",
  title: "Uma parada no caminho pelo sabor de Minas.",
  description: "Parte da Rota do Queijo de Extrema.",
  stops: [
    { name: "Extrema", description: "Cidade no sul de Minas." },
    { name: "Campo", description: "Estrada municipal e área rural." },
    { name: "Vovozinha", description: "A loja da fábrica." },
    { name: "Queijo", description: "O sabor para levar." },
  ] as const,
  photo: {
    src: "/images/placa-rota-do-queijo.webp",
    alt: "Placa do Laticínio Vovozinha com o selo Rota do Queijo Extrema MG",
    label: "Placa da Rota do Queijo",
  } satisfies Photo,
} as const;

export const gallery = {
  eyebrow: "Galeria",
  title: "O lugar em imagens.",
  description: "Um passeio pelas dependências, pela produção e pelos sabores.",
  items: [
    {
      src: "/images/muro-queijos.webp",
      alt: "Muro de pedra em formato de queijo e o moinho ao fundo no Laticínio Vovozinha",
      label: "Muro e moinho",
      layoutClass: "col-span-4 aspect-[4/3] sm:col-span-4 sm:row-span-2",
    },
    {
      src: "/images/fonte-agua-com-roda.webp",
      alt: "Fonte de pedra com roda de água e vegetação no Laticínio Vovozinha",
      label: "Fonte de água",
      layoutClass: "col-span-4 aspect-[3/4] sm:col-span-2 sm:row-span-4",
    },
    {
      src: "/images/fachada.webp",
      alt: "Fachada do Laticínio Vovozinha com estacionamento, fonte e plantas",
      label: "Fachada",
      layoutClass: "col-span-2 aspect-square sm:col-span-2 sm:row-span-2",
    },
    {
      src: "/images/pimenta-gigante.webp",
      alt: "Pimenta gigante em vidro exposta no Laticínio Vovozinha",
      label: "Pimenta gigante",
      layoutClass: "col-span-2 aspect-square sm:col-span-2 sm:row-span-2",
    },
  ] as const,
} as const;

/**
 * Avaliacoes reais transcritas do perfil publico no Google.
 *
 * Cada item preserva autor, nota, contagem de avaliacoes/fotos e data
 * relativa exatamente como o Google exibe, para que a origem fique clara.
 *
 * ATENCAO: o texto passou por correcao minima de erros de digitacao
 * evidentes (ver README, secao "Avaliacoes do Google"). Nenhum sentido foi
 * alterado e nenhuma frase foi acrescentada.
 */
export const googleReviews: GoogleReview[] = [
  {
    author: "Sonia Brandao",
    initials: "SB",
    guideLevel: "Local Guide",
    guideReviews: 224,
    photos: 620,
    rating: 5,
    timeAgo: "4 meses atrás",
    text: "Tem várias opções de queijos, doces, pimentos, salame, biscoitos. O ambiente fica pequeno quando chega excursão (que foi o nosso caso) mas o pessoal atende rápido. Aceita cartão de crédito, os preços são acessíveis. O banheiro é limpo.",
  },
  {
    author: "Ronaldo Lima",
    initials: "RL",
    guideLevel: "Local Guide",
    guideReviews: 138,
    photos: 92,
    rating: 5,
    timeAgo: "2 meses atrás",
    text: "Diversidade de produtos de fabricação própria. Todos os produtos que são fabricados no local têm degustação bem servida, tivemos a oportunidade de provar o doce de leite que havia acabado de sair ainda estava quentinho... difícil sair de lá sem comprar nada, vale a visita.",
  },
  {
    author: "Edy Medeiros",
    initials: "ED",
    guideLevel: "Local Guide",
    guideReviews: 206,
    photos: 163,
    rating: 5,
    timeAgo: "3 meses atrás",
    text: "Lugar delicioso. Grande variedade de produtos e preços justos. Vale a visita. Super indico",
  },
  {
    author: "Alisson Rocha",
    initials: "AR",
    guideLevel: "Local Guide",
    guideReviews: 33,
    photos: 6,
    rating: 5,
    timeAgo: "5 meses atrás",
    edited: true,
    text: "Toda vez que vou a Extrema, tenho que ir no Laticínio Vovozinha, tudo de gostoso tem lá, principalmente os queijos, nata, leite puro, doces maravilhosos, artesanato, todos atenciosos, local limpo, agradável e tudo já começa no estacionamento, com uma fonte com cartas, uma roda de água, eu fico encantada. Recomendo.",
  },
  {
    author: "Neto",
    initials: "NT",
    guideLevel: "Local Guide",
    guideReviews: 322,
    photos: 1607,
    rating: 5,
    timeAgo: "8 meses atrás",
    text: "Sensacional o local. Produção de queijos e derivados ali mesmo. Produtos saborosos e com preço justo. Lindo o lugar. Conhecida, fica na rota do queijo.",
  },
  {
    author: "Vinicius de Freitas",
    initials: "VF",
    guideLevel: "Local Guide",
    guideReviews: 39,
    photos: 145,
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Pensa num lugar bom, viu, encontramos várias opções de doces, queijos, bebidas, geleias e muitos outros itens, tem bastante vagas para estacionar e também possui banheiro para usar, que por sinal está super limpo. Com certeza passarei por lá quando estiver por perto.",
  },
  {
    author: "Leonardo V. Rolim",
    initials: "LR",
    guideLevel: "Local Guide",
    guideReviews: 36,
    photos: 16,
    rating: 5,
    timeAgo: "2 meses atrás",
    text: "Gosto muito de fazer minhas compras de Queijo e os demais derivados de leite. Aqui na vovozinha, o ambiente é acolhedor e tem muita variedade. Às vezes está um pouco cheio de gente, mas faz parte, afinal o lugar é sucesso, bons preços.",
  },
  {
    author: "Lorenna Pinna",
    initials: "LP",
    guideLevel: "Local Guide",
    guideReviews: 111,
    photos: 136,
    rating: 5,
    timeAgo: "10 meses atrás",
    text: "Lugar bem lindo na chegada. E quando entramos, fomos super bem atendidos, todos os queijos que provamos, compramos. Em especial o parmesão capa preta.",
  },
  {
    author: "Tatiana Freitas",
    initials: "TF",
    guideLevel: "Local Guide",
    guideReviews: 193,
    photos: 304,
    rating: 5,
    timeAgo: "7 meses atrás",
    text: "Queijo, doces, biscoitos, pimenta, linguiça, cachaça, tudo uma delícia e o preço que cabe no bolso, super recomendo.",
  },
  {
    author: "Rui Maru",
    initials: "RM",
    guideLevel: "Local Guide",
    guideReviews: 32,
    photos: 109,
    rating: 4,
    timeAgo: "um ano atrás",
    text: "Queijos, bebidas e lembrancinhas com preço justo, degustação e muito movimento de pessoas comprando. Tem áreas para fotos do lado de fora com fontes, roda d'água e lagos ornamentais. Fácil acesso, com movimento intenso de entrada e saída de automóveis.",
  },
];

export const reviews = {
  eyebrow: "Avaliações",
  title: "Quem passa por aqui, leva uma história.",
  description: "Comentários deixados por visitantes no perfil do Vovozinha no Google.",
} as const;
export const finalCta = {
  title: "Seu próximo sabor de Minas está em Extrema.",
  description: "Venha conhecer o Laticínio Vovozinha.",
} as const;
