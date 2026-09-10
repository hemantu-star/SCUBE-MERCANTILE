import { company } from "@/lib/content";
import Image from "next/image";
export default function Warehouse() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="overflow-hidden rounded-3xl bg-navy text-white md:grid md:grid-cols-2">
        <div className="relative h-72 w-full md:h-full min-h-[280px]">
          <Image
            src="/images/warehouse.jpg"
            alt="S-Cube Mercantile solar products warehouse in Guwahati, Assam"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">
            Warehouse & distribution
          </p>
          <h2 className="font-serif mt-3 text-3xl">
            Solar products warehouse — {company.city}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Organised storage and handling of panels, batteries, inverters,
            cables and allied materials. The model focuses on sourcing, stock
            readiness, carrying and forwarding, and channel fulfilment across
            the region.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li>Stock readiness for channel orders</li>
            <li>Regional logistics from Guwahati</li>
            <li>Fulfilment for dealers, installers and institutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
