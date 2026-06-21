// src/components/ProductCard.jsx
import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <Link href={`/productView/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-zinc-100 aspect-[4/5]">
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Subtle "Quick View" Overlay */}
        <div className="absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <span className="bg-white text-zinc-900 px-4 py-2 text-xs uppercase tracking-widest font-semibold">
             View Details
           </span>
        </div>

        {/* Price Tag Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 shadow-sm">
          <p className="text-zinc-900 text-xs font-bold">Rs. {product.price}</p>
        </div>
      </div>

      {/* Product Info - Simplified */}
      <div className="pt-4 pb-2 text-center md:text-left">
        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-700 font-bold mb-1">
          {product.material || "Handcrafted"}
        </p>
        <h3 className="font-serif text-lg text-zinc-900 group-hover:text-amber-800 transition-colors">
          {product.name}
        </h3>
      </div>
    </Link>
  )
}