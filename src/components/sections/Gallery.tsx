import { Container } from "@/components/layout/Container";
import { Section, SectionHeader } from "@/components/layout/Section";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { gallery } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Galeria editorial assimetrica: uma grande, uma vertical e duas menores.
 * Sem grid generico 3x3.
 */
export function Gallery() {
  const order = ["order-1", "order-2", "order-4", "order-3"];

  return (
    <Section id="galeria" tone="soft" withDivider>
      <Container size="wide">
        <SectionHeader
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
        />

        <div className="mt-16 grid grid-cols-4 gap-4 sm:mt-20 sm:auto-rows-[150px] lg:auto-rows-[180px] lg:gap-5">
          {gallery.items.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "reveal-scale overflow-hidden rounded-2xl",
                order[index],
                item.layoutClass,
              )}
            >
              <PhotoSlot
                photo={item}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="size-full"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
