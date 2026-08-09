import { BadgeCheck, CheckCircle2, Eye, Globe, Heart, Ribbon, Target, TrendingUp, Users } from "lucide-react"

const tags = [
  { label: "NCAA Verified", icon: Ribbon },
  { label: "Top Rated Platform", icon: TrendingUp },
  { label: "Nationwide Coverage", icon: Globe },
]

export function AboutSection() {
  return (
    <section className="py-[130] bg-[#F6F9F7] " id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-primary font-bold text-sm tracking-widest uppercase">About</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              We're Changing How <br /> <span className="text-primary">Athletes Get Discovered</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Athlete Path was born from a simple idea: every talented athlete deserves a fair shot at their dreams.
              We've built a platform that bridges the gap between high school athletes and college coaches, making the
              recruitment process accessible, transparent, and effective.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team consists of former athletes, coaches, and tech innovators who understand the challenges of the
              recruitment journey firsthand. We're passionate about leveling the playing field and giving every athlete
              the visibility they deserve.
            </p>
          </div>

          <div className="space-y-6">
            {[
             {
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                ),
                title: "Our Mission",
                desc: "To empower every talented athlete to reach their full potential by connecting them with the right opportunities.",
              },

              {
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                ),
                title: "Our Vision",
                desc: "A world where talent is discovered everywhere, and every athlete has equal access to college recruitment.",
              },
              {
                icon: (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                ),
                title: "Our Values",
                desc: "Integrity, transparency, and dedication to our athletes are at the heart of everything we do.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl border bg-slate-50">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-4 pt-4">
              {tags.map((tag) => {
                const Icon = tag.icon
                return (
                  <div
                    key={tag.label}
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {tag.label}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
