import { deleteMediaAction } from "@/lib/admin-actions";
import { readCms } from "@/lib/cms/store";
import MediaUploadForm from "@/components/admin/MediaUploadForm";

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

      {notice.saved && (
        <div className="mt-4 rounded-xl bg-green-50 border border-green-200 p-3 text-sm text-green-700 font-medium">
          ✅ Media uploaded successfully.
        </div>
      )}

      {notice.error === "size" && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 font-medium">
          ❌ Upload failed: Image size exceeds 1 MB. Please compress or resize your image to under 1 MB to keep the website fast.
        </div>
      )}

      {notice.error === "type" && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 font-medium">
          ❌ Upload failed: Unsupported file format. Please upload a JPG, PNG, WEBP, or AVIF image.
        </div>
      )}

      {notice.error && notice.error !== "size" && notice.error !== "type" && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 font-medium">
          ❌ Upload failed. Please select a valid image under 1 MB.
        </div>
      )}

      <MediaUploadForm />

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
