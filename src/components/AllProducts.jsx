// src/components/AllProducts.jsx
"use client";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function AllProducts({ title = "Our Masterpieces", showAll = "no" }) {
  const { products, loading } = useSelector((state) => state.products);

  // Logic to determine which products to display
  const displayProducts = showAll === "yes" ? products : products.slice(0, 12);

  return (
    <section className="py-16 border-t border-zinc-100">
      <div className="flex flex-col items-center mb-12 text-center">
        <span className="text-amber-700 text-[10px] uppercase tracking-[0.4em] font-bold mb-2">
          The Armoury
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 italic">
          {title}
        </h2>
        <div className="w-12 h-[1px] bg-zinc-300 mt-4"></div>
      </div>

      {loading && products.length === 0 ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
      {/* Show button ONLY if showAll is "no" */}
      {showAll === "no" && products.length > 12 && (
        <div className="mt-20 text-center">
          <Link href="/products">
            <button className="group flex flex-col items-center mx-auto space-y-2">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-900 group-hover:text-amber-700 transition-colors">
                Explore All Items
              </span>
              <div className="w-10 h-[1px] bg-zinc-900 group-hover:w-20 group-hover:bg-amber-700 transition-all duration-500"></div>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}