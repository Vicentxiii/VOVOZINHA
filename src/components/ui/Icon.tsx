import type { SVGProps } from "react";

import type { IconName } from "@/types";

const paths: Record<IconName, React.ReactNode> = {
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-15 0 9-5 15-13 15" />
      <path d="M8 16c2-3 5-5 8-6" />
    </>
  ),
  tree: (
    <>
      <path d="M12 21v-5" />
      <path d="M12 3 5.5 12h13L12 3Z" />
      <path d="M12 8 7 15.5h10L12 8Z" />
    </>
  ),
  cheese: (
    <>
      <path d="M3 17.5 20 10 21 17.5 4 20Z" />
      <path d="M3 17.5 8 8l12 2-8 2.5" />
      <circle cx="9" cy="15" r="1" />
      <circle cx="14" cy="16.5" r="0.8" />
      <circle cx="18" cy="14.5" r="0.7" />
    </>
  ),
  basket: (
    <>
      <path d="M3.5 9h17l-1.6 10.2a1.5 1.5 0 0 1-1.5 1.3H6.6a1.5 1.5 0 0 1-1.5-1.3L3.5 9Z" />
      <path d="M8 9 11 3.5" />
      <path d="M16 9 13 3.5" />
      <path d="M9.5 13v4M14.5 13v4" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.5a3 3 0 0 1 0 5.6" />
      <path d="M17.5 13.8c2.1.7 3.5 2.4 3.5 4.7" />
    </>
  ),
  cup: (
    <>
      <path d="M4.5 7.5h12v7a4.5 4.5 0 0 1-9 0v-7Z" />
      <path d="M16.5 9h1.8a2.2 2.2 0 0 1 0 4.4h-1.8" />
      <path d="M4 21h13" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5h3.5L8 6h8l1.5 2.5H21v10H3v-10Z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-10.5A7 7 0 0 0 5 10.5C5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  whatsapp: <path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1-4.2A8.5 8.5 0 1 1 20.5 12Z" />,
  star: <path d="m12 4 2.3 4.9 5.2.7-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2L4.5 9.6l5.2-.7L12 4Z" />,
  arrowRight: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h5.5" />
    </>
  ),
  quote: (
    <>
      <path d="M9.5 6.5C6.9 7.7 5.5 10 5.5 13v4.5h5V12H8.2c.2-1.4 1-2.4 2.4-2.9l-1.1-2.6Z" />
      <path d="M18.5 6.5C15.9 7.7 14.5 10 14.5 13v4.5h5V12h-2.3c.2-1.4 1-2.4 2.4-2.9l-1.1-2.6Z" />
    </>
  ),
  shop: (
    <>
      <path d="M4 9.5V20h16V9.5" />
      <path d="M3 9.5 4.8 4h14.4L21 9.5" />
      <path d="M3 9.5a2.6 2.6 0 0 0 5 0 2.6 2.6 0 0 0 4 0 2.6 2.6 0 0 0 4 0 2.6 2.6 0 0 0 5 0" />
      <path d="M9.5 20v-5.5h5V20" />
    </>
  ),
  milk: (
    <>
      <path d="M9 2.5h6" />
      <path d="M9.6 2.5v3.2L7.2 9.4A3 3 0 0 0 6.6 11.3V20a1.5 1.5 0 0 0 1.5 1.5h7.8A1.5 1.5 0 0 0 17.4 20v-8.7a3 3 0 0 0-.6-1.9l-2.4-3.7V2.5" />
      <path d="M6.6 13.5h10.8" />
    </>
  ),
  jar: (
    <>
      <path d="M7 3.5h10" />
      <path d="M7.6 3.5v2.2c0 .8-.6 1.1-1.1 1.6-.5.5-.7 1-.7 1.6V19a2 2 0 0 0 2 2h7.4a2 2 0 0 0 2-2V8.9c0-.6-.2-1.1-.7-1.6-.5-.5-1.1-.8-1.1-1.6V3.5" />
      <path d="M5.8 12.5h12.4" />
    </>
  ),
  bowl: (
    <>
      <path d="M3 11h18a9 9 0 0 1-9 8.5A9 9 0 0 1 3 11Z" />
      <path d="M8.5 8.5c0-1.4 1.1-2 2.2-2M12 8c0-2 1.3-3 2.6-3" />
      <path d="M2 20.5h20" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 16.5 19.2 19l2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.5Z" />
    </>
  ),
};

const filled: Partial<Record<IconName, boolean>> = { star: true };

export function Icon({
  name,
  className = "size-5",
  strokeWidth = 1.5,
  ...rest
}: { name: IconName; className?: string; strokeWidth?: number } & Omit<
  SVGProps<SVGSVGElement>,
  "name"
>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled[name] ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
