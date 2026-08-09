import { ArrowUpRight } from "lucide-react"

const sports = [
  { name: "Basketball", image: "/young-basketball-player.jpg", athletes: "2.5K" },
  { name: "Football", image: "/football-quarterback.jpg", athletes: "3.2K" },
  { name: "Soccer", image: "/female-soccer-player.jpg", athletes: "2.8K" },
  { name: "Track", image: "/female-track-runner.jpg", athletes: "1.6K" },
]

export function SportsGrid() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-end justify-between gap-6 border-b border-white/10 pb-12 md:flex-row">
          <div className="space-y-4">
            <h2 className="text-5xl font-black italic tracking-tighter text-white md:text-7xl uppercase">
              The <span className="text-primary">Disciplines</span>
            </h2>
            <p className="max-w-md text-lg font-medium text-white/50">
              Explore specialized paths across the most competitive arenas in sport.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary hover:text-white">
            View All Sports
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary transition-colors group-hover:bg-white">
              <ArrowUpRight className="h-6 w-6 text-black" />
            </div>
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sports.map((sport) => (
            <div key={sport.name} className="group relative aspect-[3/4] overflow-hidden bg-white/5 cursor-pointer">
              <Image height={100} width={100}
                src={sport.image || "/placeholder.svg"}
                alt={sport.name}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="inline-block border-l-4 border-primary bg-primary/20 px-3 py-1 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    {sport.athletes} Athletes
                  </span>
                </div>
                <h3 className="text-4xl font-black italic tracking-tighter text-white uppercase">{sport.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
