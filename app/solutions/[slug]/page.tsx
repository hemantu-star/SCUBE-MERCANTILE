import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/content";
import PageHero from "@/components/PageHero";

export function generateStaticParams() {
  return solutions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  return { title: solution?.name ?? "Solution" };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Solution"
        title={solution.name}
        subtitle={solution.desc}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-green">
          Typical partners
        </h2>
        <p className="mt-3 text-2xl text-navy">{solution.partners.join(" · ")}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
        >
          Discuss a requirement
        </Link>
      </section>
    </main>
  );
}
