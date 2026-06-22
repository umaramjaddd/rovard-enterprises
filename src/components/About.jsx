// src/components/AboutSection.jsx
import Image from "next/image"
import { appName } from "@/constants/appName."

export default function AboutSection() {
  return (
    <section className="py-20 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Modern High-Contrast Image Box */}
        <div className="w-full md:w-1/2 relative">
          {/* Subtly tinted background accent block representing high-end manufacturing lines */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#cf1d25]"></div>
          
          <div className="relative z-10 w-full h-[400px] overflow-hidden border border-zinc-800 shadow-2xl bg-[#121212]">
            <Image
              src="/logo.jpeg" 
              alt="High Performance Manufacturing Facility"
              fill
              className="object-contain p-8 transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div className="absolute -bottom-3 -right-3 w-1/3 h-1/3 bg-[#cf1d25]/5 -z-0"></div>
        </div>

        {/* Right: Technical/Corporate Brand Copy */}
        <div className="w-full md:w-1/2 text-left">
          {/* Section Indicator inspired by the layout template rules */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[#cf1d25] font-black text-lg tracking-tighter">//</span>
            <span className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-black">
              WHY CHOOSE OUR PLATFORM?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight mb-6 leading-none">
            ENGINEERED APPAREL & <br/>
            <span className="text-[#cf1d25]">BULK PRODUCTION</span>
          </h2>
          
          <div className="space-y-4 text-zinc-400 leading-relaxed font-sans text-sm md:text-base uppercase tracking-wide">
            <p className="font-bold text-white">
              {appName} is a premier custom apparel manufacturer specializing in high-performance sportswear, competitive MMA gear, protective workwear, and reliable private label outsourcing solutions.
            </p>
            <p className="text-zinc-400 font-normal">
              Every production run undergoes comprehensive quality inspections to secure durability, streamline custom item assembly, and assure global shipping standards with short turnaround periods.
            </p>
          </div>

          {/* Quick Metrics Frame inspired by the Bottom Row Statistics box in WhatsApp Image 2026-06-22 at 8.18.19 PM.jpeg */}
          <div className="mt-8 pt-6 border-t border-zinc-900 grid grid-cols-2 gap-4">
            <div>
              <p className="font-sans font-black text-2xl text-[#cf1d25]">10+ YEARS</p>
              <p className="text-zinc-500 font-sans font-bold text-[10px] tracking-wider uppercase mt-1">Manufacturing Experience</p>
            </div>
            <div>
              <p className="font-sans font-black text-2xl text-white">LOW MOQ</p>
              <p className="text-zinc-500 font-sans font-bold text-[10px] tracking-wider uppercase mt-1">For All Scale Startups</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}