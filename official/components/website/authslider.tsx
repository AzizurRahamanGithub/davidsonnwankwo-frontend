"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/login2.png",
    title: "Showcase Your Skills",
    desc: "Upload highlight reels, track your progress, and get discovered by top college programs.",
  },
  {
    image: "/login1.png",
    title: (
  <>
    Built for Athletes, <br />
    Trusted by Coaches
  </>
),
    desc: "Every athlete profile is reviewed and verified to ensure coaches connect with real, committed players.",
  },
]

export default function AuthSideSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative hidden w-full items-end justify-start bg-sky-950 md:flex md:w-1/2 overflow-hidden">

      {/*  SLIDE IMAGES */}
      {slides.map((slide, index) => (
        <Image height={100} width={100}
          key={index}
          src={slide.image}
          alt="Athlete Action"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            active === index ? "opacity-60" : "opacity-0"
          }`}
        />
      ))}

      {/*  DARK OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(360deg, rgba(0, 0, 0, 0.3) 0.86%, rgba(7, 34, 25, 0.3) 136.31%)];
" />

      {/*  TEXT CONTENT */}
      <div className="relative z-10 w-[70%] p-10 mb-10 ml-20  transition-all duration-700">
        <h2 className="text-[48px] block font-bold text-white leading-tight transition-all duration-700">
          {slides[active].title}
        </h2>
        <p className="mt-6 text-lg text-slate-100 transition-all duration-700">
          {slides[active].desc}
        </p>

        {/*  DOTS */}
        <div className="mt-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? "bg-white w-20" : "bg-white/40 w-20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
