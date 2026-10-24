export type VerificationStatus = "confirmed" | "pending";

export type Service = {
  title: string;
  description: string;
  status: "confirmed";
};

export type Specialist = {
  name: string;
  role: string;
  bio: string;
  image: string;
  status: "confirmed";
};

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  note: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

const GOOGLE_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.0883794176174!2d-76.00107762849078!3d-9.296528942389745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6413fc777b68f%3A0x45fa6947ec8ff023!2sDentaLux%20Cl%C3%ADnica%20Dental!5e0!3m2!1ses-419!2spe!4v1792777229003!5m2!1ses-419!2spe";

export const siteConfig = {
  name: "DentaLux Clínica Dental",
  shortName: "DentaLux",
  legalName: "DentaLux Clínica Dental",
  description:
    "Clínica dental ubicada en Tingo María, Huánuco. Reserva tu cita mediante el canal oficial de DentaLux.",
  locale: "es_PE",
  language: "es-PE",
  domain: null as string | null,
  identity: {
    status: "logo-derived" as const,
    logoStatus: "provided" as const,
    notice: "Identidad basada en el logotipo oficial",
    colors: {
      primary: "#D0B052",
      light: "#F0E17A",
      dark: "#7E6525",
      black: "#111111",
      white: "#FFFFFF",
      soft: "#FAF7ED",
    },
  },
  address: {
    status: "confirmed" as const,
    street: "Pucallpa 245",
    locality: "Tingo María",
    region: "Huánuco",
    country: "Perú",
    countryCode: "PE",
    postalCode: "10131",
    full: "Pucallpa 245, Tingo María, Huánuco, Perú",
  },
  phone: {
    status: "pending" as VerificationStatus,
    display: "942 877 890",
    e164: "+51942877890",
    note: "Teléfono publicado en la ficha de Google; pendiente de confirmación directa.",
  },
  reservations: {
    status: "confirmed" as const,
    url: "https://bit.ly/DENTALUXCITAS",
    label: "Reservar cita",
    verifiedDestination: "WhatsApp +51 942 877 890",
  },
  hours: {
    status: "pending" as VerificationStatus,
    publicReference: "Lunes a sábado, 8:00–13:00 y 15:00–20:00",
    display: "Confirma el horario disponible al reservar",
  },
  social: {
    facebook: "https://www.facebook.com/DENTALUXTINGOMARIA",
    instagram: "https://www.instagram.com/dentalux22",
    tiktok: "https://www.tiktok.com/@dentalux.clinicadental",
  },
  maps: {
    shareUrl: "https://share.google/RYy2pS0tyfms2ffJp",
    embedUrl: GOOGLE_MAP_EMBED,
    latitude: -9.2965885,
    longitude: -76.0010555,
  },
  services: [] as Service[],
  specialists: [] as Specialist[],
  gallery: [
    {
      src: "/dentalux-space.svg",
      alt: "Ilustración provisional de un espacio de atención de DentaLux",
      label: "Espacios DentaLux",
      note: "Ilustración provisional; fotografía pendiente de aprobación.",
    },
    {
      src: "/dentalux-care.svg",
      alt: "Ilustración provisional sobre atención dental en DentaLux",
      label: "Atención cercana",
      note: "Ilustración provisional; fotografía pendiente de aprobación.",
    },
  ] satisfies GalleryItem[],
  faqs: [
    {
      question: "¿Cómo puedo reservar una cita?",
      answer:
        "Usa el botón “Reservar cita” de esta página. Te llevará al canal oficial de reservas de DentaLux para solicitar disponibilidad.",
    },
    {
      question: "¿Dónde está ubicada DentaLux?",
      answer:
        "DentaLux Clínica Dental está en Pucallpa 245, Tingo María, Huánuco, Perú. Puedes abrir el mapa de Google desde la sección de ubicación.",
    },
    {
      question: "¿Cómo consulto por un tratamiento específico?",
      answer:
        "Indica el motivo de tu consulta al reservar. La clínica confirmará directamente la disponibilidad del tratamiento y la evaluación necesaria.",
    },
    {
      question: "¿Dónde puedo confirmar el horario de atención?",
      answer:
        "El horario todavía está pendiente de validación para esta web. Confírmalo mediante el canal oficial de reservas antes de acudir.",
    },
  ] satisfies FaqItem[],
} as const;

export function getSiteUrl(): string | null {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) return configuredUrl.replace(/\/$/, "");
  if (siteConfig.domain) return siteConfig.domain;

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  return vercelProductionUrl ? `https://${vercelProductionUrl.replace(/\/$/, "")}` : null;
}

export const socialLinks = [
  { name: "Facebook", href: siteConfig.social.facebook },
  { name: "Instagram", href: siteConfig.social.instagram },
  { name: "TikTok", href: siteConfig.social.tiktok },
] as const;
