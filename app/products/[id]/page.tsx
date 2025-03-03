import { fetchProduct } from "@/app/lib/products";
import type { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

// Add this function to generate static paths
export async function generateStaticParams() {
  // Return an array of possible id values
  return [
    { id: "sofa-1" },
    { id: "table-1" },
    { id: "chair-1" },
    // Add all your product IDs here
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProduct(params.id);

  return {
    title: `${product.name} | Qatar Furniture Decor`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await fetchProduct(params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Add your product display here */}
    </div>
  );
}
