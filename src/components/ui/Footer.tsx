import { CalendarCheck, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/config/site";
import BrandMark from "./BrandMark";

const navigation = [
  { label: "Inicio", href: "#main-content" },
  { label: "Atención", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Preguntas", href: "#faq" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="/" aria-label="DentaLux, volver al inicio">
              <BrandMark inverse />
            </Link>
            <p className="mt-6 max-w-md leading-relaxed text-white/60">{siteConfig.description}</p>
            <span className="mt-6 inline-flex rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-light">
              {siteConfig.identity.notice}
            </span>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold-light">Navegación</h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold-light">Contacto oficial</h2>
            <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-white/65">
              <MapPin className="mt-0.5 shrink-0 text-gold-light" size={18} aria-hidden="true" />
              {siteConfig.address.full}
            </p>
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-gold-hover"
            >
              <CalendarCheck size={17} aria-hidden="true" />
              Reservar cita
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-white/45">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/65 transition hover:border-gold hover:text-white"
              >
                {social.name}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-white/35">
          Teléfono y horario pendientes de confirmación. La disponibilidad se valida mediante el canal oficial de reservas.
        </p>
      </div>
    </footer>
  );
}
