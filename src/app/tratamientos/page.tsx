import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { siteConfig, treatmentCatalog } from "@/config/site";

export const metadata: Metadata = {
  title: "Tratamientos dentales",
  description: "Conoce las áreas de atención y los tratamientos de DentaLux en Tingo María. Cada alternativa requiere evaluación profesional.",
  alternates: { canonical: "/tratamientos" },
};

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-surface pb-24 pt-36 md:pt-44">
      <div className="container mx-auto px-6">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted">
          <Link href="/" className="hover:text-gold-dark">Inicio</Link> <span aria-hidden="true">/</span> Tratamientos
        </nav>
        <div className="mt-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Atención odontológica</p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">Nuestros tratamientos</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">Conoce las áreas de atención de {siteConfig.shortName}. Cada tratamiento se recomienda después de una evaluación clínica individual.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {treatmentCatalog.map((category, index) => (
            <Link key={category.slug} href={`/tratamientos/${category.slug}`} className="group flex min-h-80 flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_24px_65px_-40px_rgba(17,17,17,0.35)] transition hover:-translate-y-1 hover:border-gold/50 focus-visible:outline-2 focus-visible:outline-gold">
              <div className="relative h-44 overflow-hidden bg-gold-soft">
                {category.image ? <Image src={category.image} alt="" fill loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /> : <span className="grid h-full place-items-center font-heading text-6xl font-bold text-gold/30">{String(index + 1).padStart(2, "0")}</span>}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">{category.treatments.length} {category.treatments.length === 1 ? "tratamiento" : "tratamientos"}</p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-ink">{category.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{category.introduction}</p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-gold-dark">Conocer tratamientos <ArrowRight size={18} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start gap-5 rounded-3xl bg-ink p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div><h2 className="font-heading text-2xl font-bold">¿Necesitas orientación?</h2><p className="mt-2 text-white/70">Solicita una cita para recibir una evaluación profesional individual.</p></div>
          <a href={siteConfig.reservations.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 font-bold text-ink"><CalendarCheck size={18} aria-hidden="true" />{siteConfig.reservations.label}</a>
        </div>
      </div>
    </div>
  );
}
