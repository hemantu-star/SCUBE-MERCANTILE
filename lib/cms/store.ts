import { cache } from "react";
import { promises as fs } from "fs";
import path from "path";
import clientPromise from "@/lib/mongodb";
import type { CmsData, MediaItem, Product } from "./types";

const cmsPath = path.join(process.cwd(), "data", "cms.json");

export function newId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

async function readLocalFallback(): Promise<CmsData> {
  const raw = await fs.readFile(cmsPath, "utf8");
  return JSON.parse(raw) as CmsData;
}

// Inner fetch — runs the actual MongoDB / file-system query.
// Kept separate so writeCms / updateCms can bypass the cache.
async function fetchCms(): Promise<CmsData> {
  if (clientPromise) {
    try {
      const client = await clientPromise;
      const db = client.db("scube_cms");
      const doc = await db.collection("cms_store").findOne({ _id: "scube_cms_doc" as any });

      if (doc && doc.data) {
        return doc.data as CmsData;
      }

      // First-time automatic migration: copy local data/cms.json into MongoDB
      const localData = await readLocalFallback();
      await db.collection("cms_store").updateOne(
        { _id: "scube_cms_doc" as any },
        { $set: { data: localData, updatedAt: new Date() } },
        { upsert: true }
      );
      return localData;
    } catch (err) {
      console.error("MongoDB read error, using local fallback:", err);
    }
  }
  return readLocalFallback();
}

// Memoised per-request: no matter how many components call readCms()
// in one render, MongoDB is only queried once.
export const readCms = cache(fetchCms);

export async function writeCms(data: CmsData) {
  if (clientPromise) {
    try {
      const client = await clientPromise;
      const db = client.db("scube_cms");
      await db.collection("cms_store").updateOne(
        { _id: "scube_cms_doc" as any },
        { $set: { data, updatedAt: new Date() } },
        { upsert: true }
      );
      return;
    } catch (err) {
      console.error("MongoDB write error, saving locally:", err);
    }
  }

  await fs.mkdir(path.dirname(cmsPath), { recursive: true });
  await fs.writeFile(cmsPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export async function updateCms(mutator: (data: CmsData) => void) {
  // Always fetch fresh data for mutations — bypass the per-request cache.
  const data = await fetchCms();
  mutator(data);
  await writeCms(data);
  return data;
}

export function productImages(product: Product, media: MediaItem[]) {
  return product.imageIds
    .map((id) => media.find((item) => item.id === id))
    .filter((item): item is MediaItem => Boolean(item));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
