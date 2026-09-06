import type { Metadata } from "next";
import { brands } from "@/lib/content";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Brands",
};

export default function BrandsPage() {
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
              key={brand.name}
              className="flex items-center gap-6 rounded-2xl bg-white p-6"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-16 w-24 object-contain"
              />
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
