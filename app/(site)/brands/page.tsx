import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getCmsBrands } from "@/lib/cms/public";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";

//export const dynamic = "force-dynamic";
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Brands",
  "Authorised solar brands distributed by S-Cube Mercantile: Adani Solar, Waaree Energies, Luminous, Microtek and Tata Power Solar.",
  "/brands",
);

export default async function BrandsPage() {
  const brands = await getCmsBrands();

  return (
    <main>
      <PageHero
        eyebrow="Brands"
        title="Authorised distribution portfolio"
        subtitle="The solar-product ecosystem represented in the 2026 company profile."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {brands.map((brand) => (
            <article
              key={brand.id}
              className="flex items-center gap-6 rounded-2xl bg-white p-6"
            >
              <div className="relative h-16 w-24 shrink-0">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  loading="lazy"
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-navy">{brand.name}</h2>
                <p className="mt-1 text-sm text-muted">
                  {brand.products.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted">
          Brand availability is subject to product, territory and commercial
          terms.
        </p>
      </section>
    </main>
  );
}
