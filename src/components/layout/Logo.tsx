import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Logo do Laticínio Vovozinha.
 *
 * Arquivo em `public/logo-vovozinha.png` (1536x1024, PNG com fundo
 * transparente). Exibido inteiro e sem recorte: a cor vem da própria arte,
 * por isso o mesmo componente serve para o header e para o rodapé.
 *
 * Para trocar o logo, basta substituir esse arquivo — nenhum outro ajuste
 * é necessário, inclusive o favicon (regerado a partir daqui).
 */
export function Logo({
  className,
  preload = false,
  height = 56,
}: {
  className?: string;
  /** Carrega o logo no `<head>`. Use no header, onde ele é o elemento LCP. */
  preload?: boolean;
  /** Altura exibida em pixels. A largura segue a proporção 3:2 do arquivo. */
  height?: number;
}) {
  return (
    <Image
      src="/logo-vovozinha.png"
      alt={`${siteConfig.name} — Laticínio`}
      width={1536}
      height={1024}
      {...(preload ? { preload: true } : {})}
      sizes="(max-width: 640px) 84px, 96px"
      style={{ height: `${height}px`, width: "auto" }}
      className={cn("object-contain", className)}
    />
  );
}
