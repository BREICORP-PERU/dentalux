import Image from "next/image";
import dentaluxLogo from "@/app/dentaluxlogo.png";
import { siteConfig } from "@/config/site";

type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export default function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label={siteConfig.name}>
      <span
        aria-hidden="true"
        className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-ink p-1.5 ${inverse ? "ring-1 ring-white/10" : "gold-ring"}`}
      >
        <Image
          src={dentaluxLogo}
          alt=""
          fill
          priority
          className="object-contain p-1"
          sizes="48px"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-heading text-xl font-bold tracking-tight ${inverse ? "text-white" : "text-ink"}`}
          >
            Denta<span className={inverse ? "text-gold-light" : "text-gold-dark"}>Lux</span>
          </span>
          <span
            className={`mt-1 text-[9px] font-bold uppercase tracking-[0.25em] ${inverse ? "text-white/60" : "text-muted"}`}
          >
            Clínica Dental
          </span>
        </span>
      )}
    </span>
  );
}
