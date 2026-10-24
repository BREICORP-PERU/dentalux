"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowDown, CalendarCheck, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import dentaluxLogo from "@/app/dentaluxlogo.png";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-white pt-24 text-ink md:min-h-[780px]">
      <div className="soft-grid absolute inset-0 opacity-45" />
      <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold-soft blur-3xl" />
      <div className="absolute -bottom-48 -left-32 h-[520px] w-[520px] rounded-full border-[90px] border-black/[0.025]" />

      <div className="container relative z-10 mx-auto grid items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            <Sparkles size={15} aria-hidden="true" />
            {siteConfig.identity.notice}
          </div>

          <h1 className="font-heading text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            Tu cita dental, más cerca en <span className="text-gold-dark">Tingo María</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Conecta con {siteConfig.name} mediante su canal oficial de reservas y encuentra la clínica en {siteConfig.address.street}.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-bold text-ink shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-gold-hover"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              {siteConfig.reservations.label}
            </a>
            <a
              href="#ubicacion"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-8 py-4 font-bold text-ink transition hover:border-gold-dark hover:bg-gold-soft"
            >
              <MapPin size={20} aria-hidden="true" />
              Ver ubicación
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            El teléfono y el horario publicados en fuentes externas siguen pendientes de confirmación directa.
          </p>
        </div>

        <m.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-[460px] place-items-center lg:grid"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full border border-gold/25" />
          <div className="absolute inset-12 rounded-full border border-dashed border-gold/45" />
          <m.div
            animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="gold-ring relative grid h-72 w-72 place-items-center overflow-hidden rounded-[4rem] bg-ink shadow-2xl shadow-black/20"
          >
            <Image
              src={dentaluxLogo}
              alt=""
              fill
              priority
              className="object-contain p-7"
              sizes="288px"
            />
          </m.div>
          <div className="absolute bottom-6 right-0 rounded-3xl border border-line bg-white/95 p-5 shadow-xl backdrop-blur-md">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">DentaLux</span>
            <span className="mt-1 block text-sm text-muted">Clínica Dental</span>
          </div>
        </m.div>
      </div>

      <a
        href="#servicios"
        aria-label="Continuar a información de atención"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted md:flex"
      >
        Explorar
        <ArrowDown size={17} aria-hidden="true" />
      </a>
    </section>
  );
}
