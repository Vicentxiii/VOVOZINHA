import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70dvh] flex-col items-center justify-center gap-6 text-center">
      <Logo height={84} />
      <p className="text-terra font-mono text-sm">404</p>
      <h1 className="font-display text-mata text-4xl sm:text-5xl">Página não encontrada</h1>
      <p className="text-ink-muted max-w-md leading-relaxed">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Button href="/">Voltar para o início</Button>
    </div>
  );
}
