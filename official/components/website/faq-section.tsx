"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I create a player profile?",
    answer:
      "Creating a profile is easy! Simply click on 'Get Started', fill in your personal and academic information, add your athletic stats, and upload your highlight clips. Our step-by-step wizard will guide you through everything.",
  },
  {
    question: "What types of videos can I upload?",
    answer:
      "You can upload full highlight reels, training session clips, and match performances. We support most common video formats and recommend high-quality 1080p footage for the best visibility.",
  },
  {
    question: "How do coaches find my profile?",
    answer:
      "Coaches can search for players using filters like position, location, graduation year, and stats. We also feature top-performing athletes on our homepage and in our weekly newsletters sent to college programs.",
  },
  {
    question: "Is Athlete Path free for athletes?",
    answer:
      "We offer a generous free tier that allows you to build a complete profile and be discoverable. We also have premium features for increased visibility and advanced analytics.",
  },
]

export function FAQSection() {
  return (
    <section className="mt-[130px] py-[130] bg-slate-50" id="fqa">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <div className="text-primary font-bold text-sm tracking-widest uppercase">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about getting started with Athlete Path.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl bg-white px-6">
              <AccordionTrigger className="text-left font-bold text-slate-900 py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
