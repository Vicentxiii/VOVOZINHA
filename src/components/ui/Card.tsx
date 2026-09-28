import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: "solid" | "soft" | "outline" | "onDark";
  interactive?: boolean;
  children: ReactNode;
};

const variants = {
  solid: "bg-surface border border-line",
  soft: "bg-creme/60 border border-line/70",
  outline: "bg-transparent border border-line",
  onDark: "bg-papel/6 border border-papel/15",
} as const;

export function Card({
  variant = "solid",
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        variants[variant],
        interactive &&
          "hover:border-oliva/60 hover:shadow-lift transition-[transform,border-color,box-shadow] duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...rest }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-2 p-6", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...rest }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className={cn("font-display text-mata text-xl tracking-tight", className)} {...rest}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...rest }: ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("text-ink-muted text-sm leading-relaxed", className)} {...rest}>
      {children}
    </p>
  );
}

export function CardFooter({ className, children, ...rest }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center gap-3 p-6 pt-0", className)} {...rest}>
      {children}
    </div>
  );
}
