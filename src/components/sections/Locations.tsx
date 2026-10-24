"use client";

import { m, useInView } from "framer-motion";
import { CalendarCheck, Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

const SOCIAL_LINKS = [
  { name: "Facebook", href: siteConfig.social.facebook, label: "fb" },
  { name: "Instagram", href: siteConfig.social.instagram, label: "ig" },
  { name: "TikTok", href: siteConfig.social.tiktok, label: "tt" },
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
              Ubicacion
            </span>
            <h2 id="location-title" className="font-heading text-4xl font-bold text-ink md:text-5xl leading-tight">
              Encuentranos en{" "}
              <span className="text-brand-gradient">Tingo Maria</span>
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
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light mt-1 mb-5">Clinica Dental</p>
                <p className="leading-relaxed text-white/70">{siteConfig.address.full}</p>

                <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock3 className="mt-0.5 shrink-0 text-gold-light" size={20} aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm">Horario de atencion</p>
                    <p className="mt-1 text-sm text-white/60">{siteConfig.hours.display}</p>
                  </div>
                </div>

                {siteConfig.phone.display && (
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Phone className="shrink-0 text-gold-light" size={20} aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sm">WhatsApp</p>
                      <p className="mt-0.5 text-sm text-white/60">{siteConfig.phone.display}</p>
                    </div>
                  </div>
                )}

                <div className="mt-7 flex gap-2">
                  {SOCIAL_LINKS.map(({ name, href, label }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`DentaLux en ${name}`}
                      className="inline-flex items-center px-3 py-2 rounded-xl border border-white/15 text-xs font-bold text-white/50 hover:border-gold hover:text-gold transition-colors uppercase tracking-wider"
                    >
                      {label}
                    </a>
                  ))}
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
                  Como llegar
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