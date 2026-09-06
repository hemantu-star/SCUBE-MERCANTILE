import { Mail, MapPin, MessageCircle } from "lucide-react";
import { company } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Partner with S-Cube Mercantile"
        subtitle="For dependable solar-product distribution, channel supply and renewable-energy support across Assam and the Northeast."
      />

      <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
        <div className="space-y-6 rounded-3xl bg-white p-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-green" />
            <p className="text-sm leading-relaxed text-ink">{company.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-green" />
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-green"
            >
              WhatsApp us
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-green" />
            <a
              href={`mailto:${company.email}`}
              className="text-sm text-ink hover:text-green"
            >
              {company.email}
            </a>
          </div>
          <p className="text-sm text-muted">GSTN: {company.gstn}</p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#1f8a4c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#18753f]"
          >
            Continue on WhatsApp
          </a>
        </div>

        <div className="min-h-[280px] overflow-hidden rounded-3xl">
          <iframe
            title="S-Cube Mercantile location on Google Maps"
            src="https://www.google.com/maps?q=Nikita+Pinacle+Khanpara+Guwahati&output=embed"
            className="h-full min-h-[280px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
