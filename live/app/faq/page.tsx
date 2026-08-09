import { Navbar } from "@/components/website/navbar"
import { Footer } from "@/components/website/footer"
import { FAQSection } from "@/components/website/faq-section"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <FAQSection />

        <section className="py-24 bg-white border-t">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Still have questions?</h2>
            <p className="text-slate-600 mb-8">
              Our support team is here to help you with any issues or specialized recruitment questions you might have.
            </p>
            <button className="h-12 bg-primary text-white px-10 rounded-lg font-bold hover:bg-primary/90">
              Contact Support
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
