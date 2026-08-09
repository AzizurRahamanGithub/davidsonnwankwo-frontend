"use client"

import { Navbar } from "@/components/website/navbar"
import { Footer } from "@/components/website/footer"
import { PlayerCard } from "@/components/website/player-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePlayers } from "@/hooks/use-players"
import Image from "next/image"

export default function PlayersPage() {
  const { players, isLoading, isError } = usePlayers()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 ">
        {/* Sub Hero */}
        <section className="relative h-[300] py-12  text-center text-white overflow-hidden">
          <div className="absolute inset-0 opacity-90 ">
            <Image height={100} width={100} src="/players.png" alt="bg" className="w-full h-full" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="inline-block rounded-full bg-slate-50 px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-primary mb-4">
              Featured Athletes
            </div>
            <h1 className="text-4xl font-extrabold text-slate-200">
              Meet Our <span className="text-primary">Top Players</span>
            </h1>
            <p className="text-slate-200 mt-4 max-w-xl mx-auto">
              These talented athletes are ready to take their game to the next level. Browse profiles and discover the
              future stars of college soccer.
            </p>
          </div>
        </section>

        {/* Filters and List */}
        <section className="my-[100] bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
              <h2 className="text-2xl font-bold text-slate-900">Player List</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-500">Filter by:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Player</SelectItem>
                    <SelectItem value="gk">Goalkeeper</SelectItem>
                    <SelectItem value="df">Defender</SelectItem>
                    <SelectItem value="mf">Midfielder</SelectItem>
                    <SelectItem value="fw">Forward</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {isLoading && <div className="text-center py-12 text-slate-500">Loading players...</div>}

            {isError && (
              <div className="text-center py-12 text-red-500">Failed to load players. Please try again later.</div>
            )}

            {players && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {players.map((player) => (
                  <PlayerCard key={player.id} {...player} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
