import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full flex items-center">
      {/* Background image */}
      <img
        src="/images/hero.jpg"
        alt="Rooftop solar panel installation in Guwahati, Assam"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-tight">
          Solar Panels, Inverters, Batteries & Pumps in Guwahati, Assam
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-200">
          Authorised dealer · 7+ years of service · ISO 9001:2015 certified
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium"
          >
            Get a Quote
          </Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}