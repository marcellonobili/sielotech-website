import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Furigana API",
    description:
      "Kanji are though. It's useless to lie. We provide straightfoward API to get furigana from kanji.",
  },
]

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id);
  console.log("Product ID:", productId);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 pt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-white">{product.name}</h1>
        <p className="text-xl mb-8 text-muted-foreground">{product.description}</p>
      </div>
    </main>
  )
}


