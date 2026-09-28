export default function Loading() {
  return (
    <div className="grid min-h-dvh place-items-center" role="status" aria-live="polite">
      <span className="border-line border-t-brand-400 size-8 animate-spin rounded-full border-2" />
      <span className="sr-only">Carregando</span>
    </div>
  );
}
