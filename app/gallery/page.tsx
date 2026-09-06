import type { Metadata } from "next";
import { gallery } from "@/lib/content";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Selected application imagery"
        subtitle="Installation and field photographs from the company profile."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl bg-white">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-72 w-full object-cover"
              />
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
