import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarCheck, Check } from "lucide-react";
import { siteConfig, treatmentCatalog } from "@/config/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return treatmentCatalog.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = treatmentCatalog.find((item) => item.slug === slug);
  if (!category) return {};
  return {
    title: category.title,
    description: `${category.introduction} Atención en ${siteConfig.address.locality}.`,
    alternates: { canonical: `/tratamientos/${category.slug}` },
  };
}

export default async function TreatmentCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = treatmentCatalog.find((item) => item.slug === slug);
  if (!category) notFound();
  const related = treatmentCatalog.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white pb-24 pt-36 md:pt-44">
      <div className="container mx-auto px-6">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted">
          <Link href="/" className="hover:text-gold-dark">Inicio</Link> <span aria-hidden="true">/</span> <Link href="/tratamientos" className="hover:text-gold-dark">Tratamientos</Link> <span aria-hidden="true">/</span> {category.title}
        </nav>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Tratamientos DentaLux</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">{category.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{category.introduction}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">La indicación, el procedimiento y los resultados dependen de la evaluación de cada paciente.</p>
            <a href={siteConfig.reservations.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 font-bold text-ink"><CalendarCheck size={18} aria-hidden="true" />{siteConfig.reservations.label}</a>
          </div>
          {category.image && <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface shadow-[0_24px_65px_-40px_rgba(17,17,17,0.45)]"><Image src={category.image} alt={`Atención relacionada con ${category.title.toLowerCase()} en DentaLux`} fill loading="eager" sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div>}
        </div>

        <section aria-labelledby="category-list-title" className="mt-20">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Opciones de atención</p><h2 id="category-list-title" className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">Tratamientos de {category.title.toLowerCase()}</h2></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {category.treatments.map((treatment, index) => (
              <article key={treatment.title} className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
                <span className="text-xs font-bold tracking-[0.18em] text-gold-dark">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-2xl font-bold text-ink">{treatment.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{treatment.description}</p>
                <h4 className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-gold-dark">Posibles beneficios</h4>
                <ul className="mt-3 space-y-3">{treatment.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-charcoal"><Check size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />{benefit}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-3xl bg-ink p-8 text-white sm:p-10"><h2 className="font-heading text-2xl font-bold">Consulta qué opción se ajusta a tu caso</h2><p className="mt-3 max-w-2xl text-white/70">Nuestro equipo puede orientarte después de una evaluación clínica individual.</p><a href={siteConfig.reservations.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 font-bold text-ink"><CalendarCheck size={18} aria-hidden="true" />{siteConfig.reservations.label}</a></div>

        <section aria-labelledby="related-title" className="mt-16"><h2 id="related-title" className="font-heading text-2xl font-bold text-ink">Explora otras áreas</h2><div className="mt-5 grid gap-4 sm:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/tratamientos/${item.slug}`} className="flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-line px-5 py-4 font-bold text-ink transition hover:border-gold hover:text-gold-dark">{item.title}<ArrowRight size={18} aria-hidden="true" /></Link>)}</div></section>
        <Link href="/tratamientos" className="mt-10 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-dark hover:text-ink"><ArrowLeft size={18} aria-hidden="true" />Todos los tratamientos</Link>
      </div>
    </div>
  );
}
