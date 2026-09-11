import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getCmsGallery } from "@/lib/cms/public";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";

//export const dynamic = "force-dynamic";
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Gallery",
  "Selected solar installation and field photographs from S-Cube Mercantile projects and product environments in Guwahati and the Northeast.",
  "/gallery",
);

export default async function GalleryPage() {
  const gallery = await getCmsGallery();

  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Selected application imagery"
        subtitle="Installation and field photographs from the company profile and CMS."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((photo) => (
            <figure key={photo.id} className="overflow-hidden rounded-2xl bg-white">
              <div className="relative h-72 w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="p-4 text-sm text-muted">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">
          Project photographs illustrate product and installation environments.
          They should not be read as independently certified project credentials
          unless supported by separate project documents.
        </p>
      </section>
    </main>
  );
}
