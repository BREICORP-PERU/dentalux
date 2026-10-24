"use client";

import {
  Activity,
  CalendarCheck,
  ChevronRight,
  Droplets,
  Shield,
  Smile,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

const ICON_MAP: Record<string, React.ElementType> = {
  smile: Smile,
  sparkles: Sparkles,
  shield: Shield,
  star: Star,
  droplets: Droplets,
  activity: Activity,
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="relative bg-white py-20 md:py-28 overflow-hidden" aria-labelledby="services-title">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold-soft/50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-soft/30 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-soft border border-gold/25 text-gold-dark text-xs font-bold uppercase tracking-[0.22em] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
            Nuestros Servicios
          </span>
          <h2 id="services-title" className="font-heading text-4xl font-bold text-ink md:text-5xl leading-tight">
            Odontología integral para{" "}
            <span className="text-brand-gradient">toda la familia</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            En DentaLux ofrecemos tratamientos odontológicos de alta calidad con tecnología moderna y atención personalizada en Tingo María.
          </p>
        </div>

        {/* Services grid */}
        <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Smile;
            return (
              <m.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative bg-white rounded-3xl border border-line p-8 brand-shadow hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gold accent background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-soft/0 to-gold-soft/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" aria-hidden="true" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-soft text-gold-dark group-hover:bg-gold group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  {/* Number */}
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark/60 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-heading text-xl font-bold text-ink mb-3 group-hover:text-gold-dark transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  {/* Hover CTA */}
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-gold-dark opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    <span>Reservar consulta</span>
                    <ChevronRight size={14} aria-hidden="true" />
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-ink p-8 md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light mb-2">¿Listo para sonreír?</p>
            <h3 className="font-heading text-2xl font-bold text-white">
              Agenda tu consulta hoy en DentaLux
            </h3>
          </div>
          <a
            href={siteConfig.reservations.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-gold-gradient text-white px-8 py-3.5 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 premium-shadow shadow-gold/20 active:scale-95"
          >
            <CalendarCheck size={18} aria-hidden="true" />
            {siteConfig.reservations.label}
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
