import { deleteMediaAction, uploadMediaAction } from "@/lib/admin-actions";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const notice = await searchParams;
  const cms = await readCms();

  return (
    <main>
      <h1 className="font-serif text-3xl text-navy">Media library</h1>
      <p className="mt-2 text-sm text-muted">
        Upload photos, then assign them to products or the public gallery.
      </p>
      {notice.saved && <p className="mt-3 text-sm text-green">Media uploaded.</p>}
      {notice.error && (
        <p className="mt-3 text-sm text-red-600">Upload failed. Use a JPG, PNG, WEBP or AVIF under 8MB.</p>
      )}

      <form action={uploadMediaAction} className="mt-6 rounded-2xl bg-white p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <input type="file" name="file" accept="image/*" required className="text-sm" />
          <input name="alt" placeholder="Alt text" className="rounded-xl border border-line px-3 py-3" />
          <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">
            Upload
          </button>
        </div>
      </form>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {cms.media.map((item) => (
          <figure key={item.id} className="overflow-hidden rounded-2xl bg-white">
            <img src={item.src} alt={item.alt} className="h-32 w-full object-cover" />
            <figcaption className="p-3 text-xs text-muted">{item.alt || item.filename}</figcaption>
            <form action={deleteMediaAction} className="px-3 pb-3">
              <input type="hidden" name="id" value={item.id} />
              <button className="text-xs text-red-600">Remove</button>
            </form>
          </figure>
        ))}
      </div>
    </main>
  );
}
