// src/components/CTASection.jsx
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden border-t border-zinc-900">
      {/* High-Performance Neon Brand Maroon Glow Element instead of Forge Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cf1d25]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Modern left-aligned style tags centered for the CTA space */}
        <div className="inline-flex items-center gap-2 mb-4 justify-center">
          <span className="text-[#cf1d25] font-black text-base tracking-tighter">//</span>
          <span className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-black">
            B2B MANUFACTURING CONTRACTS
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-sans font-black uppercase tracking-tight mb-6 leading-none">
          LET'S BUILD YOUR <br/>
          <span className="text-[#cf1d25]">BRAND TOGETHER</span>
        </h2>
        
        <p className="text-zinc-400 text-sm md:text-base mb-10 max-w-2xl mx-auto font-sans font-bold tracking-wide uppercase">
          Premium Quality • Competitive Pricing • On-Time Global Delivery. Contact our facility layout coordinators for private label custom specifications.
        </p>
        
        <Link
          href="/contact"
          className="inline-block group relative"
        >
          {/* Intense Maroon Blur Drop Shadow Accent on Hover */}
          <div className="absolute inset-0 bg-[#cf1d25] blur-md opacity-10 group-hover:opacity-40 transition-opacity"></div>
          
          <button className="relative bg-[#cf1d25] text-white px-12 py-4 font-black tracking-widest uppercase text-xs hover:bg-[#9b1218] transition-all cursor-pointer border-0 rounded-xs shadow-xl">
            Send Inquiry Now
          </button>
        </Link>
      </div>
    </section>
  );
}