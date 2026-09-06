import { company } from "@/lib/content";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: company.name,
    legalName: company.name,
    description: company.summary,
    url: company.website,
    email: company.email,
    image: `${company.website}/images/logo.png`,
    logo: `${company.website}/images/logo.png`,
    vatID: company.gstn,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "C/o Suchii Group, 1st Floor, Nikita Pinacle, Opp. of Vivanta by Taj, Khanpara",
      addressLocality: "Guwahati",
      addressRegion: "Assam",
      postalCode: "781022",
      addressCountry: "IN",
    },
    areaServed: ["Guwahati", "Assam", "Northeast India"],
    knowsAbout: [
      "Solar PV modules",
      "Solar inverters",
      "Solar batteries",
      "Solar water pumps",
      "Solar lighting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
