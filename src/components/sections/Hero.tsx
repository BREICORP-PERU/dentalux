"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, CalendarCheck, Info, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-ink text-white md:min-h-[780px] lg:min-h-[820px] lg:h-[100svh]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-dentalux-referential.webp"
          alt="Imagen referencial de una consulta odontológica en un espacio clínico contemporáneo"
          fill
          preload
          className="object-cover object-[52%_center] sm:object-[58%_center] lg:object-center"
          sizes="100vw"
          quality={88}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.98)_0%,rgba(17,17,17,0.92)_48%,rgba(17,17,17,0.52)_78%,rgba(17,17,17,0.28)_100%)] lg:bg-[linear-gradient(90deg,rgba(17,17,17,0.96)_0%,rgba(17,17,17,0.88)_35%,rgba(17,17,17,0.42)_68%,rgba(17,17,17,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.72)_0%,rgba(17,17,17,0.08)_32%,rgba(17,17,17,0.84)_100%)] lg:bg-[linear-gradient(180deg,rgba(17,17,17,0.6)_0%,transparent_38%,rgba(17,17,17,0.75)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_45%,transparent_0%,rgba(17,17,17,0.08)_35%,rgba(17,17,17,0.48)_100%)]" />
      </div>

      <div className="absolute left-0 top-0 z-[1] h-full w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent lg:left-8" aria-hidden="true" />
      <div className="absolute right-[8%] top-[22%] z-[1] hidden h-28 w-28 rounded-full border border-gold/30 lg:block" aria-hidden="true" />
      <div className="absolute right-[calc(8%+2rem)] top-[calc(22%+2rem)] z-[1] hidden h-12 w-12 rounded-full border border-white/20 lg:block" aria-hidden="true" />

      <div className="container relative z-10 mx-auto w-full px-6 pb-20 pt-32 sm:px-8 md:pt-36 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="max-w-[760px]">
          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-gold/35 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light backdrop-blur-md sm:text-xs"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_18px_rgba(208,176,82,0.9)]" />
            <span>{siteConfig.shortName} · Clínica dental en {siteConfig.address.locality}</span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-[720px] font-heading text-[clamp(3rem,7vw,5.8rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white [text-shadow:0_3px_28px_rgba(0,0,0,0.72)]"
          >
            Tu próxima sonrisa <span className="text-gold-light [text-shadow:0_2px_20px_rgba(0,0,0,0.95)] sm:text-gold-gradient">comienza aquí</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg md:text-xl"
          >
            Solicita tu cita mediante el canal oficial de {siteConfig.shortName} y encuentra la clínica en {siteConfig.address.street}, {siteConfig.address.locality}.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row"
          >
            <a
              id="hero-reservation-cta"
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 font-bold text-ink shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-gold/20 active:translate-y-0"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              {siteConfig.reservations.label}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <Link
              href="#nosotros"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/35 bg-black/20 px-8 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:border-gold/65 hover:bg-white/10"
            >
              Conocer la clínica
              <ArrowDown size={18} className="text-gold-light" aria-hidden="true" />
            </Link>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs font-semibold text-white/70 sm:text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <CalendarCheck size={16} className="text-gold-light" aria-hidden="true" />
              Canal oficial de reservas
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-gold-light" aria-hidden="true" />
              {siteConfig.address.street} · {siteConfig.address.locality}
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-5 inline-flex max-w-lg items-start gap-2.5 rounded-xl border border-white/15 bg-black/45 px-3.5 py-2.5 text-[10px] leading-relaxed text-white/70 backdrop-blur-md sm:text-[11px]"
          >
            <Info size={15} className="mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />
            <span>
              <strong className="mr-1.5 uppercase tracking-[0.14em] text-gold-light">Imagen referencial.</strong>
              No corresponde a la sede, al personal ni a pacientes de DentaLux.
            </span>
          </m.div>
        </div>
      </div>

      <m.div
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.42 }}
        className="absolute bottom-28 right-6 z-10 hidden max-w-[270px] items-center gap-3 rounded-2xl border border-white/20 bg-black/40 p-4 backdrop-blur-xl md:flex lg:right-12"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-gradient text-ink">
          <MapPin size={19} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs font-bold uppercase tracking-[0.14em] text-gold-light">Estamos en Tingo María</span>
          <span className="mt-1 block text-sm text-white/75">{siteConfig.address.street}</span>
        </span>
      </m.div>

    </section>
  );
}
