"use client"

import type React from "react"
import { Suspense } from "react"
import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Send, Paperclip, Mail } from "lucide-react"
import { dashboardApi, mockDashboardData } from "@/lib/api-client"
import type { ChatConversation, UserProfile } from "@/lib/types"
import { cn } from "@/lib/utils"

function InboxContent() {
  const [conversations, setConversations] = useState<ChatConversation[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const conversationsRes = await dashboardApi.getConversations()
        const profileRes = await dashboardApi.getProfile()

        setConversations(conversationsRes.data || mockDashboardData.conversations)
        setProfile(profileRes.data || mockDashboardData.profile)

        if (conversationsRes.data?.length > 0 || mockDashboardData.conversations.length > 0) {
          setSelectedId(conversationsRes.data?.[0]?.id || mockDashboardData.conversations[0].id)
        }
      } catch (error) {
        console.error("[v0] Error fetching inbox data:", error)
        setConversations(mockDashboardData.conversations)
        setProfile(mockDashboardData.profile)
        setSelectedId(mockDashboardData.conversations[0]?.id)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const selectedConversation = conversations.find((c) => c.id === selectedId)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !selectedId) return

    // In a real app, call dashboardApi.sendMessage
    console.log("[v0] Sending message:", message)
    setMessage("")
  }

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

      <div className="flex-1 flex overflow-hidden">
        {/* Chat List Sidebar */}
        <div className="w-[450] border-r border-gray-200 bg-white flex flex-col">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Inbox</h2>
            <p className="text-xs text-gray-500 mb-6">
              All your conversations with coaches are organized here- Stay connected, respond quickly.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search..." className="pl-10 bg-gray-50 border-gray-100 rounded-lg text-sm" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-1">
              {conversations.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedId(chat.id)}
                  className={cn(
                    "w-full flex items-start gap-3 p-3 rounded-xl transition-all  text-left",
                    selectedId === chat.id
                      ? "bg-teal-50 border border-teal-100"
                      : "hover:bg-gray-50 border border-transparent",
                  )}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={chat.userAvatar || "/placeholder.svg"} />
                    <AvatarFallback>{chat.userName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 justify-between w-full ">
                    <div className=" flex flex-col gap-1.5">
                      <h4 className="text-sm font-bold text-gray-900 truncate">{chat.userName}</h4>
                       <p className="text-[10px] text-primary  uppercase truncate ">{chat.userRole}</p>
                    </div>
                   
                    {chat.unread && (
                      <div className="flex items-center justify-end flex-col gap-1.5 ">
                          <span className="text-[10px]  text-gray-400 font-medium">{chat.lastSeen}</span>
                        <div className="h-4 w-4 rounded-full bg-teal-600 text-[10px] text-white flex items-center justify-center font-bold">
                          2
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Message View */}
        <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="h-16 border-b border-gray-200 bg-white px-6 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedConversation.userAvatar || "/placeholder.svg"} />
                  <AvatarFallback>{selectedConversation.userName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{selectedConversation.userName}</h3>
                  <p className="text-[10px] text-gray-400 font-medium uppercase">
                    Last Seen {selectedConversation.lastSeen}
                  </p>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <div className="flex justify-center">
                  <span className="bg-gray-200/50 text-gray-500 text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    Today
                  </span>
                </div>

                {selectedConversation.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn("flex gap-3 max-w-[80%]", msg.isOwn ? "ml-auto flex-row-reverse" : "")}
                  >
                    {!msg.isOwn && (
                      <Avatar className="h-8 w-8 shrink-0">
                        <AvatarImage src={msg.senderAvatar || "/placeholder.svg"} />
                        <AvatarFallback>{msg.senderName[0]}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="space-y-1">
                      <div
                        className={cn(
                          "p-4 rounded-2xl text-sm leading-relaxed",
                          msg.isOwn
                            ? "bg-teal-700 text-white rounded-tr-none"
                            : "bg-white text-gray-700 border border-gray-100 rounded-tl-none",
                        )}
                      >
                        {msg.message}
                      </div>
                      <div
                        className={cn(
                          "flex items-center gap-1 text-[10px] font-bold uppercase",
                          msg.isOwn ? "justify-end text-gray-400" : "text-gray-400",
                        )}
                      >
                        {msg.timestamp}
                        {msg.isOwn && <span className="text-teal-600">✓✓</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-6 bg-white border-t border-gray-200">
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-2 rounded-xl"
                >
                  <Button type="button" variant="ghost" size="icon" className="text-gray-400 shrink-0">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type here..."
                    className="border-none bg-transparent focus-visible:ring-0 text-sm h-10"
                  />
                  <Button type="submit" className="bg-teal-700 hover:bg-teal-800 rounded-lg px-6 gap-2">
                    Send <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Select a conversation</h3>
              <p className="text-gray-500 max-w-xs mt-2">
                Choose a coach from the list to start or continue your conversation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function InboxPage() {
  return (
    <Suspense fallback={null}>
      <InboxContent />
    </Suspense>
  )
}
