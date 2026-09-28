import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap " +
  "transition-[color,background-color,border-color,box-shadow,transform] duration-300 " +
  "ease-[var(--ease-out-quint)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-mata text-papel shadow-lift hover:bg-folha hover:shadow-glow",
  secondary: "bg-surface text-mata border border-line hover:border-oliva hover:bg-linho",
  outline: "border border-oliva/50 text-mata hover:bg-mata/6 hover:border-mata",
  ghost: "text-ink-muted hover:bg-mata/6 hover:text-mata",
  light: "bg-papel text-mata hover:bg-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-[0.9375rem]",
};

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = SharedProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type NativeButtonProps = SharedProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children" | "type">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function classes({
  variant = "primary",
  size = "md",
  className,
}: Pick<SharedProps, "variant" | "size" | "className">): string {
  return cn(base, variants[variant], sizes[size], className);
}

function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

/**
 * Botao que renderiza `<a>` quando recebe `href` e `<button>` caso contrario,
 * mantendo a mesma aparencia. Sem "asChild" e sem dependencias extras.
 */
export function Button(props: ButtonProps): ReactNode {
  const { variant, size, className, children } = props;

  if (props.href !== undefined) {
    const { href, external, ...rest } = props;
    const anchorProps = {
      ...rest,
      className: classes({ variant, size, className }),
    };

    if (isExternalHref(href) || external) {
      return (
        <a href={href} rel="noopener noreferrer" target="_blank" {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props;

  return (
    <button type={type} className={classes({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

export function ButtonIcon({
  as: Tag = "span",
  className,
  ...rest
}: { as?: ElementType; className?: string } & ComponentPropsWithoutRef<"span">) {
  return <Tag aria-hidden="true" className={cn("inline-flex", className)} {...rest} />;
}
