export interface Player {
  id: string
  name: string
  position: string
  location: string
  classOf: number
  gpa: number
  image: string
  age?: number
  nationality?: string
  dateOfBirth?: string
  height?: string
  weight?: string
  dominantFoot?: string
  currentClub?: string
  graduationYear?: number
  schoolName?: string
  academicInfo?: string
  leagueLevel?: string
  playingExperience?: string
  speedTest?: string
  bio?: string
  videos?: Video[]
  reels?: Reel[]
}

export interface Video {
  id: string
  title: string
  date: string
  duration: string
  thumbnail: string
  url: string
}

export interface Reel {
  id: string
  title: string
  duration: string
  thumbnail: string
  url: string
}

export interface AuthResponse {
  success: boolean
  message: string
  token?: string
  user?: {
    id: string
    email: string
    name: string
    role: "player" | "recruiter"
  }
}

export interface LoginRequest {
  email: string
  password: string
}

export interface SignupRequest {
  email: string
  password: string
  confirmPassword: string
  role: "player" | "recruiter"
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
  confirmPassword: string
}

export interface Message {
  id: string
  senderId: string
  senderName: string
  senderAvatar: string
  senderRole: string
  text: string
  timestamp: string
  unreadCount?: number
}

export interface Chat {
  id: string
  contact: {
    name: string
    avatar: string
    role: string
    status: string
  }
  messages: Message[]
}

export interface Notification {
  id: string
  type: 'video' | 'profile_view' | 'message' | 'general'
  title: string
  message: string
  timestamp: string
  read: boolean
  icon?: string
}

export interface DashboardStats {
  approvedVideos: number
  profileViews: number
  newMessages: number
  coachInterest: number
}

export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  senderAvatar: string
  message: string
  timestamp: string
  isOwn: boolean
}

export interface ChatConversation {
  id: string
  userId: string
  userName: string
  userAvatar: string
  userRole: string
  lastMessage: string
  lastSeen: string
  unread: boolean
  messages: ChatMessage[]
}

export interface DashboardVideo {
  id: string
  title: string
  thumbnail: string
  duration: string
  uploadedOn: string
  status: 'pending' | 'approved' | 'rejected'
  url: string
  type: 'full' | 'reel' | 'featured'
}

export interface ProfileFormData {
  // Step 1: Personal & Academic Info
  profilePicture?: File | string
  firstName: string
  lastName: string
  title: string
  dateOfBirth: string
  nationality: string
  height: string
  weight: string
  graduationYear: string
  academicGPA: string
  schoolName: string
  
  // Step 2: Athletic Stats & Club Details
  sports: string[]
  primaryPosition: string
  secondaryPosition?: string
  dominantFoot: string
  currentClub: string
  leagueLevel: string
  playingExperience: string
  
  // Step 3: Videos & Resume
  videos: File[] | string[]
  resume?: File | string
}

export interface UserProfile {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  avatar: string
  title: string
  position: string
  nationality: string
  club: string
  classOf: number
  gpa: string
  dateOfBirth: string
  age: number
  height: string
  weight: string
  graduationYear: number
  schoolName: string
  sports: string[]
  dominantFoot: string
  leagueLevel: string
  playingExperience: string
}
