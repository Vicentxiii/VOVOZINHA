"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { contactLinks, siteConfig } from "@/lib/site";

/**
 * Menu do mobile. Unico componente "use client" do layout, junto do Header.
 * Usa createPortal para renderizar direto no body, evitando ser contido por
 * backdrop-filter ou restrições de altura do Header.
 * Fecha ao navegar, ao apertar Escape e ao clicar no botão fechar.
 */
export function MobileNav({ scrolled = false }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className={cn(
          "grid size-11 place-items-center rounded-full transition-all duration-500",
          scrolled
            ? "border-line text-mata border"
            : "border-papel/30 bg-papel/10 text-papel border backdrop-blur-md",
        )}
      >
        <Icon name={open ? "close" : "menu"} className="size-5" />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal de navegação"
            className="animate-fade-in bg-papel fixed inset-0 z-[100] flex flex-col backdrop-blur-2xl"
          >
            {/* Topbar alinhada com a barra do Header */}
            <div className="border-line/70 flex h-20 shrink-0 items-center justify-between border-b px-5 sm:px-8">
              <a
                href="#top"
                onClick={() => setOpen(false)}
                aria-label={`${siteConfig.name} — início`}
                className="shrink-0 rounded-xl"
              >
                <Logo height={48} />
              </a>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="border-line text-mata bg-papel/80 hover:bg-creme/50 grid size-11 place-items-center rounded-full border shadow-xs transition-colors"
              >
                <Icon name="close" className="size-5" />
              </button>
            </div>

            {/* Conteúdo rolável com toque confortável */}
            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
              <nav aria-label="Navegação principal mobile" className="flex flex-col gap-1">
                {siteConfig.nav.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-line/60 font-display text-mata hover:text-folha flex items-center justify-between border-b py-4.5 text-2xl transition-colors"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span>{item.label}</span>
                    <Icon name="arrowRight" className="text-oliva size-5" />
                  </a>
                ))}

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={siteConfig.cta.arrive.href}
                    onClick={() => setOpen(false)}
                    className="bg-mata text-papel hover:bg-folha grid h-13 place-items-center rounded-full text-sm font-semibold shadow-md transition-colors"
                  >
                    {siteConfig.cta.arrive.label}
                  </a>
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="border-line bg-surface text-mata hover:bg-canvas-soft grid h-13 place-items-center rounded-full border text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Icon name="whatsapp" className="size-4.5" />
                      Falar no WhatsApp
                    </span>
                  </a>
                </div>

                {/* Informações rápidas de apoio */}
                <div className="border-line/60 text-ink-muted mt-8 flex flex-col gap-1.5 border-t pt-6 text-xs">
                  <p className="text-mata font-semibold">{siteConfig.name}</p>
                  <p>
                    {siteConfig.address.street} • {siteConfig.address.city} -{" "}
                    {siteConfig.address.state}
                  </p>
                  <p>{siteConfig.hours.label}</p>
                </div>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
