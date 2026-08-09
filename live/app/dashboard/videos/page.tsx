"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Upload, Play } from "lucide-react"
import { dashboardApi, mockDashboardData } from "@/lib/api-client"
import type { DashboardVideo, UserProfile } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { UploadToolbar } from "@/components/dashboard/uploadtool"


export default function VideosPage() {
  const [videos, setVideos] = useState<DashboardVideo[]>([])
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const videosRes = await dashboardApi.getVideos()
        const profileRes = await dashboardApi.getProfile()

        setVideos(videosRes.data || mockDashboardData.videos)
        setProfile(profileRes.data || mockDashboardData.profile)
      } catch (error) {
        setVideos(mockDashboardData.videos)
        setProfile(mockDashboardData.profile)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const videoReviewPanel = videos.filter((v) => v.type === "featured")
  const fullVideos = videos.filter((v) => v.type === "full")
  const shortReels = videos.filter((v) => v.type === "reel")

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full overflow-hidden -m-8">
      <DashboardHeader userName={profile?.fullName} userAvatar={profile?.avatar} />

      <div className="flex-1 overflow-y-auto p-8 space-y-10">
        {/* Title */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Personal Video Logs</h2>
          <p className="text-sm text-slate-500">
            Keep all your training clips, match highlights, and skill videos organized in one place.
          </p>
        </div>

        {/* Upload Area */}
        <UploadToolbar />

        {/* Sections */}
        <div className="space-y-12">
          {/* Review Panel */}
          <SectionHeader title="Videos Review Panel" count={videoReviewPanel.length} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videoReviewPanel.map((video) => (
              <DashboardVideoCard key={video.id} video={video} label="Review Panel" />
            ))}
          </div>

          {/* Full Videos */}
          <SectionHeader title="Full Videos" count={fullVideos.length} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fullVideos.map((video) => (
              <DashboardVideoCard key={video.id} video={video} label="Full Video" />
            ))}
          </div>

          {/* Reels */}
          <SectionHeader title="Short Clips Reels" count={shortReels.length} />

          {/* ✅ Best (Figma style): Horizontal scroll reels */}
          <div className="flex gap-6 overflow-x-auto pb-4 pr-4">
            {shortReels.map((video) => (
              <DashboardReelCard key={video.id} video={video} />
            ))}
          </div>

          {/* ✅ Optional: If you prefer grid reels instead of scroll
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {shortReels.map((video) => (
              <DashboardReelCard key={video.id} video={video} />
            ))}
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

/* ----------------------------- */
/* ✅ SECTION HEADER COMPONENT */
/* ----------------------------- */
function SectionHeader({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-sm font-bold text-slate-900">{title}:</h3>
      <span className="text-slate-400 text-sm font-medium">({count})</span>
    </div>
  )
}

/* ----------------------------- */
/* ✅ DASHBOARD VIDEO CARD */
/* ----------------------------- */
function DashboardVideoCard({
  video,
  label,
}: {
  video: DashboardVideo
  label: string
}) {
  return (
    <div className="group cursor-pointer rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-t-2xl overflow-hidden">
        <Image
          src={video.thumbnail || "/video-placeholder.png"}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Play className="h-5 w-5 text-slate-900 fill-slate-900 ml-0.5" />
          </div>
        </div>

        {/* Duration */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white font-bold">
            {video.duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
          {video.title}
        </h4>
        <p className="text-[10px] text-slate-400 font-medium">
          Uploaded on: {video.uploadedOn}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <Badge
            variant="outline"
            className="text-[9px] h-5 rounded-full border-slate-200 text-slate-600 font-bold"
          >
            {label}
          </Badge>

          {video.status === "pending" && (
            <span className="text-[9px] font-bold uppercase text-orange-600">
              Pending
            </span>
          )}

          {video.status === "approved" && (
            <span className="text-[9px] font-bold uppercase text-emerald-600">
              Approved
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/* ----------------------------- */
/* ✅ DASHBOARD REEL CARD */
/* ----------------------------- */
function DashboardReelCard({ video }: { video: DashboardVideo }) {
  return (
    <div className="flex-shrink-0 w-60 group cursor-pointer">
      <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-lg">
        {/* Thumbnail */}
        <Image
          src={video.thumbnail || "/video-placeholder.png"}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-5 left-5 right-5">
          <h4 className="text-white font-bold text-sm leading-snug drop-shadow-md line-clamp-2">
            {video.title} →
          </h4>

          <p className="text-white/60 text-[10px] mt-1 drop-shadow-md">
            Uploaded on: {video.uploadedOn}
          </p>

          {/* Badges */}
          <div className="flex items-center justify-between mt-3">
            <Badge className="bg-emerald-700/90 hover:bg-emerald-700/90 text-[10px] h-6 px-3 rounded-full border-none shadow-md">
              Reels
            </Badge>

            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-900 shadow-md">
              {video.duration || "0:45"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
