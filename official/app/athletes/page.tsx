import { Navbar } from "@/components/website/navbar"
import { Footer } from "@/components/website/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"

const featuredAthletes = [
  {
    name: "Marcus Johnson",
    sport: "Basketball",
    position: "Point Guard",
    location: "Los Angeles, CA",
    rating: 4.8,
    achievements: ["All-State", "MVP 2024"],
    image: "/young-basketball-player.jpg",
  },
  {
    name: "Sarah Williams",
    sport: "Soccer",
    position: "Forward",
    location: "Austin, TX",
    rating: 4.9,
    achievements: ["Regional Champion", "Top Scorer"],
    image: "/female-soccer-player.jpg",
  },
  {
    name: "James Chen",
    sport: "Swimming",
    position: "Freestyle",
    location: "Miami, FL",
    rating: 4.7,
    achievements: ["State Record", "National Qualifier"],
    image: "/competitive-swimmer.jpg",
  },
  {
    name: "Emily Rodriguez",
    sport: "Track & Field",
    position: "Sprinter",
    location: "Chicago, IL",
    rating: 4.9,
    achievements: ["100m Champion", "Olympic Hopeful"],
    image: "/female-track-runner.jpg",
  },
  {
    name: "Tyler Martinez",
    sport: "Football",
    position: "Quarterback",
    location: "Dallas, TX",
    rating: 4.8,
    achievements: ["All-Conference", "3000+ Passing Yards"],
    image: "/football-quarterback.jpg",
  },
  {
    name: "Olivia Brown",
    sport: "Tennis",
    position: "Singles",
    location: "San Diego, CA",
    rating: 4.6,
    achievements: ["State Finalist", "Division I Prospect"],
    image: "/tennis-player-female.jpg",
  },
]

export default function AthletesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Discover Talented Athletes
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed md:text-xl">
                Browse profiles of dedicated athletes ready to take their careers to the next level. Connect with the
                perfect fit for your program.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Athletes */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-bold md:text-3xl">Featured Athletes</h2>
              <p className="mt-2 text-muted-foreground">Top-rated athletes actively seeking opportunities</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredAthletes.map((athlete) => (
                <Card key={athlete.name} className="group overflow-hidden border-border transition-all hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image height={100} width={100}
                      src={athlete.image || "/placeholder.svg"}
                      alt={athlete.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 backdrop-blur">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{athlete.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{athlete.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{athlete.sport}</span>
                      <span>•</span>
                      <span>{athlete.position}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{athlete.location}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {athlete.achievements.map((achievement) => (
                        <Badge key={achievement} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                    <Button className="mt-4 w-full bg-transparent" variant="outline">
                      View Profile
                    </Button>
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
                Are You an Athlete Looking to Get Discovered?
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                Create your profile today and start connecting with recruiters and scouts from top programs.
              </p>
              <Button size="lg" className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Create Your Profile
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
