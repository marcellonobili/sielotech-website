import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useMemo } from "react"
import ReactMarkdown from 'react-markdown'

const products = [
  { id: 1, pageName: "furigana-api", name: "Furigana API", description: "Convert any kanji to hiragana with our simple API", image: "/assets/images/furigana.png" },
]

const presents = [
  { id: 2, name: "Matané", description: "Coming soon", image: "/product-2.jpg" },
  { id: 3, name: "Karaokey", description: "Coming next", image: "/product-3.jpg" },
]

const leftPositions = [
  { top: "70%", left: "10%" },
  { top: "15%", left: "20%" },
  { top: "60%", left: "15%" },
];

const rightPositions = [
  { top: "35%", left: "50%" },
  { top: "65%", left: "45%" },
  { top: "45%", left: "55%" },
];

export default function Home() {
  const sparkles = useMemo(() => 
    Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`
    })),
    []
  );

  return (
    <main className="min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h1 className="text-6xl font-bold">SieloTech</h1>
            <p className="text-lg text-muted-foreground mt-4">
              Loving Japan more each day
            </p>
          </div>
          
          <div className="flex gap-4 mt-8 md:mt-0">
            <Button variant="outline" asChild className="gap-2">
              <Link href="mailto:marcellonobili@pm.me" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M22 4H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM12 12.73L2.83 6h18.34L12 12.73zM2 18V7.89l9.24 6.85.12.09c.37.28.89.28 1.27 0l.12-.09L22 7.89V18H2z"/>
                </svg>
                <span className="hidden sm:inline">Email</span>
              </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link href="https://github.com/marcellonobili" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link href="https://linkedin.com/in/marcellonobili" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link href="https://instagram.com/_sielo_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.308.06 2.655.358 3.608 1.311.962.962 1.251 2.296 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.059 1.301-.364 2.661-1.311 3.608-.962.962-2.295 1.251-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.291-.059-2.669-.371-3.608-1.311-.957-.957-1.251-2.304-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.059-1.296.367-2.664 1.311-3.608.96-.96 2.299-1.251 3.608-1.311 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.668 3.36.157 5.198.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.853.603 3.7 1.942 5.038 1.345 1.345 3.186 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.854-.085 3.698-.602 5.038-1.942 1.347-1.347 1.857-3.184 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.602-3.698-1.942-5.038C20.643.671 18.797.156 16.948.072 15.668.014 15.259 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
                <span className="hidden sm:inline">Instagram</span>
              </Link>
            </Button>
          </div>
        </div>

        <section>
          <h1 className="text-3xl font-bold mb-12">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link href={`/products/${product.pageName}`} key={product.id}>
                <Card className="hover-effect overflow-hidden h-56">
                  <div className="relative h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75 p-6">
                      <div className="h-full flex flex-col justify-center">
                        <CardHeader className="py-2">
                          <CardTitle className="text-2xl text-white">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2">
                          <div className="text-gray-300 prose prose-invert prose-sm max-w-none [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline">
                            <ReactMarkdown>
                              {product.description}
                            </ReactMarkdown>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
            {presents.map((product, index) => {
              const isClockwise = Math.random() < 0.5;
              const rotation1 = isClockwise ? 'rotate(4deg)' : 'rotate(-4deg)';
              const rotation2 = isClockwise ? 'rotate(8deg)' : 'rotate(-8deg)';
              const baseDelay = Math.random() * 5; // Random base delay between 0-5s
              const baseDuration = 2 + Math.random() * 3; // Random duration between 2-5s
              
              return (
                <Card 
                  key={product.id} 
                  className="hover-effect animate-jump overflow-hidden h-56"
                  style={{
                    '--rotation-1': rotation1,
                    '--rotation-2': rotation2,
                    '--animation-delay': `-${baseDelay}s`,
                    '--animation-duration': `${baseDuration}s`,
                  } as React.CSSProperties}
                >
                  <div className="relative h-full">
                    {/* Gift box */}
                    <div className="absolute inset-0 bg-[#ba8b00]">
                      {/* Ribbon */}
                      <div className="absolute inset-0">
                        {/* Vertical ribbon */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-6 bg-red-600 transform -translate-x-1/2">
                          <div className="absolute inset-y-0 left-0 w-[2px] bg-black/20"></div>
                          <div className="absolute inset-y-0 right-0 w-[2px] bg-black/20"></div>
                        </div>
                        
                        {/* Horizontal ribbon */}
                        <div className="absolute left-0 right-0 top-1/2 h-6 bg-red-600 transform -translate-y-1/2">
                          <div className="absolute inset-x-0 top-0 h-[2px] bg-black/20"></div>
                          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/20"></div>
                        </div>
                      </div>

                      {/* Gift tags */}
                      <div className="absolute inset-0">
                        {/* Product name tag - left side */}
                        <div 
                          className="absolute bg-white p-2 rounded shadow-md transform border-2 border-black"
                          style={{
                            top: leftPositions[index % 3].top,
                            left: leftPositions[index % 3].left,
                            transform: `var(--rotation-1)`
                          }}
                        >
                          <h3 className="text-lg font-semibold text-purple-800">{product.name}</h3>
                        </div>
                        {/* Description tag - right side */}
                        <div 
                          className="absolute bg-white p-2 rounded shadow-md transform whitespace-nowrap border-2 border-black"
                          style={{
                            top: rightPositions[index % 3].top,
                            left: rightPositions[index % 3].left,
                            transform: `var(--rotation-2)`
                          }}
                        >
                          <h3 className="text-lg font-semibold text-purple-800">{product.description}</h3>
                        </div>
                      </div>

                      {/* Sparkle effect */}
                      <div className="absolute inset-0 opacity-50">
                        {sparkles.map((sparkle, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"
                            style={{
                              top: sparkle.top,
                              left: sparkle.left,
                              animationDelay: sparkle.delay,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Who are we?</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/assets/images/sielo.jpg"
              alt="Marcello, founder of SieloTech"
              width={200}
              height={200}
              className="rounded-full w-[200px] h-[200px] object-cover"
            />
            <div>
              <p className="text-lg text-muted-foreground">
                Ah-ha! That was a lie! It was just me all along, Marcello Nobili aka Sielo! I am a freelance mobile and backend developer, putting a lot 
                of effort into producing the best software I can. I'm studying Japanese and while I conceive most of SieloTech's software
                to help me in the first place, I strive to help the most people I can in the process. If you have an interesting feature to tell
                me about, send me an email at <a className="text-primary hover:underline" href="mailto:marcellonobili@pm.me">marcellonobili@pm.me</a>!
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
