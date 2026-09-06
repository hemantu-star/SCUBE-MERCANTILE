import type { Metadata } from "next";
import SolutionsGrid from "@/components/SolutionsGrid";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Solutions",
  "Solar solutions for rooftop, agriculture, community water and lighting, and utility-scale supply across Assam and the Northeast.",
  "/solutions",
);

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
