"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardHeaderProps {
  userName?: string
  userAvatar?: string
  greeting?: string
}

export function DashboardHeader({
  userName = "Alex Smith",
  userAvatar = "/placeholder-user.jpg",
  greeting = "Good Morning!",
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <h1 className="text-xl font-medium text-gray-900">{greeting}</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">{userName}</span>
        <Avatar className="h-10 w-10">
          <AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
          <AvatarFallback>
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
