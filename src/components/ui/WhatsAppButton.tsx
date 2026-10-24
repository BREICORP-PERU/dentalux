"use client";

import { m, useReducedMotion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  const reduceMotion = useReducedMotion();

  return (
    <m.a
      href={siteConfig.reservations.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar una cita en el canal oficial de DentaLux"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 font-bold text-ink shadow-2xl shadow-black/20 transition-colors hover:bg-gold-hover md:bottom-7 md:right-7"
    >
      <CalendarCheck size={20} aria-hidden="true" />
      <span className="hidden sm:inline">Reservar cita</span>
    </m.a>
  );
}
