import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/content";
import PageHero from "@/components/PageHero";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product?.name ?? "Product" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Product"
        title={product.name}
        subtitle={product.desc}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-green">
          Authorised partners
        </h2>
        <p className="mt-3 text-2xl text-navy">
          {product.partners.length
            ? product.partners.join(" · ")
            : "Sourced through our authorised partner network"}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
        >
          Request availability
        </Link>
      </section>
    </main>
  );
}
