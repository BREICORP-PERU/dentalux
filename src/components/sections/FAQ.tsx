"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { CalendarCheck, ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const sectionId = useId();

  return (
    <section id="faq" className="bg-surface py-20 md:py-28" aria-labelledby={`${sectionId}-title`}>
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-dark">Preguntas frecuentes</p>
          <h2 id={`${sectionId}-title`} className="mt-4 font-heading text-4xl font-bold text-ink md:text-5xl">
            Información útil antes de tu visita
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Respuestas basadas únicamente en los datos confirmados para esta web.
          </p>
          <div className="mt-9 rounded-3xl bg-ink p-7 text-white brand-shadow">
            <HelpCircle size={36} className="text-gold-light" aria-hidden="true" />
            <h3 className="mt-5 font-heading text-2xl font-bold">¿Necesitas otra información?</h3>
            <p className="mt-3 leading-relaxed text-white/75">Consulta directamente mediante el canal oficial de reservas.</p>
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-ink transition hover:bg-gold-hover"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              {siteConfig.reservations.label}
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `${sectionId}-trigger-${index}`;
            const panelId = `${sectionId}-panel-${index}`;

            return (
              <article key={faq.question} className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left font-heading text-lg font-bold text-ink transition hover:bg-gold-soft"
                  >
                    {faq.question}
                    <ChevronDown
                      size={21}
                      className={cn("shrink-0 text-gold-dark transition-transform", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.22 }}
                    >
                      <p className="border-t border-line px-6 py-5 leading-relaxed text-muted">{faq.answer}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
