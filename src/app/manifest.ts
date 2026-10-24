import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.identity.colors.white,
    theme_color: siteConfig.identity.colors.black,
    lang: siteConfig.language,
    categories: ["health", "medical"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Reservar cita",
        short_name: "Reservar",
        description: "Abrir el canal oficial de reservas de DentaLux",
        url: siteConfig.reservations.url,
      },
      {
        name: "Cómo llegar",
        short_name: "Mapa",
        description: siteConfig.address.full,
        url: siteConfig.maps.shareUrl,
      },
    ],
  };
}
