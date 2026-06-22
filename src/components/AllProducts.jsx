// src/components/AllProducts.jsx
"use client";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function AllProducts({ title = "BEST SELLERS", showAll = "no" }) {
  const { products, loading } = useSelector((state) => state.products);

  // Logic to determine which products to display
  const displayProducts = showAll === "yes" ? products : products.slice(0, 12);

  return (
    <section className="py-16 bg-black border-t border-zinc-900">
      {/* Dynamic Left-Aligned Header Style directly from the layout reference image */}
      <div className="text-left mb-8 flex items-center gap-2">
        <span className="text-[#cf1d25] font-black text-xl tracking-tighter">//</span>
        <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-wider">
          {title === "Our Masterpieces" ? "BEST SELLERS" : title.toUpperCase()}
        </h2>
      </div>

      {loading && products.length === 0 ? (
        <div className="flex justify-center py-20 bg-black">
          <div className="w-8 h-8 border-2 border-[#cf1d25] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        /* Modern Apparel Grid Frame */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
      {/* "Explore All" Button modernized to look like a high-end catalogue button */}
      {showAll === "no" && products.length > 12 && (
        <div className="mt-16 text-center">
          <Link href="/products">
            <button className="px-10 py-3.5 bg-transparent border border-zinc-700 text-white font-black tracking-widest uppercase text-xs text-center
                               hover:bg-[#cf1d25] hover:border-[#cf1d25] transition-all duration-300 cursor-pointer shadow-lg inline-block">
              Explore All Items
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}