import { CalendarCheck, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/config/site";
import BrandMark from "./BrandMark";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
};

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Preguntas", href: "#faq" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/8">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light mb-1">¿Listo para empezar?</p>
            <h2 className="font-heading text-2xl font-bold text-white">Reserva tu cita hoy en DentaLux</h2>
          </div>
          <a
            href={siteConfig.reservations.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-gold-gradient text-ink px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all duration-300 premium-shadow active:scale-95"
          >
            <CalendarCheck size={18} aria-hidden="true" />
            {siteConfig.reservations.label}
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Link href="/" aria-label="DentaLux, volver al inicio">
              <BrandMark inverse />
            </Link>
            <p className="mt-6 max-w-md leading-relaxed text-white/60 text-sm">{siteConfig.description}</p>
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.name];
                if (!Icon) return null;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`DentaLux en ${social.name}`}
                    title={`Visitar ${social.name} de DentaLux`}
                    className="group grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold-light mb-6">Navegación</h2>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/55 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold-light mb-6">Contacto oficial</h2>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                <MapPin className="mt-0.5 shrink-0 text-gold-light" size={18} aria-hidden="true" />
                <span>{siteConfig.address.full}</span>
              </div>
              {siteConfig.phone.status === "confirmed" && (
                <div className="flex items-center gap-3 text-sm text-white/65">
                  <Phone className="shrink-0 text-gold-light" size={18} aria-hidden="true" />
                  <span>WhatsApp: {siteConfig.phone.display}</span>
                </div>
              )}
            </address>
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-gold-hover active:scale-95"
            >
              <CalendarCheck size={16} aria-hidden="true" />
              Reservar cita
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados. | Desarrollado por{" "}
            <a
              href="https://breicorp.com.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-light transition-colors hover:text-gold"
            >
              BREICORP
            </a>
          </p>
          <p className="text-xs text-white/30">
            Horario pendiente de confirmación oficial. Consulta disponibilidad al reservar.
          </p>
        </div>
      </div>
    </footer>
  );
}
