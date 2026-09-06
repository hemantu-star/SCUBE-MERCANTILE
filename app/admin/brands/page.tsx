import { deleteBrandAction, saveBrandAction } from "@/lib/admin-actions";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminBrandsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const notice = await searchParams;
  const cms = await readCms();

  return (
    <main>
      <h1 className="font-serif text-3xl text-navy">Brands</h1>
      {notice.saved && <p className="mt-3 text-sm text-green">Brand saved.</p>}

      <form action={saveBrandAction} className="mt-6 grid gap-3 rounded-2xl bg-white p-5 md:grid-cols-4">
        <input name="name" placeholder="Brand name" required className="rounded-xl border border-line px-3 py-3" />
        <input name="logo" placeholder="Logo URL /images/..." className="rounded-xl border border-line px-3 py-3" />
        <input
          name="products"
          placeholder="Product lines, comma separated"
          className="rounded-xl border border-line px-3 py-3"
        />
        <button className="rounded-full bg-navy text-sm font-semibold text-white">Add brand</button>
      </form>

      <div className="mt-6 space-y-3">
        {cms.brands.map((brand) => (
          <div key={brand.id} className="rounded-2xl bg-white p-5">
            <form action={saveBrandAction} className="grid gap-3 md:grid-cols-4">
              <input type="hidden" name="id" value={brand.id} />
              <input name="name" defaultValue={brand.name} className="rounded-xl border border-line px-3 py-2" />
              <input name="logo" defaultValue={brand.logo} className="rounded-xl border border-line px-3 py-2" />
              <input
                name="products"
                defaultValue={brand.products.join(", ")}
                className="rounded-xl border border-line px-3 py-2"
              />
              <button className="text-sm font-semibold text-navy">Save</button>
            </form>
            <form action={deleteBrandAction} className="mt-2">
              <input type="hidden" name="id" value={brand.id} />
              <button className="text-sm text-red-600">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </main>
  );
}
