import { reasons } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why S-Cube"
          title="A distribution partner built on genuine supply"
          subtitle="The six reasons stated in the company profile — experience, authorised brands, local network, CNF, pricing and after-sales."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <span className="font-serif text-xl text-sun">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
