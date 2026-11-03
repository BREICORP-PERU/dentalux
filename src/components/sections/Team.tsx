"use client";

import { m, useInView } from "framer-motion";
import { UserRoundCheck, UsersRound } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // No renderizar la sección si no hay especialistas confirmados
  if (siteConfig.specialists.length === 0) return null;

  return (
    <section id="equipo" className="relative bg-white py-20 md:py-28 overflow-hidden" aria-labelledby="team-title">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
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
              Nuestro equipo de{" "}
              <span className="text-brand-gradient">especialistas</span>
            </h2>
          </m.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.specialists.map((specialist) => (
            <article key={specialist.name} className="overflow-hidden rounded-3xl border border-line bg-white brand-shadow hover:-translate-y-1 transition-transform duration-300">
              <div className="relative aspect-[4/5]">
                <Image src={specialist.image} alt={specialist.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-7">
                <h3 className="font-heading text-2xl font-bold text-ink">{specialist.name}</h3>
                <p className="mt-1 font-semibold text-gold-dark">{specialist.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{specialist.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-6 rounded-3xl border border-line bg-surface p-8"
        >
          <div className="h-16 w-16 rounded-2xl bg-gold-soft flex items-center justify-center shrink-0">
            <UsersRound size={32} className="text-gold-dark" aria-hidden="true" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-heading text-xl font-bold text-ink">¿Deseas consultar disponibilidad?</p>
            <p className="mt-1 text-muted text-sm">Usa el canal oficial de reservas para coordinar directamente con la clínica.</p>
          </div>
          <a
            href={siteConfig.reservations.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-white transition hover:bg-charcoal active:scale-95"
          >
            <UserRoundCheck size={18} aria-hidden="true" />
            Reservar consulta
          </a>
        </m.div>
      </div>
    </section>
  );
}
