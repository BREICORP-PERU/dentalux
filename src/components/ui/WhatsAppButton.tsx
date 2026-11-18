"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Send, Sparkles, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { siteConfig, treatmentCatalog } from "@/config/site";
import { WhatsAppIcon } from "./SocialIcons";

const QUICK_TREATMENTS = [
  ...new Set([
    ...siteConfig.services
      .filter((service) => service.status === "confirmed" && service.publicationStatus === "approved")
      .map((service) => service.title),
    ...treatmentCatalog.flatMap((category) => category.treatments.map((treatment) => treatment.title)),
  ]),
  "Otro",
];

export function buildWhatsAppUrl(treatment: string, customText?: string): string {
  let message = "";
  if (treatment === "Otro") {
    const detail = customText?.trim();
    message = detail
      ? `Hola, me gustaría consultar sobre el tratamiento de ${detail}.`
      : `Hola, me gustaría consultar sobre los tratamientos en ${siteConfig.shortName}.`;
  } else {
    const cleanTreatment = treatment.trim();
    message = cleanTreatment
      ? `Hola, me gustaría consultar sobre el tratamiento de ${cleanTreatment}.`
      : `Hola, me gustaría consultar sobre los tratamientos en ${siteConfig.shortName}.`;
  }
  return `https://wa.me/${siteConfig.phone.e164.replace(/^\+/, "")}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppButton() {
  const reduceMotion = useReducedMotion();
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>(QUICK_TREATMENTS[0]);
  const [customText, setCustomText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Controlar visibilidad del botón flotante
  useEffect(() => {
    const handleScroll = () => {
      const heroCta = document.getElementById("hero-reservation-cta");
      if (heroCta) {
        const rect = heroCta.getBoundingClientRect();
        setShowFloatingCta(rect.bottom < 120);
      } else {
        setShowFloatingCta(window.scrollY > 80);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escuchar evento personalizado desde las tarjetas de tratamientos
  useEffect(() => {
    const handleExternalOpen = (event: Event) => {
      const customEvent = event as CustomEvent<{ treatment?: string }>;
      if (customEvent.detail?.treatment) {
        const treatmentName = customEvent.detail.treatment;
        // Asignar al tratamiento más cercano o directo
        const matched = QUICK_TREATMENTS.find(
          (t) => t.toLowerCase() === treatmentName.toLowerCase(),
        );
        if (matched) {
          setSelectedTreatment(matched);
        } else {
          // Asignar el nombre exacto si no está en la lista estándar
          setSelectedTreatment(treatmentName);
        }
      }
      setShowFloatingCta(true);
      setIsOpen(true);
    };

    window.addEventListener("open-whatsapp-modal", handleExternalOpen);
    return () => window.removeEventListener("open-whatsapp-modal", handleExternalOpen);
  }, []);

  // Foco en el input cuando se elige "Otro"
  useEffect(() => {
    if (selectedTreatment === "Otro" && isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [selectedTreatment, isOpen]);

  // Cerrar con Escape o clic fuera
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node) &&
        triggerButtonRef.current &&
        !triggerButtonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectOption = (option: string) => {
    setSelectedTreatment(option);
  };

  const handleDirectSend = (treatment: string) => {
    const url = buildWhatsAppUrl(
      treatment,
      treatment === "Otro" ? customText : undefined,
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const currentMessagePreview = (() => {
    if (selectedTreatment === "Otro") {
      const text = customText.trim();
      return text
        ? `Hola, me gustaría consultar sobre el tratamiento de ${text}.`
        : `Hola, me gustaría consultar sobre los tratamientos en ${siteConfig.shortName}.`;
    }
    return `Hola, me gustaría consultar sobre el tratamiento de ${selectedTreatment}.`;
  })();

  return (
    <>
      {/* Botón flotante principal de WhatsApp */}
      <AnimatePresence>
        {showFloatingCta && (
          <m.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.9 }}
            className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 md:bottom-7 md:right-7"
          >
            <button
              ref={triggerButtonRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              aria-label="Abrir consulta de tratamientos por WhatsApp"
              className="group relative flex items-center gap-2.5 rounded-full border border-white/20 bg-[#25D366] px-4 py-3.5 font-bold text-white shadow-[0_12px_32px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-[0_16px_36px_rgba(37,211,102,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50 active:scale-95 sm:px-5"
            >
              <WhatsAppIcon className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />

              <span className="hidden font-heading text-sm font-bold tracking-wide sm:inline">
                Consultar por WhatsApp
              </span>

              <span className="sr-only">Canal oficial de atención por WhatsApp</span>
            </button>
          </m.div>
        )}
      </AnimatePresence>

      {/* Interfaz de selección de tratamiento (Modal / Popover) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop en móviles para evitar toques involuntarios */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs sm:hidden"
              aria-hidden="true"
            />

            <m.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="whatsapp-dialog-title"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-4 bottom-5 z-50 max-h-[92vh] overflow-hidden rounded-[2rem] border border-gold/35 bg-ink text-white shadow-[0_30px_90px_rgba(0,0,0,0.85)] sm:inset-x-auto sm:bottom-24 sm:right-6 sm:w-[390px] md:bottom-24 md:right-8"
            >
              {/* Encabezado elegante */}
              <div className="relative border-b border-white/10 bg-gradient-to-r from-ink via-charcoal to-ink p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#25D366] text-white shadow-md shadow-emerald-900/40">
                      <WhatsAppIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3
                        id="whatsapp-dialog-title"
                        className="font-heading text-lg font-bold leading-tight text-white sm:text-xl"
                      >
                        ¿Qué tratamiento estás buscando?
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar ventana de WhatsApp"
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-gold/50 hover:bg-white/10 hover:text-white"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/65">
                  Elige una opción rápida para asesorarte de inmediato con nuestro equipo.
                </p>
              </div>

              {/* Opciones rápidas de tratamientos */}
              <div className="max-h-[50vh] overflow-y-auto overscroll-contain p-5 sm:p-6">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {QUICK_TREATMENTS.map((treatment) => {
                    const isSelected = selectedTreatment === treatment;
                    return (
                      <button
                        key={treatment}
                        type="button"
                        onClick={() => handleSelectOption(treatment)}
                        className={`group flex items-center justify-between rounded-xl border p-3 text-left transition-all duration-200 ${
                          isSelected
                            ? "border-gold bg-gold/15 text-gold-light shadow-sm shadow-gold/20"
                            : "border-white/10 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
                          {isSelected && <Check size={14} className="shrink-0 text-gold-light" />}
                          {treatment}
                        </span>
                        {treatment !== "Otro" && (
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDirectSend(treatment);
                            }}
                            title={`Consultar directamente sobre ${treatment}`}
                            className="grid h-6 w-6 place-items-center rounded-full bg-white/5 text-white/40 opacity-80 transition group-hover:bg-[#25D366] group-hover:text-white group-hover:opacity-100"
                          >
                            <Send size={11} aria-hidden="true" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Campo de texto cuando se elige "Otro" */}
                {selectedTreatment === "Otro" && (
                  <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <label
                      htmlFor="custom-treatment-input"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gold-light"
                    >
                      Escribe tu consulta o tratamiento
                    </label>
                    <input
                      ref={inputRef}
                      id="custom-treatment-input"
                      type="text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleDirectSend("Otro");
                        }
                      }}
                      placeholder="Ej. Motivo de tu consulta"
                      className="w-full rounded-xl border border-gold/40 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                    />
                  </m.div>
                )}

                {/* Previsualización del mensaje */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50">
                    <Sparkles size={11} className="text-gold-light" />
                    <span>Mensaje que se enviará:</span>
                  </div>
                  <p className="text-xs italic leading-relaxed text-white/80">
                    &ldquo;{currentMessagePreview}&rdquo;
                  </p>
                </div>
              </div>

              {/* Botón de acción principal para redirigir a WhatsApp */}
              <div className="border-t border-white/10 bg-black/40 p-5 sm:p-6">
                <button
                  type="button"
                  onClick={() => handleDirectSend(selectedTreatment)}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-emerald-900/40 transition duration-300 hover:scale-[1.02] hover:bg-[#20ba59] active:scale-95"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Continuar a WhatsApp</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <p className="mt-2 text-center text-[11px] text-white/40">
                  Teléfono de {siteConfig.shortName}: {siteConfig.phone.display}
                </p>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
