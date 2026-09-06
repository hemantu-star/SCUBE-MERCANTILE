import { capabilities, segments } from "@/lib/content";

export default function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            Capabilities
          </p>
          <h2 className="font-serif mt-3 text-3xl text-navy md:text-4xl">
            Right product. Right channel. Reliable delivery.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title} className="border-l border-sun pl-4">
                <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-navy p-8 text-white">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sun">
            Who we serve
          </h3>
          <ul className="mt-6 space-y-5">
            {segments.map((item) => (
              <li key={item.title} className="border-b border-white/10 pb-4 last:border-0">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-white/60">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
