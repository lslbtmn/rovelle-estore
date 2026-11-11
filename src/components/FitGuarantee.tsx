import React from 'react';
import { ShieldCheck, RefreshCw, Feather, Sparkles } from 'lucide-react';

export const FitGuarantee: React.FC<{ onOpenSizeGuide: () => void }> = ({ onOpenSizeGuide }) => {
  return (
    <section className="bg-gradient-to-br from-[#1A1817] via-[#2A231E] to-[#1A1817] text-[#FAF7F5] py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8D3C4_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-[#E8D3C4] text-xs font-medium tracking-widest uppercase mb-3 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#CCA288]" />
            <span>The Rovelle Promise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
            Confidence in Every Curve. <br />
            <span className="italic text-[#CCA288]">Guaranteed.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#DFC2B1]/80 mt-3 font-light leading-relaxed">
            Finding shapewear that snatches your waist without pinching or rolling shouldn't be a gamble. We stand behind every garment with our signature guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-3 hover:border-[#CCA288]/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#CCA288]/20 flex items-center justify-center text-[#CCA288]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">
              14-Day Free Fit Guarantee
            </h3>
            <p className="text-xs text-[#DFC2B1]/80 leading-relaxed font-light">
              Try your piece at home. If the size or compression doesn't feel like a second skin, exchange it for another size effortlessly within 14 days.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-3 hover:border-[#CCA288]/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#CCA288]/20 flex items-center justify-center text-[#CCA288]">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">
              Doorstep Exchange in Ghana
            </h3>
            <p className="text-xs text-[#DFC2B1]/80 leading-relaxed font-light">
              In Accra and Kumasi, our dispatch riders bring your new size directly to you and swap it on the spot. Zero post office hassles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-3 hover:border-[#CCA288]/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#CCA288]/20 flex items-center justify-center text-[#CCA288]">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">
              No-Roll Silicone Lock
            </h3>
            <p className="text-xs text-[#DFC2B1]/80 leading-relaxed font-light">
              Our proprietary micro-grip silicone ribbing keeps bodysuits and shorts securely anchored so you can sit, dance, and walk with total freedom.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenSizeGuide}
            className="px-8 py-3.5 bg-[#CCA288] text-[#1A1817] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white transition-all shadow-xl"
          >
            Launch Interactive Fit Finder
          </button>
        </div>
      </div>
    </section>
  );
};
