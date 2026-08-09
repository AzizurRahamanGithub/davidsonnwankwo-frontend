"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { useAuthContext } from "@/lib/auth-context"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AuthSlider from "@/components/website/authslider"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()

  //  CHANGED: Use isLoading + error directly from hook
  const { login: loginUser, isLoading, error: authError } = useAuth()

  const { login: setAuthState } = useAuthContext()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage("")

    const loginResult = await loginUser({ email, password })

    if (loginResult.success) {
      setAuthState(loginResult)
      setSuccessMessage("Login successful! Redirecting...")

      if (loginResult.user?.role === "player") {
        setTimeout(() => router.push("/#home"), 1500)
      } else {
        setTimeout(() => router.push("/"), 1500)
      }
    }
  }

  return (
    <main className="flex flex-1 flex-col md:flex-row min-h-screen">
      {/* Left Side: Image Content */}
      <AuthSlider />

      {/* Right Side: Form */}
      <div className="flex w-full items-center justify-center p-8 md:w-1/2 md:p-12 lg:p-24">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Welcome Back, <span className="text-primary">Champion!</span>
            </h1>
            <p className="text-sm text-slate-500">
              Log in to access your profile, showcase your talent, and connect with coaches looking for players like you.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* CHANGED: show authError from useAuth */}
            {authError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                {authError}
              </div>
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

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Password
                </Label>
                <Link href="/forgot-password" title="Forgot Password?" className="text-xs font-bold text-primary">
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="h-12 border-slate-200 bg-slate-50 focus:bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="h-12 w-full bg-primary text-sm font-bold uppercase tracking-widest hover:bg-primary/90"
              disabled={isLoading} // ✅ CHANGED
            >
              {isLoading ? "Logging in..." : "Login"} {/* ✅ CHANGED */}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400 font-bold">OR</span>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              className="h-12 w-full hover:bg-primary/5 hover:text-slate-700 border-slate-200 text-slate-700 bg-transparent"
            >
              <Image height={100} width={100} src="/google.png" className="mr-2 h-4 w-4" alt="Google" />
              Continue with Google
            </Button>
          </form>

          <p className="text-center text-sm font-medium text-slate-500">
            Don't have an account?{" "}
            <Link href="/signup" className="font-bold text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
