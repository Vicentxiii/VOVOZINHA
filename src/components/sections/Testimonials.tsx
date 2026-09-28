import { Container } from "@/components/layout/Container";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { reviews, googleReviews } from "@/content/home";
import { cn } from "@/lib/utils";
import type { GoogleReview } from "@/types";

/** Cores de avatar no estilo das que o Google usa quando nao ha foto. */
const AVATAR_TONES = [
  "bg-mata text-papel",
  "bg-marinho text-papel",
  "bg-terra text-papel",
  "bg-folha text-papel",
  "bg-madeira text-papel",
  "bg-oliva text-papel",
];

function avatarTone(index: number): string {
  return AVATAR_TONES[index % AVATAR_TONES.length];
}

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span
      className={cn("text-estrela flex gap-0.5", className)}
      role="img"
      aria-label={`Nota ${rating} de 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          name="star"
          className={cn("size-4", index < rating ? "opacity-100" : "opacity-25")}
        />
      ))}
    </span>
  );
}

function ReviewCard({ review, index }: { review: GoogleReview; index: number }) {
  return (
    <li className="border-line bg-surface shadow-lift flex w-[19rem] shrink-0 flex-col gap-4 rounded-2xl border p-6 sm:w-[24rem]">
      <div className="flex items-start gap-3.5">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold",
            avatarTone(index),
          )}
        >
          {review.initials}
        </span>

        <div className="min-w-0">
          <p className="text-ink truncate text-[0.9375rem] font-semibold">{review.author}</p>
          <p className="text-ink-subtle mt-0.5 text-[0.8125rem]">
            {review.guideLevel} · {review.guideReviews.toLocaleString("pt-BR")} avaliações ·{" "}
            {review.photos.toLocaleString("pt-BR")} fotos
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <Stars rating={review.rating} />
        <span className="text-ink-subtle text-[0.8125rem]">
          {review.edited ? "Editado " : ""}
          {review.timeAgo}
        </span>
      </div>

      <p className="text-ink-muted text-[0.9375rem] leading-relaxed text-pretty">{review.text}</p>
    </li>
  );
}

/**
 * Carrossel continuo das avaliacoes do Google.
 *
 * O trilho e duplicado e animado de 0 a -50%, o que produz um laco
 * infinito sem JavaScript. Pausa ao passar o mouse. Com
 * prefers-reduced-motion o laco e desligado e vira rolagem horizontal.
 */
export function Testimonials() {
  return (
    <Section id="avaliacoes" tone="default">
      <Container size="wide">
        <SectionHeader
          eyebrow={reviews.eyebrow}
          title={reviews.title}
          description={reviews.description}
        />
      </Container>

      <div className="fade-x relative mt-14 overflow-hidden sm:mt-16">
        <div className="animate-marquee-lento flex w-max hover:[animation-play-state:paused]">
          {/* primeira passada: visivel e lida por leitores de tela */}
          <ul className="flex shrink-0 gap-5 pr-5">
            {googleReviews.map((review, index) => (
              <ReviewCard key={review.author} review={review} index={index} />
            ))}
          </ul>

          {/* segunda passada: cópia idêntica, invisível, só para fechar o laco */}
          <ul className="flex shrink-0 gap-5 pr-5" aria-hidden="true">
            {googleReviews.map((review, index) => (
              <ReviewCard key={`dup-${review.author}`} review={review} index={index} />
            ))}
          </ul>
        </div>
      </div>

      <Container size="wide">
        <p className="text-ink-subtle mt-10 text-center text-xs">
          Avaliações e notas conforme exibidas no perfil público do Laticínio&nbsp;Vovozinha no
          Google.
        </p>
      </Container>
    </Section>
  );
}
