import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Ruler, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

export type AppPage = 'shop' | 'about' | 'contact';

interface NavbarProps {
  onOpenSizeGuide: () => void;
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSizeGuide,
  onSelectCategory,
  selectedCategory,
  currentPage,
  onNavigate,
  searchQuery,
  onSearchChange,
}) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const navLinks = [
    { label: 'Shop All', value: 'all', page: 'shop' as AppPage },
    { label: 'Bodysuits', value: 'bodysuits', page: 'shop' as AppPage },
    { label: 'Waist Cinchers', value: 'waist-cinchers', page: 'shop' as AppPage },
    { label: 'Shaper Shorts', value: 'shorts', page: 'shop' as AppPage },
    { label: 'About', value: 'about', page: 'about' as AppPage },
    { label: 'Contact', value: 'contact', page: 'contact' as AppPage },
  ];

  const handleNavClick = (page: AppPage, category?: string) => {
    onNavigate(page);
    if (page === 'shop' && category) {
      onSelectCategory(category);
      // Wait for DOM render if switching pages
      setTimeout(() => {
        const el = document.getElementById('collection-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleSearchInput = (val: string) => {
    onSearchChange(val);
    if (currentPage !== 'shop') {
      onNavigate('shop');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPage !== 'shop') {
      onNavigate('shop');
    }
    setTimeout(() => {
      const el = document.getElementById('collection-grid');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F5]/95 backdrop-blur-md border-b border-[#EBDCD3]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1817] hover:text-[#B58265] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive =
                link.page === currentPage &&
                (link.page !== 'shop' || selectedCategory === link.value);

              return (
                <button
                  key={`${link.page}-${link.value}`}
                  onClick={() => handleNavClick(link.page, link.value)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors pb-1 ${
                    isActive
                      ? 'text-[#1A1817] border-b-2 border-[#B58265] font-semibold'
                      : 'text-[#1A1817]/70 hover:text-[#1A1817]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Brand Logo */}
          <div className="text-center">
            <button
              onClick={() => handleNavClick('shop', 'all')}
              className="group block text-left sm:text-center focus:outline-none"
            >
              <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-light text-[#1A1817] uppercase">
                ROVELLE
              </h1>
              <span className="block text-[9px] uppercase tracking-[0.35em] text-[#9E674C] -mt-1 font-sans">
                Haute Shapewear
              </span>
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Trigger */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
              }}
              className={`p-2 rounded-full transition-colors ${
                searchOpen || searchQuery
                  ? 'bg-[#EBDCD3] text-[#1A1817]'
                  : 'text-[#1A1817] hover:text-[#9E674C]'
              }`}
              aria-label="Toggle search"
              title="Search collection"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Fit Finder / Size Calculator pill */}
            <button
              onClick={onOpenSizeGuide}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#DFC2B1] bg-white text-xs font-medium text-[#7E4E37] hover:bg-[#F5EFEB] transition-all shadow-sm"
            >
              <Ruler className="w-3.5 h-3.5 text-[#B58265]" />
              <span>Fit Finder</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#1A1817] hover:text-[#9E674C] transition-colors"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1A1817] text-[#FAF7F5] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="pb-4 pt-1 px-2 border-t border-[#EBDCD3] animate-in fade-in slide-in-from-top-2 duration-200">
            <form onSubmit={handleSearchSubmit} className="relative max-w-lg mx-auto">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search by name, silhouette, compression (e.g. firm, thong, cincher)..."
                value={searchQuery}
                onChange={(e) => handleSearchInput(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 pr-10 rounded-full bg-white border border-[#DFC2B1] text-xs text-[#1A1817] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#9E674C] shadow-sm"
              />
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#CCA288]" />
              
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-2.5 p-1 text-stone-400 hover:text-stone-700 rounded-full"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F5] border-b border-[#EBDCD3] px-6 py-6 space-y-4 animate-in fade-in">
          {/* Mobile Search input */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search shapewear..."
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
              className="w-full px-4 py-2 pl-9 pr-8 text-xs bg-white border border-[#DFC2B1] rounded-full focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
            />
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-stone-400" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-2 text-stone-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>

          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={`${link.page}-${link.value}`}
                onClick={() => handleNavClick(link.page, link.value)}
                className="text-left text-xs uppercase tracking-widest font-medium text-[#1A1817] py-2.5 border-b border-[#F5EFEB] flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.page === currentPage && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E674C]" />
                )}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSizeGuide();
              }}
              className="flex items-center space-x-2 text-xs text-[#7E4E37] font-semibold pt-3"
            >
              <Ruler className="w-4 h-4 text-[#B58265]" />
              <span>Interactive Fit Calculator</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
