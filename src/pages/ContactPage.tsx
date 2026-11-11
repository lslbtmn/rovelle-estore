import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onOpenSizeGuide: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenSizeGuide }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'size-exchange',
    orderNumber: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How fast is delivery in Accra and Kumasi?',
      a: 'We offer same-day delivery for all orders confirmed before 2:00 PM within Greater Accra. Kumasi and other major regional hubs arrive within 24 to 48 hours via dedicated couriers. International delivery via DHL Express takes 3 to 5 business days.'
    },
    {
      q: 'How does the 14-Day Fit Guarantee exchange work?',
      a: 'If your bodysuit or cincher is either too snug or too roomy, simply message our WhatsApp concierge or use this form with your order number. For Greater Accra and Kumasi, our dispatch rider brings your new size right to your doorstep and swaps the item.'
    },
    {
      q: 'Which payment methods do you accept?',
      a: 'We accept MTN Mobile Money (MoMo), Telecel Cash, Visa, Mastercard, and Cash on Delivery (COD) for confirmed addresses in Accra and Kumasi.'
    },
    {
      q: 'Can I visit to try on pieces before buying?',
      a: 'Yes! Our private fitting lounge in Airport Residential, Accra is open Monday through Saturday. You can book an appointment via WhatsApp or our concierge team.'
    }
  ];

  return (
    <div className="bg-[#FAF7F5] animate-in fade-in duration-300">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5EFEB] to-[#FAF7F5] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#EBDCD3]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EBDCD3]/70 border border-[#DFC2B1] text-xs font-semibold text-[#7E4E37] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B58265]" />
            <span>Client Care & Atelier</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1817] font-normal tracking-tight">
            We Are Here to Assist You
          </h1>

          <p className="text-sm sm:text-base text-[#5C3928]/90 max-w-xl mx-auto font-light leading-relaxed">
            Need sizing advice before ordering? Looking to initiate a 14-day doorstep size exchange? Our Accra concierge team is ready to help.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-[#1A1817]">
              Direct Concierge Channels
            </h2>
            <p className="text-xs text-[#7E4E37] leading-relaxed">
              For immediate size recommendations and same-day delivery updates, WhatsApp is the fastest way to reach us.
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/233240000000"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white border border-[#EBDCD3] flex items-start space-x-4 hover:shadow-md hover:border-[#CCA288] transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-[#1A1817]">WhatsApp VIP Concierge</h3>
                  <p className="text-xs text-[#7E4E37] mt-0.5">+233 24 123 4567</p>
                  <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Instant Replies (7 days/week)
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#EBDCD3] flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] text-[#7E4E37] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-[#1A1817]">Client Email Support</h3>
                  <p className="text-xs text-[#7E4E37] mt-0.5">concierge@houseofrovelle.com</p>
                  <span className="inline-block mt-1 text-[11px] text-stone-500">
                    Typical response within 2-4 hours
                  </span>
                </div>
              </div>

              {/* Showroom Location */}
              <div className="p-5 rounded-2xl bg-white border border-[#EBDCD3] flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] text-[#7E4E37] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-[#1A1817]">Accra Fitting Studio</h3>
                  <p className="text-xs text-[#7E4E37] mt-0.5">
                    Suite 14, Airport Residential Area, Accra, Ghana
                  </p>
                  <span className="inline-block mt-1 text-[11px] text-stone-500">
                    Private fittings available by appointment
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white border border-[#EBDCD3] flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] text-[#7E4E37] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-[#1A1817]">Atelier Hours</h3>
                  <p className="text-xs text-[#7E4E37] mt-0.5">Monday – Saturday: 9:00 AM – 7:00 PM GMT</p>
                  <p className="text-xs text-[#7E4E37]">Sunday: 12:00 PM – 5:00 PM GMT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact / Exchange Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EBDCD3] shadow-sm">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-[#1A1817]">
                  Send a Message to the Atelier
                </h2>
                <p className="text-xs text-[#7E4E37] mt-1">
                  Fill out the form below. For size exchanges, please include your order number.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1817]">
                    Message Received
                  </h3>
                  <p className="text-xs text-[#7E4E37] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Valued Customer'}. Our concierge team has received your inquiry and will reach out via WhatsApp/email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        topic: 'size-exchange',
                        orderNumber: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#1A1817] text-white text-xs uppercase font-semibold tracking-wider rounded-full hover:bg-[#3D261B] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Afia Boateng"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +233 24 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="afia@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                      >
                        <option value="size-exchange">14-Day Fit Size Exchange</option>
                        <option value="sizing-help">Personal Sizing Consultation</option>
                        <option value="order-status">Delivery & Order Tracking</option>
                        <option value="bridal-wholesale">Bridal Party / Bulk Order</option>
                        <option value="general">General Maison Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                      Order Reference (if applicable)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ROV-834921"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us your waist/hip measurements or current size issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DFC2B1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1A1817] text-white text-xs uppercase font-semibold tracking-widest rounded-xl hover:bg-[#3D261B] transition-colors flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-[#CCA288]" />
                    <span>Submit to Concierge</span>
                  </button>

                  <p className="text-center text-[11px] text-[#7E4E37] pt-1">
                    Or calculate your size automatically with our{' '}
                    <button
                      type="button"
                      onClick={onOpenSizeGuide}
                      className="underline font-bold text-[#1A1817]"
                    >
                      Interactive Fit Finder
                    </button>.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#EBDCD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#9E674C]">
              Quick Answers
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#1A1817] mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#EBDCD3] rounded-2xl overflow-hidden bg-[#FAF7F5] transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between text-xs font-semibold text-[#1A1817] hover:text-[#9E674C] transition-colors"
                >
                  <span className="text-sm font-medium">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-[#9E674C] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs text-[#5C3928] leading-relaxed border-t border-[#EBDCD3]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
