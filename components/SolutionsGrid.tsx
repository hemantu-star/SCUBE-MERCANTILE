import Link from "next/link";
import { solutions } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export default function SolutionsGrid() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          light
          eyebrow="Use cases"
          title="Solutions by application"
          subtitle="Configured for how solar is actually used across Assam and the Northeast."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <span className="text-xs text-sun">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm text-white/65">{item.desc}</p>
              <p className="mt-5 text-xs text-white/40 transition group-hover:text-sun">
                {item.partners.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
