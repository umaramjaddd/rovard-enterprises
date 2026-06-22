"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      // Safely grab text first to prevent crashing on unhandled errors
      const textData = await res.text();
      let data = {};
      
      try {
        data = JSON.parse(textData);
      } catch (pErr) {
        throw new Error("Server returned an invalid response. Please try restarting your dev server.");
      }

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong while sending the inquiry.");
      }

      setStatus({ 
        type: "success", 
        message: "Inquiry processed successfully! Our sales team will respond within 24 hours." 
      });
      setFormData({ name: "", email: "", phone: "", message: "" }); 
    } catch (err) {
      setStatus({ 
        type: "error", 
        message: err.message || "Failed to deliver inquiry specifications." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white overflow-hidden border-t border-zinc-900">
      <div className="flex flex-col md:flex-row min-h-[650px]">
        
        {/* --- LEFT SIDE: THE DYNAMIC THEME IMAGE ELEMENT --- */}
        <div 
          className="w-full md:w-5/12 relative min-h-[350px] md:min-h-auto bg-cover bg-center flex flex-col justify-between p-8 md:p-12 group overflow-hidden"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop')" 
          }}
        >
          {/* Heavy High-Contrast Overlay Palette (Onyx Black to Maroon Gradient Layer) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[#cf1d25]/80 transition-all duration-700 group-hover:to-[#9b1218]/90 z-0"></div>
          
          {/* Subtle Fabric/Mesh Textured lines layer */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>

          {/* Top Identifier Badge */}
          <div className="relative z-10">
            <span className="text-[10px] bg-black text-white font-black tracking-[0.3em] uppercase px-3 py-1.5 border border-zinc-800">
              PERFORMANCE GEAR
            </span>
          </div>

          {/* Bottom Identity Block - Recreating logo.jpeg Text Hierarchy Layout */}
          <div className="relative z-10 mt-auto transform transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-[#cf1d25] text-4xl font-black italic tracking-tighter select-none leading-none animate-pulse">
                🗲
              </div>
              <h3 className="font-sans font-black tracking-tighter text-4xl md:text-5xl text-[#cf1d25] uppercase leading-none italic select-none">
                ROVARD
              </h3>
            </div>
            <p className="font-sans font-black tracking-[0.38em] text-sm md:text-base text-zinc-100 uppercase ml-1 border-t border-zinc-100/20 pt-2 select-none">
              ENTERPRISES
            </p>
          </div>

          {/* Brand Corner Accent Frame Line */}
          <div className="absolute top-0 right-0 h-full w-[4px] bg-[#cf1d25]"></div>
        </div>

        {/* --- RIGHT SIDE: FORM CONTAINER --- */}
        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-black">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[#cf1d25] font-black text-xl tracking-tighter">//</span>
            <span className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-black">
              CONTACT SECTOR
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-sans font-black uppercase tracking-tight mb-8">
            LET'S BUILD YOUR <span className="text-[#cf1d25]">BRAND TOGETHER</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name / Company</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-zinc-800 py-2 text-sm focus:border-[#cf1d25] outline-none transition-colors" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-zinc-800 py-2 text-sm focus:border-[#cf1d25] outline-none transition-colors" 
              />
            </div>
            
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone / WhatsApp Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-zinc-800 py-2 text-sm focus:border-[#cf1d25] outline-none transition-colors" 
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Order Requirements & Product Specifications</label>
              <textarea 
                rows={3} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-zinc-800 py-2 text-sm focus:border-[#cf1d25] outline-none transition-colors resize-none" 
              />
            </div>
            
            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
              <button 
                type="submit"
                disabled={loading}
                className="md:w-max px-10 py-3.5 bg-[#cf1d25] hover:bg-[#9b1218] disabled:bg-zinc-900 disabled:text-zinc-600 text-white text-xs uppercase tracking-widest font-black transition-all cursor-pointer shadow-xl border-0"
              >
                {loading ? "Processing..." : "Send Inquiry Now"}
              </button>

              {status.message && (
                <p className={`text-xs uppercase tracking-wider font-bold ${status.type === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">WhatsApp Line</p>
              <a href="https://wa.me/923080903030" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-wide font-bold hover:text-[#cf1d25] transition">+92 308 090 3030</a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Corporate Email</p>
              <a href="mailto:info@progrumar.com" className="text-xs uppercase tracking-wide font-bold hover:text-[#cf1d25] transition">info@progrumar.com</a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Global HQ Network</p>
              <p className="text-xs uppercase tracking-wide font-bold text-white">Sialkot, Punjab, Pakistan</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}