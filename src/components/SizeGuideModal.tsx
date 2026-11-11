import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [waist, setWaist] = useState<string>('');
  const [hips, setHips] = useState<string>('');
  const [bust, setBust] = useState<string>('');
  const [calculatedSize, setCalculatedSize] = useState<string | null>(null);
  const [fitNote, setFitNote] = useState<string>('');

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const waistNum = parseFloat(waist);
    if (isNaN(waistNum) || waistNum <= 0) return;

    // Normalize to inches for simple calculation
    const waistInches = unit === 'cm' ? waistNum / 2.54 : waistNum;

    let size = 'M';
    let note = '';

    if (waistInches < 26) {
      size = 'XS';
      note = 'Best fit for 23-25 inch waist. Tight contouring hold.';
    } else if (waistInches <= 28) {
      size = 'S';
      note = 'Best fit for 26-28 inch waist. Seamless hold without digging.';
    } else if (waistInches <= 31) {
      size = 'M';
      note = 'Best fit for 29-31 inch waist. Balances firm compression and daily ease.';
    } else if (waistInches <= 34) {
      size = 'L';
      note = 'Best fit for 32-34 inch waist. Contours tummy and flatters curves.';
    } else if (waistInches <= 38) {
      size = 'XL';
      note = 'Best fit for 35-38 inch waist. Snug midsection support.';
    } else if (waistInches <= 42) {
      size = '2XL';
      note = 'Best fit for 39-42 inch waist. High-compression sculpting without flattening hips.';
    } else if (waistInches <= 46) {
      size = '3XL';
      note = 'Best fit for 43-46 inch waist. 360-degree lift and smooth silhouette.';
    } else {
      size = '4XL';
      note = 'Best fit for 47-50+ inch waist. Maximum support and all-day comfort.';
    }

    setCalculatedSize(size);
    setFitNote(note);
  };

  const chart = [
    { size: 'XS', us: '0 - 2', uk: '4 - 6', waistIn: '23" - 25"', hipsIn: '33" - 35"', waistCm: '58 - 64cm', hipsCm: '84 - 89cm' },
    { size: 'S', us: '4 - 6', uk: '8 - 10', waistIn: '26" - 28"', hipsIn: '36" - 38"', waistCm: '66 - 71cm', hipsCm: '91 - 97cm' },
    { size: 'M', us: '8 - 10', uk: '12 - 14', waistIn: '29" - 31"', hipsIn: '39" - 41"', waistCm: '74 - 79cm', hipsCm: '99 - 104cm' },
    { size: 'L', us: '12 - 14', uk: '16', waistIn: '32" - 34"', hipsIn: '42" - 44"', waistCm: '81 - 86cm', hipsCm: '107 - 112cm' },
    { size: 'XL', us: '16', uk: '18', waistIn: '35" - 38"', hipsIn: '45" - 47"', waistCm: '89 - 97cm', hipsCm: '114 - 119cm' },
    { size: '2XL', us: '18 - 20', uk: '20 - 22', waistIn: '39" - 42"', hipsIn: '48" - 51"', waistCm: '99 - 107cm', hipsCm: '122 - 130cm' },
    { size: '3XL', us: '22', uk: '24', waistIn: '43" - 46"', hipsIn: '52" - 55"', waistCm: '109 - 117cm', hipsCm: '132 - 140cm' },
    { size: '4XL', us: '24 - 26', uk: '26 - 28', waistIn: '47" - 50"', hipsIn: '56" - 59"', waistCm: '119 - 127cm', hipsCm: '142 - 150cm' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#EBDCD3] my-8 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-100"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-md mx-auto mb-6">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F5EFEB] text-xs font-semibold text-[#9E674C] mb-2">
            <Ruler className="w-3.5 h-3.5" />
            <span>Interactive Fit Calculator</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1A1817]">
            Find Your Flawless Fit
          </h2>
          <p className="text-xs text-[#7E4E37] mt-1">
            Shapewear fits differently than regular clothing. Enter your measurements below to calculate your true House of Rovelle size.
          </p>
        </div>

        {/* Units Switcher */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#FAF7F5] p-1 rounded-full border border-[#DFC2B1] flex items-center text-xs">
            <button
              onClick={() => setUnit('inches')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                unit === 'inches' ? 'bg-[#1A1817] text-white shadow-sm' : 'text-[#7E4E37]'
              }`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                unit === 'cm' ? 'bg-[#1A1817] text-white shadow-sm' : 'text-[#7E4E37]'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Calculator Form */}
        <form onSubmit={handleCalculate} className="bg-[#FAF7F5] p-5 rounded-xl border border-[#DFC2B1]/80 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div>
              <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                Waist ({unit}) *
              </label>
              <input
                type="number"
                step="0.5"
                required
                placeholder={unit === 'inches' ? 'e.g. 29' : 'e.g. 74'}
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                Hips ({unit})
              </label>
              <input
                type="number"
                step="0.5"
                placeholder={unit === 'inches' ? 'e.g. 39' : 'e.g. 99'}
                value={hips}
                onChange={(e) => setHips(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#5C3928] mb-1">
                Bust ({unit})
              </label>
              <input
                type="number"
                step="0.5"
                placeholder={unit === 'inches' ? 'e.g. 36' : 'e.g. 91'}
                value={bust}
                onChange={(e) => setBust(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#DFC2B1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9E674C]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#1A1817] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#3D261B] transition-colors flex items-center justify-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#CCA288]" />
            <span>Calculate Recommended Size</span>
          </button>

          {calculatedSize && (
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg animate-in fade-in">
              <div className="flex items-center space-x-2 text-emerald-900 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Your Ideal Rovelle Size: Size {calculatedSize}</span>
              </div>
              <p className="text-xs text-emerald-800 mt-1">{fitNote}</p>
              <p className="text-[11px] text-emerald-700 mt-2 font-medium">
                💡 Tip: If you want extreme waist snatching for evening events, size down. For everyday 8+ hour comfort, stick with your recommended size!
              </p>
            </div>
          )}
        </form>

        {/* Size Chart Table */}
        <div>
          <h3 className="text-xs font-bold text-[#1A1817] uppercase tracking-wider mb-2">
            Standard International Sizing Chart
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[#EBDCD3]">
            <table className="w-full text-[11px] text-left">
              <thead className="bg-[#FAF7F5] text-[#5C3928] border-b border-[#EBDCD3]">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">Size</th>
                  <th className="py-2.5 px-3 font-semibold">UK / AU</th>
                  <th className="py-2.5 px-3 font-semibold">US</th>
                  <th className="py-2.5 px-3 font-semibold">Waist</th>
                  <th className="py-2.5 px-3 font-semibold">Hips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5EFEB] text-stone-700">
                {chart.map((row) => (
                  <tr
                    key={row.size}
                    className={`hover:bg-[#FAF7F5] transition-colors ${
                      calculatedSize === row.size ? 'bg-amber-50/70 font-semibold text-[#1A1817]' : ''
                    }`}
                  >
                    <td className="py-2 px-3 font-bold text-[#1A1817]">{row.size}</td>
                    <td className="py-2 px-3">{row.uk}</td>
                    <td className="py-2 px-3">{row.us}</td>
                    <td className="py-2 px-3">{unit === 'inches' ? row.waistIn : row.waistCm}</td>
                    <td className="py-2 px-3">{unit === 'inches' ? row.hipsIn : row.hipsCm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 14-Day Fit Guarantee Note */}
        <div className="mt-4 text-center text-[11px] text-[#7E4E37]">
          Still unsure? Remember, all orders are backed by our <strong>14-Day Fit Guarantee</strong>. Size exchanges in Ghana are swift and handled right at your doorstep.
        </div>
      </div>
    </div>
  );
};
