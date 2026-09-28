import Image from "next/image";

import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { Photo } from "@/types";

type PhotoSlotProps = {
  photo: Photo;
  /** Proporcao/posicao no grid. Ex.: "aspect-[4/3] sm:col-span-2". */
  className?: string;
  /** Precarrega a imagem quando ela esta no topo da pagina. */
  preload?: boolean;
  sizes?: string;
  /** Contraste do marcador quando a section e escura. */
  tone?: "light" | "dark";
  /** Textura sutil por cima da imagem. */
  textured?: boolean;
  priority?: boolean;
};

/**
 * Slot de fotografia preparado para receber o material real.
 *
 * Sem `photo.src`, desenha um marcador discreto com a instrucao do que a
 * imagem deve mostrar. Nunca gera uma imagem ficticia do estabelecimento.
 * Para ativar, basta colocar o arquivo em `public/` e preencher `src`.
 */
export function PhotoSlot({
  photo,
  className,
  preload = false,
  sizes = "(max-width: 640px) 100vw, 50vw",
  tone = "light",
  textured = true,
  priority = false,
}: PhotoSlotProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {photo.src ? (
        <>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            {...(priority || preload ? { priority: true } : {})}
            {...(preload ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
            className="object-cover"
          />
          {textured ? (
            <span
              aria-hidden="true"
              className="grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
            />
          ) : null}
        </>
      ) : (
        <div
          role="img"
          aria-label={photo.alt}
          className={cn(
            "absolute inset-0 grid place-items-center",
            dark ? "bg-folha-forte" : "bg-creme",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "paper absolute inset-0",
              dark ? "opacity-40 mix-blend-soft-light" : "opacity-70",
            )}
          />
          <span
            aria-hidden="true"
            className="grain absolute inset-0 opacity-[0.07] mix-blend-multiply"
          />
          <span className="relative flex flex-col items-center gap-3 p-6 text-center">
            <Icon
              name="camera"
              className={cn("size-6", dark ? "text-papel/45" : "text-oliva/70")}
              strokeWidth={1.3}
            />
            <span
              className={cn(
                "max-w-[26ch] text-[0.6875rem] leading-relaxed font-medium tracking-wide uppercase",
                dark ? "text-papel/55" : "text-ink-subtle/80",
              )}
            >
              {photo.label}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
