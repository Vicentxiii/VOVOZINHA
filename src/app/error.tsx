"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[60dvh] flex-col items-center justify-center gap-5 text-center">
      <p className="text-terra font-mono text-sm">500</p>
      <h1 className="font-display text-mata text-4xl sm:text-5xl">Algo deu errado</h1>
      <p className="text-ink-muted max-w-md leading-relaxed">
        Não conseguimos carregar esta página. Tente novamente em instantes.
      </p>
      <Button onClick={reset}>Tentar novamente</Button>
    </div>
  );
}
