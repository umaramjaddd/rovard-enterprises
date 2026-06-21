// src/components/CategoryCard.jsx
import Link from "next/link"
import Image from "next/image"

export default function CategoryCard({ category }) {
  const isLocal = category.image?.startsWith("/")

  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative block aspect-[3/4] overflow-hidden bg-zinc-900"
    >
      {/* Image Container */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100">
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

      {/* Aesthetic Overlay: Dark gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-center transform transition-transform duration-500 group-hover:-translate-y-2">
        {/* Accent Line */}
        <div className="w-8 h-[1px] bg-amber-500 mx-auto mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        
        <h3 className="font-serif text-2xl text-white tracking-wide">
          {category.name}
        </h3>
        
        <p className="text-zinc-300 text-xs uppercase tracking-[0.2em] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Explore Collection
        </p>
      </div>

      {/* Subtle Inner Border on Hover */}
      <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
    </Link>
  )
}