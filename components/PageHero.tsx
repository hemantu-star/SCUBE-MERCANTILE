export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy px-4 py-16 text-white md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
