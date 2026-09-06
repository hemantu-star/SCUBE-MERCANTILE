import { saveGalleryAction } from "@/lib/admin-actions";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const notice = await searchParams;
  const cms = await readCms();
  const selected = new Set(cms.gallery.map((item) => item.mediaId));

  return (
    <main>
      <h1 className="font-serif text-3xl text-navy">Public gallery</h1>
      <p className="mt-2 text-sm text-muted">Choose media that appears on the website gallery.</p>
      {notice.saved && <p className="mt-3 text-sm text-green">Gallery updated.</p>}

      <form action={saveGalleryAction} className="mt-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {cms.media.map((item) => (
            <label key={item.id} className="overflow-hidden rounded-2xl bg-white">
              <img src={item.src} alt={item.alt} className="h-28 w-full object-cover" />
              <span className="flex items-center gap-2 p-3 text-xs">
                <input
                  type="checkbox"
                  name="mediaIds"
                  value={item.id}
                  defaultChecked={selected.has(item.id)}
                />
                {item.filename}
              </span>
            </label>
          ))}
        </div>
        <button className="mt-6 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
          Save gallery
        </button>
      </form>
    </main>
  );
}
