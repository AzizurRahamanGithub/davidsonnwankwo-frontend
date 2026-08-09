"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthContext } from "@/lib/auth-context"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuthContext()
  const router = useRouter()

  // ✅ Logout Handler
  const handleLogout = () => {
    // ✅ 1) Clear session/token from storage + reset auth state
    logout()

    // ✅ 2) Mobile menu খোলা থাকলে বন্ধ করে দেবে
    setMobileMenuOpen(false)

    // ✅ 3) User কে home page এ redirect করবে
    router.push("/")

    // ✅ 4) Optional: page refresh to clear any cached data
    router.refresh()
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image height={100} width={250} src="/logonav.png" alt="bg" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/#about" },
              { name: "Players", href: "/#players" },
              { name: "FAQ", href: "/#fqa" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            {isAuthenticated && user?.role === "player" ? (
              <>
                <Button asChild className="bg-primary">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>

                {/* ✅ Logout Button */}
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="border-red-300 hover:text-red-500 text-slate-700 bg-red-50 hover:bg-red-100"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild className="border-slate-200 text-slate-700 bg-transparent">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>

              <Link href="/about" className="text-sm font-medium">
                About
              </Link>

              <Link href="/players" className="text-sm font-medium">
                Players
              </Link>

              <Link href="/faq" className="text-sm font-medium">
                FAQ
              </Link>

              <div className="flex flex-col gap-2 pt-2">
                {isAuthenticated && user?.role === "player" ? (
                  <>
                    <Button asChild className="bg-primary">
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>

                    {/* ✅ Logout Button (Mobile) */}
                    <Button
                      variant="outline"
                      onClick={handleLogout}
                      className="border-red-300 hover:text-red-500 text-slate-700 bg-red-50 hover:bg-red-100"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="/login">Login</Link>
                    </Button>

                    <Button asChild className="w-full bg-primary">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
