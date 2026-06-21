"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchSubCategories, fetchProducts } from "../../Redux/Slices/adminSlice";
import CategoryTab from "./CategoryTab";
import SubCategoryTab from "./SubCategoryTab";
import ProductTab from "./ProductTab";

export default function   AdminPanel() {
  const [activeTab, setActiveTab] = useState("categories");
  const dispatch = useDispatch();
  const { categories, subCategories, products, loading } = useSelector(state => state.admin);

  useEffect(() => {
    if (categories.length === 0) dispatch(fetchCategories());
    if (subCategories.length === 0) dispatch(fetchSubCategories());
    if (products.length === 0) dispatch(fetchProducts());
  }, []);
return (
    <div className="p-8 max-w-7xl mx-auto bg-zinc-950 min-h-screen text-zinc-300">
      <header className="mb-10 border-b border-zinc-800 pb-6">
        <h1 className="font-serif text-4xl text-white tracking-widest uppercase">
          Armoury Control
        </h1>
        <p className="text-zinc-500 text-xs mt-2 tracking-widest uppercase italic">
          Manage Inventory & Collections
        </p>
      </header>

      {/* Aesthetic Tabs */}
      <div className="flex border-b border-zinc-800 mb-8 overflow-x-auto">
        {["categories", "subCategories", "products"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all relative
              ${activeTab === tab 
                ? "text-amber-500" 
                : "text-zinc-500 hover:text-zinc-300"}`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 animate-in fade-in"></div>
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-zinc-900/30 border border-white/5 p-6 backdrop-blur-sm shadow-xl">
        {loading ? (
          <div className="flex justify-center py-20">
             <div className="w-10 h-10 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {activeTab === "categories" && <CategoryTab categories={categories} />}
            {activeTab === "subCategories" && <SubCategoryTab subCategories={subCategories} />}
            {activeTab === "products" && <ProductTab products={products} />}
          </div>
        )}
      </div>
    </div>
  );
}