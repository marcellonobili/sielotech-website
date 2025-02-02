import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown'

const products = [
  {
    id: 1,
    name: "Furigana API",
    description: `Kanji are though. It's useless to lie. We provide straightfoward API to get furigana from kanji.
    
You can use them for free up to 100 requests per month, after that you can start a subscription for a very small price.

This page is still a work in progress, we will finalize the API and provide links to the documentation soon.`,
  },
]

export async function generateStaticParams() {
  return [
    { id: "1" },
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
        <div className="prose prose-invert max-w-none [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline">
          <ReactMarkdown>{product.description}</ReactMarkdown>
        </div>
      </div>
    </main>
  )
}
