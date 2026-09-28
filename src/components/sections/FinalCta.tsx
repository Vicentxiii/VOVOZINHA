import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { finalCta } from "@/content/home";
import { contactLinks, mapsLinks, siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="bg-canvas relative overflow-hidden pt-4 pb-20 sm:pb-28">
      <Container size="wide">
        <div className="bg-mata text-papel reveal-scale relative overflow-hidden rounded-3xl px-7 py-16 text-center sm:px-14 sm:py-20">
          <div aria-hidden="true" className="paper absolute inset-0 opacity-30" />
          <div
            aria-hidden="true"
            className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 600 200"
            preserveAspectRatio="none"
            className="text-papel pointer-events-none absolute -bottom-6 left-0 h-1/2 w-full opacity-[0.08]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M0 150c90 0 120-60 200-60s110 60 200 60 110-40 200-40" />
            <path d="M0 180c100-10 130-46 210-46s120 46 210 46 110-30 180-34" />
          </svg>

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
            <h2 className="font-display text-papel text-4xl leading-[1.06] text-balance sm:text-5xl lg:text-6xl">
              {finalCta.title}
            </h2>
            <p className="text-papel/70 text-lg">{finalCta.description}</p>

            <div className="mt-2 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <a
                href={mapsLinks.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-papel text-mata inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full px-8 text-[0.9375rem] font-semibold transition-colors duration-300 hover:bg-white sm:w-auto"
              >
                <Icon name="mapPin" className="size-4" />
                Como chegar
              </a>
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border-papel/30 text-papel hover:bg-papel/10 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full border px-8 text-[0.9375rem] font-semibold transition-colors duration-300 sm:w-auto"
              >
                <Icon name="whatsapp" className="size-4" />
                Falar no WhatsApp
              </a>
            </div>

            <p className="text-papel/45 text-xs">
              {siteConfig.address.street} · {siteConfig.address.city} — {siteConfig.address.state}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
