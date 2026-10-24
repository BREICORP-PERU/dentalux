"use client";

import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Expand, ImageIcon, X } from "lucide-react";
import { siteConfig, type GalleryItem } from "@/config/site";

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

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
    <section id="galeria" className="bg-white py-20 md:py-28" aria-labelledby="gallery-title">
      <div className="container mx-auto px-6">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-dark">Galería</p>
            <h2 id="gallery-title" className="mt-4 font-heading text-4xl font-bold text-ink md:text-5xl">
              Una imagen coherente, sin usar material ajeno
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted">
            Estas piezas son ilustraciones provisionales. Las fotografías reales se publicarán únicamente cuando sean entregadas y aprobadas por DentaLux.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {siteConfig.gallery.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setActiveItem(item);
              }}
              aria-haspopup="dialog"
              className="group relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-line bg-surface text-left brand-shadow"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/90 to-transparent p-6 pt-20 text-white">
                <span>
                  <span className="block font-heading text-xl font-bold">{item.label}</span>
                  <span className="mt-1 block text-xs text-white/65">{item.note}</span>
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Expand size={18} aria-hidden="true" />
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 text-sm text-muted">
          <ImageIcon className="mt-0.5 shrink-0 text-gold-dark" size={20} aria-hidden="true" />
          <p>Estado editorial: fotografías de clínica, equipo y tratamientos pendientes de aprobación.</p>
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
            className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl rounded-[2rem] bg-white p-3 shadow-2xl"
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
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.45rem] bg-surface">
                <Image src={activeItem.src} alt={activeItem.alt} fill className="object-contain" sizes="100vw" />
              </div>
              <div className="p-5">
                <h3 id="gallery-dialog-title" className="font-heading text-2xl font-bold text-ink">
                  {activeItem.label}
                </h3>
                <p className="mt-2 text-sm text-muted">{activeItem.note}</p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
