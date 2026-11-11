import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { AppPage } from './Navbar';

interface FooterProps {
  onOpenSizeGuide: () => void;
  onNavigate: (page: AppPage) => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSizeGuide,
  onNavigate,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleCategoryClick = (category: string) => {
    onNavigate('shop');
    onSelectCategory(category);
    setTimeout(() => {
      const el = document.getElementById('collection-grid');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <footer className="bg-[#1A1817] text-[#FAF7F5] pt-16 pb-12 border-t border-[#3D261B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => {
                onNavigate('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group focus:outline-none"
            >
              <h3 className="font-serif text-2xl tracking-[0.2em] font-light text-white uppercase">
                ROVELLE
              </h3>
              <span className="block text-[9px] uppercase tracking-[0.35em] text-[#CCA288] -mt-0.5 font-sans">
                Haute Shapewear
              </span>
            </button>
            <p className="text-xs text-[#DFC2B1]/80 max-w-sm leading-relaxed font-light">
              Accra's premier silhouette & compression maison. Engineered with anatomical contour weaves to celebrate women's curves without sacrificing all-day comfort.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-[#CCA288]">
              <ShieldCheck className="w-4 h-4" />
              <span>Backed by our 14-Day Fit Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CCA288]">
              Collection
            </h4>
            <ul className="space-y-2 text-xs text-[#DFC2B1]/80 font-light">
              <li>
                <button
                  onClick={() => handleCategoryClick('bodysuits')}
                  className="hover:text-white transition-colors text-left"
                >
                  Seamless Bodysuits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('waist-cinchers')}
                  className="hover:text-white transition-colors text-left"
                >
                  Waist Cinchers & Snatchers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('shorts')}
                  className="hover:text-white transition-colors text-left"
                >
                  CurvMax Shaper Shorts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('everyday-support')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bridal & Backless Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('all')}
                  className="hover:text-white transition-colors text-left"
                >
                  View All Silhouettes
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CCA288]">
              Maison Care
            </h4>
            <ul className="space-y-2 text-xs text-[#DFC2B1]/80 font-light">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  About Rovelle
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-white transition-colors text-left">
                  Fit Finder & Size Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  14-Day Exchange Policy
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/233240000000"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Concierge (+233)
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CCA288]">
              VIP Access
            </h4>
            <p className="text-xs text-[#DFC2B1]/80 font-light">
              Join the Rovelle Circle for 10% off your first order and exclusive restock alerts.
            </p>
            {subscribed ? (
              <div className="p-3 bg-white/10 rounded-lg text-xs text-emerald-400 flex items-center space-x-1.5">
                <Check className="w-4 h-4" />
                <span>You're in! Use code <strong>ROVELLE10</strong></span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white/10 border border-white/20 rounded-lg text-white placeholder-stone-400 focus:outline-none focus:border-[#CCA288]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#CCA288] text-[#1A1817] rounded-md text-xs font-bold hover:bg-white transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DFC2B1]/60 gap-4">
          <p>© {new Date().getFullYear()} House of Rovelle. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Payment Options: MTN MoMo · Telecel Cash · Visa · Mastercard · Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
