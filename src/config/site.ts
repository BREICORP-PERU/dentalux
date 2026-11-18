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
  experienceYears?: number;
  practiceAreas?: readonly string[];
  education?: readonly string[];
  training?: readonly string[];
  image: string | null;
  status: "confirmed";
};

export type GalleryItem = {
  src: string;
  afterSrc?: string;
  alt: string;
  label: string;
  note: string;
  category?: string;
  span?: "wide" | "normal" | "tablet-wide";
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

export type TreatmentDetail = {
  title: string;
  description: string;
  benefits: readonly string[];
};

export type TreatmentCategory = {
  slug: string;
  title: string;
  introduction: string;
  image?: string;
  treatments: readonly TreatmentDetail[];
};

// Catálogo aprobado por la clínica. Las indicaciones se determinan en consulta.
export const treatmentCatalog: readonly TreatmentCategory[] = [
  {
    slug: "implantes-dentales",
    title: "Implantes dentales",
    image: "/tratamiento/implantes-dentales.webp",
    introduction: "Alternativas para reemplazar dientes perdidos mediante una planificación individualizada que considera la función y la estética de la sonrisa.",
    treatments: [
      { title: "Implantes unitarios", description: "Un implante sustituye la raíz de una pieza perdida y sirve de soporte para una corona personalizada.", benefits: ["No requiere usar los dientes vecinos como soporte.", "Puede recuperar función y apariencia según la evaluación del caso."] },
      { title: "Implantes múltiples", description: "Implantes colocados estratégicamente pueden sostener coronas individuales o puentes para reemplazar varias piezas.", benefits: ["Ofrecen una opción fija para varias ausencias dentales.", "La planificación busca estabilidad y comodidad al masticar."] },
      { title: "Prótesis híbridas sobre implantes", description: "Rehabilitación fija para pacientes que han perdido todos o la mayoría de los dientes de una arcada.", benefits: ["Permiten reemplazar una arcada mediante una estructura fija.", "Buscan mejorar la estabilidad y la función masticatoria."] },
      { title: "Sobredentaduras", description: "Prótesis removibles sostenidas por implantes para pacientes con pérdida de todos los dientes de una arcada.", benefits: ["Los implantes aportan retención y estabilidad.", "La prótesis puede retirarse para higiene y mantenimiento."] },
      { title: "Injerto óseo", description: "Procedimiento para recuperar o aumentar el volumen de hueso cuando es insuficiente para determinados tratamientos con implantes.", benefits: ["Puede mejorar las condiciones óseas antes de un implante.", "Su indicación depende de la evaluación clínica y radiográfica."] },
    ],
  },
  {
    slug: "odontologia-estetica",
    title: "Odontología estética",
    image: "/tratamiento/gingivoplastia-despues.webp",
    introduction: "Tratamientos orientados a mejorar la apariencia de dientes y encías mediante una evaluación personalizada.",
    treatments: [
      { title: "Blanqueamiento dental", description: "Aplicación controlada de agentes blanqueadores bajo supervisión profesional para aclarar el tono dental y reducir determinadas pigmentaciones.", benefits: ["Puede mejorar la luminosidad de la sonrisa.", "La respuesta depende de las características de cada paciente."] },
      { title: "Gingivoplastia", description: "Remodelación del contorno de las encías mediante técnicas seleccionadas según el caso, que pueden incluir láser de diodo.", benefits: ["Busca armonizar el contorno gingival.", "La técnica y la recuperación se valoran individualmente."] },
      { title: "Carillas a mano alzada", description: "Restauraciones directas de resina compuesta que el odontólogo modela sobre la superficie dental.", benefits: ["Pueden mejorar forma, tamaño y apariencia.", "Permiten ajustes y reparaciones según el caso."] },
      { title: "Carillas de resina inyectada", description: "Técnica que utiliza una guía transparente para transferir resina según una forma previamente planificada.", benefits: ["Favorece una forma y proporciones planificadas.", "El desgaste dental necesario se determina en la evaluación."] },
    ],
  },
  {
    slug: "rehabilitacion-oral",
    title: "Rehabilitación oral",
    image: "/tratamiento/rehabilitacion.webp",
    introduction: "Opciones para restaurar o reemplazar dientes dañados o perdidos, considerando función, estética y comodidad.",
    treatments: [
      { title: "Coronas dentales", description: "Restauraciones personalizadas que recubren la parte visible de un diente dañado o debilitado.", benefits: ["Buscan recuperar forma y función.", "Pueden proteger dientes debilitados según la indicación clínica."] },
      { title: "Prótesis fija", description: "Estructuras que reemplazan uno o varios dientes y permanecen fijadas sobre dientes preparados o implantes.", benefits: ["Ofrecen una opción estable para piezas perdidas.", "Buscan recuperar la función masticatoria y la estética."] },
      { title: "Prótesis removible", description: "Dispositivos personalizados para reemplazar varios dientes o una arcada, que pueden retirarse para su cuidado.", benefits: ["Permiten reemplazar varias piezas dentales.", "Su retiro facilita la higiene y el mantenimiento."] },
      { title: "Prótesis sobre implantes", description: "Restauraciones fijas o removibles apoyadas sobre implantes, según las necesidades de cada paciente.", benefits: ["Los implantes aportan soporte y estabilidad.", "La opción adecuada requiere planificación individual."] },
    ],
  },
  {
    slug: "ortodoncia",
    title: "Ortodoncia",
    image: "/tratamiento/ortodoncia.webp",
    introduction: "Alternativas para corregir la posición dental y las alteraciones de la mordida mediante diagnóstico y planificación individual.",
    treatments: [
      { title: "Brackets convencionales", description: "Sistema fijo de brackets metálicos, arcos y ligaduras que permite realizar movimientos dentales progresivos.", benefits: ["Permite tratar distintas alteraciones de alineación y mordida.", "Es una alternativa de uso extendido."] },
      { title: "Brackets de zafiro", description: "Brackets transparentes de material cerámico monocristalino que ofrecen una apariencia más discreta.", benefits: ["Son menos visibles al sonreír.", "Combinan estética con un sistema de ortodoncia fija."] },
      { title: "Brackets autoligados metálicos", description: "Sistema fijo con un cierre integrado que sujeta el arco sin ligaduras elásticas convencionales.", benefits: ["Facilita determinados ajustes durante los controles.", "Ofrece una alternativa metálica resistente."] },
      { title: "Brackets autoligados estéticos", description: "Brackets de tonalidad similar al diente o translúcidos con mecanismo de cierre integrado.", benefits: ["Ofrecen una apariencia discreta.", "Prescinden de ligaduras elásticas tradicionales para sujetar el arco."] },
      { title: "Alineadores transparentes", description: "Secuencia de férulas transparentes removibles elaboradas a medida para movimientos dentales planificados.", benefits: ["Son discretos y removibles.", "Su indicación depende de la evaluación de cada caso."] },
    ],
  },
  {
    slug: "periodoncia",
    title: "Periodoncia",
    image: "/tratamiento/limpieza-dental.webp",
    introduction: "Atención orientada a la salud de las encías y de los tejidos que sostienen los dientes.",
    treatments: [
      { title: "Limpieza dental", description: "Procedimiento que retira placa, sarro y determinadas manchas superficiales con instrumentos profesionales.", benefits: ["Contribuye a la higiene bucal y al cuidado de las encías.", "La frecuencia se define según la evaluación individual."] },
      { title: "Profilaxis", description: "Limpieza y pulido de superficies dentales mediante instrumentos y pastas especializadas.", benefits: ["Ayuda a retirar placa blanda y manchas superficiales.", "Contribuye al mantenimiento de la higiene bucal."] },
    ],
  },
  {
    slug: "endodoncia",
    title: "Endodoncia",
    introduction: "Tratamiento de daños o infecciones del tejido interno del diente con el objetivo de conservar la pieza cuando sea posible.",
    treatments: [
      { title: "Endodoncia", description: "Se retira el tejido pulpar afectado, se desinfectan los conductos radiculares y se sellan tras la evaluación profesional.", benefits: ["Puede permitir conservar el diente natural.", "Busca tratar la infección o el daño pulpar y aliviar las molestias asociadas."] },
    ],
  },
  {
    slug: "cirugia-bucal",
    title: "Cirugía bucal",
    image: "/tratamiento/frenectomía.webp",
    introduction: "Procedimientos quirúrgicos planificados para tratar alteraciones de dientes y tejidos de la cavidad oral.",
    treatments: [
      { title: "Extracciones dentales", description: "Retiro de piezas que presentan daños, infecciones u otras condiciones que impiden su conservación.", benefits: ["Permiten tratar piezas que no pueden recuperarse.", "La técnica busca cuidar los tejidos circundantes."] },
      { title: "Muelas del juicio", description: "Extracción de terceros molares cuando su posición o condición causa molestias o representa un riesgo clínico.", benefits: ["Puede tratar molestias o infecciones asociadas.", "Requiere indicación y planificación profesional."] },
      { title: "Muelas del juicio impactadas", description: "Extracción de terceros molares que no han erupcionado correctamente, previa evaluación clínica y radiográfica.", benefits: ["Permite tratar complicaciones de terceros molares impactados.", "La planificación considera las estructuras anatómicas cercanas."] },
      { title: "Dientes retenidos", description: "Retiro de piezas que permanecen parcial o totalmente dentro del hueso o las encías cuando existe indicación clínica.", benefits: ["Puede tratar alteraciones de erupción.", "Se planifica con evaluación clínica y radiográfica."] },
      { title: "Dientes supernumerarios", description: "Extracción de piezas adicionales cuando afectan la erupción o la alineación dental.", benefits: ["Puede evitar interferencias en la erupción.", "La necesidad de extracción se determina individualmente."] },
      { title: "Apicectomía", description: "Cirugía de la zona final de la raíz ante determinadas infecciones persistentes, con el objetivo de conservar el diente.", benefits: ["Ofrece una alternativa en casos seleccionados.", "Busca tratar tejidos afectados en el extremo de la raíz."] },
      { title: "Frenectomía labial y lingual", description: "Procedimiento sobre frenillos labiales o linguales alterados, mediante técnica convencional o láser según el caso.", benefits: ["Puede mejorar la movilidad cuando existe una restricción.", "La indicación depende de la función y la evaluación clínica."] },
    ],
  },
  {
    slug: "odontopediatria",
    title: "Odontopediatría",
    image: "/tratamiento/odontopediatria.webp",
    introduction: "Atención bucal para bebés, niños y adolescentes, adaptada a cada etapa de crecimiento.",
    treatments: [
      { title: "Ortopedia maxilar", description: "Evaluación y tratamiento de determinadas alteraciones del crecimiento y desarrollo de los maxilares durante la infancia.", benefits: ["Puede orientar el desarrollo de las estructuras óseas.", "La planificación se adapta a la etapa de crecimiento."] },
      { title: "Aplicación de flúor", description: "Aplicación profesional de productos con flúor sobre la superficie dental según las necesidades y el riesgo de caries.", benefits: ["Contribuye a fortalecer el esmalte.", "Ayuda a prevenir caries cuando está indicado."] },
    ],
  },
];

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
    label: "Reserva tu cita",
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
    history:
      "DentaLux nació en 2019 en Tingo María, fundada por el Dr. Ireno Huacachino Minaya para ofrecer atención odontológica integral, cercana y personalizada. Desde sus inicios acompaña a cada paciente en el cuidado, la prevención y la recuperación de su salud bucal, incorporando tecnología y actualización profesional según las necesidades de cada caso.",
    valueProposition:
      "Creemos que una sonrisa saludable comienza con una atención basada en la confianza. Combinamos experiencia profesional, tecnología moderna y trato humano para acompañarte en cada etapa del cuidado de tu salud bucal.",
    reasons: [
      { title: "Experiencia profesional", text: "Más de siete años de atención en Tingo María." },
      { title: "Atención personalizada", text: "Alternativas de tratamiento según la evaluación de cada paciente." },
      { title: "Tecnología e innovación", text: "Herramientas modernas que complementan la práctica profesional." },
      { title: "Calidez y confianza", text: "Atención cercana, respetuosa y transparente." },
    ],
    brands: [
      { name: "Straumann", logo: "/marcas/straumann-logo-png-transparent.webp" },
      { name: "Tokuyama", logo: "/marcas/images.webp" },
      { name: "Neodent", logo: "/marcas/Neodent-Straumann-Group-Logo.webp" },
      { name: "Damon System", logo: "/marcas/LOGO_DAMON_SYSTEM-1.webp" },
      { name: "Ivoclar", logo: "/marcas/images%20(1).webp" },
      { name: "American Orthodontics", logo: "/marcas/0902c874373a46beb5921e1cec7eeee6.webp" },
      { name: "Bloomden", logo: "/marcas/638867618760230010BLOOMDEN.webp" },
      { name: "Dentsply Sirona", logo: "/marcas/images%20(2).webp" },
      { name: "Morelli", logo: "/marcas/357413556_1952018525154737_2155619635960638652_n.jpg.webp" },
      { name: "Dentaid", logo: "/marcas/images%20(3).webp" },
      { name: "Woodpecker", logo: "/marcas/images%20(4).webp" },
    ],
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
      showInServices: true,
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
      image: "/tratamiento/limpieza-dental.webp",
      imageAlt: "Odontólogo realiza una limpieza dental a una paciente en DentaLux",
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
      showInServices: false,
      status: "confirmed" as const,
      documentationStatus: "pending" as const,
      publicationStatus: "approved" as const,
      variants: [],
    },
    {
      title: "Gingivoplastia",
      category: "Odontología Estética",
      badge: "Estética dental",
      description: "Procedimiento de remodelación del contorno de las encías, sujeto a evaluación clínica individual.",
      icon: "sparkles",
      image: "/tratamiento/gingivoplastia-despues.webp",
      imageAlt: "Vista de encías y dientes después de un caso de gingivoplastia en DentaLux",
      showInServices: false,
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
      publicationStatus: "approved" as const,
      variants: [],
    },
    {
      title: "Frenectomía labial y lingual",
      category: "Cirugía Bucal",
      badge: "Cirugía bucal",
      description: "Procedimiento sobre el frenillo labial o lingual cuando existe una indicación clínica, previa evaluación individual.",
      icon: "shield",
      image: "/tratamiento/frenectomía.webp",
      imageAlt: "Equipo de DentaLux durante un procedimiento de cirugía bucal",
      status: "confirmed" as const,
      documentationStatus: "documented" as const,
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
      role: "Director y fundador · Cirujano dentista",
      specialty: "Ortodoncia y ortopedia maxilar · Implantología oral",
      licenseNumber: "C.O.P. N.º 30985",
      bio: "Cirujano dentista con 15 años de experiencia profesional. Fundó DentaLux en 2019 en Tingo María y combina atención personalizada con actualización profesional y tecnología odontológica.",
      experienceYears: 15,
      practiceAreas: ["Ortodoncia", "Ortopedia maxilar", "Implantología oral"],
      education: [
        "2026 · Curso de posgrado en implantología oral, Santos, Brasil",
        "2018 · Segunda especialidad en ortodoncia y ortopedia maxilar, Universidad de Huánuco",
        "2011 · Cirujano dentista, Universidad Alas Peruanas, sede Ica",
      ],
      training: [
        "2024 · Carillas directas con resina SUPRA Nanotecnología, Tokuyama Dental",
        "2020 · Acreditación del sistema KeepSmiling",
        "2019 · Disyunción en adultos (MARPE), Docencia e Investigación en Ortodoncia",
        "2019 · Full Day de Cirugía Bucal y Maxilofacial, Colegio Odontológico del Perú, Región Huánuco",
        "2019 · Optimización del tratamiento ortodóntico con minitornillos extrarradiculares, Colegio Odontológico del Perú, Región Huánuco",
        "2018 · Bichectomía, ONS",
        "2017 · Manejo de maloclusiones con la filosofía Damon",
        "2015 · Diplomado de especialización en odontología forense, Universidad Nacional de Trujillo e Instituto Peruano de Estudios Tecnológicos",
        "2015 · Diplomado en cirugía oral, Colegio Odontológico del Perú",
        "2015 · Workshop sobre exodoncia de terceros molares y microscopía en endodoncia, Colegio Odontológico del Perú, Región Lima",
        "2015 · Conferencia sobre lesiones bucales precancerígenas e infecciones en cirugía maxilofacial, Colegio Odontológico del Perú, Región Lima",
      ],
      image: "/dc-ireno.webp",
      status: "confirmed",
    },
    {
      name: "Dr. Franco",
      role: "Cirujano dentista",
      specialty: null,
      licenseNumber: null,
      bio: null,
      image: null,
      status: "confirmed",
    },
  ] satisfies Specialist[],
  // Galería de tratamientos de DentaLux
  gallery: [
    {
      src: "/tratamiento/implantes-dentales.webp",
      alt: "Profesionales de DentaLux durante una cirugía oral",
      label: "Implantes dentales",
      category: "Implantología Oral",
      note: "Opciones de reemplazo dental sujetas a evaluación y planificación individual.",
      span: "normal" as const,
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
      src: "/tratamiento/limpieza-dental.webp",
      alt: "Odontólogo realiza una limpieza dental a una paciente en DentaLux",
      label: "Limpieza dental profesional",
      category: "Salud Gingival",
      note: "Procedimiento de higiene bucal incluido en la atención periodontal documentada.",
      span: "normal" as const,
    },
    {
      src: "/tratamiento/gingivoplastia-antes.webp",
      afterSrc: "/tratamiento/gingivoplastia-despues.webp",
      alt: "Comparación clínica de encías antes y después de una gingivoplastia",
      label: "Gingivoplastia: antes y después",
      category: "Odontología Estética",
      note: "Caso clínico particular; los resultados varían según la evaluación y las condiciones de cada paciente.",
      span: "wide" as const,
    },
    {
      src: "/tratamiento/frenectomía.webp",
      alt: "Equipo de DentaLux durante un procedimiento de cirugía bucal",
      label: "Frenectomía",
      category: "Cirugía Bucal",
      note: "Procedimiento sobre el frenillo labial o lingual según indicación clínica.",
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
      span: "tablet-wide" as const,
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
        "Usa el botón «Reserva tu cita» de esta web. Te llevará al canal oficial proporcionado por DentaLux para solicitar disponibilidad.",
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
