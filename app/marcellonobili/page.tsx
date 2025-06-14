import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const accentColor = "text-purple-400"
  const hoverAccentColor = "hover:text-purple-500"
  const buttonColor = "bg-purple-600"
  const hoverButtonColor = "hover:bg-purple-500"

  return (
    <main className="min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h1 className="text-6xl font-bold">Marcello Nobili</h1>
            <p className="text-lg text-muted-foreground mt-4">
              Mobile & Backend Developer
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
          </div>
        </div>

        {/* About section */}
        <section>
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-[250px] h-[250px] rounded-md overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/sielo.jpg"
                alt="Marcello Nobili"
                width={250}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground">
                I'm a freelance <span className="text-white">Mobile</span> and <span className="text-white">Backend Developer</span> with expertise in building robust, scalable applications.<br/><br/>
                My passion lies in creating software that solves real problems, writing <span className="text-white">clean, maintainable code.</span><br/><br/>
                As the person behind <Link href="/" className={`${accentColor} hover:underline`}>SieloTech</Link>, I'm focusing, among other projects, on building applications that help people learn <span className="text-white">Japanese</span> and explore the Japanese culture.
              </p>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-zinc-800/50">
              <CardHeader>
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li className={accentColor}><a href="https://developer.android.com" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Android (Kotlin and Java)</a></li>
                    <ul className="list-disc pl-5 mt-1">
                      <li className="text-muted-foreground">Jetpack Compose</li>
                      <li className="text-muted-foreground">MVVM Architecture</li>
                      <li className="text-muted-foreground">Repository Pattern</li>
                      <li className="text-muted-foreground">Room Database</li>
                      <li className="text-muted-foreground">Coroutines + Flow</li>
                      <li className="text-muted-foreground">WorkManager</li>
                      <li className="text-muted-foreground">Play Store lifecycle</li>
                    </ul>
                  <br/>
                  <li className={accentColor}><a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Flutter</a></li>
                  <ul className="list-disc pl-5 mt-1">
                    <li className="text-muted-foreground">Mobile, desktop and web</li>
                    <li className="text-muted-foreground">BLoC pattern</li>
                    <li className="text-muted-foreground">Platform channel</li>
                  </ul>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800/50">
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li className={accentColor}><a href="https://blog.postman.com/rest-api-examples/" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>RESTful API Design</a></li>
                  <li className={accentColor}><a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Python</a></li>
                  <ul className="list-disc pl-5 mt-1">
                    <li className="text-muted-foreground">FastAPI</li>
                    <li className="text-muted-foreground">Flask</li>
                    <li className="text-muted-foreground">PyTest</li>
                  </ul>
                  <li className={accentColor}><a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Docker</a></li>
                  <li className={accentColor}><a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>PostgreSQL</a></li>
                  <li className={accentColor}><a href="https://redis.io" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Redis</a></li>
                  <li className={accentColor}><a href="https://docs.celeryproject.org" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Celery</a></li>
                  <li className={accentColor}><a href="https://github.com/resources/articles/devops/ci-cd" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>CI/CD</a></li>
                  <ul className="list-disc pl-5 mt-1">
                    <li className="text-muted-foreground">GitHub Actions</li>
                  </ul>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800/50">
              <CardHeader>
                <CardTitle>Cloud and hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li className={accentColor}><a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Firebase</a></li>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-muted-foreground">Authentication</li>
                    <li className="text-muted-foreground">Cloud Firestore</li>
                    <li className="text-muted-foreground">Storage</li>
                    <li className="text-muted-foreground">Functions</li>
                  </ul>
                  <li className={accentColor}><a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Google Cloud</a></li>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-muted-foreground">Cloud Run</li>
                    <li className="text-muted-foreground">App Engine</li>
                    <li className="text-muted-foreground">Compute Engine</li>
                  </ul>
                  <li className={accentColor}><a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className={`hover:underline`}>Supabase</a></li>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-muted-foreground">Authentication</li>
                    <li className="text-muted-foreground">Realtime</li>
                    <li className="text-muted-foreground">Storage</li>
                    <li className="text-muted-foreground">Functions</li>
                  </ul>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work experience section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6 space-y-2">
              <h3 className="text-xl font-semibold">Mobile software engineer</h3>
              <p><a href="https://www.sbsmobile.com/en" target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline`}>SBS Mobile</a> • 2018 - 2023</p>
              <p className="text-muted-foreground">Leader mobile dev, building native <span className="text-white">Android and Flutter</span> apps both for end users and <a href="https://fastsk.in/en/machines/fast-skin" target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline`}>B2B clients</a>.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 space-y-2">
              <h3 className="text-xl font-semibold">Mobile and web software engineer</h3>
              <p>Commission by <a href="https://instagram.com/progetto.rinascita" target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline`}>Progetto Rinascita</a> • 2024</p>
              <p className="text-muted-foreground">I developed DataLog <span className="text-white">from start to finish</span>, a mobile app that allows analog photographers to keep track of their shots and rolls.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 space-y-2">
              <h3 className="text-xl font-semibold">Backend software engineer</h3>
              <p><a href="https://www.valueize.com" target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline`}>Valueize</a> • 2025 - Present</p>
              <p className="text-muted-foreground">Building backend services in a <span className="text-white">startup environment</span> with the mission of empowering founders to build exceptional companies.</p>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Personal projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-800/50">
              <CardHeader>
                <CardTitle>Furigana API</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">An <span className="text-white">API service</span> that converts Japanese kanji to hiragana, helping <span className="text-white">language learners</span> with pronunciation.</p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" className="hover:border-purple-500">
                    <Link href="https://docs.sielotech.com/api/furigana">View Project</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden bg-zinc-800/50">
              <div className="absolute top-0 right-0 outline outline-1 outline-purple-400 text-white px-3 py-1 text-sm font-semibold transform rotate-0 origin-top-right">Coming Soon</div>
              <CardHeader>
                <CardTitle>Matané</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">A mobile app that leverages <span className="text-white">AI models</span> to help you practice Japanese in a fun and innovative way.</p>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Contact section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            I'm currently <span className="text-white">available for new projects and collaborations.</span>
            <br/>
            If you are looking to hire a skilled mobile or backend developer for your company, <span className="text-white">let's talk about how I can help bring your ideas to life!</span>
          </p>
          <Button asChild className={`${buttonColor} ${hoverButtonColor}`}>
            <Link href="mailto:marcellonobili@pm.me">Contact Me</Link>
          </Button>
        </section>

        {/* Back to home */}
        <div className="text-center pt-8">
          <Link href="/" className={`${accentColor} hover:underline`}>
            ← Back to SieloTech home
          </Link>
        </div>
      </div>
    </main>
  )
}
