// src/components/CategoryCard.jsx
import Link from "next/link"
import Image from "next/image"

export default function CategoryCard({ category }) {
  const isLocal = category.image?.startsWith("/")

  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative block aspect-[4/5] overflow-hidden bg-[#121212] border border-zinc-900 shadow-lg"
    >
      {/* Image Frame */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-90">
        {isLocal ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
        ) : (
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Industrial High-Contrast Grayscale Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 transition-opacity duration-300"></div>

      {/* Modern Title Box - Left Aligned exactly like the reference image categories */}
      <div className="absolute bottom-0 left-0 w-full p-4 text-left z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h3 className="font-sans font-black text-sm md:text-base text-white uppercase tracking-wider leading-tight group-hover:text-[#cf1d25] transition-colors duration-300">
          {category.name}
        </h3>
        
        {/* Modernized indicator matching a professional dynamic app layout */}
        <p className="text-zinc-400 text-[10px] uppercase tracking-widest mt-1 font-bold flex items-center gap-1 group-hover:text-white transition-colors duration-300">
          Explore Item <span className="text-[#cf1d25] group-hover:translate-x-1 transition-transform">&rsaquo;</span>
        </p>
      </div>

      {/* Clean Brand Corner Border Line on Container Hover instead of internal box outlines */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#cf1d25] group-hover:w-full transition-all duration-300 pointer-events-none"></div>
    </Link>
  )
}