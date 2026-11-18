import Image from "next/image";

type Brand = { name: string; logo: string };

export default function BrandCarousel({ brands }: { brands: readonly Brand[] }) {
  const renderLogos = (duplicate: boolean) => (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={duplicate || undefined}>
      {brands.map((brand) => (
        <li key={brand.name} className="relative h-24 w-44 shrink-0 rounded-2xl border border-line bg-white p-3 sm:w-48">
          <Image
            src={brand.logo}
            alt={duplicate ? "" : `Logo de ${brand.name}`}
            fill
            sizes="192px"
            className="object-contain p-3"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mt-6">
      <div className="brands-window overflow-hidden" role="region" aria-label="Marcas con las que trabajamos">
        <div className="brands-track flex w-max">
          {renderLogos(false)}
          {renderLogos(true)}
        </div>
      </div>
    </div>
  );
}
