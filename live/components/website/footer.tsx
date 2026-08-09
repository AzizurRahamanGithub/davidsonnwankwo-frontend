import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "../ui/button"

export function Footer() {
  return (
    <footer className="bg-[#0d2b21] text-white border-t border-white/10" id="footer">

      {/* Ready to Start CTA */}
        <section className="py-24  relative overflow-hidden text-center">
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to Start Your <span className="text-primary">Journey?</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10">
              Join thousands of athletes who have already taken the first step towards their college sports career.
            </p>
            <Button
              size="lg"
              asChild
              className="h-14 bg-white text-slate-950 px-12 hover:bg-slate-100 text-lg font-bold"
            >
              <Link href="/signup">Create Free Account</Link>
            </Button>
          </div>
        </section>

      <div className="container mx-auto px-4 py-20  border-t border-white/40">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 justify-items-end">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
             
               <Image height={100} width={250} src="/logofoot.png" alt="bg" className=""/>
              

            </Link>
            <p className="text-sm font-medium text-white/70 leading-relaxed  tracking-tight">
              The leading platform connecting talented athletes with college coaches and scouts.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* content */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-primary italic">Cpntent</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/#about"
                  className="text-xs font-black uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#players"
                  className="text-xs font-black uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                >
                  Players
                </Link>
              </li>
              <li>
                <Link
                  href="/#fqa"
                  className="text-xs font-black uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                >
                  FQA
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-primary italic">Contact</h3>
            <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <Mail size={16} strokeWidth={1.6} className="text-white/70" />
                  <span>hello@athletepath.com</span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={16} strokeWidth={1.6} className="text-white/70" />
                  <span>+1 (555) 123-4567</span>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin size={16} strokeWidth={1.6} className="text-white/70" />
                  <span>123 Sports Ave, Los Angeles, CA 90001</span>
                </li>
              </ul>
          </div>

          {/* Network */}
          {/* <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-primary italic">Network</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/sports"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/athletes"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Athletes
                </Link>
              </li>
              <li>
                <Link
                  href="/recruiters"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Recruiters
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Athletes */}
          {/* <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-primary italic">Athletes</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/signup"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Create Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Legal */}
          {/* <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-primary italic">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div> */}


        </div>

       
      </div>
       <div className="mt-5 flex flex-col items-center justify-center gap-6 py-8 md:flex-row  border-t border-white/15">
          <p className="text-[12px]  uppercase tracking-[0.1em] text-white/70">
            &copy; {new Date().getFullYear()} Athlete Patht. All rights reserved.
          </p>
        </div>
    </footer>
  )
}
