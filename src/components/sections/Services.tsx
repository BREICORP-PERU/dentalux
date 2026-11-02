"use client";

import {
  Activity,
  CalendarCheck,
  ChevronRight,
  Compass,
  Palette,
  Shield,
  Smile,
  Sparkles,
} from "lucide-react";
import { m, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

const ICON_MAP: Record<string, React.ElementType> = {
  smile: Smile,
  shield: Shield,
  activity: Activity,
  sparkles: Sparkles,
  palette: Palette,
  compass: Compass,
};

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const publicServices = siteConfig.services.filter(
    (service) =>
      service.status === "confirmed" &&
      service.documentationStatus === "documented" &&
      service.publicationStatus === "approved",
  );

  const handleConsultWhatsApp = (treatmentTitle: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-whatsapp-modal", {
          detail: { treatment: treatmentTitle },
        }),
      );
    }
  };

  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-24 md:py-32" aria-labelledby="services-title">
      <div className="pointer-events-none absolute -right-52 top-0 h-[520px] w-[520px] rounded-full border-[90px] border-gold-soft/80" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[460px] w-[460px] rounded-full bg-gold-soft/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
            Atención odontológica
          </span>
          <h2 id="services-title" className="font-heading text-4xl font-bold leading-[1.08] text-ink md:text-5xl lg:text-6xl">
            Cuidado especializado para <span className="text-brand-gradient">cada sonrisa</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Conoce los tratamientos y áreas de atención clínica de DentaLux. Cada alternativa requiere una evaluación profesional y un plan individualizado.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publicServices.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Smile;
            return (
              <m.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-[0_24px_65px_-40px_rgba(17,17,17,0.42)] transition duration-300 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_30px_72px_-36px_rgba(126,101,37,0.35)] sm:p-7 md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gold-soft opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />

                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Imagen destacada del tratamiento */}
                  <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line/70 bg-surface">
                    <Image
                      src={service.image}
                      alt={`Tratamiento de ${service.title} en DentaLux`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                    {service.badge && (
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-ink/80 px-3 py-1 text-[11px] font-bold text-gold-light backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold-light shadow-lg shadow-black/10 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-heading text-sm font-bold text-gold-dark/55">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>

                  <details className="group/treatment mt-6 border-t border-line pt-4">
                    <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-3 rounded-xl text-sm font-bold text-gold-dark outline-none transition hover:text-ink focus-visible:ring-2 focus-visible:ring-gold [&::-webkit-details-marker]:hidden">
                      <span>Conocer tratamientos</span>
                      <ChevronRight size={16} className="shrink-0 transition-transform group-open/treatment:rotate-90" aria-hidden="true" />
                    </summary>
                    <ul className="mt-3 space-y-2.5 border-l border-gold/35 pl-4">
                      {service.variants.map((variant) => (
                        <li key={variant.title}>
                          <p className="text-sm font-bold text-ink">{variant.title}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted">{variant.description}</p>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>

                <div className="relative z-10 mt-6 border-t border-line/60 pt-4">
                  <button
                    type="button"
                    onClick={() => handleConsultWhatsApp(service.title)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/35 bg-gold-soft/60 px-4 py-2.5 text-xs font-bold text-gold-dark transition duration-200 hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Consultar por WhatsApp</span>
                  </button>
                </div>
              </m.article>
            );
          })}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-ink shadow-[0_24px_70px_-35px_rgba(17,17,17,0.7)]">
          <div className="relative flex flex-col items-start justify-between gap-7 px-7 py-8 sm:px-9 md:flex-row md:items-center md:px-11 md:py-10">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[50px] border-gold/10" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Canal oficial de reservas</p>
              <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">¿Quieres saber qué alternativa puede ajustarse a tu caso?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">Solicita una cita para recibir orientación y una evaluación profesional individual.</p>
            </div>
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 font-bold text-ink shadow-xl shadow-black/25 transition duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              <CalendarCheck size={19} aria-hidden="true" />
              {siteConfig.reservations.label}
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
