import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar, AppPage } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryPills } from './components/CategoryPills';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FitGuarantee } from './components/FitGuarantee';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PRODUCTS } from './data/products';
import { Product, ProductColor } from './types/product';
import { Search } from 'lucide-react';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>('shop');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCompression, setSelectedCompression] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [initialColor, setInitialColor] = useState<ProductColor | undefined>(undefined);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenQuickView = (product: Product, color?: ProductColor) => {
    setSelectedProduct(product);
    setInitialColor(color);
    setIsQuickViewOpen(true);
  };

  // Filter & sort logic with working full-text search
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchCompression =
        selectedCompression === 'all' || item.compression.toLowerCase() === selectedCompression.toLowerCase();

      // Search matches name, subtitle, description, category, compression level, or benefit keywords
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.compression.toLowerCase().includes(q) ||
        item.benefits.some((b) => b.toLowerCase().includes(q));

      return matchCategory && matchCompression && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured/best-sellers first
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [selectedCategory, selectedCompression, sortBy, searchQuery]);

  const scrollToCollection = () => {
    setCurrentPage('shop');
    setTimeout(() => {
      const el = document.getElementById('collection-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#1A1817]">
      <AnnouncementBar />

      <Navbar
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage('shop');
        }}
        selectedCategory={selectedCategory}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {currentPage === 'shop' && (
          <>
            <HeroSection
              onShopNow={scrollToCollection}
              onOpenSizeFinder={() => setIsSizeGuideOpen(true)}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CategoryPills
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedCompression={selectedCompression}
                onSelectCompression={setSelectedCompression}
                sortBy={sortBy}
                onSelectSort={setSortBy}
                totalProducts={filteredProducts.length}
                searchQuery={searchQuery}
                onClearSearch={() => setSearchQuery('')}
              />

              {/* Product Grid */}
              <div className="py-10">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#EBDCD3] max-w-md mx-auto space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center mx-auto text-[#9E674C]">
                      <Search className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <p className="text-base font-serif font-bold text-[#1A1817]">
                      No matching silhouettes found
                    </p>
                    <p className="text-xs text-[#7E4E37] leading-relaxed">
                      We couldn't find any items matching "{searchQuery}". Try searching for terms like "thong", "firm", "cincher", "shorts", or clear your filters.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedCompression('all');
                        setSearchQuery('');
                      }}
                      className="mt-2 px-5 py-2.5 bg-[#1A1817] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#3D261B] transition-colors"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onOpenQuickView={handleOpenQuickView}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <FitGuarantee onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />
            <ReviewsSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onShopNow={scrollToCollection}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />
        )}
      </main>

      <Footer
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onNavigate={setCurrentPage}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage('shop');
        }}
      />

      {/* Slide-over Cart & Modals */}
      <CartDrawer onCheckout={() => setIsCheckoutOpen(true)} />

      <ProductModal
        product={selectedProduct}
        initialColor={initialColor}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onOpenSizeGuide={() => {
          setIsQuickViewOpen(false);
          setIsSizeGuideOpen(true);
        }}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
