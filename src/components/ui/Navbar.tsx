"use client";

import { AnimatePresence, m } from "framer-motion";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
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
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-[padding,background-color,box-shadow,border-color] duration-500 px-4 sm:px-6",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link href="/" aria-label="DentaLux Clínica Dental - Inicio" className="shrink-0">
            <BrandMark inverse={!isScrolled} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors relative group py-1",
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
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://bit.ly/DENTALUXCITAS"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                isScrolled
                  ? "text-charcoal hover:text-gold-dark"
                  : "text-white/85 hover:text-gold-light drop-shadow-sm"
              )}
            >
              <Phone size={16} className={isScrolled ? "text-gold-dark" : "text-gold"} />
              942 877 890
            </a>

            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-gold/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/40 active:scale-95 premium-shadow"
            >
              <CalendarCheck size={16} aria-hidden="true" />
              <span>Reservar cita</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <BrandMark compact />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-gray-100"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Links list */}
            <div className="flex flex-1 flex-col justify-center px-10 gap-7">
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
                    className="font-heading text-3xl font-bold text-ink transition-colors hover:text-gold-dark"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </div>

            {/* Mobile Footer CTA */}
            <div className="space-y-4 px-8 pb-10 pt-4 border-t border-gray-100">
              <a
                href={siteConfig.reservations.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-4 text-base font-bold text-white shadow-lg shadow-gold/30 premium-shadow"
              >
                <CalendarCheck size={18} aria-hidden="true" />
                {siteConfig.reservations.label}
              </a>

              <a
                href="https://bit.ly/DENTALUXCITAS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-charcoal hover:text-gold-dark"
              >
                <Phone size={16} className="text-gold-dark" />
                WhatsApp: 942 877 890
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
