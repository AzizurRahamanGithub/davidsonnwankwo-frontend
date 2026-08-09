import { Navbar } from "@/components/website/navbar"
import { Footer } from "@/components/website/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { AboutSection } from "@/components/website/about-section"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Sub Hero */}
        <section className="relative py-24 bg-[#3c995b] overflow-hidden text-center text-white">
          <div className="absolute inset-0 opacity-20">
            <Image height={100} width={100} src="/about-hero.jpg" alt="bg" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="inline-block rounded-md bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Changing The <span className="text-primary">Recruitment Game</span>
            </h1>
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
              We started Athlete Path to empower every athlete with the tools they need to be seen by college programs,
              regardless of their location or background.
            </p>
          </div>
        </section>

        {/* Detailed About Content (Reusing visual components from image 2) */}
        <AboutSection />

        {/* Mission & Vision */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To empower athletes of all levels by providing them with the tools and connections they need to
                    reach their full potential. We believe every athlete deserves a fair opportunity to showcase their
                    talent and connect with the right people.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10">
                    <Zap className="h-7 w-7 text-secondary" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To become the world's leading platform for athletic talent discovery and recruitment, creating a
                    transparent and accessible ecosystem where potential meets opportunity, regardless of background or
                    location.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900">Why Athlete Path?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our platform is designed by athletes for athletes, ensuring every feature serves your recruitment goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                  title: "Verified Stats",
                  desc: "We work with schools and clubs to verify athletic and academic data, giving coaches confidence.",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-primary" />,
                  title: "Performance Tracking",
                  desc: "Visualize your growth over time and see how you stack up against other recruits in your class.",
                },
                {
                  icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                  title: "Direct Access",
                  desc: "No middlemen. Message coaches directly and manage your recruitment journey in one place.",
                },
              ].map((value) => (
                <div key={value.title} className="bg-white p-8 rounded-2xl border text-center space-y-4 shadow-sm">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                  <p className="text-slate-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">10K+</div>
                <div className="mt-2 text-sm text-muted-foreground">Active Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">500+</div>
                <div className="mt-2 text-sm text-muted-foreground">Recruiters</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">25+</div>
                <div className="mt-2 text-sm text-muted-foreground">Sports Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">98%</div>
                <div className="mt-2 text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Start CTA */}
        <section className="py-24 bg-slate-900 relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 opacity-20">
            <Image height={100} width={100} src="/cta-stadium.jpg" alt="bg" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-4">
              Start Your <span className="text-primary">Journey Today</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              Join thousands of athletes who are already using Athlete Path to reach their college dreams.
            </p>
            <Link href="/signup">
              <button className="h-14 bg-white text-slate-950 px-12 rounded-lg font-bold shadow-lg hover:bg-slate-100 transition-all">
                Create Free Account
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
