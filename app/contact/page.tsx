import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Guwahati, Assam — serving dealers, installers and customers across the Northeast."
      />
      <ContactSection />
    </main>
  );
}
