import { productImages, readCms } from "./store";
import type { MediaItem, Product } from "./types";

export async function getCmsProducts() {
  const cms = await readCms();
  return cms.products;
}

export async function getCmsProduct(slug: string) {
  const cms = await readCms();
  const product = cms.products.find((item) => item.slug === slug);
  if (!product) return null;
  const category = cms.categories.find((item) => item.id === product.categoryId);
  return {
    product,
    category,
    images: productImages(product, cms.media),
  };
}

export async function getCmsGallery(): Promise<MediaItem[]> {
  const cms = await readCms();
  return cms.gallery
    .map((item) => cms.media.find((media) => media.id === item.mediaId))
    .filter((item): item is MediaItem => Boolean(item));
}

export async function getCmsBrands() {
  const cms = await readCms();
  return cms.brands;
}

export async function getCmsCategories() {
  const cms = await readCms();
  return cms.categories;
}

export type { Product };
