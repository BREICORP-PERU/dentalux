import Image from "next/image";
import dentaluxLogo from "@/app/dentaluxlogo.png";
import { siteConfig } from "@/config/site";

type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export default function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3 group" aria-label={siteConfig.name}>
      <span
        aria-hidden="true"
        className={`relative h-11 w-11 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-2xl p-1.5 transition-transform duration-300 group-hover:scale-105 ${
          inverse
            ? "bg-ink/90 ring-1 ring-gold/40 shadow-lg shadow-black/40"
            : "bg-ink ring-1 ring-gold/30 shadow-md"
        }`}
      >
        <Image
          src={dentaluxLogo}
          alt={`Logotipo oficial de ${siteConfig.name}`}
          fill
          priority
          className="object-contain p-1"
          sizes="48px"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-heading text-xl font-bold tracking-tight transition-colors ${
              inverse ? "text-white drop-shadow-sm" : "text-ink"
            }`}
          >
            Denta<span className={inverse ? "text-gold-light" : "text-gold-dark"}>Lux</span>
          </span>
          <span
            className={`mt-1 text-[9px] font-bold uppercase tracking-[0.25em] transition-colors ${
              inverse ? "text-gold-light/85" : "text-muted"
            }`}
          >
            Clínica Dental
          </span>
        </span>
      )}
    </span>
  );
}
