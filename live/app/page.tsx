"use client"

import { Navbar } from "@/components/website/navbar"
import { Hero } from "@/components/website/hero"
import { AboutSection } from "@/components/website/about-section"
import { FAQSection } from "@/components/website/faq-section"
import { PlayerCard } from "@/components/website/player-card"
import { Footer } from "@/components/website/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePlayers } from "@/hooks/use-players"

export default function HomePage() {
  const { players, isLoading, isError } = usePlayers(4)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />

        {/* Featured Players Section */}
        <section className="mt-[130px] bg-white" id="players">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block rounded-md bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Featured Athletes
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                Meet Our <span className="text-primary">Top Players</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                These talented athletes are ready to take their game to the next level. Browse profiles and discover the
                future stars of college soccer.
              </p>
            </div>

            {isLoading && <div className="text-center py-12 text-slate-500">Loading featured players...</div>}

            {isError && (
              <div className="text-center py-12 text-red-500">Failed to load players. Please try again later.</div>
            )}

            {players && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {players.map((player) => (
                    <PlayerCard key={player.id} {...player} />
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 px-10">
                    <Link href="/players">See All Players</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>

        <FAQSection />

        
      </main>
      <Footer />
    </div>
  )
}
