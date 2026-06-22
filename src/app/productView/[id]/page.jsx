"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/Redux/Slices/productsSlice";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ProductViewPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  
  const [activeImage, setActiveImage] = useState(null);

  const product = products.find((p) => p.id === Number(id));

  const imageList = product 
    ? [product.thumbnail, ...(product.images || [])].filter(Boolean) 
    : [];

  useEffect(() => {
    if (imageList.length > 0) {
      setActiveImage(imageList[0]);
    }
  }, [product]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-2 border-[#cf1d25] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-black border border-zinc-900">
      <div className="text-center">
        <span className="text-[#cf1d25] font-black text-xl tracking-tighter">//</span>
        <p className="font-sans text-sm tracking-widest text-zinc-500 uppercase font-bold mt-2">Product data not found in catalog</p>
      </div>
    </div>
  );

  // Dynamic WhatsApp business line message setup
  const waMessage = encodeURIComponent(`Greetings Rovard Enterprises, I am inquiring regarding the bulk production specifications for the ${product.name}. Could you provide a catalog quotation sheet?`);

  return (
    <main className="min-h-screen bg-black text-white pt-10 pb-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        
        {/* Left: Product Showcase & Image Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          
          {/* Main Showcase Image Frame */}
          <div className="relative group w-full">
            <div className="absolute -inset-1 bg-[#cf1d25]/10 blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden bg-[#121212] border border-zinc-900">
              <img
                src={activeImage || product.thumbnail}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-102"
              />
            </div>
            {/* Structural Custom Accent Layout Bracket */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#cf1d25]"></div>
          </div>

          {/* Map Thumbnail Grid Elements */}
          {imageList.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-5 gap-3 pt-2">
              {imageList.map((imgUrl, index) => {
                const isActive = activeImage === imgUrl;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative aspect-square overflow-hidden bg-[#121212] border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "border-[#cf1d25] opacity-100 scale-[0.98]" 
                        : "border-zinc-900 opacity-60 hover:opacity-90"
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${product.name} template view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: Technical Product Specifications */}
        <div className="w-full lg:w-2/5 lg:min-h-[80vh] flex flex-col justify-between sticky top-20">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#cf1d25] font-black text-sm tracking-tighter">//</span>
              <span className="text-zinc-400 text-[10px] uppercase tracking-[0.25em] font-black">
                {product.material || "OEM / PRIVATE LABEL EDITION"}
              </span>
            </div>
            
            <h1 className="font-sans font-black text-3xl md:text-5xl mt-4 mb-6 uppercase tracking-tight text-white">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
               <span className="text-2xl font-black text-[#cf1d25]">PKR {product.price}</span>
               <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold px-2 py-0.5 border border-zinc-800 bg-[#121212]">
                 MOQ 50 PCS
               </span>
            </div>
            
            <div className="w-full h-[1px] bg-zinc-900 mb-8"></div>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans uppercase tracking-wider font-semibold">
              {product.description}
            </p>
          </div>

          {/* Action Operations Setup */}
          <div className="flex flex-col gap-4">
            <Link 
              href={`https://wa.me/923080903030?text=${waMessage}`}
              target="_blank"
              className="group relative flex items-center justify-center gap-3 bg-[#cf1d25] hover:bg-[#9b1218] text-white py-4 px-8 transition-all duration-300 shadow-xl border-0"
            >
              <Icon icon="ri:whatsapp-line" width="18" />
              <span className="text-xs uppercase font-black tracking-widest relative z-10">Request Bulk Quotation</span>
            </Link>

            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold py-4 cursor-pointer"
            >
              <Icon icon="ri:arrow-left-s-line" width="16" />
              Back to Catalog
            </button>
          </div>

          {/* Corporate Guarantee Infrastructure Panel */}
          <div className="mt-8 p-6 border border-zinc-900 bg-[#121212] shadow-xl">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#cf1d25] font-black mb-4">// Plant Certifications</h4>
            <ul className="space-y-3 text-[10px] text-zinc-400 font-bold tracking-wider uppercase">
              <li className="flex items-center gap-3"><Icon icon="ri:shield-check-line" className="text-[#cf1d25] text-sm" /> 100% Verified Quality Assurance</li>
              <li className="flex items-center gap-3"><Icon icon="ri:global-line" className="text-[#cf1d25] text-sm" /> Worldwide Shipping & Fast Delivery</li>
              <li className="flex items-center gap-3"><Icon icon="ri:equalizer-line" className="text-[#cf1d25] text-sm" /> Custom Sublimation & OEM Tooling</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}