import { Icon } from "@/components/ui/Icon";
import { contactLinks, siteConfig } from "@/lib/site";

/**
 * Barra fixa inferior do mobile, exigida no briefing: "como chegar" e
 * "WhatsApp" precisam estar acessíveis durante toda a navegacao.
 * O layout reserva espaco para ela via padding no <body>.
 */
export function MobileBar() {
  return (
    <div
      className="border-line bg-papel/95 fixed inset-x-0 bottom-0 z-50 border-t backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-4 py-3">
        <a
          href={siteConfig.cta.arrive.href}
          className="border-line text-mata flex h-12 items-center justify-center gap-2 rounded-full border text-sm font-semibold"
        >
          <Icon name="mapPin" className="size-4" />
          Como chegar
        </a>
        <a
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mata text-papel flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold"
        >
          <Icon name="whatsapp" className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
