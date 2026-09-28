import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { manifesto } from "@/content/home";

/**
 * Onda que separa esta secao da faixa de categorias acima.
 * O SVG e pintado com a cor da propria secao, criando a borda curva.
 */
function WaveTop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      className="text-canvas absolute inset-x-0 -top-px block h-8 w-full sm:h-12"
    >
      <path
        fill="currentColor"
        d="M0 32c120-26 240-34 360-24s240 34 360 30 240-30 360-30 240 24 360 30v26H0V32Z"
      />
    </svg>
  );
}

/**
 * Manifesto da marca.
 *
 * Texto a esquerda em fonte manuscrita, Vovóznha a direita sobre o pincel
 * amarelo que ja vem na propria imagem.
 */
export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-canvas relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28"
    >
      <WaveTop />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* Texto */}
          <div className="animate-fade-up">
            <h2 className="font-script text-veu text-4xl leading-[1.15] text-balance sm:text-5xl lg:text-[3.4rem]">
              {manifesto.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="text-ink-muted mt-7 max-w-md text-base leading-relaxed [animation-delay:120ms] sm:text-lg">
              {manifesto.text}
            </p>

            <a
              href={manifesto.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-marinho text-papel hover:bg-marinho-claro mt-9 inline-flex h-12 items-center gap-2.5 rounded-full px-7 text-sm font-semibold transition-colors duration-300 [animation-delay:200ms]"
            >
              {manifesto.cta.label}
              <Icon name="arrowUpRight" className="size-4" />
            </a>
          </div>

          {/* Vovozinha + anotacao */}
          <div className="animate-fade-in relative [animation-delay:120ms]">
            <Image
              src={manifesto.photo.src ?? ""}
              alt={manifesto.photo.alt}
              width={1400}
              height={933}
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="w-full select-none"
            />

            <p
              className="font-script text-veu absolute top-[14%] right-[2%] w-28 rotate-[-6deg] text-xl leading-tight sm:right-[6%] sm:w-36 sm:text-2xl"
              aria-hidden="true"
            >
              {manifesto.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
