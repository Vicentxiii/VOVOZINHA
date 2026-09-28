import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Kaushan_Script, Manrope } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { fontManuscrita } from "@/app/fonts";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const description = siteConfig.seo.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "food",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#171a16" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/** Dados estruturados do estabelecimento (schema.org LocalBusiness). */
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-script",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: siteConfig.name,
  description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneDisplay,
  image: `${siteConfig.url}/opengraph-image`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.countryCode,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.score,
    reviewCount: siteConfig.rating.reviews,
    bestRating: 5,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: siteConfig.hours.opens,
    closes: siteConfig.hours.closes,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.name}, ${siteConfig.address.street}, ${siteConfig.address.city} - ${siteConfig.address.state}`,
  )}`,
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${manrope.variable} ${dmSerif.variable} ${kaushan.variable} ${fontManuscrita.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-canvas text-ink antialiased">
        <script
          type="application/ld+json"
          // Schema.org gerado no servidor a partir da configuracao central.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <a
          href="#conteudo"
          className="focus:bg-mata focus:text-papel sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:h-auto focus:w-auto focus:rounded-full focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:[clip:auto]"
        >
          Pular para o conteúdo
        </a>

        <div className="flex min-h-dvh flex-col">
          <Header />
          {/* Espaco reservado para a barra fixa inferior do mobile. */}
          <main id="conteudo" className="flex-1 pb-20 md:pb-0">
            {props.children}
          </main>
          <Footer />
        </div>

        <MobileBar />
      </body>
    </html>
  );
}
