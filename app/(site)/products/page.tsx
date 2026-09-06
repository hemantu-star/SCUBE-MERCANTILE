import type { Metadata } from "next";
import ProductsGrid from "@/components/ProductsGrid";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Products",
  "Solar PV modules, inverters, batteries, water pumps, lighting and BOS from authorised brands including Adani Solar, Waaree, Luminous, Microtek and Tata Power Solar.",
  "/products",
);

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title="A complete solar product ecosystem"
        subtitle="PV modules, inverters, batteries, pumps, lighting, mounting, cables and BOS — sourced from authorised manufacturer partners."
      />
      <ProductsGrid />
    </main>
  );
}
