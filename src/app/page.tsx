import { CalendarCheck, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import dentaluxLogo from "@/app/dentaluxlogo.png";
import FAQ from "@/components/sections/FAQ";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
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
    <div className="min-h-screen overflow-clip">
      <Hero />

      <section aria-label="Información principal" className="border-y border-line bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-6 py-8 md:grid-cols-3 md:py-10">
          {TRUST_ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 rounded-2xl p-3">
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

      <section id="nosotros" className="relative bg-white py-20 md:py-28" aria-labelledby="about-title">
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="soft-grid relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-line bg-surface p-8 brand-shadow md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-soft blur-2xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[48px] border-black/[0.025]" />
            <div className="relative flex h-full min-h-[330px] flex-col justify-between">
              <span className="w-fit rounded-full border border-gold/35 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                {siteConfig.identity.notice}
              </span>
              <div className="mt-8 grid gap-7 sm:grid-cols-[150px_1fr] sm:items-center">
                <span className="gold-ring relative block aspect-square overflow-hidden rounded-[2.5rem] bg-ink p-4">
                  <Image src={dentaluxLogo} alt="Logotipo oficial de DentaLux" fill className="object-contain p-4" sizes="150px" />
                </span>
                <p className="max-w-sm text-lg leading-relaxed text-muted">
                  Una presencia digital clara, cercana y preparada para crecer con la información oficial de la clínica.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-dark">Sobre DentaLux</p>
            <h2 id="about-title" className="mt-4 font-heading text-4xl font-bold leading-tight text-ink md:text-5xl">
              Atención dental en el corazón de <span className="text-brand-gradient">Tingo María</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted">
              {siteConfig.name} se encuentra en {siteConfig.address.full}. Esta web reúne los canales oficiales para ubicar la clínica y solicitar una cita.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Los tratamientos, horarios y perfiles profesionales se incorporarán cuando sean validados directamente por la clínica. Así evitamos presentar información comercial incompleta como si estuviera confirmada.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Ubicación enlazada con la ficha oficial de Google",
                "Reservas mediante el canal proporcionado por DentaLux",
                "Redes sociales oficiales reunidas en un solo lugar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold-dark" size={20} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-bold text-ink shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-gold-hover"
            >
              {siteConfig.reservations.label}
            </a>
          </div>
        </div>
      </section>

      <Gallery />
      <Team />
      <FAQ />
      <Locations />
    </div>
  );
}
