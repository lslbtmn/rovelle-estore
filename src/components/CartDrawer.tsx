import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { PRODUCTS } from '../data/products';

interface CartDrawerProps {
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout }) => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    shipping,
    total,
    totalCount,
    applyPromo,
    promoError,
    currency,
    currencyRate,
    addToCart,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoSuccess, setPromoSuccess] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingGoal = 100 * currencyRate;
  const currentSubtotal = subtotal * currencyRate;
  const remainingForFreeShipping = Math.max(0, freeShippingGoal - currentSubtotal);
  const progressPercent = Math.min(100, (currentSubtotal / freeShippingGoal) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyPromo(inputCode)) {
      setPromoSuccess(true);
    } else {
      setPromoSuccess(false);
    }
  };

  // Upsell suggestion (e.g. shorts if not in cart, or cincher)
  const upsellProduct = PRODUCTS.find((p) => !items.some((item) => item.productId === p.id)) || PRODUCTS[2];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F5] shadow-2xl flex flex-col justify-between border-l border-[#EBDCD3]">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EBDCD3] bg-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#9E674C]" />
              <h2 className="font-serif text-lg font-semibold text-[#1A1817]">
                Shopping Bag ({totalCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#F5EFEB] px-5 py-3 border-b border-[#EBDCD3]">
            {remainingForFreeShipping > 0 ? (
              <p className="text-xs text-[#5C3928] font-medium text-center">
                Add <span className="font-bold text-[#1A1817]">{formatPrice(remainingForFreeShipping, currency)}</span> more for <span className="text-[#9E674C] font-semibold">FREE Express Shipping</span>
              </p>
            ) : (
              <p className="text-xs text-emerald-800 font-semibold text-center flex items-center justify-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>🎉 You've unlocked Complimentary Express Shipping!</span>
              </p>
            )}
            <div className="w-full bg-[#DFC2B1]/60 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-[#9E674C] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items Scroll Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#CCA288] mx-auto stroke-1" />
                <h3 className="font-serif text-lg text-[#1A1817]">Your bag is currently empty</h3>
                <p className="text-xs text-[#7E4E37] max-w-xs mx-auto">
                  Explore our luxury compression bodysuits and find your signature sculpt.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#1A1817] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#3D261B] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-xl border border-[#EBDCD3] flex space-x-3.5 shadow-sm"
                >
                  <img
                    src={item.selectedColor.image || item.product.featuredImage}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-lg bg-[#F5EFEB] flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-xs font-bold text-[#1A1817] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-2 text-[11px] text-[#7E4E37] mt-1">
                        <span className="flex items-center space-x-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-stone-300"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span>{item.selectedColor.name}</span>
                        </span>
                        <span>·</span>
                        <span className="font-semibold text-[#1A1817]">Size: {item.selectedSize}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-[#DFC2B1] rounded-md bg-[#FAF7F5]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:bg-[#EBDCD3]"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-semibold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:bg-[#EBDCD3]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#1A1817]">
                        {formatPrice(item.product.price * item.quantity * currencyRate, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Smart Upsell Box */}
            {items.length > 0 && upsellProduct && (
              <div className="bg-[#FAF7F5] border border-dashed border-[#CCA288] rounded-xl p-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#9E674C] block mb-2">
                  ✨ Perfect Pair Recommendation
                </span>
                <div className="flex items-center space-x-3">
                  <img
                    src={upsellProduct.featuredImage}
                    alt={upsellProduct.name}
                    className="w-12 h-14 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#1A1817] truncate">
                      {upsellProduct.name}
                    </p>
                    <p className="text-[11px] font-bold text-[#9E674C]">
                      {formatPrice(upsellProduct.price * currencyRate, currency)}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      addToCart(
                        upsellProduct,
                        upsellProduct.colors[0],
                        upsellProduct.sizes[1] || upsellProduct.sizes[0],
                        1
                      )
                    }
                    className="px-3 py-1.5 bg-white border border-[#B58265] text-[#7E4E37] text-[11px] font-bold rounded-lg hover:bg-[#1A1817] hover:text-white transition-colors flex-shrink-0"
                  >
                    + Add
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout Breakdown */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#EBDCD3] space-y-4">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder='Promo code (e.g. "ROVELLE10")'
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                  />
                  <Tag className="w-3.5 h-3.5 absolute right-3 top-2.5 text-stone-400" />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FAF7F5] border border-[#DFC2B1] text-xs font-semibold text-[#5C3928] rounded-lg hover:bg-[#1A1817] hover:text-white transition-colors"
                >
                  Apply
                </button>
              </form>

              {promoError && (
                <p className="text-[11px] text-rose-600">{promoError}</p>
              )}
              {promoSuccess && (
                <p className="text-[11px] text-emerald-600 font-semibold">
                  ✓ Promo applied! 10% discount subtracted.
                </p>
              )}

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-[#5C3928]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1A1817]">
                    {formatPrice(subtotal * currencyRate, currency)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span>-{formatPrice(discount * currencyRate, currency)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-emerald-700 font-semibold uppercase">Free</span>
                    ) : (
                      formatPrice(shipping * currencyRate, currency)
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-[#1A1817] pt-2 border-t border-[#F5EFEB]">
                  <span>Total</span>
                  <span className="text-base">
                    {formatPrice(total * currencyRate, currency)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onCheckout();
                }}
                className="w-full py-3.5 bg-[#1A1817] text-white text-xs uppercase font-semibold tracking-widest rounded-xl hover:bg-[#3D261B] transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Trust Footer */}
              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#7E4E37] text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E674C]" />
                <span>Protected by our 14-Day Fit Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
