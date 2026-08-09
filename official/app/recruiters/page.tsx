import { Navbar } from "@/components/website/navbar"
import { Footer } from "@/components/website/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Users,
    title: "Access to Thousands of Athletes",
    description: "Browse comprehensive profiles of talented athletes across 25+ sports.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Search & Filters",
    description: "Find the perfect athlete using our powerful search tools and criteria filters.",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "All athlete profiles are verified for authenticity and accuracy.",
  },
  {
    icon: CheckCircle2,
    title: "Direct Communication",
    description: "Connect directly with athletes through our secure messaging platform.",
  },
]

const features = [
  "Advanced athlete search and filtering",
  "Detailed performance metrics",
  "Video highlight reels",
  "Academic information",
  "Direct messaging system",
  "Saved athlete lists",
  "Team management tools",
  "Analytics dashboard",
]

export default function RecruitersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5">
                  <span className="text-sm font-medium text-primary">For Recruiters & Scouts</span>
                </div>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Find Your Next Star Athlete
                </h1>
                <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                  Connect with talented athletes actively seeking opportunities. Our platform makes it easy to discover,
                  evaluate, and recruit the perfect fit for your program.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link href="/signup">Start Recruiting</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold">10,000+</h3>
                        <p className="text-sm text-muted-foreground">Active Athlete Profiles</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">500+</h3>
                        <p className="text-sm text-muted-foreground">Recruiting Organizations</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">25+</h3>
                        <p className="text-sm text-muted-foreground">Sports Categories</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">98%</h3>
                        <p className="text-sm text-muted-foreground">Recruiter Satisfaction</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Why Recruiters Choose Athlete Path
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                Everything you need to streamline your recruiting process and find the best talent.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Platform Features</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Comprehensive tools designed to make recruiting easier and more effective.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 px-8 py-16 md:px-16 md:py-24">
              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />

              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                  Ready to Start Recruiting?
                </h2>
                <p className="mt-6 text-pretty text-lg text-primary-foreground/90 leading-relaxed">
                  Join hundreds of recruiters who have successfully found their next star athletes on Athlete Path.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
                    <Link href="/signup">Create Recruiter Account</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white bg-transparent text-white hover:bg-white/10"
                  >
                    <Link href="/contact">Schedule Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
