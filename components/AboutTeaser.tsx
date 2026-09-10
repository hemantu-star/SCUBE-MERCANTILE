import Link from "next/link";
import { company, values } from "@/lib/content";
//import { OrbitCanvas } from "@/components/three/ThreeCanvas";
import Image from "next/image";
export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            About the firm
          </p>
          <h2 className="font-serif mt-3 text-3xl text-navy md:text-4xl">
            From local dealer to authorised regional distributor
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{company.summary}</p>
          <p className="mt-4 leading-relaxed text-muted">
            Founded in Guwahati seven years ago, the firm now supports a
            network of retailers, installers and institutional clients with
            warehouse-backed stock and after-sales coordination.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {values.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/about-us"
            className="mt-8 inline-flex text-sm font-semibold text-navy underline decoration-sun decoration-2 underline-offset-4"
          >
            Read our journey
          </Link>
        </div>

        <div className="relative h-80 w-full md:h-[420px] overflow-hidden rounded-2xl bg-navy">

          <Image
            src="/images/about-rooftop.webp"
            alt="Residential rooftop solar installation"
            fill
            className="object-cover opacity-70"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
          {/* <div className="absolute bottom-0 right-0 h-48 w-48 md:h-56 md:w-56">
            <OrbitCanvas />
          </div> */}
        </div>
      </div>
    </section>
  );
}
