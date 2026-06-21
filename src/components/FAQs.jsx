// src/components/FAQs.jsx
"use client"
import { useState } from "react"

const faqs = [
  {
    question: "What is Arshad Armoury?",
    answer: "Arshad Armoury is a premium brand crafting leather goods and armour with unmatched craftsmanship."
  },
  {
    question: "Where are your products made?",
    answer: "All our products are handcrafted locally using high-quality materials."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship our products worldwide. Shipping fees may vary depending on the destination."
  },
  {
    question: "Can I customize my order?",
    answer: "Absolutely! We offer custom orders for select products. Contact us with your requirements."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and Stripe for secure payments."
  },
  {
    question: "Do you offer refunds or exchanges?",
    answer: "Yes, we have a 14-day return policy for defective or damaged items."
  },
  {
    question: "How long does shipping take?",
    answer: "Domestic shipping usually takes 3-7 business days, while international shipping may take 2-4 weeks."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, once your order is shipped, you will receive a tracking number via email."
  },
  {
    question: "Are your materials ethically sourced?",
    answer: "Yes, we ensure that all our materials are sourced responsibly and ethically."
  },
  {
    question: "Do you sell to businesses or only individuals?",
    answer: "We cater to both individual and business clients. Bulk orders can be arranged."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via our Contact page or email us directly at support@arshadarmoury.com."
  },
  {
    question: "Do you have a physical store?",
    answer: "Currently, we operate online only, but you can visit us by appointment."
  },
  {
    question: "Can I request a product catalog?",
    answer: "Yes, we provide a digital catalog upon request via our Contact page."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, gift wrapping is available for select products during checkout."
  },
  {
    question: "How often do you release new collections?",
    answer: "We release new collections seasonally, with occasional limited editions throughout the year."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-zinc-900 mb-4">Common Inquiries</h2>
        <p className="text-zinc-500 italic">Everything you need to know about our process</p>
      </div>

      <div className="divide-y divide-zinc-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              className="w-full flex justify-between items-center text-left group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`text-lg transition-colors duration-300 ${openIndex === index ? 'text-amber-700 font-medium' : 'text-zinc-800'}`}>
                {faq.question}
              </span>
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-amber-700' : 'text-zinc-400'}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <p className="text-zinc-600 leading-relaxed max-w-2xl">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}