import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "className" | "children">;

/** Limitador horizontal responsivo. Use como wrapper de toda section. */
export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const sizes = { narrow: "max-w-3xl", default: "max-w-5xl", wide: "max-w-7xl" };

  return (
    <Tag className={cn("container-page", sizes[size], className)} {...rest}>
      {children}
    </Tag>
  );
}
