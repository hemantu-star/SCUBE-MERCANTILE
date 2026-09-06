import Link from "next/link";
import { deleteProductAction } from "@/lib/admin-actions";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const notice = await searchParams;
  const cms = await readCms();

  return (
    <main>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-navy">Products</h1>
          <p className="mt-1 text-sm text-muted">Add, edit and assign media to product pages.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white"
        >
          Add product
        </Link>
      </div>
      {notice.saved && <p className="mt-4 text-sm text-green">Product saved.</p>}
      {notice.deleted && <p className="mt-4 text-sm text-green">Product deleted.</p>}

      <div className="mt-6 overflow-hidden rounded-2xl bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-paper text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Photos</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {cms.products.map((product) => {
              const category = cms.categories.find((item) => item.id === product.categoryId);
              return (
                <tr key={product.id} className="border-t border-line">
                  <td className="px-4 py-3">
                    <p className="font-medium text-navy">{product.name}</p>
                    <p className="text-xs text-muted">/{product.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-muted">{category?.name || "—"}</td>
                  <td className="px-4 py-3 text-muted">{product.imageIds.length}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/products/${product.id}`} className="mr-3 text-navy">
                      Edit
                    </Link>
                    <form action={deleteProductAction} className="inline">
                      <input type="hidden" name="id" value={product.id} />
                      <button className="text-red-600">Delete</button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
