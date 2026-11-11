import React, { useState } from 'react';
import { Star, Eye } from 'lucide-react';
import { Product, ProductColor } from '../types/product';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  onOpenQuickView: (product: Product, selectedColor?: ProductColor) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenQuickView }) => {
  const { currency, currencyRate } = useCart();
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);

  const convertedPrice = product.price * currencyRate;
  const convertedOriginal = product.originalPrice ? product.originalPrice * currencyRate : undefined;

  const compressionColorMap = {
    'Light': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'Medium': 'bg-amber-50 text-amber-800 border-amber-200',
    'Firm': 'bg-rose-50 text-rose-800 border-rose-200',
    'Ultra-Sculpt': 'bg-[#22140D] text-[#FAF7F5] border-[#22140D]',
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#EBDCD3]/80 hover:shadow-xl transition-all duration-300">
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] bg-[#F5EFEB] overflow-hidden cursor-pointer" onClick={() => onOpenQuickView(product, selectedColor)}>
        <img
          src={selectedColor.image || product.featuredImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="inline-flex items-center w-fit px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest bg-[#1A1817] text-[#FAF7F5] rounded-full shadow-sm leading-none">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="inline-flex items-center w-fit px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest bg-[#B58265] text-white rounded-full shadow-sm leading-none">
              New Arrival
            </span>
          )}
          <span className={`inline-flex items-center w-fit px-2.5 py-1 text-[10px] uppercase font-semibold tracking-wider rounded-full border shadow-xs leading-none ${compressionColorMap[product.compression]}`}>
            {product.compression}
          </span>
        </div>

        {/* Hover Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenQuickView(product, selectedColor);
            }}
            className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-[#1A1817] text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg hover:bg-[#1A1817] hover:text-white transition-all flex items-center justify-center space-x-1.5"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Rating */}
          <div className="flex items-center space-x-1 text-xs text-[#9E674C] mb-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[#B58265] text-[#B58265]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-medium text-xs text-[#5C3928]">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Name & Subtitle */}
          <h3
            onClick={() => onOpenQuickView(product, selectedColor)}
            className="font-serif text-lg font-semibold text-[#1A1817] hover:text-[#9E674C] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#7E4E37] line-clamp-2 mt-1 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Color Swatches */}
        <div className="pt-2 border-t border-[#F5EFEB]">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#9E674C] font-medium text-[11px]">
              {selectedColor.name}
            </span>
            <span className="text-[10px] text-[#7E4E37]">
              {product.sizes.length} sizes (XS-4XL)
            </span>
          </div>

          <div className="flex items-center space-x-2 mt-1.5">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border-2 transition-transform ${
                  selectedColor.name === color.name
                    ? 'border-[#1A1817] scale-110'
                    : 'border-white hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Select color ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-base font-bold text-[#1A1817]">
              {formatPrice(convertedPrice, currency)}
            </span>
            {convertedOriginal && (
              <span className="text-xs text-[#CCA288] line-through">
                {formatPrice(convertedOriginal, currency)}
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenQuickView(product, selectedColor)}
            className="px-3.5 py-1.5 rounded-full bg-[#FAF7F5] border border-[#DFC2B1] text-xs font-semibold text-[#5C3928] hover:bg-[#1A1817] hover:text-white transition-colors"
          >
            Select Size
          </button>
        </div>
      </div>
    </div>
  );
};
