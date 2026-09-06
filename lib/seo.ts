import type { Metadata } from "next";
import { company } from "@/lib/content";

export const siteUrl = company.website;
export const defaultDescription = `${company.name} is an authorised CNF, distributor and dealer of solar panels, inverters, batteries, pumps and lighting in ${company.city}. ${company.iso} certified.`;

export function pageMeta(
  title: string,
  description: string,
  path: string,
  image = "/images/hero.jpg",
): Metadata {
  const url = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();
  const fullTitle = `${title} | ${company.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: company.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: imageUrl, alt: company.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
