import type { MetadataRoute } from "next";
import { getCmsProducts } from "@/lib/cms/public";
import { solutions } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getCmsProducts();
  const now = new Date();

  const staticRoutes = [
    "",
    "/about-us",
    "/products",
    "/solutions",
    "/brands",
    "/gallery",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const solutionRoutes = solutions.map((solution) => ({
    url: `${siteUrl}/solutions/${solution.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...solutionRoutes];
}
