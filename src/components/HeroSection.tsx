import React from 'react';
import { ArrowRight, Star, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onShopNow: () => void;
  onOpenSizeFinder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow, onOpenSizeFinder }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F5] to-[#FAF7F5] pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EBDCD3]/70 border border-[#DFC2B1] text-xs font-medium text-[#7E4E37] tracking-wider uppercase">
              <Star className="w-3.5 h-3.5 fill-[#B58265] text-[#B58265]" />
              <span>Accra's Most Coveted Shapewear Label</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] leading-[1.12] tracking-tight font-normal">
              Sculpt your silhouette. <br />
              <span className="italic font-light text-[#9E674C]">Celebrate your natural curves.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C3928]/85 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Medical-grade compression weaves meet silky, breathable microfiber. Designed to snatch the waist, lift the glutes, and disappear seamlessly under any outfit.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onShopNow}
                className="w-full sm:w-auto px-8 py-4 bg-[#1A1817] text-[#FAF7F5] text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#3D261B] transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Shop Sculpt Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSizeFinder}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-[#CCA288] text-[#1A1817] text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#F5EFEB] transition-all"
              >
                Find Your Perfect Size
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-[#EBDCD3]/80 grid grid-cols-3 gap-4 text-left">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-[#9E674C] flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-[#1A1817]">14-Day Fit Guarantee</p>
                  <p className="text-[#7E4E37] text-[11px] hidden sm:block">Easy size exchanges</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#9E674C] flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-[#1A1817]">Invisible Contouring</p>
                  <p className="text-[#7E4E37] text-[11px] hidden sm:block">Zero panty lines</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <HeartHandshake className="w-5 h-5 text-[#9E674C] flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-[#1A1817]">Pay with MoMo / COD</p>
                  <p className="text-[#7E4E37] text-[11px] hidden sm:block">Safe local options</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High Fashion Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#DFC2B1]/40 to-[#E8D3C4]/60 rounded-3xl filter blur-2xl opacity-70 -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
                  alt="House of Rovelle Model in Signature Sculpt Bodysuit"
                  className="w-full h-[520px] object-cover object-center"
                />

                {/* Floating compression badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#EBDCD3] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E674C]">
                      Signature Collection
                    </span>
                    <h2 className="font-serif text-sm font-semibold text-[#1A1817]">
                      Seamless Thong Sculptor
                    </h2>
                    <div className="flex items-center space-x-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#CCA288] text-[#CCA288]" />
                      ))}
                      <span className="text-[11px] font-medium text-[#5C3928] ml-1">
                        4.9 (428 reviews)
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-[#7E4E37] line-through block">$85</span>
                    <span className="text-base font-bold text-[#1A1817]">$64</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
