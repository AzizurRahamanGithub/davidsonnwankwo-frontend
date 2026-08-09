import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-black py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden bg-primary px-8 py-20 text-black md:px-16 md:py-28 transform skew-y-[-1deg]">
          <div className="relative z-10 mx-auto max-w-4xl text-center transform skew-y-[1deg]">
            <div className="inline-block border-2 border-black bg-black px-4 py-1 mb-8">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Limited Access</span>
            </div>
            <h2 className="text-balance text-5xl font-black italic leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl uppercase">
              Join the Elite <br /> <span className="text-white">Circle</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-black uppercase tracking-tight opacity-80 md:text-xl">
              Don't leave your athletic future to chance. Connect with verified recruiters today.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="h-16 rounded-none bg-black px-12 text-lg font-black uppercase italic tracking-tighter text-primary hover:bg-black/90"
              >
                <Link href="/signup">
                  Register Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-16 rounded-none border-2 border-black bg-transparent px-12 text-lg font-black uppercase italic tracking-tighter text-black hover:bg-black hover:text-primary"
              >
                <Link href="/recruiters">For Recruiters</Link>
              </Button>
            </div>
          </div>
          {/* Subtle background text for athletic feel */}
          <div className="absolute -bottom-10 -left-10 select-none text-[20vw] font-black italic tracking-tighter text-black/5 uppercase">
            CHAMPION
          </div>
        </div>
      </div>
    </section>
  )
}
