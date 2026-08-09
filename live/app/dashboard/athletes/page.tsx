import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Star, MapPin } from "lucide-react"
import Image from "next/image"

const athletes = [
  {
    id: 1,
    name: "Marcus Johnson",
    sport: "Basketball",
    position: "Point Guard",
    location: "Los Angeles, CA",
    rating: 4.8,
    achievements: ["All-State", "MVP 2024"],
    status: "Available",
    image: "/young-basketball-player.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    sport: "Soccer",
    position: "Forward",
    location: "Austin, TX",
    rating: 4.9,
    achievements: ["Regional Champion", "Top Scorer"],
    status: "Contacted",
    image: "/female-soccer-player.jpg",
  },
  {
    id: 3,
    name: "James Chen",
    sport: "Swimming",
    position: "Freestyle",
    location: "Miami, FL",
    rating: 4.7,
    achievements: ["State Record", "National Qualifier"],
    status: "Available",
    image: "/competitive-swimmer.jpg",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    sport: "Track & Field",
    position: "Sprinter",
    location: "Chicago, IL",
    rating: 4.9,
    achievements: ["100m Champion", "Olympic Hopeful"],
    status: "Interested",
    image: "/female-track-runner.jpg",
  },
  {
    id: 5,
    name: "Tyler Martinez",
    sport: "Football",
    position: "Quarterback",
    location: "Dallas, TX",
    rating: 4.8,
    achievements: ["All-Conference", "3000+ Passing Yards"],
    status: "Available",
    image: "/football-quarterback.jpg",
  },
  {
    id: 6,
    name: "Olivia Brown",
    sport: "Tennis",
    position: "Singles",
    location: "San Diego, CA",
    rating: 4.6,
    achievements: ["State Finalist", "Division I Prospect"],
    status: "Available",
    image: "/tennis-player-female.jpg",
  },
]

export default function AthletesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Athletes</h1>
          <p className="mt-2 text-muted-foreground">Browse and manage athlete profiles</p>
        </div>
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Add Athlete</Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search athletes..." className="pl-9" />
            </div>
            <Button variant="outline" className="md:w-auto bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Athletes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {athletes.map((athlete) => (
          <Card key={athlete.id} className="group overflow-hidden transition-all hover:shadow-lg">
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
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-xl font-semibold">{athlete.name}</h3>
                <Badge
                  variant={
                    athlete.status === "Available"
                      ? "default"
                      : athlete.status === "Interested"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {athlete.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-primary">{athlete.sport}</span>
                <span>•</span>
                <span>{athlete.position}</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>{athlete.location}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {athlete.achievements.slice(0, 2).map((achievement) => (
                  <Badge key={achievement} variant="secondary" className="text-xs">
                    {achievement}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Button className="flex-1" size="sm">
                  View Profile
                </Button>
                <Button variant="outline" size="sm">
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
