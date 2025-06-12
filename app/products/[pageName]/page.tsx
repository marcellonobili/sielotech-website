import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown'

const products = [
  {
    pageName: "furigana-api",
    name: "Furigana API",
    description: `Kanji are though. It's useless to lie.

If you need to add furigana to kanji 
    on a platform that doesn't have an easy to add/use library to get kanji readings, I developed a no-fuss API
    to get furigana from kanji.

The API is in Beta phase now and it's available for free until 
    it will be finalized. You can check its documentation [here](https://docs.sielotech.com/furigana).`,
  },
]

export async function generateStaticParams() {
  return products.map((product) => ({
    pageName: product.pageName,
  }));
}

export default function ProductPage({ params }: { params: { pageName: string } }) {
  const product = products.find((p) => p.pageName === params.pageName);

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
