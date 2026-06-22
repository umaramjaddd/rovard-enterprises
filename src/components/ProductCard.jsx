// src/components/ProductCard.jsx
import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <Link href={`/productView/${product.id}`} className="group block bg-[#121212] border border-zinc-900 p-2 transition-all duration-300 hover:border-zinc-700 shadow-xl">
      <div className="relative overflow-hidden bg-black aspect-[4/5]">
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Action Overlay: Brand Maroon transparent view pane */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <span className="bg-[#cf1d25] text-white px-5 py-2.5 text-xs uppercase tracking-widest font-black transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
             View Details
           </span>
        </div>

        {/* Currency Tag Badge - Dark theme clean execution */}
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-zinc-800">
          <p className="text-[#cf1d25] text-xs font-black tracking-wide">Rs. {product.price}</p>
        </div>
      </div>

      {/* Product Information - Aligned with the technical detail labels in WhatsApp Image 2026-06-22 at 8.18.19 PM.jpeg */}
      <div className="pt-3 pb-1 px-1 text-left">
        <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wide truncate group-hover:text-[#cf1d25] transition-colors duration-200">
          {product.name}
        </h3>
        
        <div className="mt-2 flex items-center justify-between border-t border-zinc-900 pt-2">
          <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
            {product.material || "Custom Logo"}
          </p>
          
          {/* Dynamic Highlight badge box matching the catalog specs in the reference screenshot */}
          <span className="bg-[#cf1d25]/10 text-[#cf1d25] text-[9px] font-black uppercase px-2 py-0.5 rounded-xs tracking-tight">
            MOQ 50 PCS
          </span>
        </div>
      </div>
    </Link>
  )
}