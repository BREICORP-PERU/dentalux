import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import dentaluxLogo from "@/app/dentaluxlogo.png";
import FAQ from "@/components/sections/FAQ";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import { siteConfig } from "@/config/site";

const TRUST_ITEMS = [
  {
    icon: CalendarCheck,
    title: "Reserva oficial",
    text: "Acceso directo al canal proporcionado por DentaLux",
  },
  {
    icon: MapPin,
    title: "Tingo María",
    text: siteConfig.address.street,
  },
  {
    icon: ShieldCheck,
    title: "Información transparente",
    text: "Los datos pendientes se identifican antes de publicarse",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />

      {/* TRUST STRIP */}
      <section aria-label="Información principal" className="border-y border-line bg-white shadow-sm">
        <div className="container mx-auto grid grid-cols-1 gap-0 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {TRUST_ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 px-8 py-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-soft text-gold-dark">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-heading font-bold text-ink">{title}</span>
                <span className="block text-sm leading-snug text-muted">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <Services />

      {/* NOSOTROS / ABOUT */}
      <section id="nosotros" className="relative bg-surface py-20 md:py-28 overflow-hidden" aria-labelledby="about-title">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gold-soft/50 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left: visual card */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-ink aspect-[4/5] brand-shadow">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
                <div className="relative h-full flex flex-col items-center justify-center p-12 gap-8">
                  <div className="relative w-40 h-40">
                    <Image src={dentaluxLogo} alt={`Logotipo oficial de ${siteConfig.name}`} fill className="object-contain" sizes="160px" />
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-white">{siteConfig.name}</p>
                    <p className="text-gold-light text-sm mt-2">{siteConfig.address.locality}, {siteConfig.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-line bg-white p-5 brand-shadow md:-right-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-soft text-gold-dark">
                    <MapPin size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">Ubicación confirmada</p>
                    <p className="mt-1 text-sm text-muted">{siteConfig.address.street}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-soft border border-gold/25 text-gold-dark text-xs font-bold uppercase tracking-[0.22em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                Sobre DentaLux
              </span>
              <h2 id="about-title" className="font-heading text-4xl font-bold leading-tight text-ink md:text-5xl">
                Información clara para tu visita en{" "}
                <span className="text-brand-gradient">Tingo María</span>
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted">
                {siteConfig.name} se encuentra en {siteConfig.address.full}. Esta web reúne los canales oficiales para ubicar la clínica y solicitar una cita.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Los tratamientos, horarios, especialistas y fotografías se publicarán cuando sean validados y autorizados directamente por la clínica.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Ubicación enlazada con la ficha oficial de Google",
                  "Reservas mediante el canal proporcionado por DentaLux",
                  "Redes sociales oficiales reunidas en un solo lugar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-dark shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.reservations.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-gold-gradient px-9 py-4 font-bold text-ink shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold/30 active:scale-95 premium-shadow"
              >
                <CalendarCheck size={18} aria-hidden="true" />
                {siteConfig.reservations.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <Testimonials />

      <Team />
      <FAQ />
      <Locations />
    </div>
  );
}
