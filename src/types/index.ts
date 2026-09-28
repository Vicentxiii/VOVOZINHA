export type IconName =
  | "leaf"
  | "tree"
  | "cheese"
  | "basket"
  | "people"
  | "cup"
  | "sun"
  | "camera"
  | "mapPin"
  | "clock"
  | "phone"
  | "whatsapp"
  | "star"
  | "arrowRight"
  | "arrowUpRight"
  | "check"
  | "menu"
  | "close"
  | "route"
  | "quote"
  | "shop"
  | "milk"
  | "jar"
  | "bowl"
  | "sparkle";

export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

/**
 * Slot de fotografia.
 *
 * `src` fica vazio ate o recebimento das fotos reais. Enquanto isso o
 * componente `PhotoSlot` desenha um marcador com o briefing do que a
 * imagem deve mostrar — nunca uma imagem gerada por IA.
 *
 * Para ativar: coloque o arquivo em `public/` e preencha `src`.
 */
export interface Photo {
  src?: `/${string}`;
  /** Texto alternativo definitivo, usado quando a foto existir. */
  alt: string;
  /** Instrucao para o time de conteudo. Some da pagina emquanto nao houver foto. */
  label: string;
}

export interface FlavorCategory {
  id: string;
  name: string;
  description: string;
  photo: Photo;
}

export interface ExperiencePillar {
  name: string;
  description: string;
  icon: IconName;
  /** Foto exibida quando este item está selecionado. */
  photo: Photo;
}

export interface RouteStop {
  name: string;
  description: string;
}

export interface GalleryItem extends Photo {
  /** Area ocupada no grid editorial assimetrico. */
  layoutClass: string;
}

export interface Testimonial {
  /** Vazio até receber uma avaliação real. Não inventar. */
  quote: string;
  author: string;
  role?: string;
  /** Enquanto true, renderiza um marcador técnico em vez de citação. */
  pending: boolean;
}

/** Avaliação real transcrita do perfil público no Google. */
export interface GoogleReview {
  author: string;
  /** Iniciais exibidas no avatar, como o Google faz sem foto de perfil. */
  initials: string;
  guideLevel: string;
  guideReviews: number;
  photos: number;
  rating: 4 | 5;
  timeAgo: string;
  /** Google marca "Editado" em avaliações revisadas pelo autor. */
  edited?: boolean;
  text: string;
}
