import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getSiteUrl, siteConfig, socialLinks } from "@/config/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: {
    default: `${siteConfig.name} | Dentista en Tingo María`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    "dentista en Tingo María",
    "clínica dental Tingo María",
    "odontología Tingo María",
    "dentista Huánuco",
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "health",
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} en Tingo María`,
    description: siteConfig.description,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} en Tingo María`,
    description: siteConfig.description,
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

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  ...(siteUrl ? { "@id": `${siteUrl}/#dentist`, url: siteUrl } : {}),
  name: siteConfig.name,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.maps.latitude,
    longitude: siteConfig.maps.longitude,
  },
  hasMap: siteConfig.maps.shareUrl,
  sameAs: socialLinks.map((social) => social.href),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const safeJsonLd = (data: unknown) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language} className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 font-bold text-white transition-transform focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(dentistSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
