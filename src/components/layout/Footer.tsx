import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { contactLinks, mapsLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const { address, contact, hours } = siteConfig;

  return (
    <footer className="bg-mata text-papel relative overflow-hidden">
      <span aria-hidden="true" className="wood pointer-events-none absolute inset-0 opacity-40" />
      <span
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
      />

      <Container size="wide" className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-5">
            <Logo height={104} />
            <p className="text-papel/65 text-sm leading-relaxed">
              Queijos artesanais, tradição familiar e o sabor do campo em Extrema, Minas Gerais.
            </p>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border-papel/25 text-papel hover:bg-papel/10 inline-flex h-11 w-fit items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors"
            >
              <Icon name="whatsapp" className="size-4" />
              Falar no WhatsApp
            </a>
          </div>

          <nav aria-label="Seções do site" className="flex flex-col gap-3.5">
            <p className="text-papel/45 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
              Explore
            </p>
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-papel/80 hover:text-papel w-fit text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={mapsLinks.place}
              target="_blank"
              rel="noopener noreferrer"
              className="text-papel/80 hover:text-papel flex w-fit items-center gap-2 text-sm transition-colors"
            >
              <Icon name="mapPin" className="size-4" />
              Ver no mapa
            </a>
          </nav>

          <div className="flex flex-col gap-3.5">
            <p className="text-papel/45 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
              Onde estamos
            </p>
            <address className="text-papel/80 flex flex-col gap-1 text-sm leading-relaxed not-italic">
              <span>{address.street}</span>
              <span>
                {address.city} — {address.state}
              </span>
              <span>CEP {address.zip}</span>
            </address>
            <p className="text-papel/80 flex items-center gap-2 text-sm">
              <Icon name="clock" className="size-4 shrink-0" />
              {hours.label}
            </p>
            <a
              href={contactLinks.phone}
              className="text-papel/80 hover:text-papel flex w-fit items-center gap-2 text-sm transition-colors"
            >
              <Icon name="phone" className="size-4 shrink-0" />
              {contact.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="border-papel/12 mt-14 flex flex-col gap-3 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-papel/50 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-papel/40 font-mono text-[0.6875rem] tracking-wide">
            {address.plusCode}
          </p>
        </div>
      </Container>
    </footer>
  );
}
