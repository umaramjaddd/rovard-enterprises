// src/app/show-pieces/page.jsx
import VisualBreaker from "@/components/VisualBreaker";
import CTASection from "./CTA";

export default function ShowPieces() {
  return (
    <main className="flex flex-col bg-black">
      {/* Modern Industrial Apparel Header */}
      <div className="py-20 text-left px-6 max-w-7xl w-full mx-auto flex flex-col justify-center">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-[#cf1d25] font-black text-xl tracking-tighter">//</span>
          <span className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-black">
            PRODUCTION TIMELINE
          </span>
        </div>
        <h1 className="text-white font-sans font-black text-4xl md:text-6xl uppercase tracking-tight">
          TECHNICAL <span className="text-[#cf1d25]">SHOWCASE</span>
        </h1>
        <p className="text-zinc-500 font-sans uppercase text-xs tracking-widest font-bold mt-2">
          A visual breakdown of our custom manufacturing engineering capabilities.
        </p>
      </div>

      {/* Seamless Cinematic Apparel Categories */}
      <div className="flex flex-col gap-0">
        <VisualBreaker
          imageSrc="https://static.vecteezy.com/system/resources/thumbnails/068/859/941/small/portrait-of-a-young-woman-with-a-hood-over-her-head-and-a-serious-expression-photo.jpg"
          title="CUSTOM ACTIVEWEAR"
          subtitle="Engineered Fabrics. High-Performance Sublimation. Low MOQ."
        />
        <VisualBreaker
          imageSrc="https://static.vecteezy.com/system/resources/thumbnails/027/470/818/small/front-and-back-view-of-a-red-hoodie-mockup-for-design-print-ai-generated-photo.jpg"
          title="MMA & BOXING REQUISITES"
          subtitle="Reinforced Stitching. Competition Grade Protection."
        />
      </div>

      <CTASection />
    </main>
  );
}