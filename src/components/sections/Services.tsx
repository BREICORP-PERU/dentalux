import { CalendarCheck, ClipboardList, MessageCircle, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Cuéntanos qué necesitas",
    text: "Inicia la conversación desde el enlace oficial de reservas.",
  },
  {
    icon: CalendarCheck,
    title: "Solicita disponibilidad",
    text: "Coordina una fecha directamente con el canal de DentaLux.",
  },
  {
    icon: ClipboardList,
    title: "Confirma los detalles",
    text: "Consulta tratamiento, horario y preparación antes de acudir.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-surface py-20 md:py-28" aria-labelledby="services-title">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-dark">Atención y reservas</p>
          <h2 id="services-title" className="mt-4 font-heading text-4xl font-bold text-ink md:text-5xl">
            Un primer paso claro para cuidar tu sonrisa
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            La lista oficial de tratamientos todavía está pendiente de validación. Puedes consultar tu necesidad directamente al reservar.
          </p>
        </div>

        {siteConfig.services.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-line bg-white p-8 brand-shadow transition hover:-translate-y-1 hover:border-gold/60">
                <h3 className="font-heading text-2xl font-bold text-ink">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="rounded-3xl border border-line bg-white p-8 brand-shadow transition hover:-translate-y-1 hover:border-gold/60"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-soft text-gold-dark">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Paso {index + 1}</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-ink">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
        )}

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-gold/30 bg-gold-soft p-6 text-center sm:flex-row sm:text-left">
          <ShieldAlert className="shrink-0 text-gold-dark" size={30} aria-hidden="true" />
          <p className="flex-1 text-sm leading-relaxed text-charcoal">
            Esta web no atribuye tratamientos a DentaLux hasta recibir confirmación de la clínica.
          </p>
          <a
            href={siteConfig.reservations.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-charcoal"
          >
            Consultar y reservar
          </a>
        </div>
      </div>
    </section>
  );
}
