import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — queijos artesanais em Extrema, Minas Gerais`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#263a27",
        padding: "72px",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#e9e0cc",
            color: "#263a27",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          V
        </div>
        <span style={{ fontSize: 30, color: "#e9e0cc", letterSpacing: 2 }}>LATICÍNIO</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <span
          style={{
            fontSize: 72,
            lineHeight: 1.06,
            color: "#f4f0e6",
            letterSpacing: -1,
          }}
        >
          O sabor de Minas, feito para ser lembrado.
        </span>
        <span style={{ fontSize: 28, color: "#a9ae8d", maxWidth: 880 }}>
          Queijos artesanais e uma experiência rural em Extrema, Minas Gerais.
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontFamily: "sans-serif",
          fontSize: 24,
          color: "#e9e0cc",
        }}
      >
        <span>Estrada Municipal Pedro Rosa da Silva, 51</span>
        <span style={{ color: "#7b8158" }}>|</span>
        <span>Todos os dias · 08h às 18h</span>
      </div>
    </div>,
    { ...size },
  );
}
