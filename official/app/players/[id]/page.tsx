"use client"

import { Navbar } from "@/components/website/navbar"
import { Footer } from "@/components/website/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePlayer } from "@/hooks/use-players"
import { use } from "react"
import { Ruler, Weight , Target, Shield, GraduationCap } from "lucide-react"


const iconClass = "h-4 w-4 text-slate-300";


const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 5L8 8.5L13.5 5M2.5 5V11C2.5 11.5523 2.94772 12 3.5 12H12.5C13.0523 12 13.5 11.5523 13.5 11V5M2.5 5L7.5 2L13.5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 7C7.82843 7 8.5 6.32843 8.5 5.5C8.5 4.67157 7.82843 4 7 4C6.17157 4 5.5 4.67157 5.5 5.5C5.5 6.32843 6.17157 7 7 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 12C9 10 11 8.20914 11 5.5C11 3.567 9.433 2 7 2C4.567 2 3 3.567 3 5.5C3 8.20914 5 10 7 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 6H12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 1.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 1.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 1L8.5 5H12.5L9.5 7.5L10.5 11.5L7 9L3.5 11.5L4.5 7.5L1.5 5H5.5L7 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const RulerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 2V5M6 2V4M8 2V5M10 2V4M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const WeightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 13C4 10.7909 5.79086 9 8 9C10.2091 9 12 10.7909 12 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3 13C3 10.2386 5.23858 8 8 8C10.7614 8 13 10.2386 13 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2L3 9H8L7 14L13 7H8L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export default function PlayerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { player, isLoading, isError } = usePlayer(id)

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-slate-500">Loading player profile...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (isError || !player) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-red-500">Failed to load player profile. Please try again later.</div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 mb-[130]">
        {/* Banner Area */}
        <div className="relative h-[380] overflow-hidden">
          <Image height={100} width={100}
            src="/players.png"
            alt="Stadium"
            className="absolute inset-0 w-full h-full  opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 -mt-[347px] relative z-10">
          <Link href="/players" className="flex items-center gap-2 text-white/90 font-bold hover:text-white mb-6 text-sm">
            <ArrowLeftIcon /> Back to Players
          </Link>

          {/* Profile Header Card */}
          <div className="bg-slate-900/40 backdrop-blur-md h-[240] rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="h-full w-[200] rounded-2xl border-2 border-white overflow-hidden bg-slate-800 flex-shrink-0">
              {/* <Image height={100} width={100} src={player?.image?.trim() ? player.image : "/player1.png"} alt="Profile" className="w-full h-full object-cover" /> */}
              <Image height={100} width={100} src="/player1.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                  <h1 className="text-3xl font-extrabold text-white">{player.name}</h1>
                  <span className="bg-primary/20 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20 uppercase tracking-widest">
                    {player.position}
                  </span>
                </div>
                <p className="text-slate-300 mt-1">{player.currentClub || player.schoolName}</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPinIcon /> {player.location}
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon /> Age: {player.age}
                </div>
                <div className="flex items-center gap-2 ">
                   <GraduationCap size={17} strokeWidth={2.6} className="text-slate-300" />
Class of {player.classOf}
                </div>
                <div className="flex items-center gap-2"><StarIcon /> GPA {player.gpa}</div>
              </div>

              {player.bio && <p className="text-slate-400 text-sm max-w-2xl">{player.bio}</p>}

              <Button className="bg-primary hover:bg-primary/90 gap-2">
                <MailIcon /> Contact Player
              </Button>
            </div>
          </div>

            {/* Key Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                {
                  label: "Height",
                  value: player?.height ? `${player.height}` : "N/A",
                  icon: <Ruler size={16} strokeWidth={1.6} />,
                },
                {
                  label: "Weight",
                  value: player?.weight ? `${player.weight}` : "N/A",
                  icon: <Weight size={16} strokeWidth={1.6} />,
                },
                {
                  label: "Position",
                  value: player?.position || "N/A",
                  icon: <Target size={16} strokeWidth={1.6} />,
                },
                {
                  label: "Dominant Foot",
                  value: player?.dominantFoot || "N/A",
                  icon: <Shield size={16} strokeWidth={1.6} />,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm"
                >
                  {/* Icon Box */}
                  <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white">
                    {stat.icon}
                  </div>

                  {/* Text */}
                  <div className="leading-tight">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      {stat.label}
                    </p>
                    <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

          <div className="grid grid-cols-1 gap-8 mt-8">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl border p-8">
              <h2 className="text-xl font-bold mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-12">
                {[
                  { label: "Date of Birth", value: player.dateOfBirth || "N/A" },
                  { label: "Height", value: player.height || "N/A" },
                  { label: "Weight", value: player.weight || "N/A" },
                  { label: "Nationality", value: player.nationality || player.location },
                  { label: "Graduation Year", value: player.graduationYear || player.classOf },
                  { label: "School/College Name", value: player.schoolName || "N/A" },
                  { label: "Academic GPA", value: player.academicInfo || `GPA ${player.gpa}` },
                ].map((info) => (
                  <div key={info.label} className="space-y-1">
                    <div className="text-xs text-slate-400 font-medium">{info.label}</div>
                    <div className="text-sm font-semibold text-slate-800 p-2 bg-primary/7 rounded-lg">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Athletic Stats */}
            <div className="bg-white rounded-2xl border p-8">
              <h2 className="text-xl font-bold mb-6">Athletic Stats & Club Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-12">
                {[
                  { label: "Primary Position", value: player.position },
                  { label: "Dominant Foot", value: player.dominantFoot || "N/A" },
                  { label: "Current Club/Academy", value: player.currentClub || "N/A" },
                  { label: "League/Competition Level", value: player.leagueLevel || "N/A" },
                  { label: "Playing Experience", value: player.playingExperience || "N/A" },
                  { label: "Speed Test", value: player.speedTest || "N/A" },
                ].map((info) => (
                  <div key={info.label} className="space-y-1">
                    <div className="text-xs text-slate-400 font-medium">{info.label}</div>
                    <div className="text-sm font-semibold text-slate-800 p-2 bg-primary/7 rounded-lg">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            {player.videos && player.videos.length > 0 && (
              <div className="bg-white rounded-2xl border p-8">
                <h2 className="text-xl font-bold mb-6">Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {player.videos.map((video) => (
                    <div key={video.id} className=" group cursor-pointer shadow-md rounded-2xl">
                      <div className="relative aspect-video rounded-t-2xl overflow-hidden border">
                        <Image height={100} width={100}
                          src="/soccer1.jpg"
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center ">
                          <div className="h-12 w-12  rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-slate-900 border-b-[8px] border-b-transparent ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white font-bold">
                          {video.duration}
                        </div>
                      </div>
                      <div className=" space-y-1.5 p-4">
                        <h3 className="text-sm font-bold text-slate-900">{video.title}</h3>
                        <p className="text-[10px] text-slate-400 mt-0.5">{video.date}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {player.reels && player.reels.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                      Short Clips Reels: ({player.reels.length})
                    </h3>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {player.reels.map((reel) => (
                        <div
                            key={reel.id}
                            className="flex-shrink-0 w-60 group cursor-pointer"
                          >
                            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-lg">

                              {/* Thumbnail */}
                              <Image
                                src="/reel1.jpg"
                                alt={reel.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />

                              {/* Dark gradient overlay (bottom text readability) */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                              {/* Play Button */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-14 w-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                </div>
                              </div>

                              {/* Bottom Left Text */}
                              <div className="absolute bottom-5 left-5 right-5">
                                <h4 className="text-white font-bold text-sm leading-snug drop-shadow-md">
                                  {reel.title} →
                                </h4>
                                <p className="text-white/80 text-[11px] mt-1 leading-snug drop-shadow-md">
                                  {reel.description || "Dribbling, first touch"}
                                </p>
                                <p className="text-white/60 text-[10px] mt-1 drop-shadow-md">
                                  Uploaded on: {reel.date || "22 Feb 2025"}
                                </p>

                                {/* Badges Row */}
                                <div className="flex items-center justify-between mt-3">
                                  {/* Reels Badge */}
                                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-700/90 text-white shadow-md">
                                    Reels
                                  </span>

                                  {/* Duration Badge */}
                                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-900 shadow-md">
                                    {reel.duration || "0:45"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
