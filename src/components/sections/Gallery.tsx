"use client";

import Image from "next/image";
import { AnimatePresence, m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Expand, ExternalLink, X } from "lucide-react";
import { siteConfig, type GalleryItem } from "@/config/site";
import { FacebookIcon } from "@/components/ui/SocialIcons";

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
              Galería clínica
            </span>
            <h2 id="gallery-title" className="font-heading text-4xl font-bold text-ink md:text-5xl leading-tight">
              Conoce nuestros{" "}
              <span className="text-brand-gradient">tratamientos</span>
            </h2>
          </m.div>
          <m.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-muted leading-relaxed text-sm md:text-base"
          >
            Conoce en imágenes las áreas de atención odontológica y la planificación personalizada de DentaLux.
          </m.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px]">
          {siteConfig.gallery.map((item, index) => (
            <m.button
              key={`${item.src}-${index}`}
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget as HTMLButtonElement;
                setActiveItem(item);
              }}
              aria-haspopup="dialog"
              aria-label={`Ver tratamiento: ${item.label}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-line bg-white text-left brand-shadow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                item.span === "wide" ? "col-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-105"
                sizes={item.span === "wide" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
              
              {item.category && (
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-light border border-gold/30">
                    {item.category}
                  </span>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading text-base sm:text-lg font-bold text-white leading-tight">
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/75 line-clamp-2">{item.note}</p>
              </div>

              <div className="absolute top-3.5 right-3.5 grid h-8 w-8 place-items-center rounded-full bg-white/15 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <Expand size={15} aria-hidden="true" />
              </div>
            </m.button>
          ))}
        </div>

        {/* Invitación para ver más resultados en Facebook */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-gold/30 bg-ink p-7 text-white shadow-[0_24px_70px_-35px_rgba(17,17,17,0.7)] sm:p-9 md:mt-16 md:p-10">
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
                Fotografías y casos
              </span>
              <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                ¿Quieres ver más fotografías?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                Visita nuestra página de Facebook y descubre más fotografías y publicaciones de DentaLux Clínica Dental.
              </p>
            </div>

            <a
              href="https://www.facebook.com/DENTALUXTINGOMARIA/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-ink shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/25 active:translate-y-0"
            >
              <FacebookIcon className="h-5 w-5 text-ink" />
              <span>Ver más en Facebook</span>
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
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
              className="relative w-full max-w-4xl rounded-[2rem] bg-white overflow-hidden shadow-2xl border border-line"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDialog}
                aria-label="Cerrar imagen ampliada"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink text-white shadow-lg transition hover:bg-charcoal hover:scale-105 active:scale-95"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-surface">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
              </div>

              <div className="px-6 py-5 border-t border-line bg-white">
                {activeItem.category && (
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-gold-dark mb-1">
                    {activeItem.category}
                  </span>
                )}
                <h3 id="gallery-dialog-title" className="font-heading text-2xl font-bold text-ink">
                  {activeItem.label}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{activeItem.note}</p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
