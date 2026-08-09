import { Target, Users, TrendingUp, Award, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Profile Building",
    description: "Create a comprehensive athletic profile showcasing your stats, achievements, and videos.",
  },
  {
    icon: Users,
    title: "Connect with Recruiters",
    description: "Get discovered by college scouts and professional recruiters actively seeking talent.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your performance metrics and see your improvement over time.",
  },
  {
    icon: Award,
    title: "Showcase Achievements",
    description: "Highlight your awards, certifications, and tournament wins to stand out.",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Build trust with verified athlete and recruiter profiles for authentic connections.",
  },
  {
    icon: Zap,
    title: "Instant Messaging",
    description: "Connect directly with recruiters through our secure messaging platform.",
  },
]

export function Features() {
  return (
    <section className="bg-black py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-black italic tracking-tighter text-white md:text-7xl uppercase">
              The <span className="text-primary">Edge</span>
            </h2>
            <p className="max-w-md text-lg font-medium text-white/50">
              Elite tools engineered for the next generation of champions.
            </p>
          </div>
          <div className="h-px w-full bg-white/10 md:hidden" />
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 bg-primary" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Performance Suite v2.0</p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group relative bg-black p-8 transition-colors hover:bg-white/5">
              <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5 transition-transform group-hover:-rotate-3 group-hover:border-primary/50 group-hover:bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-8 text-2xl font-black italic tracking-tighter text-white uppercase italic">
                {feature.title}
              </h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-white/50">{feature.description}</p>
              <div className="absolute bottom-4 right-4 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="h-full w-full border-b-2 border-r-2 border-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
