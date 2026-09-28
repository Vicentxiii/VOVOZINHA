import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Blocos de metadata reutilizaveis.
 *
 * O layout raiz ja exporta o metadata completo da home. Estas funcoes servem
 * para paginas futuras: espelham o padrao sem repetir campos.
 *
 * Atencao: no App Router o merge de metadata e raso — um `openGraph`
 * declarado no filho substitui inteiro o do pai, nao mescla campo a campo.
 * Por isso o `openGraph` e montado aqui completo.
 */
export function buildPageMetadata({
  title,
  description = siteConfig.seo.description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
