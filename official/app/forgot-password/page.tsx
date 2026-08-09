"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Navbar } from "@/components/website/navbar"
import { useAuth } from "@/hooks/use-auth"
import { useState } from "react"
import AuthSlider from "@/components/website/authslider"

export default function ForgotPasswordPage() {
  const { forgotPassword, isLoading, error } = useAuth()
  const [email, setEmail] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage("")

    const result = await forgotPassword({ email })

    if (result.success) {
      setSuccessMessage(result.message)
      setEmail("")
    }
  }

  return (
      <main className="flex flex-1 flex-col md:flex-row min-h-screen">
        {/* Left Side: Image Content */}
        <AuthSlider/>

        {/* Right Side: Form */}

        <div className="flex w-full items-center justify-center p-8 md:w-1/2 md:p-12 lg:p-24">
          <div className="w-full max-w-sm space-y-8">
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Forgot <span className="text-primary">Password?</span>
              </h1>
              <p className="text-sm text-slate-500">
                No worries! Enter your email and we'll send you OTP to reset your password.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">{error}</div>
              )}
              {successMessage && (
                <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-lg text-sm">
                  {successMessage}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="h-12 border-slate-200 bg-slate-50 focus:bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-primary text-sm font-bold uppercase tracking-widest hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset OTP"}
              </Button>
            </form>

            <p className="text-center text-sm font-medium text-slate-500">
              Remember your password?{" "}
              <Link href="/login" className="font-bold text-primary">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </main>
  )
}
