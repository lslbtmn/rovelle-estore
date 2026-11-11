import React, { useState } from 'react';
import { X, Star, ShieldCheck, Ruler, Check } from 'lucide-react';
import { Product, ProductColor } from '../types/product';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

interface ProductModalProps {
  product: Product | null;
  initialColor?: ProductColor;
  isOpen: boolean;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  initialColor,
  isOpen,
  onClose,
  onOpenSizeGuide,
}) => {
  const { addToCart, currency, currencyRate } = useCart();
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    initialColor || (product ? product.colors[0] : { name: '', hex: '', image: '' })
  );
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [activeImage, setActiveImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'care' | 'shipping'>('benefits');
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Sync state if product or initialColor changes
  React.useEffect(() => {
    if (product) {
      const color = initialColor || product.colors[0];
      setSelectedColor(color);
      setActiveImage(color.image || product.featuredImage);
      setSelectedSize(product.sizes[1] || product.sizes[0]);
      setQuantity(1);
    }
  }, [product, initialColor]);

  if (!isOpen || !product) return null;

  const convertedPrice = product.price * currencyRate;
  const convertedOriginal = product.originalPrice ? product.originalPrice * currencyRate : undefined;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 700);
  };

  const compressionLevels = ['Light', 'Medium', 'Firm', 'Ultra-Sculpt'];
  const currentLevelIdx = compressionLevels.indexOf(product.compression);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all">
      <div
        className="relative bg-[#FAF7F5] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-[#EBDCD3] my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-[#1A1817] hover:bg-white hover:text-black transition-all shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Gallery */}
          <div className="p-6 md:p-8 bg-[#F5EFEB] flex flex-col justify-between">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-inner bg-white">
              <img
                src={activeImage || selectedColor.image || product.featuredImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex items-center space-x-3 mt-4 overflow-x-auto pb-1">
              {[selectedColor.image, ...product.galleryImages].slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    activeImage === img ? 'border-[#1A1817] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Customizer */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              {/* Header Info */}
              <div>
                <div className="flex items-center space-x-2 text-xs text-[#9E674C] mb-1.5">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B58265] text-[#B58265]" />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                  <span>({product.reviewCount} customer reviews)</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#1A1817]">
                  {product.name}
                </h2>
                <p className="text-xs text-[#7E4E37] mt-1">{product.subtitle}</p>

                <div className="flex items-baseline space-x-3 mt-3">
                  <span className="text-2xl font-bold text-[#1A1817]">
                    {formatPrice(convertedPrice, currency)}
                  </span>
                  {convertedOriginal && (
                    <span className="text-sm text-[#CCA288] line-through">
                      {formatPrice(convertedOriginal, currency)}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[11px] font-semibold">
                    Save {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                  </span>
                </div>
              </div>

              {/* Compression Level Bar */}
              <div className="p-3 bg-white rounded-xl border border-[#DFC2B1]/60">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#1A1817]">Compression Level:</span>
                  <span className="inline-flex items-center w-fit px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F5EFEB] text-[#7E4E37] border border-[#DFC2B1] leading-none">
                    {product.compression}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 h-2">
                  {compressionLevels.map((lvl, index) => (
                    <div
                      key={lvl}
                      className={`h-full rounded-full transition-all ${
                        index <= currentLevelIdx ? 'bg-[#9E674C]' : 'bg-[#EBDCD3]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#1A1817] mb-2">
                  <span>Color: <span className="font-normal text-[#7E4E37]">{selectedColor.name}</span></span>
                </div>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color);
                        setActiveImage(color.image);
                      }}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor.name === color.name
                          ? 'border-[#1A1817] ring-2 ring-[#B58265]/40 scale-110'
                          : 'border-white hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <Check className={`w-4 h-4 mx-auto ${color.hex === '#1C1B1A' ? 'text-white' : 'text-stone-900'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#1A1817] mb-2">
                  <span>Select Size</span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="inline-flex items-center space-x-1 text-[#9E674C] hover:text-[#7E4E37] transition-colors underline"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Fit Finder & Chart</span>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                        selectedSize === sz
                          ? 'bg-[#1A1817] text-white border-[#1A1817] shadow-sm'
                          : 'bg-white text-[#5C3928] border-[#DFC2B1] hover:border-[#9E674C]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center space-x-3 pt-2">
                <div className="flex items-center border border-[#DFC2B1] rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm text-[#1A1817] hover:bg-[#F5EFEB]"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-[#1A1817]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm text-[#1A1817] hover:bg-[#F5EFEB]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={addedAnimation}
                  className={`flex-1 py-3.5 px-6 rounded-lg font-semibold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2 ${
                    addedAnimation
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#1A1817] text-[#FAF7F5] hover:bg-[#3D261B]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <span>Add to Bag • {formatPrice(convertedPrice * quantity, currency)}</span>
                  )}
                </button>
              </div>

              {/* Fit Guarantee Pill */}
              <div className="p-3 bg-[#F5EFEB] rounded-xl flex items-center space-x-2.5 text-xs text-[#5C3928]">
                <ShieldCheck className="w-5 h-5 text-[#9E674C] flex-shrink-0" />
                <p>
                  <strong>14-Day Fit Guarantee:</strong> If the size doesn't hug you like a glove, exchange it for another size effortlessly.
                </p>
              </div>

              {/* Details Accordion / Tabs */}
              <div className="border-t border-[#DFC2B1] pt-3 text-xs">
                <div className="flex space-x-4 border-b border-[#DFC2B1]/60 pb-2">
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`font-semibold pb-1 transition-colors ${
                      activeTab === 'benefits' ? 'text-[#1A1817] border-b-2 border-[#9E674C]' : 'text-[#7E4E37]'
                    }`}
                  >
                    Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab('care')}
                    className={`font-semibold pb-1 transition-colors ${
                      activeTab === 'care' ? 'text-[#1A1817] border-b-2 border-[#9E674C]' : 'text-[#7E4E37]'
                    }`}
                  >
                    Fabric & Care
                  </button>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`font-semibold pb-1 transition-colors ${
                      activeTab === 'shipping' ? 'text-[#1A1817] border-b-2 border-[#9E674C]' : 'text-[#7E4E37]'
                    }`}
                  >
                    Delivery & Returns
                  </button>
                </div>

                <div className="pt-3 text-[#5C3928] leading-relaxed">
                  {activeTab === 'benefits' && (
                    <ul className="space-y-1.5 list-disc list-inside">
                      {product.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'care' && (
                    <ul className="space-y-1.5 list-disc list-inside">
                      {product.fabricCare.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'shipping' && (
                    <div className="space-y-1.5">
                      <p>• <strong>Same-day & 24h Delivery:</strong> In Accra & Kumasi via trusted couriers.</p>
                      <p>• <strong>Payment Methods:</strong> MTN MoMo, Telecel Cash, Debit/Credit Card, or Cash on Delivery.</p>
                      <p>• <strong>Worldwide Express:</strong> 3-5 business days via DHL Express.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
