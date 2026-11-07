"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Header sobreposto a fotografia do hero.
 *
 * No topo ele e totalmente transparente, com texto claro sobre a imagem.
 * Ao rolar, ganha fundo papel e borda, e o texto passa a escuro.
 * O mesmo vale para os botoes, que trocam de variacao.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[var(--ease-out-quint)]",
        scrolled
          ? "border-line/70 bg-papel/90 shadow-lift backdrop-blur-xl"
          : "bg-veu/40 border-b border-white/10 shadow-xs backdrop-blur-md",
      )}
    >
      <Container size="wide" className="flex h-20 items-center justify-between gap-8">
        <a
          href="#top"
          aria-label={`${siteConfig.name} — início`}
          className={cn(
            "shrink-0 rounded-xl transition-[opacity,filter] duration-500",
            scrolled ? "opacity-100" : "opacity-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]",
          )}
        >
          <Logo preload height={56} />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item, index) => {
            const active = index === 0;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative py-2 text-[0.9375rem] font-medium transition-colors duration-500",
                  scrolled
                    ? "text-ink-muted hover:text-mata"
                    : "text-papel/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] hover:text-white",
                  active && (scrolled ? "text-mata" : "text-white"),
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "bg-ouro absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-500 ease-[var(--ease-out-quint)]",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.cta.contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden h-11 items-center gap-2.5 rounded-full px-6 text-[0.875rem] font-semibold transition-all duration-500 ease-[var(--ease-out-quint)] sm:inline-flex",
              scrolled
                ? "bg-marinho text-papel hover:bg-marinho-claro"
                : "bg-marinho/85 text-papel ring-papel/25 hover:bg-marinho ring-1 backdrop-blur-md",
            )}
          >
            <Icon name="whatsapp" className="size-4.5" />
            {siteConfig.cta.contact.label}
          </a>
          <MobileNav scrolled={scrolled} />
        </div>
      </Container>
    </header>
  );
}
