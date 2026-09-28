import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps<T extends ElementType> = {
  as?: T;
  id?: string;
  tone?: "default" | "soft" | "raised" | "dark" | "wood";
  padding?: "sm" | "md" | "lg";
  withDivider?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "className" | "children" | "id">;

const tones = {
  default: "bg-canvas",
  soft: "bg-canvas-soft",
  raised: "bg-surface",
  dark: "bg-mata text-papel",
  wood: "bg-madeira text-creme",
} as const;

const paddings = {
  sm: "py-12 sm:py-16",
  md: "py-18 sm:py-24",
  lg: "py-20 sm:py-28 lg:py-36",
} as const;

/** Bloco vertical de conteudo, com ritmo de espacamento consistente. */
export function Section<T extends ElementType = "section">({
  as,
  id,
  tone = "default",
  padding = "md",
  withDivider = false,
  className,
  children,
  ...rest
}: SectionProps<T>) {
  const Tag = (as ?? "section") as ElementType;

  return (
    <Tag
      id={id}
      className={cn(
        "relative scroll-mt-20 overflow-hidden",
        paddings[padding],
        tones[tone],
        withDivider && "border-line border-y",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <header
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase",
            dark ? "text-musgo" : "text-oliva",
          )}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl",
          dark ? "text-papel" : "text-mata",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            dark ? "text-papel/70" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
