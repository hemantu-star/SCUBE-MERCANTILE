import { process } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="How we work"
        title="A clear distribution process"
        subtitle="Source, receive, store, supply and support — the operating sequence from the 2026 company profile."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-5">
        {process.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-line bg-white p-5"
          >
            <span className="font-serif text-2xl text-sun">{item.step}</span>
            <h3 className="mt-3 font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
