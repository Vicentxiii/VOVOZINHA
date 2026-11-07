import { Icon } from "@/components/ui/Icon";
import { categories } from "@/content/home";

/**
 * Faixa de categorias logo abaixo do hero.
 *
 * Carrossel infinito com movimento sutil para a esquerda (marquee contínuo),
 * elegante e responsivo (Mobile First), pausando ao tocar ou passar o cursor.
 */
export function Categories() {
  // Duplicamos os itens para garantir um looping infinito matematicamente contínuo (0 a -50%)
  const marqueeItems = [...categories, ...categories, ...categories, ...categories];

  return (
    <section
      className="border-line bg-creme relative overflow-hidden border-b select-none"
      aria-label="Categorias de produtos"
    >
      {/* Degradês laterais sutis para entrada e saída suave dos ícones */}
      <div
        aria-hidden="true"
        className="from-creme pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r to-transparent sm:w-16"
      />
      <div
        aria-hidden="true"
        className="from-creme pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l to-transparent sm:w-16"
      />

      {/* Trilho animado infinito */}
      <div className="animate-marquee-categorias flex w-max hover:[animation-play-state:paused] active:[animation-play-state:paused]">
        {marqueeItems.map((category, index) => {
          const isDuplicate = index >= categories.length;

          return (
            <div
              key={`${category.name}-${index}`}
              className="border-line/70 flex-none border-r"
              aria-hidden={isDuplicate ? "true" : undefined}
            >
              <a
                href={category.href}
                tabIndex={isDuplicate ? -1 : 0}
                className="group hover:bg-surface/60 flex w-36 flex-col items-center gap-2.5 px-3 py-6 text-center transition-colors duration-300 sm:w-44 sm:gap-3 sm:py-7 md:w-52 md:py-8"
              >
                <Icon
                  name={category.icon}
                  strokeWidth={1.3}
                  className="text-veu/70 group-hover:text-mata size-8 transition-transform duration-300 group-hover:scale-110 sm:size-9"
                />
                <span className="text-veu font-display group-hover:text-mata text-[0.6875rem] font-bold tracking-[0.14em] uppercase transition-colors sm:text-xs">
                  {category.name}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
