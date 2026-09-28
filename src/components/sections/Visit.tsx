import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { contactLinks, mapsLinks, siteConfig } from "@/lib/site";

export function Visit() {
  const { address, contact, hours } = siteConfig;

  const details = [
    {
      icon: "mapPin" as const,
      label: "Endereço",
      value: `${address.street}, ${address.city} — ${address.state}`,
      href: mapsLinks.place,
    },
    {
      icon: "clock" as const,
      label: "Horário",
      value: hours.label,
    },
    {
      icon: "phone" as const,
      label: "Telefone e WhatsApp",
      value: contact.phoneDisplay,
      href: contactLinks.phone,
    },
  ];

  return (
    <Section id="visite" tone="soft" withDivider padding="md">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="reveal">
            <p className="text-oliva mb-5 flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
              <span aria-hidden="true" className="bg-oliva/60 h-px w-8" />
              Localização
            </p>

            <h2 className="font-display text-mata text-4xl leading-[1.08] text-balance sm:text-5xl">
              Venha nos visitar.
            </h2>

            <p className="text-ink-muted mt-6 text-lg leading-relaxed">{siteConfig.name}</p>

            <dl className="divide-line border-line mt-10 flex flex-col divide-y border-y">
              {details.map((item) => {
                const body = (
                  <>
                    <dt className="text-ink-subtle flex items-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                      <Icon name={item.icon} className="text-oliva size-4" />
                      {item.label}
                    </dt>
                    <dd className="text-mata mt-2 text-lg leading-relaxed">{item.value}</dd>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group hover:bg-surface flex flex-col py-6 transition-colors"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={item.label} className="flex flex-col py-6">
                    {body}
                  </div>
                );
              })}
            </dl>

            <a
              href={mapsLinks.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mata text-papel shadow-lift hover:bg-folha hover:shadow-glow mt-10 inline-flex h-13 items-center justify-center gap-2.5 rounded-full px-8 text-[0.9375rem] font-semibold transition-all duration-300 ease-[var(--ease-out-quint)]"
            >
              <Icon name="mapPin" className="size-4" />
              Abrir rota no Google Maps
              <Icon name="arrowUpRight" className="size-4" />
            </a>

            <p className="text-ink-subtle mt-5 font-mono text-[0.6875rem] tracking-wide">
              {address.plusCode}
            </p>
          </div>

          <div className="reveal-scale">
            <div className="border-line bg-surface shadow-lift overflow-hidden rounded-3xl border p-2">
              <iframe
                src={mapsLinks.embed}
                title={mapsLinks.embedTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="aspect-[4/3] w-full rounded-2xl border-0 lg:aspect-[5/4]"
              />
            </div>

            <div className="border-line bg-surface mt-4 flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-folha/10 text-folha grid size-11 place-items-center rounded-full">
                  <Icon name="star" className="size-5" />
                </span>
                <div>
                  <p className="text-mata text-sm font-semibold">
                    {siteConfig.rating.scoreLabel} no Google
                  </p>
                  <p className="text-ink-subtle text-xs">{siteConfig.rating.reviewsLabel}</p>
                </div>
              </div>

              <a
                href={mapsLinks.place}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line text-mata hover:border-oliva inline-flex h-11 items-center justify-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors"
              >
                Ver no mapa
                <Icon name="arrowUpRight" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
