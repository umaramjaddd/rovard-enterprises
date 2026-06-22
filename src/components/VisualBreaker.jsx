// src/components/VisualBreaker.jsx
import Image from "next/image";

export default function VisualBreaker({ imageSrc, title, subtitle }) {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden group bg-black border-b border-zinc-900">
      {/* Increased brightness from 0.35 to 0.65 and removed 'grayscale' so product colors pop */}
      <div className="absolute inset-0 transition-transform duration-[2s] ease-out group-hover:scale-105">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover brightness-[0.65] contrast-110 transition-all duration-1000"
        />
      </div>

      {/* Decorative Borders */}
      <div className="absolute inset-0 border-y-[1px] border-zinc-800 z-10 pointer-events-none"></div>

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
        <div className="text-[#cf1d25] font-sans font-black text-2xl tracking-tighter mb-2 transform group-hover:scale-125 transition-transform duration-500">
          //
        </div>
        
        <h2 className="text-3xl md:text-5xl font-sans font-black tracking-wider uppercase mb-3 text-white group-hover:text-[#cf1d25] transition-colors duration-300 drop-shadow-md">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] uppercase text-zinc-200 max-w-2xl bg-black/60 backdrop-blur-xs px-4 py-1 border border-zinc-900/50">
            {subtitle}
          </p>
        )}
      </div>

      {/* Tamed down the vignette opacity significantly (from /80 and /50 down to /30) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
}