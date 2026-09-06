const brands = [
  { name: "Adani Solar", logo: "/images/brands/adani.jpg" },
  { name: "Waaree Energies", logo: "/images/brands/waaree.png" },
  { name: "Luminous", logo: "/images/brands/luminous.avif" },
  { name: "Microtek", logo: "/images/brands/microtek.jpg" },
  { name: "Tata Power Solar", logo: "/images/brands/tata.jpg" },
];

export default function BrandsStrip() {
  return (
    <section className="py-12 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
          Authorised Distribution Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}