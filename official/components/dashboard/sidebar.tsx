"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  LayoutGrid,
  Mail,
  Video,
  UserCircle,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutGrid },
  { name: "Inbox", href: "/dashboard/inbox", icon: Mail },
  { name: "Videos", href: "/dashboard/videos", icon: Video },
  { name: "My Information", href: "/dashboard/my-information", icon: UserCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false) // ✅ mobile sidebar toggle state

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
    }
    router.push("/login")
  }

  return (
    <>
      {/* ✅ Mobile Toggle Arrow Button (md and below only) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-3 top-20 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 lg:hidden"
      >
        <ChevronRight className="h-5 w-5 text-slate-700" />
      </button>

      {/* ✅ Mobile Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[55] lg:hidden"
        />
      )}

      {/* ✅ Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-[60] h-full w-64 bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full", // ✅ slide in/out
          "lg:translate-x-0 lg:static lg:z-auto" // ✅ desktop always visible
        )}
      >
        {/* ✅ Close Arrow inside sidebar (mobile only) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -right-4 top-24 z-[70] flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 lg:hidden"
        >
          <ChevronLeft className="h-5 w-5 text-slate-700" />
        </button>

        {/* Logo */}
        <div className="flex h-[72.5px] items-center gap-2 px-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2">
            <Image height={100} width={250} src="/logonav.png" alt="logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)} // ✅ click করলে sidebar close হবে (mobile)
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all",
                  isActive
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5",
                    isActive ? "text-emerald-600" : "text-slate-400"
                  )}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-200 p-4">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl"
            
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  )
}
