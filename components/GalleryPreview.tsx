import Link from "next/link";

const photos = [
  {
    src: "/images/gallery/rooftop-installation.jpg",
    alt: "Rooftop solar panel installation in Guwahati, Assam",
  },
  {
    src: "/images/gallery/elevated-rooftop.jpg",
    alt: "Elevated rooftop solar installation on a residential building",
  },
  {
    src: "/images/gallery/solar-pv-array.jpg",
    alt: "Solar PV array and mounting structure installation",
  },
  {
    src: "/images/gallery/solar-water-pump.jpg",
    alt: "Solar-powered water pump for agricultural irrigation in Assam",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900">
          Our Installations
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          A look at solar projects across Guwahati and the Northeast
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="w-full h-32 md:h-40 object-cover rounded-xl"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="text-blue-700 font-medium hover:underline"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}