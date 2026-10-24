"use client";

import { AnimatePresence, m } from "framer-motion";
import { CalendarCheck, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import BrandMark from "./BrandMark";

const navLinks = [
  { label: "Atención", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Preguntas", href: "#faq" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white/95 px-5 backdrop-blur-xl transition-all duration-300",
          scrolled ? "border-line py-3 shadow-sm" : "border-black/5 py-4",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Navegación principal">
          <Link href="/" aria-label="Ir al inicio">
            <BrandMark />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold text-charcoal transition hover:text-gold-dark",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={siteConfig.reservations.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-gold-hover lg:inline-flex"
          >
            <CalendarCheck size={17} aria-hidden="true" />
            Reservar cita
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-full text-ink transition hover:bg-gold-soft lg:hidden"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            id={menuId}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-white px-7 pb-8 pt-28 lg:hidden"
          >
            <nav aria-label="Navegación móvil" className="flex flex-1 flex-col justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-3xl font-bold text-ink transition hover:text-gold-dark"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-bold text-ink transition hover:bg-gold-hover"
            >
              <CalendarCheck size={19} aria-hidden="true" />
              {siteConfig.reservations.label}
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
