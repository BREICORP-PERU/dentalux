"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { CalendarCheck, ChevronRight, MapPin, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[750px] md:min-h-[720px] flex items-center overflow-hidden">
      {/* ── 1. CINEMATIC BACKGROUND PHOTOGRAPHY & GRADIENTS ──────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-dentalux.jpg"
          alt="DentaLux Clínica Dental - Instalaciones y atención odontológica moderna en Tingo María"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={92}
        />
        {/* Horizontal cinematic contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/92 via-[#111111]/65 to-[#111111]/30" />
        {/* Top vignette for clean navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#111111]/85 via-[#111111]/35 to-transparent z-[1]" />
        {/* Bottom vertical contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-[#111111]/20" />
      </div>

      {/* ── 2. SUBTLE FLOATING AMBIENT PARTICLES ─────────────────── */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <m.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-gold/50"
              style={{
                left: `${12 + i * 16}%`,
                top: `${18 + (i % 3) * 24}%`,
              }}
              animate={{ y: [-16, 16, -16], opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 4.5 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      {/* ── 3. MAIN HERO CONTENT ─────────────────────────────────── */}
      <div className="container mx-auto px-5 sm:px-6 relative z-10 pt-20 md:pt-14">
        <div className="max-w-3xl">
          {/* Pre-headline Badge */}
          <div className="animate-slide-up">
            <span className="inline-flex max-w-full items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gold/15 backdrop-blur-md border border-gold/35 text-gold-light text-[11px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest uppercase mb-5 sm:mb-7 shadow-sm">
              <span className="w-2 h-2 shrink-0 bg-gold rounded-full animate-pulse" />
              <span className="truncate">Odontología Integral &amp; Estética · Tingo María</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.08] tracking-tight mb-4 sm:mb-6 animate-slide-up [animation-delay:100ms]">
            Tu Sonrisa{" "}
            <span className="relative">
              <span className="text-gold-gradient">Radiante</span>
            </span>{" "}
            comienza aquí
          </h1>

          {/* Sub-headline Text */}
          <p className="text-base sm:text-xl text-white/85 mb-7 sm:mb-10 leading-relaxed max-w-2xl font-light animate-slide-up [animation-delay:200ms]">
            Atención odontológica de confianza y calidad en Tingo María. Cuidado
            personalizado, enfoque moderno y dedicación en cada consulta para que
            sonrías con total seguridad en{" "}
            <strong className="text-gold-light font-semibold">Pucallpa 245</strong>.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-7 sm:mb-14 animate-slide-up [animation-delay:300ms]">
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gold-gradient text-white px-8 py-3.5 sm:px-9 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 premium-shadow shadow-xl shadow-gold/20 active:scale-95"
            >
              <CalendarCheck size={19} aria-hidden="true" />
              <span>Reservar cita</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>

            <Link
              href="#ubicacion"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 active:scale-95"
            >
              <MapPin size={18} className="text-gold-light" aria-hidden="true" />
              <span>Ver Ubicación</span>
            </Link>
          </div>

          {/* Trust Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6 pt-2 border-t border-white/15 animate-slide-up [animation-delay:400ms]">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="Calificación de 5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white/85 text-xs sm:text-sm font-semibold">
                Atención Personalizada
              </span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-white/25" aria-hidden="true" />

            {/* Trust highlights without false claims */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/75 flex-wrap">
              <span>✓ Atención previa cita</span>
              <div className="w-px h-4 bg-white/25" aria-hidden="true" />
              <span>✓ Canal oficial WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. FLOATING BADGE (BOTTOM RIGHT — DESKTOP ONLY TO AVOID MOBILE OVERLAP) ── */}
      <div className="absolute bottom-10 right-28 lg:right-36 z-10 hidden md:block">
        <m.div
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-4 bg-white/10 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/20 shadow-2xl shadow-black/40"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold-gradient rounded-xl flex items-center justify-center shrink-0 premium-shadow">
            <Sparkles size={24} className="text-white" aria-hidden="true" />
          </div>
          <div>
            <p className="text-white font-bold text-sm sm:text-base leading-tight">
              DentaLux Clínica Dental
            </p>
            <p className="text-white/75 text-xs mt-1 leading-tight">
              Pucallpa 245 · Tingo María
            </p>
          </div>
        </m.div>
      </div>

      {/* ── 5. SCROLL INDICATOR (BOTTOM CENTER) ───────────────────── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Scroll</span>
        <m.div
          animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-gold-light rounded-full" />
        </m.div>
      </div>
    </section>
  );
}
