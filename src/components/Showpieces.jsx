// src/app/show-pieces/page.jsx
import VisualBreaker from "@/components/VisualBreaker";
import CTASection from "./CTA";

export default function ShowPieces() {
  return (
    <main className="flex flex-col bg-zinc-950">
      {/* Introduction */}
      <div className="py-20 text-center px-6">
        <h1 className="text-white font-serif text-5xl mb-4">Masterpiece Gallery</h1>
        <p className="text-zinc-500 italic">A showcase of our finest work and technical precision.</p>
      </div>

      <div className="flex flex-col gap-0"> {/* Gap 0 for seamless cinematic transitions */}
        <VisualBreaker
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavDcQ2_Z6HuFcIFDML_aA_yM2CjjvWs1PcA&s"
          title="Premium Firearms"
          subtitle="Precision. Trust. Performance."
        />
        <VisualBreaker
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdynR_pYynrNCbwNyIjWJm51N6Yt5rs2VCQ&s"
          title="Swords & Blades"
          subtitle="Tradition Forged in Steel."
        />
      </div>

      <CTASection />
    </main>
  );
}