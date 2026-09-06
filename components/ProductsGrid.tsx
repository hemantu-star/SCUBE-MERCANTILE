import Link from "next/link";
import { Sun, Zap, BatteryFull, Droplet, Lightbulb, Plug } from "lucide-react";

const products = [
  { name: "Solar Panels", href: "/products/solar-panels", icon: Sun },
  { name: "Inverters", href: "/products/solar-inverters", icon: Zap },
  { name: "Batteries", href: "/products/solar-batteries", icon: BatteryFull },
  { name: "Water Pumps", href: "/products/solar-water-pumps", icon: Droplet },
  { name: "Lighting", href: "/products/solar-street-lighting", icon: Lightbulb },
  { name: "BOS & Cables", href: "/products/mounting-structures-bos", icon: Plug },
];

export default function ProductsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900">
        Our Products
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-10">
        Genuine solar products, sourced from authorised manufacturer partners
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className="flex flex-col items-center justify-center gap-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 rounded-xl p-6 text-center transition"
          >
            <Icon className="w-8 h-8 text-blue-700" />
            <span className="font-medium text-gray-800">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}