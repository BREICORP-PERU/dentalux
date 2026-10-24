"use client";

import Image from "next/image";
import { AnimatePresence, m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Expand, X } from "lucide-react";
import { siteConfig, type GalleryItem } from "@/config/site";

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const closeDialog = () => setActiveItem(null);

  useEffect(() => {
    if (!activeItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastTriggerRef.current?.focus();
    };
  }, [activeItem]);

  const trapFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const elements = event.currentTarget.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );
    if (!elements.length) return;
    const first = elements[0];
    const last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <section id="galeria" className="relative bg-surface py-20 md:py-28 overflow-hidden" aria-labelledby="gallery-title">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-surface pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/25 text-gold-dark text-xs font-bold uppercase tracking-[0.22em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
              Nuestra Clinica
            </span>
            <h2 id="gallery-title" className="font-heading text-4xl font-bold text-ink md:text-5xl leading-tight">
              Espacios diseados para{" "}
              <span className="text-brand-gradient">tu bienestar</span>
            </h2>
          </m.div>
          <m.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-muted leading-relaxed"
          >
            Instalaciones modernas y un ambiente pensado para que tu experiencia dental sea comoda y tranquila.
          </m.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[240px]">
          {siteConfig.gallery.map((item, index) => (
            <m.button
              key={`${item.src}-${index}`}
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget as HTMLButtonElement;
                setActiveItem(item);
              }}
              aria-haspopup="dialog"
              aria-label={`Ver imagen: ${item.label}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-line bg-white text-left brand-shadow cursor-pointer ${
                item.span === "wide" ? "col-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading text-lg font-bold text-white leading-tight">
                  {item.label}
                </p>
              </div>
              <div className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <Expand size={16} aria-hidden="true" />
              </div>
            </m.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDialog}
            onKeyDown={trapFocus}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/92 p-4 backdrop-blur-sm"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl rounded-[2rem] bg-white overflow-hidden shadow-2xl"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDialog}
                aria-label="Cerrar imagen ampliada"
                className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lg transition hover:bg-charcoal"
              >
                <X size={22} aria-hidden="true" />
              </button>
              <div className="relative aspect-[16/9] bg-surface">
                <Image src={activeItem.src} alt={activeItem.alt} fill className="object-contain p-4" sizes="100vw" />
              </div>
              <div className="px-6 py-5 border-t border-line">
                <h3 id="gallery-dialog-title" className="font-heading text-2xl font-bold text-ink">
                  {activeItem.label}
                </h3>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}