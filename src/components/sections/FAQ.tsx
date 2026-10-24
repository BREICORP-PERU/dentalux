"use client";

import { AnimatePresence, m, useInView, useReducedMotion } from "framer-motion";
import { CalendarCheck, ChevronDown } from "lucide-react";
import { useId, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Todos", "Reservas", "Servicios", "Horarios", "Ubicacion", "Primera visita", "Pagos"];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const reduceMotion = useReducedMotion();
  const sectionId = useId();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const filtered = activeCategory === "Todos"
    ? siteConfig.faqs
    : siteConfig.faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="relative bg-white py-20 md:py-28 overflow-hidden" aria-labelledby={`${sectionId}-title`}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gold-soft/40 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-soft border border-gold/25 text-gold-dark text-xs font-bold uppercase tracking-[0.22em] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                Preguntas frecuentes
              </span>
              <h2 id={`${sectionId}-title`} className="font-heading text-4xl font-bold text-ink md:text-5xl leading-tight">
                Todo lo que necesitas{" "}
                <span className="text-brand-gradient">saber antes</span>{" "}
                de tu visita
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Resolvemos tus dudas mas frecuentes sobre citas, tratamientos y nuestra clinica en Tingo Maria.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 rounded-3xl bg-ink p-7 text-white brand-shadow"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light mb-3">Otra pregunta?</p>
              <h3 className="font-heading text-2xl font-bold leading-snug">
                Escribenos y te respondemos
              </h3>
              <p className="mt-3 leading-relaxed text-white/70 text-sm">
                Nuestro equipo responde consultas sobre tratamientos, precios y disponibilidad de forma directa.
              </p>
              <a
                href={siteConfig.reservations.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-ink transition hover:bg-gold-hover active:scale-95"
              >
                <CalendarCheck size={18} aria-hidden="true" />
                {siteConfig.reservations.label}
              </a>
            </m.div>
          </div>

          <div>
            <m.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-8"
              role="group"
              aria-label="Filtrar preguntas por categoria"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200",
                    activeCategory === cat
                      ? "bg-ink text-white"
                      : "bg-surface border border-line text-muted hover:border-gold/40 hover:text-gold-dark"
                  )}
                >
                  {cat}
                </button>
              ))}
            </m.div>

            <div className="space-y-3">
              <AnimatePresence mode="wait">
                {filtered.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const triggerId = `${sectionId}-trigger-${index}`;
                  const panelId = `${sectionId}-panel-${index}`;

                  return (
                    <m.article
                      key={`${activeCategory}-${faq.question}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm hover:border-gold/30 transition-colors"
                    >
                      <h3>
                        <button
                          id={triggerId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-base font-bold text-ink transition hover:bg-gold-soft/40"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            size={20}
                            className={cn("shrink-0 text-gold-dark transition-transform duration-300", isOpen && "rotate-180")}
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
                            transition={{ duration: reduceMotion ? 0 : 0.25 }}
                          >
                            <p className="border-t border-line px-5 py-4 leading-relaxed text-muted text-sm">
                              {faq.answer}
                            </p>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </m.article>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}