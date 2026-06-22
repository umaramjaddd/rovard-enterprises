// src/components/HeroSection.jsx
import Link from "next/link"
import { appName } from "@/constants/appName."

export default function HeroSection() {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black"
      style={{ 
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/077/001/993/small/stock-of-man-wearing-stylish-burgundy-hoodie-sweatshirt-and-sweatpants-casual-outfit-fashionable-streetwear-clothing-sportswear-activewear-apparel-photo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Heavy Black Overlay for deep contrast */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}
<div className="absolute inset-0 "></div>

      {/* Hero Content Box with Darkened Glassmorphism */}
      <div className="relative z-10 text-center px-8 py-12 md:py-16 max-w-3xl mx-4 backdrop-blur-md bg-black/40 border border-white/10 rounded-sm shadow-2xl">
        
        {/* Top Accent Line - Now Pure Maroon (#cf1d25) */}
        <div className="w-12 h-[2px] bg-[#cf1d25] mx-auto mb-6"></div>

        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight">
          {appName}
        </h1>
        
        <p className="text-zinc-200 text-lg md:text-xl mb-10 font-light tracking-wide italic">
          Forging premium leather goods and armour with unmatched craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Main Button - Pure Maroon (#cf1d25) with Deep Maroon Hover (#9b1218) */}
          <Link 
            href="https://wa.me/923080903030" 
            target="_blank"
            className="px-10 py-4 bg-[#cf1d25] text-white font-bold tracking-widest uppercase text-xs text-center
                       hover:bg-[#9b1218] transition-all duration-300 transform hover:-translate-y-1 shadow-lg inline-block"
          >
            Contact Us
          </Link>
          
          {/* Secondary Button - White border with crisp Black hover background */}
          <Link 
            href="/products"
            className="px-10 py-4 border border-white text-white font-bold tracking-widest uppercase text-xs text-center
                       hover:bg-white hover:text-black transition-all duration-300 inline-block"
          >
            View Collection
          </Link>
        </div>
      </div>

      {/* Bottom Vignette fading to absolute black */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </section>
  )
}