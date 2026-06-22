// src/components/FAQs.jsx
"use client"
import { useState } from "react"

const faqs = [
  {
    question: "What types of custom apparel do you manufacture?",
    answer: "We specialize in high-performance sportswear, competitive MMA & boxing gear, industrial safety workwear, sublimation printing, and private label fashion manufacturing."
  },
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our standard starting baseline is a low MOQ of 50 PCS per design/style, making it highly accessible for emerging sports brands and fitness startups."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer worldwide shipping options with fast delivery networks, providing secure door-to-door global logistics."
  },
  {
    question: "Can I request custom branding and OEM sample mockups?",
    answer: "Absolutely. We follow an efficient 'How We Work' process: Send your design idea, receive a digital mockup, construct sample production within 5-7 days, and approve before bulk manufacturing."
  },
  {
    question: "What certifications do your manufacturing lines hold?",
    answer: "Our factories adhere to the highest international quality standards, carrying certifications including ISO 9001:2015, BSCI compliance, Sedex, and OEKO-TEX textiles verification."
  },
  {
    question: "What secure payment methods do you support?",
    answer: "We accommodate professional corporate transactions via standard Wire Transfers (T/T), PayPal processing, Western Union, and MoneyGram accounts."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 bg-black">
      {/* Modern left-aligned layout header matching the reference image rule */}
      <div className="text-left mb-10 flex items-center gap-2">
        <span className="text-[#cf1d25] font-black text-xl tracking-tighter">//</span>
        <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-wider">
          Common Inquiries
        </h2>
      </div>

      {/* Accordion List styling shifted into a structured industrial layout */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-xs px-5 py-4 bg-[#121212]
                ${isOpen ? 'border-[#cf1d25] shadow-lg shadow-[#cf1d25]/5' : 'border-zinc-900'}`}
            >
              <button
                className="w-full flex justify-between items-center text-left group cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={`font-sans font-bold text-sm md:text-base uppercase tracking-wide transition-colors duration-200
                  ${isOpen ? 'text-[#cf1d25]' : 'text-white group-hover:text-zinc-300'}`}>
                  {faq.question}
                </span>
                
                {/* Modern industrial dynamic rotating crosshair marker */}
                <span className={`transform transition-transform duration-300 text-xs
                  ${isOpen ? 'rotate-45 text-[#cf1d25]' : 'text-zinc-500'}`}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"/>
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out 
                ${isOpen ? 'max-h-40 opacity-100 mt-3 border-t border-zinc-900 pt-3' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-400 font-sans text-xs md:text-sm tracking-wide uppercase leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}