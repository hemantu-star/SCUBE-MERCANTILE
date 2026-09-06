import ProductForm from "@/components/admin/ProductForm";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function NewProductPage() {
  const cms = await readCms();
  return (
    <main>
      <h1 className="font-serif text-3xl text-navy">Add product</h1>
      <ProductForm categories={cms.categories} media={cms.media} />
    </main>
  );
}
