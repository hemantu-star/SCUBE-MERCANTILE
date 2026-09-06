import type { Metadata } from "next";
import ProductsGrid from "@/components/ProductsGrid";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Products",
};

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
