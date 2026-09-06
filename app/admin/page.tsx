import Link from "next/link";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const cms = await readCms();

  const cards = [
    { label: "Products", value: cms.products.length, href: "/admin/products" },
    { label: "Categories", value: cms.categories.length, href: "/admin/categories" },
    { label: "Media", value: cms.media.length, href: "/admin/media" },
    { label: "Gallery", value: cms.gallery.length, href: "/admin/gallery" },
    { label: "Brands", value: cms.brands.length, href: "/admin/brands" },
  ];

  return (
    <main>
      <h1 className="font-serif text-3xl text-navy">Dashboard</h1>
      <p className="mt-2 text-sm text-muted">
        Content stored in the local CMS. Changes appear on the public site immediately.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-2xl bg-white p-5 transition hover:shadow-sm"
          >
            <p className="text-xs uppercase tracking-wider text-muted">{card.label}</p>
            <p className="font-serif mt-2 text-3xl text-navy">{card.value}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
