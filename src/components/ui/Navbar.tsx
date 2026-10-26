"use client";

import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, CalendarCheck, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import BrandMark from "./BrandMark";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Preguntas", href: "#faq" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      menuButton?.focus();
    };
  }, [mobileMenuOpen]);

  const trapMobileMenuFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusableElements.length) return;
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full border-b px-4 transition-[padding,background-color,box-shadow,border-color] duration-500 sm:px-6",
          isScrolled
            ? "border-black/5 bg-white/95 py-3 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-white/10 bg-gradient-to-b from-black/45 to-transparent py-4 sm:py-5"
        )}
      >
        <nav
          className="mx-auto flex max-w-[1320px] items-center justify-between"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link href="/" aria-label={`${siteConfig.name} - Inicio`} className="shrink-0">
            <BrandMark inverse={!isScrolled} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-2 text-[13px] font-bold tracking-[0.02em] transition-colors",
                  isScrolled
                    ? "text-charcoal hover:text-gold-dark"
                    : "text-white/90 hover:text-gold-light drop-shadow-sm"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-0 transition-[width] duration-300 group-hover:w-full",
                    isScrolled ? "bg-gold-dark" : "bg-gold-light"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center">
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-2.5 text-sm font-bold text-ink shadow-lg shadow-gold/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/40 active:scale-95 premium-shadow"
            >
              <CalendarCheck size={16} aria-hidden="true" />
              <span>Reservar cita</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-2xl transition-colors lg:hidden shrink-0",
              isScrolled
                ? "text-ink hover:bg-gold-soft"
                : "text-white hover:bg-white/15 drop-shadow-md"
            )}
          >
            {mobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            onKeyDown={trapMobileMenuFocus}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-[#f8f7f2] lg:hidden"
          >
            <div className="pointer-events-none fixed -right-24 top-24 h-72 w-72 rounded-full border-[54px] border-gold/10" aria-hidden="true" />
            <div className="pointer-events-none fixed -bottom-28 -left-28 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
            {/* Drawer Header */}
            <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-white/10 bg-ink px-5 py-4 sm:px-6 sm:py-5">
              <BrandMark inverse />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold/50 hover:bg-white/10"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Links list */}
            <div className="relative flex min-h-[380px] flex-1 flex-col justify-center gap-4 px-6 py-7 sm:gap-5 sm:px-10">
              {NAV_LINKS.map((link, idx) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-3 font-heading text-2xl font-bold text-ink transition-colors hover:text-gold-dark sm:gap-4 sm:text-3xl"
                  >
                    <span className="w-6 font-sans text-[10px] font-bold tracking-[0.18em] text-gold-dark">{String(idx + 1).padStart(2, "0")}</span>
                    {link.label}
                    <ArrowRight className="ml-auto text-gold-dark opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" size={18} aria-hidden="true" />
                  </Link>
                </m.div>
              ))}
            </div>

            {/* Mobile Footer CTA */}
            <div className="relative shrink-0 border-t border-black/10 bg-white/70 px-6 pb-6 pt-4 backdrop-blur-sm sm:px-8 sm:pb-8 sm:pt-5">
              <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Canal oficial de DentaLux</p>
              <a
                href={siteConfig.reservations.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-4 text-base font-bold text-ink shadow-lg shadow-gold/30 premium-shadow"
              >
                <CalendarCheck size={18} aria-hidden="true" />
                {siteConfig.reservations.label}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
