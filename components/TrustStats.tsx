const stats = [
  { value: "7+", label: "Years of Service" },
  { value: "ISO 9001:2015", label: "Certified Firm" },
  { value: "5", label: "Brands Carried" },
  { value: "Northeast India", label: "Regional Reach" },
];

export default function TrustStats() {
  return (
    <section className="bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-xl md:text-2xl font-semibold text-blue-900">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}