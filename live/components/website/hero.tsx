import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900/90 py-20 lg:py-32  h-screen" id="home">
      <div className="absolute inset-0 z-0 ">
        <Image height={100} width={100}
          src="/hero.png"
          query="professional soccer stadium with blurred lights and crowd"
          alt="Stadium background"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,0.15)_12.86%,rgba(7,34,25,0.15)_136.31%)]
" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center mt-60">
        <div className="space-y-8">
          <div className="inline-block rounded-full border-primary border-2 bg-primary/35 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
              #1 Sports Recruitment Platform
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Be Seen, <span className="text-primary">Be Recruited.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
            Create your profile, upload highlight reels, and connect with coaches who are searching for talent like you.
            Your journey to the next level starts here.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button size="lg" asChild className="h-14 bg-primary px-10 text-lg hover:bg-primary/90">
              <Link href="/signup">Explore Now</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-3">
            {[
              { label: "Athletes", value: "10,000+" },
              { label: "Coaches", value: "2,500+" },
              { label: "Videos", value: "50,000+" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-3">
                <div className="text-3xl font-bold text-white lg:text-4xl">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
