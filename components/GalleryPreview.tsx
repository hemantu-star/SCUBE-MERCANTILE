import Link from "next/link";
import { getCmsGallery } from "@/lib/cms/public";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
export default async function GalleryPreview() {
  const gallery = await getCmsGallery();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Field applications"
          title="Selected installation environments"
          subtitle="Photographs from the company profile, used to illustrate product and site conditions."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((photo) => (
            <div key={photo.src} className="relative h-36 w-full md:h-48 overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="text-sm font-semibold text-navy underline decoration-sun decoration-2 underline-offset-4"
          >
            View the gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
