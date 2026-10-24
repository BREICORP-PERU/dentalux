import { CalendarCheck, Clock3, MapPin, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
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
    title: "Reserva facil y rapida",
    text: "Canal oficial de reservas via WhatsApp",
  },
  {
    icon: MapPin,
    title: "Tingo Maria - Pucallpa 245",
    text: "Encuentranos en el corazon de la ciudad",
  },
  {
    icon: Clock3,
    title: "Lun - Sab - 8:00 - 20:00",
    text: "Amplio horario de atencion matutina y vespertina",
  },
];

const STATS = [
  { value: "6+", label: "Tratamientos especializados", icon: Star },
  { value: "100%", label: "Compromiso contigo", icon: ShieldCheck },
  { value: "3", label: "Redes sociales activas", icon: Users },
  { value: "1", label: "Clinica en Tingo Maria", icon: Sparkles },
];

const TESTIMONIALS = [
  {
    name: "Maria E.",
    text: "Excelente atencion, me senti muy comoda desde el primer momento. El equipo es muy profesional y amable.",
    rating: 5,
    treatment: "Blanqueamiento",
  },
  {
    name: "Carlos R.",
    text: "Me realizaron una ortodoncia y los resultados son increibles. Muy recomendados en Tingo Maria.",
    rating: 5,
    treatment: "Ortodoncia",
  },
  {
    name: "Ana L.",
    text: "La clinica esta muy bien equipada y el trato es excepcional. Volveria sin dudarlo.",
    rating: 5,
    treatment: "Limpieza Dental",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />

      {/* TRUST STRIP */}
      <section aria-label="Informacion principal" className="border-y border-line bg-white shadow-sm">
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
                    <Image src={dentaluxLogo} alt="Logotipo oficial de DentaLux" fill className="object-contain" sizes="160px" />
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-white">{siteConfig.name}</p>
                    <p className="text-gold-light text-sm mt-2">{siteConfig.address.locality}, {siteConfig.address.region}</p>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl p-5 brand-shadow border border-line">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {STATS.map(({ value, label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gold-soft flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-gold-dark" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-ink text-lg leading-none">{value}</p>
                        <p className="text-[10px] text-muted leading-tight mt-0.5 max-w-[80px]">{label}</p>
                      </div>
                    </div>
                  ))}
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
                Atencion dental con{" "}
                <span className="text-brand-gradient">corazon</span>{" "}
                en Tingo Maria
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted">
                DentaLux Clinica Dental nacio con la mision de brindar atencion odontologica de calidad a las familias de Tingo Maria y la region. Combinamos tecnologia moderna con un trato humano y cercano.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Nos encontramos en <strong className="text-ink font-semibold">{siteConfig.address.full}</strong>. Nuestro equipo te acompanara en cada paso de tu tratamiento.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Tratamientos odontologicos integrales y esteticos",
                  "Atencion personalizada con cita previa",
                  "Ubicacion centrica en Tingo Maria",
                  "Canal oficial de reservas via WhatsApp",
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
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-gold-gradient px-9 py-4 font-bold text-white shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold/30 active:scale-95 premium-shadow"
              >
                <CalendarCheck size={18} aria-hidden="true" />
                {siteConfig.reservations.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-title" className="relative bg-ink py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold-light text-xs font-bold uppercase tracking-[0.22em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
              Testimonios
            </span>
            <h2 id="testimonials-title" className="font-heading text-4xl font-bold text-white md:text-5xl leading-tight">
              Lo que dicen nuestros{" "}
              <span className="text-gold-gradient">pacientes</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5" role="img" aria-label="5 estrellas">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-white/80 leading-relaxed text-sm mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-gold-light text-xs mt-0.5">{t.treatment}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-white font-bold text-sm premium-shadow">
                    {t.name[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <FAQ />
      <Locations />
    </div>
  );
}