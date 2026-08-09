// API Client for Dashboard
// This uses demo/mock API endpoints that can be easily replaced with real backend URLs

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ""

// Generic API call wrapper
async function apiCall<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

  // Ensure endpoint starts with / if not an absolute URL
  const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}

// Dashboard API calls
export const dashboardApi = {
  // Get dashboard stats
  getStats: () => apiCall<{ data: import("./types").DashboardStats }>("/dashboard/stats"),

  // Get user profile
  getProfile: () => apiCall<{ data: import("./types").UserProfile }>("/dashboard/profile"),

  // Update profile
  updateProfile: (data: Partial<import("./types").ProfileFormData>) =>
    apiCall("/dashboard/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  // Get notifications
  getNotifications: () => apiCall<{ data: import("./types").Notification[] }>("/dashboard/notifications"),

  // Mark notification as read
  markNotificationRead: (id: string) => apiCall(`/dashboard/notifications/${id}/read`, { method: "POST" }),

  // Get conversations
  getConversations: () => apiCall<{ data: import("./types").ChatConversation[] }>("/dashboard/conversations"),

  // Get conversation messages
  getMessages: (conversationId: string) =>
    apiCall<{ data: import("./types").ChatMessage[] }>(`/dashboard/conversations/${conversationId}/messages`),

  // Send message
  sendMessage: (conversationId: string, message: string) =>
    apiCall(`/dashboard/conversations/${conversationId}/messages`, {
      method: "POST",
      body: JSON.stringify({ message }),
    }),

  // Get videos
  getVideos: () => apiCall<{ data: import("./types").DashboardVideo[] }>("/dashboard/videos"),

  // Upload video
  uploadVideo: (formData: FormData) =>
    apiCall("/dashboard/videos/upload", {
      method: "POST",
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    }),

  // Delete video
  deleteVideo: (id: string) => apiCall(`/dashboard/videos/${id}`, { method: "DELETE" }),

  // Upload resume
  uploadResume: (formData: FormData) =>
    apiCall("/dashboard/resume/upload", {
      method: "POST",
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    }),
}

// Player API calls
export const playerApi = {
  getPlayers: (limit?: number) =>
    apiCall<import("./types").Player[]>(limit ? `/api/players?limit=${limit}` : "/api/players"),
  getPlayer: (id: string) => apiCall<import("./types").Player>(`/api/players/${id}`),
}

// Mock API responses for development (remove when connecting to real backend)
export const mockDashboardData = {
  stats: {
    approvedVideos: 2,
    profileViews: 26,
    newMessages: 3,
    coachInterest: 8,
  },

  profile: {
    id: "1",
    firstName: "Alex",
    lastName: "Smith",
    fullName: "Alex Smith",
    email: "alex.smith@example.com",
    avatar: "/placeholder-user.jpg",
    title: "Soccer Expert",
    position: "Central Midfielder",
    nationality: "Spain",
    club: "FC Valencia U19",
    classOf: 2025,
    gpa: "3.7",
    dateOfBirth: "12/03/2006",
    age: 19,
    height: "178cm",
    weight: "72kg",
    graduationYear: 2025,
    schoolName: "Valencia Academy of Sports",
    sports: ["Soccer"],
    dominantFoot: "Right",
    leagueLevel: "U19 National Youth League",
    playingExperience: "Creative playmaker with strong passing range | Open to US College Recruitment.",
  },

  notifications: [
    {
      id: "1",
      type: "video" as const,
      title: "New Video Uploaded",
      message: "Your highlight reel has been successfully added to your profile.",
      timestamp: "2 hr ago",
      read: false,
    },
    {
      id: "2",
      type: "profile_view" as const,
      title: "Profile Viewed",
      message: "A college coach from the US just viewed your profile.",
      timestamp: "30 min ago",
      read: false,
    },
    {
      id: "3",
      type: "message" as const,
      title: "New Message",
      message: "You've received a message from Coach Williams.",
      timestamp: "1 hr ago",
      read: false,
    },
  ],

  conversations: [
    {
      id: "1",
      userId: "2",
      userName: "Ebony Price",
      userAvatar: "/placeholder-user.jpg",
      userRole: "High School Senior, GPA 3.8",
      lastMessage: "Hi Daniel, I came across your profile...",
      lastSeen: "2 min ago",
      unread: true,
      messages: [
        {
          id: "1",
          senderId: "2",
          senderName: "Ebony Price",
          senderAvatar: "/placeholder-user.jpg",
          message:
            "Hi Daniel, I came across your profile and really liked your highlight reel. You have great vision as a midfielder.",
          timestamp: "Jan 27, 2024 | 09:10",
          isOwn: false,
        },
        {
          id: "2",
          senderId: "2",
          senderName: "Ebony Price",
          senderAvatar: "/placeholder-user.jpg",
          message: "Can you share a bit more about your current club and the league you're playing in?",
          timestamp: "Jan 27, 2024 | 09:10",
          isOwn: false,
        },
        {
          id: "3",
          senderId: "1",
          senderName: "Alex Smith",
          senderAvatar: "/placeholder-user.jpg",
          message:
            "Thank you, Coach! I'm currently playing with Valencia U19 in the National Youth League, mostly as a central midfielder.",
          timestamp: "Jan 27, 2024 | 09:10",
          isOwn: true,
        },
        {
          id: "4",
          senderId: "1",
          senderName: "Alex Smith",
          senderAvatar: "/placeholder-user.jpg",
          message:
            "Also, I'd like to know your availability for the 2025 intake. Are you looking at US college opportunities?",
          timestamp: "Jan 27, 2024 | 09:10",
          isOwn: true,
        },
      ],
    },
    {
      id: "2",
      userId: "3",
      userName: "Melanie Doyle I",
      userAvatar: "/placeholder-user.jpg",
      userRole: "High School Senior, GPA 3.8",
      lastMessage: "Looking forward to hearing back...",
      lastSeen: "2 min ago",
      unread: false,
      messages: [],
    },
  ],

  videos: [
    {
      id: "1",
      title: "Shining my 2025 highlight reel, exciting",
      thumbnail: "/placeholder.jpg",
      duration: "3:25",
      uploadedOn: "30 Feb 2024",
      status: "approved" as const,
      url: "#",
      type: "featured" as const,
    },
    {
      id: "2",
      title: "Defensive Highlights – Tackles,",
      thumbnail: "/placeholder.jpg",
      duration: "4:12",
      uploadedOn: "11 Feb 2024",
      status: "approved" as const,
      url: "#",
      type: "full" as const,
    },
    {
      id: "3",
      title: "Training Session Clips – Speed drills,",
      thumbnail: "/placeholder.jpg",
      duration: "6:33",
      uploadedOn: "01 Feb 2025",
      status: "approved" as const,
      url: "#",
      type: "full" as const,
    },
    {
      id: "4",
      title: "2024 Highlight Reel – Key passes, assists",
      thumbnail: "/placeholder.jpg",
      duration: "2:18",
      uploadedOn: "25 Jan 2024",
      status: "approved" as const,
      url: "#",
      type: "full" as const,
    },
    {
      id: "5",
      title: "Skill Showcase – Dribbling free kicks",
      thumbnail: "/placeholder.jpg",
      duration: "1:45",
      uploadedOn: "Uploaded on: 22 Feb 2024",
      status: "pending" as const,
      url: "#",
      type: "reel" as const,
    },
    {
      id: "6",
      title: "Tournament Performance – Key moments from",
      thumbnail: "/placeholder.jpg",
      duration: "3:02",
      uploadedOn: "Uploaded on: 07 Mar 2024",
      status: "approved" as const,
      url: "#",
      type: "reel" as const,
    },
  ],
}
