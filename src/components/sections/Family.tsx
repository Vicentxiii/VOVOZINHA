import { Container } from "@/components/layout/Container";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { family } from "@/content/home";

export function Family() {
  return (
    <Section id="familia" tone="default">
      <Container size="wide">
        <SectionHeader
          eyebrow={family.eyebrow}
          title={family.title}
          description={family.description}
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[1fr_1.25fr]">
          <div className="reveal-scale flex flex-col gap-6">
            <PhotoSlot
              photo={family.photos[0]}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/3] w-full rounded-3xl"
            />
            <PhotoSlot
              photo={family.photos[1]}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[16/10] w-full rounded-3xl"
            />
          </div>

          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {family.highlights.map((item, index) => (
              <li
                key={item.title}
                className="border-line bg-surface animate-fade-up group hover:border-oliva/50 hover:shadow-lift flex flex-col gap-3 rounded-2xl border p-7 transition-all duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="bg-terra/12 text-madeira grid size-11 place-items-center rounded-full">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="font-display text-mata text-xl tracking-tight">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
