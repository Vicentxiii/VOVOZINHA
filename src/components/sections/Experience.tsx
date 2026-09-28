"use client";

import { useState } from "react";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { experience } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * "Mais que uma parada": a foto troca conforme o item selecionado.
 *
 * Sem biblioteca de carrossel. A foto de cada item fica empilhada na mesma
 * posição e só a opacidade muda, o que produz a transposição cruzada sem
 * reposicionar nada. A primeira imagem entra com preload por ser a que
 * aparece já no carregamento.
 */
export function Experience() {
  const [active, setActive] = useState(0);
  const current = experience.pillars[active];

  return (
    <Section id="experiencia" tone="soft" withDivider>
      <Container size="wide">
        <SectionHeader
          eyebrow={experience.eyebrow}
          title={experience.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          description={experience.description}
        />

        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Fotos empilhadas com transposição cruzada */}
          <div
            className="reveal-scale relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
            role="img"
            aria-label={current.photo.alt}
          >
            {experience.pillars.map((pillar, index) => (
              <div
                key={pillar.name}
                aria-hidden={index !== active}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-[var(--ease-out-quint)]",
                  index === active ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={pillar.photo.src ?? ""}
                  alt={pillar.photo.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className="grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                />
              </div>
            ))}
          </div>

          {/* Seletores */}
          <ul className="border-line bg-line grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2">
            {experience.pillars.map((pillar, index) => {
              const selected = index === active;
              return (
                <li key={pillar.name} className="bg-canvas-soft">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    aria-pressed={selected}
                    className={cn(
                      "group flex h-full w-full flex-col items-start gap-3 p-6 text-left transition-colors duration-500",
                      selected ? "bg-surface" : "hover:bg-surface/60",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-full transition-colors duration-500",
                        selected
                          ? "bg-mata/12 text-folha"
                          : "bg-folha/10 text-folha/70 group-hover:text-folha",
                      )}
                    >
                      <Icon name={pillar.icon} className="size-5" />
                    </span>

                    <span
                      className={cn(
                        "font-display text-xl tracking-tight transition-colors duration-500",
                        selected ? "text-mata" : "text-mata/85",
                      )}
                    >
                      {pillar.name}
                    </span>

                    <span
                      className={cn(
                        "text-sm leading-relaxed transition-colors duration-500",
                        selected ? "text-ink-muted" : "text-ink-muted/70",
                      )}
                    >
                      {pillar.description}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Texto acessível do item ativo, sem duplicar a imagem */}
        <p className="sr-only" aria-live="polite">
          {current.name}: {current.description}
        </p>
      </Container>
    </Section>
  );
}
