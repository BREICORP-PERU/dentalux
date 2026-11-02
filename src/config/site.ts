export type VerificationStatus = "confirmed" | "pending";

export type DocumentationStatus = "documented" | "pending";

export type PublicationStatus = "approved" | "pending";

export type TreatmentVariant = {
  title: string;
  description: string;
  documentationStatus: DocumentationStatus;
};

export type Service = {
  title: string;
  category?: string;
  badge?: string;
  description: string;
  icon: string;
  image: string;
  status: VerificationStatus;
  documentationStatus: DocumentationStatus;
  publicationStatus: PublicationStatus;
  variants: readonly TreatmentVariant[];
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
  category?: string;
  span?: "wide" | "normal";
};

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  treatment?: string;
  status: "confirmed";
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
    "Clínica dental ubicada en Tingo María, Huánuco. Encuentra la ubicación y solicita una cita mediante el canal oficial de DentaLux.",
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
    channel: "Canal oficial de reservas",
  },
  institutional: {
    documentationStatus: "documented" as const,
    publicationStatus: "approved" as const,
    trajectory: {
      years: 7,
      claim: "Más de 7 años cuidando sonrisas con excelencia",
      lead: "Más de 7 años",
      focus: "cuidando sonrisas con excelencia",
    },
    presentation:
      "DentaLux se dedica al cuidado de la salud bucal mediante una atención odontológica integral, profesional y personalizada.",
    philosophy:
      "Su filosofía combina experiencia profesional, tecnología moderna y trato humano, priorizando la salud, la comodidad y el bienestar de sus pacientes.",
    values: ["Experiencia", "Tecnología", "Compromiso", "Innovación", "Transparencia", "Confianza"],
    mission: {
      status: "pending" as const,
      text: null,
    },
    vision: {
      status: "pending" as const,
      text: null,
    },
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
  services: [
    {
      title: "Implantes Dentales",
      category: "Rehabilitación Oral",
      badge: "Rehabilitación",
      description:
        "Alternativas de rehabilitación oral orientadas a recuperar la funcionalidad y la estética de la sonrisa mediante una planificación personalizada.",
      icon: "shield",
      image: "/tratamientos/implante.webp",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [
        {
          title: "Implantes unitarios",
          description: "Sustituyen una pieza dental perdida mediante un implante que sirve de soporte para una corona.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Implantes múltiples",
          description: "Permiten reemplazar varias piezas dentales mediante implantes que soportan coronas o puentes.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Prótesis híbridas sobre implantes",
          description: "Rehabilitación fija para pacientes que han perdido todos o la mayoría de los dientes de una arcada.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Sobredentaduras",
          description: "Prótesis removibles sostenidas mediante implantes para aportar mayor retención y estabilidad.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Injerto óseo",
          description: "Procedimiento para recuperar o aumentar el volumen de hueso cuando es insuficiente para determinados tratamientos con implantes.",
          documentationStatus: "documented" as const,
        },
      ],
    },
    {
      title: "Ortodoncia",
      category: "Alineación y Mordida",
      badge: "Alineación",
      description:
        "Tratamientos para corregir la posición dental y las alteraciones de la mordida mediante una planificación individualizada.",
      icon: "smile",
      image: "/tratamientos/ortodoncia.webp",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [
        {
          title: "Brackets convencionales",
          description: "Alternativa de ortodoncia documentada por DentaLux y sujeta a planificación individualizada.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Brackets de zafiro",
          description: "Alternativa de ortodoncia documentada por DentaLux y sujeta a planificación individualizada.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Brackets autoligados metálicos",
          description: "Alternativa de ortodoncia documentada por DentaLux y sujeta a planificación individualizada.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Brackets autoligados estéticos",
          description: "Alternativa de ortodoncia documentada por DentaLux y sujeta a planificación individualizada.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Alineadores transparentes",
          description: "Alternativa de ortodoncia documentada por DentaLux y sujeta a planificación individualizada.",
          documentationStatus: "documented" as const,
        },
      ],
    },
    {
      title: "Periodoncia",
      category: "Salud Gingival",
      badge: "Salud de Encías",
      description:
        "Atención orientada a prevenir, diagnosticar y tratar enfermedades de las encías y de los tejidos de soporte dental.",
      icon: "activity",
      image: "/tratamientos/gingivoplastia.webp",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [
        {
          title: "Gingivitis",
          description: "Atención periodontal para casos de gingivitis, según la evaluación profesional de cada paciente.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Periodontitis",
          description: "Atención periodontal para casos de periodontitis, de acuerdo con una evaluación individual.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Limpieza dental profesional",
          description: "Procedimiento profesional de higiene bucal incluido en la atención periodontal documentada.",
          documentationStatus: "documented" as const,
        },
      ],
    },
    {
      title: "Blanqueamiento",
      category: "Estética Dental",
      badge: "Estética",
      description:
        "Procedimiento estético orientado a aclarar la tonalidad dental y devolver el brillo natural a tu sonrisa bajo supervisión profesional.",
      icon: "sparkles",
      image: "/tratamientos/blanqueamiento.webp",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [
        {
          title: "Blanqueamiento en clínica",
          description: "Protocolo clínico supervisado con activación lumínica para resultados visibles y seguros.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Aclaramiento ambulatorio",
          description: "Tratamiento guiado por el especialista mediante férulas personalizadas para uso en casa.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Control y mantenimiento",
          description: "Recomendaciones y pautas preventivas para preservar la luminosidad del esmalte dental.",
          documentationStatus: "documented" as const,
        },
      ],
    },
    {
      title: "Diseño de sonrisa",
      category: "Armonización Dental",
      badge: "Armonización",
      description:
        "Planificación estética integral que armoniza forma, tamaño, proporción y color dental de acuerdo con la fisonomía facial del paciente.",
      icon: "palette",
      image: "/tratamientos/diseñosonrisa.webp",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [
        {
          title: "Evaluación estética personalizada",
          description: "Estudio minucioso de la línea de la sonrisa, contorno gingival y proporción dental.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Carillas y microcarillas",
          description: "Soluciones estéticas conservadoras para corregir anomalías de forma, color y espaciado.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Contorneado cosmético",
          description: "Ajuste delicado y conservador de bordes para lograr equilibrio y simetría.",
          documentationStatus: "documented" as const,
        },
      ],
    },
    {
      title: "Ortopedia",
      category: "Desarrollo y Prevención",
      badge: "Ortopedia Dentofacial",
      description:
        "Atención interceptiva orientada a guiar el crecimiento armónico de los maxilares y prevenir discrepancias esqueléticas en etapas tempranas.",
      icon: "compass",
      image: "/tratamientos/ortopedia.webp",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [
        {
          title: "Ortopedia funcional",
          description: "Aparatología diseñada para modular y estimular el crecimiento adecuado de los huesos maxilares.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Corrección interceptiva",
          description: "Detección y tratamiento oportuno de alteraciones de la mordida y discrepancias de desarrollo.",
          documentationStatus: "documented" as const,
        },
        {
          title: "Guía de erupción dental",
          description: "Supervisión del recambio dentario para optimizar la alineación y el espacio disponible.",
          documentationStatus: "documented" as const,
        },
      ],
    },
  ] satisfies Service[],
  specialists: [] as Specialist[],
  // Galería de tratamientos de DentaLux
  gallery: [
    {
      src: "/tratamientos/implante.webp",
      alt: "Rehabilitación con implantes dentales en DentaLux",
      label: "Implantes Dentales",
      category: "Rehabilitación Oral",
      note: "Alternativa de rehabilitación fija para recuperar la función masticatoria y la estética de la sonrisa.",
      span: "wide" as const,
    },
    {
      src: "/tratamientos/ortodoncia.webp",
      alt: "Tratamiento de ortodoncia y alineación dental en DentaLux",
      label: "Ortodoncia y Brackets",
      category: "Alineación y Mordida",
      note: "Corrección de la posición dental y de la mordida mediante planificación individualizada.",
      span: "normal" as const,
    },
    {
      src: "/tratamientos/gingivoplastia.webp",
      alt: "Cuidado periodontal y salud gingival en DentaLux",
      label: "Periodoncia y Encías",
      category: "Salud Gingival",
      note: "Atención orientada a la salud de las encías y los tejidos de soporte dental.",
      span: "normal" as const,
    },
    {
      src: "/tratamientos/blanqueamiento.webp",
      alt: "Tratamiento de blanqueamiento dental en DentaLux",
      label: "Blanqueamiento Dental",
      category: "Estética Dental",
      note: "Procedimiento profesional supervisado para aclarar la tonalidad y devolver luminosidad al esmalte.",
      span: "normal" as const,
    },
    {
      src: "/tratamientos/ortopedia.webp",
      alt: "Ortopedia maxilar y atención preventiva en DentaLux",
      label: "Ortopedia Maxilar",
      category: "Desarrollo y Prevención",
      note: "Atención preventiva orientada a guiar el desarrollo óseo maxilofacial en etapas de crecimiento.",
      span: "normal" as const,
    },
    {
      src: "/tratamientos/diseñosonrisa.webp",
      alt: "Diseño de sonrisa y armonización estética en DentaLux",
      label: "Diseño de Sonrisa",
      category: "Armonización Facial",
      note: "Planificación estética integral considerando las proporciones faciales y la simetría de la sonrisa.",
      span: "wide" as const,
    },
  ] satisfies GalleryItem[],
  // Espacio preparado para futura galería independiente de instalaciones y profesionales
  facilitiesGallery: [] as GalleryItem[],
  faqs: [
    {
      question: "¿Cómo puedo reservar una cita en DentaLux?",
      answer:
        "Usa el botón «Reservar cita» en cualquier sección de esta página. Te llevará al canal oficial proporcionado por DentaLux para solicitar disponibilidad.",
      category: "Reservas",
    },
    {
      question: "¿Dónde está ubicada DentaLux Clínica Dental?",
      answer:
        "Estamos en Pucallpa 245, Tingo María, Huánuco, Perú. Puedes abrir el mapa interactivo desde la sección de Ubicación para obtener indicaciones precisas.",
      category: "Ubicación",
    },
    {
      question: "¿Cómo consulto por un tratamiento específico?",
      answer:
        "Indica el motivo de tu consulta al reservar. La clínica confirmará directamente la disponibilidad del tratamiento y la evaluación necesaria.",
      category: "Consultas",
    },
    {
      question: "¿Cuál es el horario de atención?",
      answer:
        "El horario todavía está pendiente de validación para esta web. Confírmalo mediante el canal oficial de reservas antes de acudir.",
      category: "Horarios",
    },
  ] satisfies FaqItem[],
  testimonials: [] as Testimonial[],
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
