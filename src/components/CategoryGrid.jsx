// src/components/CategoryGrid.jsx
"use client";

import { useSelector } from "react-redux";
import CategoryCard from "@/components/CategoryCard";

export default function CategoryGrid() {
  const { categories, loading } = useSelector((state) => state.products);

  if (loading && categories.length === 0)
    return (
      <div className="py-20 flex flex-col items-center bg-black">
        {/* Spinner changed to brand maroon */}
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#cf1d25]"></div>
        <p className="mt-4 text-zinc-400 font-sans uppercase text-xs tracking-widest font-bold">Loading Collections...</p>
      </div>
    );

  return (
    <section className="py-12 bg-black">
      {/* Modern, bold left-aligned header style inspired directly by the "OUR CATEGORIES" section of the layout image */}
      <div className="text-left mb-8 flex items-center gap-2">
        <span className="text-[#cf1d25] font-black text-xl tracking-tighter">//</span>
        <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-wider">
          Our Categories
        </h2>
      </div>

      {/* Modern, high-performance apparel grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}