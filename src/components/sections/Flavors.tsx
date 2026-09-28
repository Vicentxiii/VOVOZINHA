import { Container } from "@/components/layout/Container";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { flavors } from "@/content/home";
import { cn } from "@/lib/utils";

export function Flavors() {
  const { categories, highlight } = flavors;

  return (
    <Section id="sabores" tone="soft" withDivider>
      <Container size="wide">
        <SectionHeader
          eyebrow={flavors.eyebrow}
          title={flavors.title}
          description={flavors.description}
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {categories.map((category, index) => (
            <li
              key={category.id}
              id={category.id}
              className={cn(
                "reveal-scale group border-line bg-surface flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border",
                "transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-out-quint)]",
                "hover:border-oliva/50 hover:shadow-lift hover:-translate-y-1.5",
                index === 0 && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <PhotoSlot
                photo={category.photo}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[5/4] w-full"
              />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-display text-mata text-2xl tracking-tight">{category.name}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{category.description}</p>
              </div>
            </li>
          ))}

          <li className="bg-mata text-papel relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl p-7 sm:col-span-2">
            <span
              aria-hidden="true"
              className="grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
            />
            <div className="relative">
              <span className="bg-papel/12 text-musgo mb-5 grid size-11 place-items-center rounded-full">
                <Icon name="cup" className="size-5" />
              </span>
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                {highlight.title}
              </h3>
              <p className="text-papel/70 mt-3 max-w-md text-sm leading-relaxed">
                {highlight.text}
              </p>
            </div>
            <p className="text-papel/45 relative text-[0.6875rem] tracking-[0.18em] uppercase">
              Degustação no local
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
