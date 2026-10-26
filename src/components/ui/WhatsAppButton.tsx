"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  const reduceMotion = useReducedMotion();
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-reservation-cta");
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingCta(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {showFloatingCta && (
        <m.a
          href={siteConfig.reservations.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar una cita en el canal oficial de DentaLux"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.96 }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
          className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 font-bold text-ink shadow-2xl shadow-black/20 transition-colors hover:bg-gold-hover md:bottom-7 md:right-7"
        >
          <CalendarCheck size={20} aria-hidden="true" />
          <span className="hidden sm:inline">Reservar cita</span>
        </m.a>
      )}
    </AnimatePresence>
  );
}
