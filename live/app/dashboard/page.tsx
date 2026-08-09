"use client"

import { cn } from "@/lib/utils"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, Eye, MessageSquare, Info } from "lucide-react"
import { dashboardApi, mockDashboardData } from "@/lib/api-client"
import type { DashboardStats, UserProfile, Notification } from "@/lib/types"

export default function DashboardOverview() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Demo API implementation - fetching from mock client
    // In production, this would call actual backend endpoints
    const fetchData = async () => {
      try {
        setLoading(true)
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800))

        // In a real app, these would be separate parallel calls
        const statsRes = await dashboardApi.getStats()
        const profileRes = await dashboardApi.getProfile()
        const notificationsRes = await dashboardApi.getNotifications()

        setStats(statsRes.data || mockDashboardData.stats)
        setProfile(profileRes.data || mockDashboardData.profile)
        setNotifications(notificationsRes.data || mockDashboardData.notifications)
      } catch (error) {
        console.error("[v0] Error fetching dashboard data:", error)
        // Fallback to mock data for demo
        setStats(mockDashboardData.stats)
        setProfile(mockDashboardData.profile)
        setNotifications(mockDashboardData.notifications)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full overflow-hidden -m-8">
      <DashboardHeader userName={profile?.fullName} userAvatar={profile?.avatar} />

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Your Profile Hub</h2>
          <p className="text-gray-500">
            Manage your profile, monitor coach activity and everything you need to present yourself.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="bg-teal-500 text-white border-none shadow-sm overflow-hidden">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <p className="text-teal-50 text-sm font-medium">Approved Videos</p>
                <p className="text-4xl font-bold">{stats?.approvedVideos.toString().padStart(2, "0")}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-500 text-white border-none shadow-sm overflow-hidden">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <p className="text-orange-50 text-sm font-medium">Profile Views</p>
                <p className="text-4xl font-bold">{stats?.profileViews}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start gap-6">
                  <Avatar className="h-20 w-20 rounded-xl">
                    <AvatarImage src={profile?.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{profile?.fullName?.[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">{profile?.fullName}</h3>
                    </div>
                    <p className="text-gray-600 font-medium">{profile?.title}</p>
                    <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                      <span>{profile?.position}</span>
                      <span>|</span>
                      <span>{profile?.nationality}</span>
                      <span>|</span>
                      <span>{profile?.club}</span>
                      <span>|</span>
                      <span>Class of {profile?.classOf}</span>
                      <span>|</span>
                      <span>GPA {profile?.gpa}</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-2xl">{profile?.playingExperience}</p>
                  </div>
                </div>

                <div className="border-t border-primary pt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase mb-1">Date of Birth:</p>
                      <div className="bg-primary/7 p-3 rounded-lg border  border-gray-100 text-sm text-gray-700 block">
                        <p className="text-sm text-gray-700">
                        {profile?.dateOfBirth} (Age: {profile?.age})
                      </p>
                      </div>
                      
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase mb-1">Height:</p>
                      <div className="bg-primary/7 p-3 rounded-lg border border-gray-100 text-sm text-gray-700 block">
                        <p className="text-sm text-gray-700">{profile?.height}</p>
                      </div>
                      
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase mb-1">Weight:</p>
                      <div className="bg-primary/7 p-3 rounded-lg border border-gray-100 text-sm text-gray-700 block">
                         <p className="text-sm text-gray-700">{profile?.weight}</p>
                      </div>
                     
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase mb-1">Nationality:</p>
                      <div className="bg-primary/7 p-3 rounded-lg border border-gray-100 text-sm text-gray-700 block">
                        <p className="text-sm text-gray-700">{profile?.nationality}</p>
                      </div>
                      
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase mb-1">Graduation Year:</p>
                      <div className="bg-primary/7 p-3 rounded-lg border border-gray-100 text-sm text-gray-700 block">
                        <p className="text-sm text-gray-700">{profile?.graduationYear}</p>
                      </div>
                     
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase mb-1">School/College Name:</p>
                      <div className="bg-primary/7 p-3 rounded-lg border border-gray-100 text-sm text-gray-700 block">
                        <p className="text-sm text-gray-700">{profile?.schoolName}</p>
                      </div>
                      
                    </div>
                    <div className="col-span-full">
                      <p className="text-xs text-gray-400 font-medium uppercase mb-1">Academic GPA/Grade:</p>
                      <div className="bg-primary/7 p-3 rounded-lg border border-gray-100 text-sm text-gray-700 block">
                        High School Senior, GPA {profile?.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-gray-200 shadow-sm h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-bold text-gray-900">Notifications</CardTitle>
                <button className="text-xs font-medium text-teal-600 hover:text-teal-700">Mark as all seen</button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
                      <div
                        className={cn(
                          "h-10 w-10 shrink-0 rounded-lg flex items-center justify-center",
                          notification.type === "video"
                            ? "bg-teal-50 text-teal-600"
                            : notification.type === "profile_view"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-gray-50 text-gray-600",
                        )}
                      >
                        {notification.type === "video" && <Video className="h-5 w-5" />}
                        {notification.type === "profile_view" && <Eye className="h-5 w-5" />}
                        {notification.type === "message" && <MessageSquare className="h-5 w-5" />}
                        {notification.type === "general" && <Info className="h-5 w-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {!notification.read && <div className="h-2 w-2 rounded-full bg-orange-500 shrink-0" />}
                          <h5 className="text-sm font-bold text-gray-900 truncate">{notification.title}</h5>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{notification.message}</p>
                        <p className="text-[10px] text-primary mt-1 uppercase font-bold">{notification.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
