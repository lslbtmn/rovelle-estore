import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Award, Users } from 'lucide-react';

interface AboutPageProps {
  onShopNow: () => void;
  onOpenSizeGuide: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onShopNow, onOpenSizeGuide }) => {
  return (
    <div className="bg-[#FAF7F5] animate-in fade-in duration-300">
      {/* Editorial Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EFEB] to-[#FAF7F5] pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-[#EBDCD3]/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EBDCD3]/70 border border-[#DFC2B1] text-xs font-semibold text-[#7E4E37] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B58265]" />
            <span>The Maison & Story</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-normal tracking-tight leading-tight">
            Contouring Reimagined. <br />
            <span className="italic font-light text-[#9E674C]">Curves Celebrated.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5C3928]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Born out of Accra, House of Rovelle was created with a singular mission: to liberate women from uncomfortable, flattening shapewear with second-skin garments engineered specifically for natural, diverse silhouettes.
          </p>
        </div>
      </section>

      {/* Narrative Section with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85"
                alt="House of Rovelle Model Contouring Bodysuit"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Subtle floating quote card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#EBDCD3] max-w-xs">
              <p className="font-serif text-sm italic text-[#1A1817]">
                "Shapewear shouldn't try to change who you are—it should amplify the confidence you already carry."
              </p>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-[#9E674C] mt-2">
                — Rovelle Design Atelier
              </span>
            </div>
          </div>

          <div className="space-y-6 text-[#5C3928]">
            <span className="text-xs uppercase font-bold tracking-widest text-[#9E674C]">
              Why We Began
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817] font-semibold leading-snug">
              The End of Rolling, Pinching, and Suffocating Garments
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-light">
              For decades, traditional shapewear brands designed garments based on a narrow standard of beauty. The results were notorious: waistbands that folded over into tight coils, garments that compressed hips flat like cardboard, and synthetic fabrics unbearable in warm climates.
            </p>
            <p className="text-sm sm:text-base leading-relaxed font-light">
              We spent 18 months surveying and testing with hundreds of Ghanaian and international women across all body shapes—from sizes XS through 4XL. We studied the contours of full hips, hourglass waists, and postpartum bellies to craft an anatomical architecture that hugs in all the right places without ever stealing your breath.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onShopNow}
                className="px-6 py-3.5 bg-[#1A1817] text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#3D261B] transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenSizeGuide}
                className="px-6 py-3.5 bg-white border border-[#CCA288] text-[#1A1817] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#F5EFEB] transition-all text-center"
              >
                Try Fit Finder
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Rovelle Pillars */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#EBDCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#9E674C]">
              Our Craft & Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1817] font-semibold mt-1">
              The Four Pillars of Rovelle
            </h2>
            <p className="text-xs sm:text-sm text-[#7E4E37] mt-2 font-light">
              Every seam, yarn, and panel is intentionally selected to deliver invisible sculpting and all-day ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-[#EBDCD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBDCD3] flex items-center justify-center text-[#7E4E37]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1817]">
                Targeted Micro-Compression
              </h3>
              <p className="text-xs text-[#5C3928] leading-relaxed font-light">
                Graduated compression zones that firm the lower abdomen while allowing free expansion across the ribs and chest.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-[#EBDCD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBDCD3] flex items-center justify-center text-[#7E4E37]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1817]">
                True Shade Inclusivity
              </h3>
              <p className="text-xs text-[#5C3928] leading-relaxed font-light">
                Carefully calibrated nude tones—from Nude Almond and Warm Mocha to Rich Cocoa and deep Onyx—that blend under sheer fabrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-[#EBDCD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBDCD3] flex items-center justify-center text-[#7E4E37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1817]">
                Anti-Roll Silicone Anchor
              </h3>
              <p className="text-xs text-[#5C3928] leading-relaxed font-light">
                Medical-grade silicone borders hold the waistline firmly in place throughout 10-hour days and evening galas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-[#EBDCD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBDCD3] flex items-center justify-center text-[#7E4E37]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1817]">
                14-Day Fit Guarantee
              </h3>
              <p className="text-xs text-[#5C3928] leading-relaxed font-light">
                Sizing anxiety eliminated. If you need a size exchange, our courier brings the new size right to your door in Ghana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable & Ethical Sourcing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-[#F5EFEB] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#DFC2B1] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#9E674C]">
              Ethical Standards
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#1A1817]">
              Crafted with Care, Built to Last
            </h2>
            <p className="text-xs sm:text-sm text-[#5C3928] leading-relaxed font-light">
              We oppose fast-fashion waste. Rovelle bodysuits and shapers are made from OEKO-TEX® certified yarns that maintain elasticity through 100+ wash cycles without fraying or stretching out.
            </p>
            <p className="text-xs sm:text-sm text-[#5C3928] leading-relaxed font-light">
              Every order arrives in discreet, recyclable luxury packaging with reusable lingerie wash bags to protect your garments for years to come.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white p-6 rounded-2xl border border-[#DFC2B1]">
              <span className="font-serif text-3xl font-bold text-[#1A1817]">100+</span>
              <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Wash Elasticity Hold</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#DFC2B1]">
              <span className="font-serif text-3xl font-bold text-[#1A1817]">OEKO-TEX</span>
              <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Skin-Safe Certified</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#DFC2B1]">
              <span className="font-serif text-3xl font-bold text-[#1A1817]">100%</span>
              <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Cotton Crotch Lining</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#DFC2B1]">
              <span className="font-serif text-3xl font-bold text-[#1A1817]">Zero</span>
              <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Stiff Wire Digging</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
