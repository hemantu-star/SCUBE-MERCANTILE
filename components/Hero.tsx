import Link from "next/link";
import { company } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";
//import { HeroCanvas } from "@/components/three/ThreeCanvas";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-navy text-white">
      <Image
        src="/images/hero.jpg"
        alt="Solar installation across Guwahati and the Northeast"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />

      <div className="relative mx-auto grid min-h-[86vh] max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sun">
            {company.model} · {company.city}
          </p>
          <h1 className="font-serif mt-4 max-w-xl text-4xl leading-tight md:text-6xl">
            {company.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            Genuine solar panels, inverters, batteries, pumps and lighting —
            supplied from Guwahati to dealers, installers and projects across
            the Northeast.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sun px-6 py-3 text-sm font-semibold text-navy transition hover:bg-[#efb02a]"
            >
              WhatsApp us
            </a>
            <Link
              href="/products"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View products
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/55">
            {company.iso} certified · {company.years} years of service
          </p>
        </div>

        {/* <div className="relative h-[240px] md:h-[420px]">
          <HeroCanvas />
        </div> */}
      </div>
    </section>
  );
}
