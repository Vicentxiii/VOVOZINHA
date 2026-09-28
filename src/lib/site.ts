/**
 * Dados do Laticínio Vovozinha e configuração global do site.
 * Fonte única de verdade para marca, contato, localização e links.
 *
 * Regra: não incluir aqui nada que não tenha sido confirmado pelo cliente.
 * Preços, produtos, certificações e depoimentos NÃO vivem aqui.
 */

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const siteConfig = {
  name: "Laticínio Vovozinha",
  shortName: "Vovozinha",
  url: siteUrl,
  locale: "pt-BR",
  themeColor: "#263a27",

  seo: {
    title: "Laticínio Vovozinha | Queijos Artesanais em Extrema MG",
    description:
      "Conheça o Laticínio Vovozinha em Extrema, Minas Gerais. Queijos artesanais, tradição familiar e uma experiência rural com o verdadeiro sabor de Minas.",
    keywords: [
      "laticínio em Extrema",
      "queijo artesanal Extrema",
      "queijos de Minas",
      "doces tradicionais Extrema",
      "produtos regionais Extrema",
      "Rota do Queijo Extrema",
      "queijo Minas Gerais",
      "loja da fábrica Extrema",
    ],
  },

  address: {
    street: "Estrada Municipal Pedro Rosa da Silva, 51",
    city: "Extrema",
    state: "MG",
    zip: "37640-000",
    country: "Brasil",
    countryCode: "BR",
    plusCode: "4MXQ+4G Extrema, Minas Gerais",
  },

  contact: {
    /** Exibido na página. */
    phoneDisplay: "(35) 99848-0114",
    /** Formato E.164, usado em tel: e wa.me. */
    phoneE164: "+5535998480114",
    whatsappNumber: "5535998480114",
  },

  hours: {
    days: "Todos os dias",
    opens: "08:00",
    closes: "18:00",
    label: "Todos os dias · 08h às 18h",
    /** Formato legível por leitores de tela. */
    accessible: "Aberto todos os dias, das 8h às 18h",
  },

  /** Dados públicos do perfil no Google, fornecidos pelo cliente. */
  rating: {
    score: 4.6,
    scoreLabel: "4,6",
    reviews: 1975,
    reviewsLabel: "+1.900 avaliações",
  },

  nav: [
    { label: "Início", href: "#top" },
    { label: "Produtos", href: "#sabores" },
    { label: "Nossa História", href: "#historia" },
    { label: "Visite-nos", href: "#visite" },
    { label: "Contato", href: "#contato" },
  ],

  cta: {
    arrive: { label: "Como chegar", href: "#visite" },
    products: { label: "Conheça nossos produtos", href: "#sabores" },
    contact: { label: "Fale Conosco", href: "https://wa.me/5535998480114" },
    whatsapp: { label: "Falar no WhatsApp", href: "https://wa.me/5535998480114" },
  },
} as const;

/** Query única usada para montar todos os links do Google Maps. */
const addressQuery = [
  siteConfig.name,
  siteConfig.address.street,
  `${siteConfig.address.city} - ${siteConfig.address.state}`,
  siteConfig.address.zip,
].join(", ");

export const mapsLinks = {
  /** Abre o trajeto até o estabelecimento. */
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQuery)}`,
  /** Abre o ponto no mapa. */
  place: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`,
  /** Mapa embutido, sem chave de API. */
  embed: `https://www.google.com/maps?q=${encodeURIComponent(addressQuery)}&output=embed`,
  embedTitle: `Mapa da localização do ${siteConfig.name}`,
} as const;

export const contactLinks = {
  phone: `tel:${siteConfig.contact.phoneE164}`,
  whatsapp: `https://wa.me/${siteConfig.contact.whatsappNumber}`,
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.nav)[number];
