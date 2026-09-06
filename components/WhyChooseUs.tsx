import { Award, ShieldCheck, MapPin, Truck, Tag, Headphones } from "lucide-react";

const reasons = [
  {
    title: "7+ Years of Experience",
    desc: "Established track record in solar distribution and dealership across the region.",
    icon: Award,
  },
  {
    title: "Authorised Distributor",
    desc: "Genuine products from Adani Solar, Waaree Solar, Luminous and Microtek with manufacturer warranty support.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Local Network",
    desc: "Regional understanding of Guwahati and the Northeast Indian market, logistics and customer needs.",
    icon: MapPin,
  },
  {
    title: "Reliable CNF & Distribution",
    desc: "Carrying, forwarding and distribution model focused on consistent stock availability.",
    icon: Truck,
  },
  {
    title: "Competitive Pricing",
    desc: "Distributor-level pricing support for channel partners and customers.",
    icon: Tag,
  },
  {
    title: "After-Sales Support",
    desc: "Coordination for warranty claims, technical queries and product servicing.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900">
        Why Choose S-Cube Mercantile
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-10">
        A distribution partner built on genuine products and dependable service
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="bg-gray-50 rounded-xl p-6 border border-gray-100"
          >
            <Icon className="w-7 h-7 text-blue-700 mb-3" />
            <h3 className="font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}