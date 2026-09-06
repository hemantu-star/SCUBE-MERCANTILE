import Link from "next/link";
import {
  Sun,
  Zap,
  BatteryFull,
  Droplet,
  Lightbulb,
  Plug,
} from "lucide-react";
import { products } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

const icons = {
  sun: Sun,
  zap: Zap,
  battery: BatteryFull,
  droplet: Droplet,
  lightbulb: Lightbulb,
  plug: Plug,
};

export default function ProductsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Product range"
          title="Solar products, sourced from authorised partners"
          subtitle="Hover a category to see the manufacturer brands we distribute for that line."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = icons[product.icon as keyof typeof icons];
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-line bg-paper p-6 transition hover:border-navy/20 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {product.short}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.desc}
                </p>
                <p className="mt-4 text-xs font-medium text-green">
                  {product.partners.length
                    ? product.partners.join(" · ")
                    : "Authorised partner network"}
                </p>

                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-navy/95 p-6 opacity-0 transition duration-300 group-hover:opacity-100 group-focus:opacity-100">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sun">
                    Authorised partners
                  </p>
                  <p className="mt-2 text-base font-medium leading-snug text-white">
                    {product.partners.length
                      ? product.partners.join(" · ")
                      : "Sourced through our authorised partner network"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
