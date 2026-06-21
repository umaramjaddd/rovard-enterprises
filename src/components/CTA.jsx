// src/components/CTASection.jsx
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative bg-zinc-950 text-white py-24 px-6 overflow-hidden">
      {/* Decorative Forge Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-amber-500 text-xs uppercase tracking-[0.4em] font-bold mb-6 block">
          Custom Commissions
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          Ready to bring your <br/> vision to life?
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Whether it's a custom blade, precision equipment, or a bespoke leather piece, our craftsmen are ready.
        </p>
        
        <Link
          href="/contact"
          className="inline-block group relative"
        >
          <div className="absolute inset-0 bg-amber-600 blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
          <button className="relative bg-amber-700 text-white px-12 py-4 font-bold tracking-widest uppercase text-xs hover:bg-amber-600 transition-all">
            Request a Quote
          </button>
        </Link>
      </div>
    </section>
  );
}