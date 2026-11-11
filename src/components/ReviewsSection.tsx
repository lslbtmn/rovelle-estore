import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { MOCK_REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#B58265] text-[#B58265]" />
            ))}
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#9E674C]">
            Verified Customer Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1817] mt-1">
            Loved by 2,500+ Confident Women
          </h2>
          <p className="text-xs text-[#7E4E37] mt-2">
            Read real feedback from women who wear Rovelle under fitted gowns, bridal dresses, and everyday casuals.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-[#EBDCD3] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#EBDCD3] absolute top-4 right-4 -z-0" />
              
              <div className="space-y-3 relative z-10">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B58265] text-[#B58265]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#5C3928] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5EFEB] flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center space-x-1.5 font-bold text-[#1A1817]">
                    <span>{review.author}</span>
                    {review.verified && (
                      <span className="inline-flex items-center text-emerald-600 text-[10px]" title="Verified Purchase">
                        <CheckCircle className="w-3 h-3 ml-0.5 inline" />
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#9E674C] font-medium">{review.sizePurchased}</span>
                </div>
                <span className="text-[10px] text-stone-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-[#EBDCD3] p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817]">98.4%</p>
            <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Satisfaction Rate</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817]">2,500+</p>
            <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Bodysuits Delivered</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817]">14 Days</p>
            <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Risk-Free Exchanges</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817]">24hr</p>
            <p className="text-[11px] text-[#7E4E37] uppercase tracking-wider mt-1">Accra / Kumasi Dispatch</p>
          </div>
        </div>

      </div>
    </section>
  );
};
