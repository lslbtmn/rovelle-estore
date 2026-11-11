import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Smartphone, CreditCard, Banknote, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { total, currency, currencyRate, clearCart } = useCart();
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card' | 'cod'>('momo');
  const [momoNetwork, setMomoNetwork] = useState<'mtn' | 'telecel'>('mtn');

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Accra',
    momoNumber: '',
    deliverySpeed: 'express',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  const convertedTotal = total * currencyRate;
  const orderId = `ROV-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#EBDCD3] my-8 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#1A1817]">
                Complete Your Order
              </h2>
              <p className="text-xs text-[#7E4E37] mt-1">
                Total to pay: <span className="font-bold text-[#1A1817]">{formatPrice(convertedTotal, currency)}</span> (Includes delivery & 14-day fit guarantee)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Information */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#5C3928] mb-2">
                  1. Contact & Delivery Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Akua Mensah"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+233 24 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">Delivery Address & Landmark *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. East Legon, near ANC Mall / Apt 4B"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">City / Region</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                    >
                      <option value="Accra">Greater Accra (Same-day available)</option>
                      <option value="Kumasi">Kumasi (Next-day)</option>
                      <option value="Takoradi">Takoradi / Sekondi</option>
                      <option value="Tamale">Tamale / Northern</option>
                      <option value="International">International Delivery (DHL)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">Delivery Speed</label>
                    <div className="flex items-center space-x-2 h-9 px-3 bg-[#FAF7F5] border border-[#DFC2B1] rounded-lg text-xs text-[#5C3928]">
                      <Truck className="w-4 h-4 text-[#9E674C]" />
                      <span>Express Courier Dispatch</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#5C3928] mb-2">
                  2. Select Payment Method
                </h3>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('momo')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                      paymentMethod === 'momo'
                        ? 'border-[#1A1817] bg-[#FAF7F5] ring-2 ring-[#B58265]/30'
                        : 'border-[#DFC2B1] hover:bg-[#FAF7F5]'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-[#9E674C]" />
                    <span className="text-xs font-semibold text-[#1A1817]">Mobile Money</span>
                    <span className="text-[10px] text-stone-500">MTN / Telecel</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                      paymentMethod === 'card'
                        ? 'border-[#1A1817] bg-[#FAF7F5] ring-2 ring-[#B58265]/30'
                        : 'border-[#DFC2B1] hover:bg-[#FAF7F5]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#9E674C]" />
                    <span className="text-xs font-semibold text-[#1A1817]">Card Payment</span>
                    <span className="text-[10px] text-stone-500">Visa / Mastercard</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                      paymentMethod === 'cod'
                        ? 'border-[#1A1817] bg-[#FAF7F5] ring-2 ring-[#B58265]/30'
                        : 'border-[#DFC2B1] hover:bg-[#FAF7F5]'
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-[#9E674C]" />
                    <span className="text-xs font-semibold text-[#1A1817]">Pay on Delivery</span>
                    <span className="text-[10px] text-stone-500">Accra & Kumasi</span>
                  </button>
                </div>

                {/* Sub-fields for MoMo */}
                {paymentMethod === 'momo' && (
                  <div className="mt-3 p-3.5 bg-[#FAF7F5] rounded-xl border border-[#DFC2B1] space-y-2.5 animate-in fade-in">
                    <div className="flex space-x-4 text-xs font-medium">
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="momo"
                          checked={momoNetwork === 'mtn'}
                          onChange={() => setMomoNetwork('mtn')}
                          className="accent-[#B58265]"
                        />
                        <span>MTN MoMo</span>
                      </label>
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="momo"
                          checked={momoNetwork === 'telecel'}
                          onChange={() => setMomoNetwork('telecel')}
                          className="accent-[#B58265]"
                        />
                        <span>Telecel Cash</span>
                      </label>
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Enter subscriber MoMo number"
                        value={formData.momoNumber}
                        onChange={(e) => setFormData({ ...formData, momoNumber: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                      />
                      <p className="text-[10px] text-stone-500 mt-1">
                        A payment prompt prompt will be sent to this number upon order placement.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Submission */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1A1817] text-white text-xs uppercase font-semibold tracking-widest rounded-xl hover:bg-[#3D261B] transition-colors shadow-lg"
                >
                  Confirm & Place Order ({formatPrice(convertedTotal, currency)})
                </button>
              </div>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#7E4E37] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E674C]" />
                <span>100% Encrypted & Covered by 14-Day Free Exchange Guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold tracking-widest text-[#9E674C]">
                Order Confirmed
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1A1817]">
                Thank You, {formData.fullName || 'Valued Customer'}!
              </h2>
              <p className="text-xs text-[#7E4E37]">
                Order Reference: <strong className="text-[#1A1817]">{orderId}</strong>
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F5] rounded-xl border border-[#DFC2B1] max-w-sm mx-auto text-left text-xs space-y-2 text-[#5C3928]">
              <div className="flex justify-between">
                <span>Destination:</span>
                <span className="font-semibold text-[#1A1817]">{formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment:</span>
                <span className="font-semibold text-[#1A1817]">
                  {paymentMethod === 'momo' ? `Mobile Money (${momoNetwork.toUpperCase()})` : paymentMethod === 'card' ? 'Card Online' : 'Cash On Delivery'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span className="font-bold text-[#1A1817]">{formatPrice(convertedTotal, currency)}</span>
              </div>
              <div className="pt-2 border-t border-[#DFC2B1] text-[11px] text-stone-500">
                A confirmation SMS / WhatsApp has been queued for {formData.phone || 'your phone'}. Our concierge team will reach out shortly for delivery scheduling!
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#1A1817] text-white text-xs uppercase font-semibold tracking-wider rounded-full hover:bg-[#3D261B] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
