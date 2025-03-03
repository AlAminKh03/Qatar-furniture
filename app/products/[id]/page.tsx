import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch product data
  const product = await fetchProduct(params.id);

  return {
    title: `${product.name} | Qatar Furniture Decor`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Qatar Furniture Decor`,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}

export default function ProductPage({ params }: Props) {
  // Your page component
}
