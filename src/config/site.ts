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
  imageAlt: string;
  status: VerificationStatus;
  documentationStatus: DocumentationStatus;
  publicationStatus: PublicationStatus;
  showInServices?: boolean;
  variants: readonly TreatmentVariant[];
};

export type Specialist = {
  name: string;
  role: string;
  specialty: string | null;
  licenseNumber: string | null;
  bio: string | null;
  image: string | null;
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

const DENTALUX_ADDRESS = {
  street: "Jirón Pucallpa N.° 245",
  short: "Jr. Pucallpa 245",
  intermediate: "Jr. Pucallpa N.° 245, Tingo María",
  full: "Jirón Pucallpa N.° 245, Tingo María, Huánuco, Perú",
} as const;

export const siteConfig = {
  name: "DentaLux Clínica Dental",
  shortName: "DentaLux",
  legalName: "DentaLux Clínica Dental",
  description:
    "Clínica dental ubicada en Tingo María, Huánuco. Encuentra la ubicación y solicita una cita mediante el canal oficial de DentaLux.",
  locale: "es_PE",
  language: "es-PE",
  domain: "https://dentalux-ruddy.vercel.app" as string | null,
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
    ...DENTALUX_ADDRESS,
    locality: "Tingo María",
    region: "Huánuco",
    country: "Perú",
    countryCode: "PE",
  },
  phone: {
    status: "confirmed" as VerificationStatus,
    display: "+51 942 877 890",
    e164: "+51942877890",
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
    status: "confirmed" as VerificationStatus,
    display: [
      "Lunes a sábado: 8:00 a. m. a 1:00 p. m. y 3:00 p. m. a 8:00 p. m.",
      "Domingo: cerrado",
    ],
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    periods: [
      { opens: "08:00", closes: "13:00" },
      { opens: "15:00", closes: "20:00" },
    ],
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
      image: "/tratamiento/implantes-dentales.webp",
      imageAlt: "Profesionales de DentaLux durante una cirugía oral",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      showInServices: false,
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
      image: "/tratamiento/ortodoncia.webp",
      imageAlt: "Odontólogo de DentaLux durante un control de ortodoncia",
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
      title: "Limpieza dental profesional",
      category: "Salud Gingival",
      badge: "Higiene bucal",
      description: "Procedimiento de higiene bucal incluido en la atención odontológica documentada por DentaLux.",
      icon: "activity",
      image: "/tratamiento/limpieza-dental-profesional.webp",
      imageAlt: "Atención de limpieza dental profesional en DentaLux",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [],
    },
    {
      title: "Profilaxis",
      category: "Higiene Bucal",
      badge: "Prevención",
      description: "Atención de higiene bucal profesional según la evaluación de cada paciente.",
      icon: "sparkles",
      image: "/tratamiento/profilaxis.webp",
      imageAlt: "Paciente durante una profilaxis dental en DentaLux",
      status: "confirmed" as const,
      documentationStatus: "pending" as const,
      publicationStatus: "approved" as const,
      variants: [],
    },
    {
      title: "Rehabilitación oral",
      category: "Rehabilitación Oral",
      badge: "Rehabilitación",
      description: "Opciones de rehabilitación oral que se definen mediante una evaluación individual.",
      icon: "compass",
      image: "/tratamiento/rehabilitacion.webp",
      imageAlt: "Odontólogo de DentaLux utiliza un escáner intraoral durante la atención de una paciente",
      status: "confirmed" as const,
      documentationStatus: "pending" as const,
      publicationStatus: "approved" as const,
      variants: [],
    },
    {
      title: "Planificación del tratamiento",
      category: "Atención Personalizada",
      badge: "Evaluación",
      description: "Consulta para valorar las alternativas de atención y definir un plan individualizado.",
      icon: "palette",
      image: "/tratamiento/planificacion-tratamiento.webp",
      imageAlt: "Odontólogo de DentaLux explica a una paciente su planificación de tratamiento",
      status: "confirmed" as const,
      documentationStatus: "pending" as const,
      publicationStatus: "approved" as const,
      variants: [],
    },
    {
      title: "Curaciones dentales",
      category: "Atención Dental",
      badge: "Cuidado dental",
      description: "Atención para curaciones dentales según la evaluación profesional de cada caso.",
      icon: "shield",
      image: "/tratamiento/curaciones-dentales.webp",
      imageAlt: "Odontólogo de DentaLux atiende a una paciente durante una curación dental",
      status: "confirmed" as const,
      documentationStatus: "pending" as const,
      publicationStatus: "approved" as const,
      showInServices: false,
      variants: [],
    },
    {
      title: "Odontopediatría",
      category: "Atención Infantil",
      badge: "Niños",
      description: "Atención odontológica para niños; consulta la evaluación adecuada para cada caso.",
      icon: "smile",
      image: "/tratamiento/odontopediatria.webp",
      imageAlt: "Odontólogo de DentaLux junto a un niño en el consultorio",
      status: "confirmed" as const,
      documentationStatus: "pending" as const,
      publicationStatus: "approved" as const,
      variants: [],
    },
  ] satisfies Service[],
  specialists: [
    {
      name: "Ireno Huacachino Minaya",
      role: "Odontólogo de DentaLux",
      specialty: null,
      licenseNumber: null,
      bio: null,
      image: "/dcprincipal.webp",
      status: "confirmed",
    },
  ] satisfies Specialist[],
  // Galería de tratamientos de DentaLux
  gallery: [
    {
      src: "/tratamiento/implantes-dentales.webp",
      alt: "Profesionales de DentaLux durante una cirugía oral",
      label: "Implantes dentales",
      category: "Rehabilitación Oral",
      note: "Alternativas de rehabilitación oral sujetas a evaluación individual.",
      span: "wide" as const,
    },
    {
      src: "/tratamiento/ortodoncia.webp",
      alt: "Odontólogo de DentaLux durante un control de ortodoncia",
      label: "Ortodoncia",
      category: "Alineación y Mordida",
      note: "Corrección de la posición dental y de la mordida mediante planificación individualizada.",
      span: "normal" as const,
    },
    {
      src: "/tratamiento/limpieza-dental-profesional.webp",
      alt: "Equipo de DentaLux atiende a una paciente durante limpieza dental profesional",
      label: "Limpieza dental profesional",
      category: "Salud Gingival",
      note: "Procedimiento de higiene bucal incluido en la atención periodontal documentada.",
      span: "normal" as const,
    },
    {
      src: "/tratamiento/profilaxis.webp",
      alt: "Paciente de DentaLux durante una profilaxis dental",
      label: "Higiene bucal profesional",
      category: "Salud Gingival",
      note: "Limpieza dental profesional documentada como parte de la atención periodontal.",
      span: "normal" as const,
    },
    {
      src: "/tratamiento/rehabilitacion.webp",
      alt: "Odontólogo de DentaLux utiliza un escáner intraoral durante la atención de una paciente",
      label: "Rehabilitación oral",
      category: "Rehabilitación Oral",
      note: "Imagen de atención odontológica relacionada con la rehabilitación oral.",
      span: "normal" as const,
    },
    {
      src: "/tratamiento/planificacion-tratamiento.webp",
      alt: "Odontólogo de DentaLux explica a una paciente su planificación de tratamiento",
      label: "Planificación del tratamiento",
      category: "Atención Personalizada",
      note: "Cada alternativa se define mediante una evaluación profesional individual.",
      span: "wide" as const,
    },
  ] satisfies GalleryItem[],
  // Espacio preparado para futura galería independiente de instalaciones y profesionales
  facilitiesGallery: [] as GalleryItem[],
  faqs: [
    // ── Implantes dentales ───────────────────────────────────────────────────
    {
      question: "¿Qué tipos de implantes dentales ofrece DentaLux?",
      answer:
        "DentaLux documenta implantes unitarios y múltiples, prótesis híbridas sobre implantes, sobredentaduras e injerto óseo. La alternativa adecuada se determina en una evaluación individual.",
      category: "Implantes",
    },
    {
      question: "¿Cuándo se necesita un injerto óseo antes de colocar un implante?",
      answer:
        "El documento de DentaLux describe el injerto óseo como una opción para recuperar o aumentar el volumen de hueso cuando es insuficiente para determinados tratamientos con implantes. Su indicación requiere evaluación profesional.",
      category: "Implantes",
    },
    {
      question: "¿En qué se diferencian una prótesis híbrida y una sobredentadura?",
      answer:
        "Según la información proporcionada por DentaLux, la prótesis híbrida es fija y la sobredentadura es removible y sostenida por implantes. La elección depende de la evaluación de cada paciente.",
      category: "Implantes",
    },
    // ── Ortodoncia ───────────────────────────────────────────────────────────
    {
      question: "¿Qué modalidades de ortodoncia están disponibles en DentaLux?",
      answer:
        "La información de DentaLux incluye brackets convencionales, de zafiro, autoligados metálicos y estéticos, además de alineadores transparentes. La opción se define mediante una evaluación individual.",
      category: "Ortodoncia",
    },
    {
      question: "¿Los alineadores transparentes son adecuados para todos los casos?",
      answer:
        "Los alineadores transparentes figuran entre las alternativas de ortodoncia documentadas por DentaLux. Su indicación depende de la evaluación profesional de cada caso.",
      category: "Ortodoncia",
    },
    // ── Higiene bucal ────────────────────────────────────────────────────────
    {
      question: "¿DentaLux realiza limpieza dental profesional?",
      answer:
        "Sí. La limpieza dental profesional figura en la información de tratamientos proporcionada por DentaLux. Consulta la frecuencia adecuada durante tu evaluación.",
      category: "Salud Gingival",
    },
    // ── Información general ──────────────────────────────────────────────────
    {
      question: "¿Cómo puedo reservar una cita en DentaLux?",
      answer:
        "Usa el botón «Reservar cita» en cualquier sección de esta página. Te llevará al canal oficial proporcionado por DentaLux para solicitar disponibilidad de forma rápida y directa.",
      category: "Reservas",
    },
    {
      question: "¿Dónde está ubicada DentaLux Clínica Dental?",
      answer: `Estamos en ${DENTALUX_ADDRESS.full}. Puedes abrir el mapa interactivo desde la sección de Ubicación para obtener indicaciones precisas hacia la clínica.`,
      category: "Ubicación",
    },
    {
      question: "¿Cómo consulto por un tratamiento específico?",
      answer:
        "Al reservar tu cita puedes indicar el motivo de tu consulta o el tratamiento de interés. El equipo de DentaLux confirmará la disponibilidad del especialista y los pasos previos necesarios para tu evaluación.",
      category: "Reservas",
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
