"use client";

import { m, useInView } from "framer-motion";
import { CalendarCheck, Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";

const SOCIAL_LINKS = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { name: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { name: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

export default function Locations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="ubicacion" className="relative bg-surface py-20 md:py-28 overflow-hidden" aria-labelledby="location-title">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-surface pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-soft border border-gold/25 text-gold-dark text-xs font-bold uppercase tracking-[0.22em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
              Ubicación
            </span>
            <h2 id="location-title" className="font-heading text-4xl font-bold text-ink md:text-5xl leading-tight">
              Encuéntranos en{" "}
              <span className="text-brand-gradient">Tingo María</span>
            </h2>
            <p className="mt-6 text-lg text-muted">{siteConfig.address.full}</p>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-[2.5rem] border border-line bg-surface brand-shadow"
        >
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex flex-col justify-between bg-ink p-8 text-white md:p-10 lg:p-12">
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-ink mb-7">
                  <MapPin size={27} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-3xl font-bold">{siteConfig.shortName}</h3>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light mt-1 mb-5">Clínica Dental</p>
                <p className="leading-relaxed text-white/70">{siteConfig.address.full}</p>

                <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock3 className="mt-0.5 shrink-0 text-gold-light" size={20} aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm">Horario de atención</p>
                    {siteConfig.hours.display.map((line) => (
                      <p key={line} className="mt-1 text-sm text-white/70">{line}</p>
                    ))}
                  </div>
                </div>

                {siteConfig.phone.status === "confirmed" && (
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Phone className="shrink-0 text-gold-light" size={20} aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sm">Teléfono</p>
                      <a href={`tel:${siteConfig.phone.e164}`} className="mt-0.5 block text-sm text-white/70 hover:text-gold-light">
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>
                )}

                <div className="mt-7">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-light/80">
                    Síguenos en redes
                  </p>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`DentaLux en ${name}`}
                        title={`Visitar ${name} de DentaLux`}
                        className="group grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href={siteConfig.maps.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 active:scale-95"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Cómo llegar
                </a>
                <a
                  href={siteConfig.reservations.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-gold-hover active:scale-95"
                >
                  <CalendarCheck size={16} aria-hidden="true" />
                  Reservar
                </a>
              </div>
            </div>

            <div className="relative min-h-[400px] bg-slate-200 lg:min-h-[560px]">
              <iframe
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${siteConfig.name} en ${siteConfig.address.locality}`}
              />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
