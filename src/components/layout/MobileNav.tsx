"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { contactLinks, siteConfig } from "@/lib/site";

/**
 * Menu do mobile. Unico componente "use client" do layout, junto do Header.
 * Fecha ao navegar, ao apertar Escape e ao clicar fora.
 *
 * `scrolled` espelha o estado do header para o botao ficar legivel sobre a
 * foto do hero.
 */
export function MobileNav({ scrolled = false }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
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

      <div
        id="menu-mobile"
        hidden={!open}
        className="animate-fade-in bg-papel/98 fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto backdrop-blur-xl"
      >
        <nav aria-label="Navegação principal" className="container-page flex flex-col gap-1 py-8">
          {siteConfig.nav.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-mata animate-fade-up border-line font-display flex items-center justify-between border-b py-5 text-2xl"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {item.label}
              <Icon name="arrowRight" className="text-oliva size-5" />
            </a>
          ))}

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={siteConfig.cta.arrive.href}
              onClick={() => setOpen(false)}
              className="bg-mata text-papel grid h-13 place-items-center rounded-full text-sm font-semibold"
            >
              {siteConfig.cta.arrive.label}
            </a>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-mata border-line grid h-13 place-items-center rounded-full border text-sm font-semibold"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
