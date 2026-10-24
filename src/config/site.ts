export type VerificationStatus = "confirmed" | "pending";

export type Service = {
  title: string;
  description: string;
  icon: string;
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
  span?: "wide" | "normal";
};

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

const GOOGLE_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.0883794176174!2d-76.00107762849078!3d-9.296528942389745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6413fc777b68f%3A0x45fa6947ec8ff023!2sDentaLux%20Cl%C3%ADnica%20Dental!5e0!3m2!1ses-419!2spe!4v1792777229003!5m2!1ses-419!2spe";

export const siteConfig = {
  name: "DentaLux Clínica Dental",
  shortName: "DentaLux",
  legalName: "DentaLux Clínica Dental",
  description:
    "Clínica dental de confianza en Tingo María, Huánuco. Atención odontológica integral y estética con enfoque personalizado. Reserva tu cita hoy.",
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
    display: "Lun – Sáb · 8:00 – 13:00 / 15:00 – 20:00",
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
  services: [
    {
      title: "Ortodoncia",
      description:
        "Alineación dental con brackets metálicos, cerámicos o alineadores para una sonrisa perfectamente ordenada.",
      icon: "smile",
      status: "confirmed" as const,
    },
    {
      title: "Blanqueamiento Dental",
      description:
        "Tratamiento profesional para aclarar varios tonos el color de tus dientes de forma segura y eficaz.",
      icon: "sparkles",
      status: "confirmed" as const,
    },
    {
      title: "Implantes Dentales",
      description:
        "Reemplazo permanente de piezas perdidas con implantes de titanio que se integran naturalmente.",
      icon: "shield",
      status: "confirmed" as const,
    },
    {
      title: "Carillas Dentales",
      description:
        "Laminados de porcelana o resina que transforman la forma, color y tamaño de tus dientes frontales.",
      icon: "star",
      status: "confirmed" as const,
    },
    {
      title: "Limpieza Dental",
      description:
        "Profilaxis y detartraje profesional para eliminar sarro, placa bacteriana y manchas superficiales.",
      icon: "droplets",
      status: "confirmed" as const,
    },
    {
      title: "Endodoncia",
      description:
        "Tratamiento de conducto para salvar dientes con infección o daño pulpar, eliminando el dolor.",
      icon: "activity",
      status: "confirmed" as const,
    },
  ] satisfies Service[],
  specialists: [] as Specialist[],
  gallery: [
    {
      src: "/dentalux-space.svg",
      alt: "Instalaciones modernas de DentaLux Clínica Dental en Tingo María",
      label: "Nuestras instalaciones",
      span: "wide" as const,
    },
    {
      src: "/dentalux-care.svg",
      alt: "Atención odontológica personalizada en DentaLux",
      label: "Atención personalizada",
      span: "normal" as const,
    },
    {
      src: "/dentalux-care.svg",
      alt: "Equipamiento dental de última tecnología en DentaLux",
      label: "Tecnología moderna",
      span: "normal" as const,
    },
    {
      src: "/dentalux-space.svg",
      alt: "Tratamientos estéticos en DentaLux Clínica Dental",
      label: "Estética dental",
      span: "wide" as const,
    },
  ] satisfies GalleryItem[],
  faqs: [
    {
      question: "¿Cómo puedo reservar una cita en DentaLux?",
      answer:
        "Usa el botón «Reservar cita» en cualquier sección de esta página. Te redirigirá al canal oficial de WhatsApp de DentaLux (+51 942 877 890) donde podrás indicar el motivo de tu consulta y coordinar la disponibilidad.",
      category: "Reservas",
    },
    {
      question: "¿Dónde está ubicada DentaLux Clínica Dental?",
      answer:
        "Estamos en Pucallpa 245, Tingo María, Huánuco, Perú. Puedes abrir el mapa interactivo desde la sección de Ubicación para obtener indicaciones precisas.",
      category: "Ubicación",
    },
    {
      question: "¿Qué tratamientos ofrece DentaLux?",
      answer:
        "Ofrecemos ortodoncia, blanqueamiento dental, implantes, carillas, limpieza profesional y endodoncia, entre otros. Consúltanos al reservar para orientarte según tu necesidad.",
      category: "Servicios",
    },
    {
      question: "¿Cuál es el horario de atención?",
      answer:
        "Atendemos de lunes a sábado de 8:00 a 13:00 y de 15:00 a 20:00. Te recomendamos confirmar disponibilidad mediante el canal oficial de reservas antes de acudir.",
      category: "Horarios",
    },
    {
      question: "¿Qué debo llevar a mi primera consulta?",
      answer:
        "Trae tu DNI, cualquier radiografía o documentación dental anterior si la tienes, y llega unos minutos antes para completar el registro. Si tienes alguna alergia a medicamentos, infórmalo al reservar.",
      category: "Primera visita",
    },
    {
      question: "¿Ofrecen facilidades de pago?",
      answer:
        "Consulta las opciones de pago directamente con la clínica al reservar tu cita. El equipo de DentaLux te orientará sobre los planes disponibles según tu tratamiento.",
      category: "Pagos",
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
