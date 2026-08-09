"use client"

import { useState } from "react"
import type {
  AuthResponse,
  LoginRequest,
  SignupRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
} from "@/lib/types"

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (data: LoginRequest): Promise<AuthResponse> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result: AuthResponse = await response.json()

      if (!result.success) {
        setError(result.message)
      }

      return result
    } catch (err) {
      const errorMsg = "Failed to login"
      setError(errorMsg)
      return { success: false, message: errorMsg }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (data: SignupRequest): Promise<AuthResponse> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result: AuthResponse = await response.json()

      if (!result.success) {
        setError(result.message)
      }

      return result
    } catch (err) {
      const errorMsg = "Failed to sign up"
      setError(errorMsg)
      return { success: false, message: errorMsg }
    } finally {
      setIsLoading(false)
    }
  }

  const forgotPassword = async (data: ForgotPasswordRequest): Promise<AuthResponse> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result: AuthResponse = await response.json()

      if (!result.success) {
        setError(result.message)
      }

      return result
    } catch (err) {
      const errorMsg = "Failed to send reset OTP"
      setError(errorMsg)
      return { success: false, message: errorMsg }
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (data: ResetPasswordRequest): Promise<AuthResponse> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result: AuthResponse = await response.json()

      if (!result.success) {
        setError(result.message)
      }

      return result
    } catch (err) {
      const errorMsg = "Failed to reset password"
      setError(errorMsg)
      return { success: false, message: errorMsg }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    login,
    signup,
    forgotPassword,
    resetPassword,
    isLoading,
    error,
  }
}
