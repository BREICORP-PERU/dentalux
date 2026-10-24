import { CalendarCheck, Clock3, ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Locations() {
  return (
    <section id="ubicacion" className="bg-white py-20 md:py-28" aria-labelledby="location-title">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-dark">Ubicación</p>
          <h2 id="location-title" className="mt-4 font-heading text-4xl font-bold text-ink md:text-5xl">
            Encuentra DentaLux en Tingo María
          </h2>
          <p className="mt-6 text-lg text-muted">{siteConfig.address.full}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-line bg-surface brand-shadow">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex flex-col justify-between bg-ink p-8 text-white md:p-10 lg:p-12">
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-ink">
                  <MapPin size={27} aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-heading text-3xl font-bold">DentaLux Tingo María</h3>
                <p className="mt-4 leading-relaxed text-white/70">{siteConfig.address.full}</p>

                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock3 className="mt-0.5 shrink-0 text-gold-light" size={20} aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Horario de atención</p>
                    <p className="mt-1 text-sm text-white/60">{siteConfig.hours.display}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href={siteConfig.maps.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <ExternalLink size={17} aria-hidden="true" />
                  Cómo llegar
                </a>
                <a
                  href={siteConfig.reservations.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-gold-hover"
                >
                  <CalendarCheck size={17} aria-hidden="true" />
                  Reservar
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] bg-slate-200 lg:min-h-[560px]">
              <iframe
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${siteConfig.name} en ${siteConfig.address.locality}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
