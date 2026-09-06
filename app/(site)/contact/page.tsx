import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Contact",
  "WhatsApp S-Cube Mercantile in Guwahati for solar product supply, channel distribution and after-sales support across Assam and the Northeast.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Continue on WhatsApp"
        subtitle="Enquiries go to WhatsApp. Address and map stay here for dealers and installers visiting Guwahati."
      />
      <ContactSection />
    </main>
  );
}
