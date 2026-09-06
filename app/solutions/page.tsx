import type { Metadata } from "next";
import SolutionsGrid from "@/components/SolutionsGrid";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Solar configured by use-case"
        subtitle="Rooftop, agriculture, community water and lighting, and utility-scale product supply."
      />
      <SolutionsGrid />
    </main>
  );
}
