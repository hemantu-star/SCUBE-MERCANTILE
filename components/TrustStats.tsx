import { stats } from "@/lib/content";

export default function TrustStats() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-8 text-center md:py-10">
            <div className="font-serif text-2xl text-navy md:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
