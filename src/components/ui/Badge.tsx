import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "neutral" | "brand" | "earth" | "onDark";
  children: ReactNode;
};

const tones = {
  neutral: "border-line bg-surface/70 text-ink-muted",
  brand: "border-folha/25 bg-folha/10 text-folha",
  earth: "border-terra/25 bg-terra/10 text-madeira",
  onDark: "border-papel/20 bg-papel/10 text-papel/80",
} as const;

export function Badge({ tone = "neutral", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.16em] uppercase",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
