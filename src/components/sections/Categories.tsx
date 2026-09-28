import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { categories } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Faixa de categorias logo abaixo do hero.
 *
 * Cinco itens em uma linha, com divisórias verticais, como no desenho de
 * referência. No celular a faixa vira rolagem horizontal com encaixe, para
 * os cinco caberem sem espremer o texto.
 */
export function Categories() {
  return (
    <section className="border-line bg-creme border-b" aria-label="Categorias de produtos">
      <Container size="wide" className="px-0">
        <ul
          className={cn(
            "snap-x snap-mandatory overflow-x-auto",
            "flex items-stretch justify-between",
            "sm:grid sm:grid-cols-5 sm:overflow-x-visible",
          )}
        >
          {categories.map((category) => (
            <li
              key={category.name}
              className="border-line w-1/2 shrink-0 snap-center border-r last:border-r-0 sm:w-auto"
            >
              <a
                href={category.href}
                className="group hover:bg-surface/50 flex flex-col items-center gap-3 px-3 py-7 text-center transition-colors duration-500 sm:px-4 sm:py-8"
              >
                <Icon
                  name={category.icon}
                  strokeWidth={1.3}
                  className="text-veu/65 group-hover:text-veu size-8 transition-colors duration-500 sm:size-9"
                />
                <span className="text-veu text-[0.6875rem] font-bold tracking-[0.12em] uppercase sm:text-xs">
                  {category.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
