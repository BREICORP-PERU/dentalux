import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import About from "@/components/sections/About";
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
      <About />

      <Gallery />

      <Testimonials />

      <Team />
      <FAQ />
      <Locations />
    </div>
  );
}
