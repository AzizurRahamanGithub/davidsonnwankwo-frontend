import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, GraduationCap } from "lucide-react";

interface PlayerCardProps {
  id: string
  name: string
  position: string
  location: string
  classOf: number
  gpa: number
  image: string
}

export function PlayerCard({ id, name, position, location, classOf, gpa, image }: PlayerCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-[326px] w-full">
        <Image height={100} width={100}
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-md bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {position}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <div className="mt-2 space-y-1.5 text-sm text-slate-500">
          <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} className="text-gray-400" />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <GraduationCap size={16} className="text-gray-400" />
              <span>
                Class of {classOf} • GPA {gpa.toFixed(1)}
              </span>
            </div>
        </div>
        <Button
          variant="outline"
          asChild
          className="mt-6 w-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary bg-transparent"
        >
          <Link href={`/players/${id}`}>View Profile</Link>
        </Button>
      </div>
    </div>
  )
}
