import { getCmsBrands } from "@/lib/cms/public";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
export default async function BrandsStrip() {
  const brands = await getCmsBrands();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Authorised portfolio"
          title="Brands we distribute"
          subtitle="Manufacturer partners represented in the 2026 company profile. Availability is subject to product, territory and commercial terms."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center rounded-2xl border border-line bg-paper px-4 py-6 text-center"
            ><div className="relative h-14 w-32">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-navy">{brand.name}</p>
              <p className="mt-1 text-xs text-muted">{brand.products[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
