import Image from "next/image";
import { BadgeCheck, UserRoundCheck, UsersRound } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Team() {
  return (
    <section id="equipo" className="bg-surface py-20 text-ink md:py-28" aria-labelledby="team-title">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-dark">Equipo profesional</p>
          <h2 id="team-title" className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            Perfiles que se publicarán con información validada
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            No mostramos nombres, especialidades, fotografías ni certificaciones hasta recibir autorización expresa de DentaLux.
          </p>
        </div>

        {siteConfig.specialists.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.specialists.map((specialist) => (
              <article key={specialist.name} className="overflow-hidden rounded-3xl border border-line bg-white text-ink brand-shadow">
                <div className="relative aspect-[4/5]">
                  <Image src={specialist.image} alt={specialist.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-bold">{specialist.name}</h3>
                  <p className="mt-1 font-semibold text-gold-dark">{specialist.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{specialist.bio}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-line bg-white p-8 brand-shadow md:p-12">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              <span className="grid h-24 w-24 place-items-center rounded-3xl bg-gold-soft text-gold-dark">
                <UsersRound size={44} aria-hidden="true" />
              </span>
              <div>
                <div className="flex items-center gap-2 text-gold-dark">
                  <BadgeCheck size={19} aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Información pendiente</span>
                </div>
                <h3 className="mt-3 font-heading text-3xl font-bold">Especialistas de DentaLux</h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                  Esta sección está lista para incorporar perfiles verificados, número de colegiatura, especialidad y fotografía autorizada.
                </p>
              </div>
            </div>
            <a
              href={siteConfig.reservations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-ink transition hover:bg-gold-hover"
            >
              <UserRoundCheck size={19} aria-hidden="true" />
              Consultar disponibilidad
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
