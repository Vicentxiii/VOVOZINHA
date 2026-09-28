import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { route } from "@/content/home";

export function CheeseRoute() {
  return (
    <Section id="rota" tone="dark">
      <div aria-hidden="true" className="paper pointer-events-none absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      />

      <Container size="wide" className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          <div className="reveal">
            <p className="text-musgo mb-5 flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
              <span aria-hidden="true" className="bg-musgo/60 h-px w-8" />
              {route.eyebrow}
            </p>

            <h2 className="font-display text-papel max-w-lg text-4xl leading-[1.08] text-balance sm:text-5xl">
              {route.title}
            </h2>

            <p className="text-papel/60 mt-6 text-lg">{route.description}</p>

            <ol className="mt-12 flex flex-col">
              {route.stops.map((stop, index) => {
                const last = index === route.stops.length - 1;

                return (
                  <li key={stop.name} className="relative flex gap-5 pb-8 last:pb-0">
                    {!last ? (
                      <span
                        aria-hidden="true"
                        className="bg-papel/20 absolute top-5 left-[0.6875rem] h-[calc(100%-1.25rem)] w-px"
                      />
                    ) : null}

                    <span className="border-papel/30 bg-mata relative z-10 grid size-6 shrink-0 place-items-center rounded-full border">
                      <span className="bg-musgo size-2 rounded-full" />
                    </span>

                    <div className="-mt-0.5">
                      <p className="font-display text-papel text-2xl tracking-tight">{stop.name}</p>
                      <p className="text-papel/55 mt-0.5 text-sm">{stop.description}</p>
                    </div>

                    {!last ? (
                      <Icon
                        name="arrowRight"
                        className="text-papel/25 mt-1 ml-auto hidden size-4 sm:block"
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="reveal-scale">
            <PhotoSlot
              photo={route.photo}
              tone="dark"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
