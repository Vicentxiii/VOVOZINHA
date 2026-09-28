import Image from "next/image";

import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Nota do perfil no Google, com o texto exato fornecido pelo cliente.
 * Nao ha link para as avaliacoes: o perfil nao foi informado.
 */
export function RatingProof({
  score,
  reviews,
  source,
  text,
  className,
}: {
  score: string;
  reviews: string;
  source: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-line bg-surface grid gap-8 rounded-2xl border px-6 py-8 sm:px-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12",
        className,
      )}
    >
      <div className="flex items-end gap-5">
        <span className="font-display text-mata text-6xl leading-none sm:text-7xl">{score}</span>

        <div className="flex flex-col gap-2 pb-1.5">
          {/* Marca da fonte da nota */}
          <Image
            src="/google-logo-icon-symbol-free-png.webp"
            alt="Google"
            width={1129}
            height={350}
            sizes="72px"
            style={{ height: "20px", width: "auto" }}
            className="h-auto w-auto max-w-[76px] object-contain"
          />

          <span className="text-estrela flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon key={index} name="star" className="size-4" />
            ))}
          </span>

          <span className="text-ink-muted text-sm">
            {reviews} {source}
          </span>
        </div>
      </div>

      <p className="font-display text-mata text-2xl leading-snug text-balance sm:text-3xl">
        {text}
      </p>
    </div>
  );
}
