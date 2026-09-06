import { deleteCategoryAction, saveCategoryAction } from "@/lib/admin-actions";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const notice = await searchParams;
  const cms = await readCms();

  return (
    <main>
      <h1 className="font-serif text-3xl text-navy">Categories</h1>
      {notice.saved && <p className="mt-3 text-sm text-green">Category saved.</p>}

      <form action={saveCategoryAction} className="mt-6 grid gap-3 rounded-2xl bg-white p-5 md:grid-cols-4">
        <input name="name" placeholder="Name" required className="rounded-xl border border-line px-3 py-3" />
        <input name="slug" placeholder="Slug" className="rounded-xl border border-line px-3 py-3" />
        <input name="description" placeholder="Description" className="rounded-xl border border-line px-3 py-3" />
        <button className="rounded-full bg-navy text-sm font-semibold text-white">Add category</button>
      </form>

      <div className="mt-6 space-y-3">
        {cms.categories.map((category) => (
          <div key={category.id} className="rounded-2xl bg-white p-5">
            <form action={saveCategoryAction} className="grid gap-3 md:grid-cols-4">
              <input type="hidden" name="id" value={category.id} />
              <input name="name" defaultValue={category.name} className="rounded-xl border border-line px-3 py-2" />
              <input name="slug" defaultValue={category.slug} className="rounded-xl border border-line px-3 py-2" />
              <input
                name="description"
                defaultValue={category.description}
                className="rounded-xl border border-line px-3 py-2"
              />
              <div className="flex gap-3">
                <button className="text-sm font-semibold text-navy">Save</button>
              </div>
            </form>
            <form action={deleteCategoryAction} className="mt-2">
              <input type="hidden" name="id" value={category.id} />
              <button className="text-sm text-red-600">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </main>
  );
}
