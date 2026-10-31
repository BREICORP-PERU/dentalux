"use client";

import { m, useInView } from "framer-motion";
import { ArrowRight, CalendarCheck, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-90px" });

  return (
    <section ref={sectionRef} id="nosotros" className="relative overflow-hidden bg-surface py-24 md:py-32" aria-labelledby="about-title">
      <div className="pointer-events-none absolute -left-48 top-12 h-[520px] w-[520px] rounded-full bg-gold-soft blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          <m.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[560px] lg:mx-0"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2.25rem] border border-gold/35" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-ink shadow-[0_34px_85px_-42px_rgba(17,17,17,0.65)]">
              <Image
                src="/about-dentalux-referential.webp"
                alt="Imagen referencial de una conversación sobre atención odontológica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/5" aria-hidden="true" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/45 p-4 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-light">Imagen referencial</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">No corresponde a la sede, al personal ni a pacientes de DentaLux.</p>
              </div>
            </div>

            <div className="relative ml-auto mt-4 w-fit rounded-2xl border border-line bg-white p-4 shadow-[0_20px_55px_-28px_rgba(17,17,17,0.4)] sm:absolute sm:-bottom-7 sm:-right-6 sm:mt-0 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold-dark">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">DentaLux en Tingo María</span>
                  <span className="mt-1 block text-sm font-semibold text-ink">{siteConfig.address.street}</span>
                </span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="lg:py-8"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
              Sobre DentaLux
            </span>
            <h2 id="about-title" className="max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-ink md:text-5xl lg:text-6xl">
              {siteConfig.institutional.trajectory.lead}{" "}
              <span className="text-brand-gradient">{siteConfig.institutional.trajectory.focus}</span>
            </h2>
            <div className="mt-7 h-1 w-20 rounded-full bg-gold-gradient" aria-hidden="true" />

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal">
              {siteConfig.institutional.presentation}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              {siteConfig.institutional.philosophy}
            </p>

            <div className="mt-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Valores que orientan nuestra atención</p>
              <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Valores institucionales de DentaLux">
                {siteConfig.institutional.values.map((value) => (
                  <li key={value} className="rounded-full border border-gold/25 bg-white px-4 py-2 text-sm font-semibold text-charcoal shadow-[0_12px_30px_-24px_rgba(17,17,17,0.35)]">
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-gold-gradient px-9 py-4 font-bold text-ink shadow-lg shadow-gold/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/30 active:translate-y-0"
            >
              <CalendarCheck size={19} aria-hidden="true" />
              {siteConfig.reservations.label}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </m.div>
        </div>
      </div>
    </section>
  );
}
