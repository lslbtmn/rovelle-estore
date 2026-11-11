import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ProductColor } from '../types/product';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, color: ProductColor, size: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  totalCount: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  applyPromo: (code: string) => boolean;
  promoError: string;
  currency: 'USD' | 'GHS' | 'GBP';
  setCurrency: (c: 'USD' | 'GHS' | 'GBP') => void;
  currencyRate: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD_USD = 100;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('rovelle_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [currency, setCurrency] = useState<'USD' | 'GHS' | 'GBP'>('USD');

  const currencyRates = {
    USD: 1,
    GHS: 15.5, // 1 USD ≈ 15.5 GHS
    GBP: 0.78,
  };

  useEffect(() => {
    try {
      localStorage.setItem('rovelle_cart', JSON.stringify(items));
    } catch {
      // storage unavailable
    }
  }, [items]);

  const addToCart = (product: Product, color: ProductColor, size: string, quantity = 1) => {
    const itemId = `${product.id}-${color.name}-${size}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          product,
          selectedColor: color,
          selectedSize: size,
          quantity,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ROVELLE10' || clean === 'SCULPT10') {
      setDiscountPercent(10);
      setPromoError('');
      return true;
    } else if (clean === 'VIP15') {
      setDiscountPercent(15);
      setPromoError('');
      return true;
    } else {
      setPromoError('Invalid code. Try "ROVELLE10" for 10% off');
      return false;
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = (subtotal * discountPercent) / 100;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD_USD || subtotal === 0 ? 0 : 12;
  const total = Math.max(0, subtotal - discount + shipping);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        discount,
        shipping,
        total,
        totalCount,
        promoCode,
        setPromoCode,
        applyPromo,
        promoError,
        currency,
        setCurrency,
        currencyRate: currencyRates[currency],
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
