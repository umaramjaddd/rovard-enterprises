// src/components/VisualBreaker.jsx
import Image from "next/image";

export default function VisualBreaker({ imageSrc, title, subtitle }) {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden group">
      {/* The Image with Slow Zoom */}
      <div className="absolute inset-0 transition-transform duration-[2s] ease-out group-hover:scale-110">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Decorative Borders (Letterbox style) */}
      <div className="absolute inset-0 border-y-[1px] border-white/10 z-10 pointer-events-none"></div>

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
        <div className="w-[1px] h-12 bg-amber-500 mb-6 transform group-hover:scale-y-150 transition-transform duration-700"></div>
        
        <h2 className="text-3xl md:text-5xl font-serif tracking-widest uppercase mb-4 opacity-90">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-zinc-300">
            {subtitle}
          </p>
        )}
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
    </section>
  );
}