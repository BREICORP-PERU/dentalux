import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  if (siteConfig.testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-title" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/5 blur-3xl" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
            Testimonios verificados
          </span>
          <h2 id="testimonials-title" className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            Experiencias compartidas por pacientes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((testimonial) => (
            <article key={`${testimonial.name}-${testimonial.text}`} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-5 flex gap-1" role="img" aria-label={`${testimonial.rating} de 5 estrellas`}>
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <Star key={index} size={16} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mb-6 text-sm leading-relaxed text-white/80">“{testimonial.text}”</blockquote>
              <p className="font-bold text-white">{testimonial.name}</p>
              {testimonial.treatment && <p className="mt-1 text-xs text-gold-light">{testimonial.treatment}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
