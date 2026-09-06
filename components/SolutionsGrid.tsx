import Link from "next/link";

const solutions = [
  {
    name: "Rooftop",
    desc: "Residential & commercial",
    href: "/solutions/rooftop-solar",
  },
  {
    name: "Agriculture",
    desc: "Irrigation & borewell",
    href: "/solutions/agriculture-irrigation",
  },
  {
    name: "Community Water",
    desc: "Water & lighting schemes",
    href: "/solutions/community-water-lighting",
  },
  {
    name: "Utility Scale",
    desc: "Large solar installations",
    href: "/solutions/utility-scale",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900">
          Solutions by Use-Case
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Solar solutions configured for how you'll actually use them
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {solutions.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="font-medium text-gray-800">{s.name}</div>
              <div className="text-sm text-gray-500 mt-1">{s.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}