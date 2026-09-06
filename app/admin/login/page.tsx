import { loginAction } from "@/lib/admin-actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-4">
      <form action={loginAction} className="w-full rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
          S-Cube CMS
        </p>
        <h1 className="font-serif mt-2 text-3xl text-navy">Admin sign in</h1>
        <p className="mt-2 text-sm text-muted">
          Manage products, categories, media and gallery.
        </p>
        {error && (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            Incorrect password.
          </p>
        )}
        <label className="mt-6 block text-sm font-medium text-navy">
          Password
          <input
            type="password"
            name="password"
            required
            className="mt-2 w-full rounded-xl border border-line px-3 py-3"
          />
        </label>
        <button type="submit" className="mt-6 w-full rounded-full bg-navy py-3 text-sm font-semibold text-white">
          Enter dashboard
        </button>
      </form>
    </main>
  );
}
