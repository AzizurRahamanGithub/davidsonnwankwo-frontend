import { Navbar } from "@/components/website/navbar"
import { Footer } from "@/components/website/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const sportsCategories = [
  {
    name: "Basketball",
    icon: "🏀",
    athletes: "2,543",
    description: "Connect with basketball players from high school to professional level.",
    popular: true,
  },
  {
    name: "Football",
    icon: "🏈",
    athletes: "3,214",
    description: "Discover talented football players across all positions.",
    popular: true,
  },
  {
    name: "Soccer",
    icon: "⚽",
    athletes: "2,876",
    description: "Find skilled soccer players from youth leagues to college programs.",
    popular: true,
  },
  {
    name: "Baseball",
    icon: "⚾",
    athletes: "1,932",
    description: "Scout baseball talent including pitchers, hitters, and fielders.",
    popular: false,
  },
  {
    name: "Track & Field",
    icon: "🏃",
    athletes: "1,654",
    description: "Explore sprinters, distance runners, and field event athletes.",
    popular: false,
  },
  {
    name: "Swimming",
    icon: "🏊",
    athletes: "1,243",
    description: "Connect with swimmers specializing in various strokes and distances.",
    popular: false,
  },
  {
    name: "Tennis",
    icon: "🎾",
    athletes: "987",
    description: "Find talented tennis players competing at all levels.",
    popular: false,
  },
  {
    name: "Volleyball",
    icon: "🏐",
    athletes: "856",
    description: "Discover volleyball players for indoor and beach competitions.",
    popular: false,
  },
  {
    name: "Wrestling",
    icon: "🤼",
    athletes: "745",
    description: "Scout wrestlers across all weight classes.",
    popular: false,
  },
  {
    name: "Golf",
    icon: "⛳",
    athletes: "623",
    description: "Connect with golfers competing in tournaments nationwide.",
    popular: false,
  },
  {
    name: "Lacrosse",
    icon: "🥍",
    athletes: "534",
    description: "Find lacrosse players for men's and women's programs.",
    popular: false,
  },
  {
    name: "Gymnastics",
    icon: "🤸",
    athletes: "412",
    description: "Discover gymnasts specializing in various apparatus.",
    popular: false,
  },
]

export default function SportsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Explore Sports & Athletes
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed md:text-xl">
                Browse through our diverse collection of sports and connect with talented athletes ready to take their
                game to the next level.
              </p>
            </div>
          </div>
        </section>

        {/* Sports Grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-bold md:text-3xl">All Sports</h2>
              <p className="mt-2 text-muted-foreground">Find athletes in your sport of interest</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sportsCategories.map((sport) => (
                <Card
                  key={sport.name}
                  className="group relative cursor-pointer border-border transition-all hover:border-primary hover:shadow-lg"
                >
                  {sport.popular && (
                    <div className="absolute right-4 top-4 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      Popular
                    </div>
                  )}
                  <CardContent className="flex flex-col p-6">
                    <div className="text-5xl transition-transform group-hover:scale-110">{sport.icon}</div>
                    <h3 className="mt-4 text-xl font-semibold">{sport.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{sport.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{sport.athletes} athletes</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Don't See Your Sport Listed?
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                We're constantly adding new sports to our platform. Contact us to request your sport or get started with
                a custom profile.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/signup">Create Profile</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
