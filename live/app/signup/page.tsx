"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { Navbar } from "@/components/website/navbar"
import { useAuth } from "@/hooks/use-auth"
import { useAuthContext } from "@/lib/auth-context"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AuthSlider from "@/components/website/authslider"

export default function SignupPage() {
  const router = useRouter()
  const { signup: signupUser, isLoading, error: authError } = useAuth()
  const { login: setAuthState } = useAuthContext()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState<"player" | "recruiter">("player")
  const [successMessage, setSuccessMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage("")
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    const result = await signupUser({ email, password, confirmPassword, role })

    if (result.success) {
      setAuthState(result)
      setSuccessMessage("Signup successful! Redirecting...")

      if (result.user?.role === "player") {
        setTimeout(() => router.push("/dashboard"), 1500)
      } else {
        setTimeout(() => router.push("/"), 1500)
      }
    } else {
      setError(result.message)
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
                Be Seen, <span className="text-primary">Be Recruited.</span>
              </h1>
              <p className="text-sm text-slate-500">
                Create your profile, upload highlight reels, and connect with coaches who are searching for talent like
                you.
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

              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">Sign up as</Label>
                <RadioGroup
                  value={role}
                  onValueChange={(value) => setRole(value as "player" | "recruiter")}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="player" id="player" className="border-primary text-primary" />
                    <Label htmlFor="player" className="text-sm font-bold text-slate-700">
                      Sign up as Player
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recruiter" id="recruiter" className="border-primary text-primary" />
                    <Label htmlFor="recruiter" className="text-sm font-bold text-slate-700">
                      Sign up as Recruiter
                    </Label>
                  </div>
                </RadioGroup>
              </div>

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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pass" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Password
                  </Label>
                  <Input
                    id="pass"
                    type="password"
                    placeholder="Enter Password"
                    className="h-12 border-slate-200 bg-slate-50 focus:bg-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm"
                    type="password"
                    placeholder="Confirm Password"
                    className="h-12 border-slate-200 bg-slate-50 focus:bg-white"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="text-[10px] text-slate-400 leading-tight">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-primary font-bold">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary font-bold">
                  Privacy Policy
                </Link>
                .
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-primary text-sm font-bold uppercase tracking-widest hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Signing up..." : "Sign Up"}
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
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
  )
}
