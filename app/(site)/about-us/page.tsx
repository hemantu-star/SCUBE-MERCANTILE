import type { Metadata } from "next";
import { company, process, values } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "About Us",
  "S-Cube Mercantile is a Guwahati-based CNF, distributor and dealer of solar products, serving Assam and the Northeast for more than seven years.",
  "/about-us",
);

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Our journey in solar distribution"
        subtitle="Founded in Guwahati seven years ago, S-Cube Mercantile grew from a local dealer into an authorised distributor for leading national brands."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-muted">{company.summary}</p>
            <p className="mt-4 leading-relaxed text-muted">
              Over the years the company has built a network of retailers,
              installers and institutional clients. Today it continues to expand
              reach, product range and service capability as the region adopts
              more solar and renewable energy.
            </p>
          </div>
          <div className="grid gap-5">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6">
                <h2 className="font-semibold text-navy">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-3xl text-navy">Distribution process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {process.map((item) => (
              <div key={item.step}>
                <p className="font-serif text-2xl text-sun">{item.step}</p>
                <h3 className="mt-2 font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
