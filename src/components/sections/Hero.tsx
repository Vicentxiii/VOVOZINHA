import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/content/home";

/**
 * Hero em tela cheia sobre a fotografia da Vovóznha.
 *
 * Estrutura da referência:
 *   fundo  -> foto real, veu escuro a esquerda
 *   topo   -> eyebrow, titulo em duas linhas, descricao, dois botoes
 * O header fica por cima, transparente (ver components/layout/Header.tsx).
 */
export function Hero() {
  return (
    <section
      id="top"
      className="bg-veu relative isolate flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* Fotografia de fundo */}
      <Image
        src={hero.photo.src ?? "/images/hero.webp"}
        alt={hero.photo.alt}
        fill
        priority
        sizes="100vw"
        quality={90}
        className="absolute inset-0 -z-10 object-cover object-center"
      />
      <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-top-scrim absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay"
      />

      <Container size="wide" className="relative w-full pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-ouro animate-fade-up flex items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.34em] uppercase [animation-delay:60ms]">
            {hero.eyebrow}
          </p>

          <h1 className="font-display text-creme mt-6 text-[2.75rem] leading-[1.04] text-balance [animation-delay:140ms] sm:text-6xl lg:text-7xl">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="animate-fade-up text-papel/85 mt-6 max-w-lg text-base leading-relaxed [animation-delay:220ms] sm:text-lg">
            {hero.description}
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 [animation-delay:300ms] sm:flex-row sm:items-center sm:gap-4">
            <a
              href={hero.primaryCta.href}
              className="bg-ouro text-veu hover:bg-ouro-claro inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-[0.9375rem] font-semibold transition-colors duration-300"
            >
              <Icon name="shop" className="size-5" />
              {hero.primaryCta.label}
              <Icon name="arrowRight" className="size-4.5" />
            </a>

            <a
              href={hero.secondaryCta.href}
              className="border-papel/45 text-papel hover:border-papel hover:bg-papel/10 inline-flex h-13 items-center justify-center gap-2.5 rounded-full border px-7 text-[0.9375rem] font-semibold transition-colors duration-300"
            >
              <Icon name="mapPin" className="size-5" />
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
