import localFont from "next/font/local";

/**
 * Golden Hills Script — fonte manuscrita da identidade.
 *
 * Arquivo original em `src/fonts/GoldenHills-DEMO.ttf` (TrueType, 45 KB),
 * extraído de `golden_hills.zip` (Creative Market, Iqbal Habibi).
 *
 * next/font/local converte para woff2, gera o @font-face com
 * font-display: swap e remove a requisição externa — a fonte é servida
 * pelo próprio site, sem depender de CDN de terceiro.
 *
 * ATENÇÃO — LICENÇA: o arquivo se chama DEMO. Antes de publicar, confirme
 * a licença comercial com o autor. Enquanto isso, a Kaushan Script
 * (OFL, livre para uso comercial) está no fim da pilha como reserva.
 */
const goldenHills = localFont({
  src: "../fonts/GoldenHills-DEMO.ttf",
  display: "swap",
  variable: "--font-manuscrita",
  weight: "400",
  style: "normal",
  fallback: ["Kaushan Script", "Segoe Script", "Bradley Hand", "cursive"],
});

export const fontManuscrita = goldenHills;
