import { redirect } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CatalogCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  redirect(`/catalog?category=${encodeURIComponent(category)}`);
}
