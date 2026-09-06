import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cms = await readCms();
  const product = cms.products.find((item) => item.id === id);
  if (!product) notFound();

  return (
    <main>
      <h1 className="font-serif text-3xl text-navy">Edit product</h1>
      <ProductForm product={product} categories={cms.categories} media={cms.media} />
    </main>
  );
}
