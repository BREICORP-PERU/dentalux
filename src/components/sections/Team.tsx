"use client";

import { m, useInView } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  if (siteConfig.specialists.length === 0) return null;

  return (
    <section id="equipo" className="relative bg-white py-20 md:py-28 overflow-hidden" aria-labelledby="team-title">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="mb-12 max-w-3xl md:mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-soft border border-gold/25 text-gold-dark text-xs font-bold uppercase tracking-[0.22em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
              Equipo profesional
            </span>
            <h2 id="team-title" className="font-heading text-4xl font-bold text-ink md:text-5xl leading-tight">
              Conoce a nuestro <span className="text-brand-gradient">equipo</span>
            </h2>
          </m.div>
        </div>

        {siteConfig.specialists.map((specialist) => (
          <m.article
            key={specialist.name}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className={`mb-6 overflow-hidden rounded-3xl border border-line bg-surface brand-shadow ${specialist.image ? "grid lg:grid-cols-[0.9fr_1.1fr]" : ""}`}
          >
            {specialist.image && (
              <div className="relative aspect-square bg-gold-soft lg:aspect-[4/5]">
                <Image
                  src={specialist.image}
                  alt={`Retrato oficial de ${specialist.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1023px) 100vw, 45vw"
                />
              </div>
            )}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-16">
              <span className="mb-5 h-1 w-16 rounded-full bg-gold-gradient" aria-hidden="true" />
              <h3 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">{specialist.name}</h3>
              <p className="mt-3 text-lg font-semibold text-gold-dark">{specialist.role}</p>
              {specialist.specialty && <p className="mt-3 text-charcoal">{specialist.specialty}</p>}
              {specialist.licenseNumber && <p className="mt-2 text-sm text-muted">{specialist.licenseNumber}</p>}
              {specialist.bio && <p className="mt-6 max-w-xl leading-relaxed text-muted">{specialist.bio}</p>}
              {specialist.practiceAreas && <div className="mt-7"><h4 className="text-sm font-bold uppercase tracking-wider text-gold-dark">Áreas de práctica clínica</h4><ul className="mt-3 flex flex-wrap gap-2">{specialist.practiceAreas.map((area) => <li key={area} className="rounded-full border border-gold/25 bg-white px-3 py-2 text-sm text-charcoal">{area}</li>)}</ul></div>}
              {specialist.education && <div className="mt-7"><h4 className="text-sm font-bold uppercase tracking-wider text-gold-dark">Formación académica</h4><ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">{specialist.education.map((item) => <li key={item}>{item}</li>)}</ul></div>}
              {specialist.training && <details className="mt-6 rounded-xl border border-line bg-white p-4"><summary className="min-h-11 cursor-pointer py-2 font-semibold text-gold-dark">Formación continua</summary><ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">{specialist.training.map((item) => <li key={item}>{item}</li>)}</ul></details>}
              <a
                href={siteConfig.reservations.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-white transition hover:bg-charcoal active:scale-95"
              >
                <CalendarCheck size={18} aria-hidden="true" />
                {siteConfig.reservations.label}
              </a>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}
