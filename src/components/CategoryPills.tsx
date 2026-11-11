import React from 'react';
import { SlidersHorizontal, Search, X } from 'lucide-react';

interface CategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedCompression: string;
  onSelectCompression: (comp: string) => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
  totalProducts: number;
  searchQuery: string;
  onClearSearch: () => void;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedCompression,
  onSelectCompression,
  sortBy,
  onSelectSort,
  totalProducts,
  searchQuery,
  onClearSearch,
}) => {
  const categories = [
    { label: 'All Silhouettes', value: 'all' },
    { label: 'Seamless Bodysuits', value: 'bodysuits' },
    { label: 'Waist Cinchers', value: 'waist-cinchers' },
    { label: 'Shaper Shorts', value: 'shorts' },
    { label: 'Everyday Support', value: 'everyday-support' },
  ];

  const compressions: { label: string; value: string }[] = [
    { label: 'All Levels', value: 'all' },
    { label: 'Light', value: 'Light' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Firm', value: 'Firm' },
    { label: 'Ultra-Sculpt', value: 'Ultra-Sculpt' },
  ];

  return (
    <div id="collection-grid" className="py-8 border-b border-[#EBDCD3]/80 space-y-4">
      {/* Active Search Banner if searchQuery exists */}
      {searchQuery && (
        <div className="bg-[#FAF7F5] border border-[#CCA288] rounded-xl p-3.5 flex items-center justify-between text-xs animate-in fade-in">
          <div className="flex items-center space-x-2 text-[#5C3928]">
            <Search className="w-4 h-4 text-[#9E674C]" />
            <span>
              Searching for: <strong className="text-[#1A1817]">"{searchQuery}"</strong> ({totalProducts} {totalProducts === 1 ? 'result' : 'results'})
            </span>
          </div>
          <button
            onClick={onClearSearch}
            className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white border border-[#DFC2B1] text-xs font-semibold text-[#7E4E37] hover:bg-[#F5EFEB] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Clear Search</span>
          </button>
        </div>
      )}

      {/* Category Pills */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onSelectCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.value
                  ? 'bg-[#1A1817] text-[#FAF7F5] shadow-sm'
                  : 'bg-white text-[#7E4E37] border border-[#DFC2B1] hover:bg-[#F5EFEB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Total Count */}
        <span className="text-xs text-[#9E674C] font-medium hidden md:inline-block">
          Showing {totalProducts} {totalProducts === 1 ? 'silhouette' : 'silhouettes'}
        </span>
      </div>

      {/* Sub-filters: Compression & Sorting */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs">
        <div className="flex items-center space-x-2 flex-wrap gap-y-2">
          <div className="flex items-center space-x-1.5 text-[#5C3928] font-medium mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Compression:</span>
          </div>
          {compressions.map((comp) => (
            <button
              key={comp.value}
              onClick={() => onSelectCompression(comp.value)}
              className={`inline-flex items-center justify-center w-fit px-3 py-1 rounded-full transition-colors leading-none text-xs ${
                selectedCompression === comp.value
                  ? 'bg-[#CCA288] text-white font-semibold'
                  : 'text-[#7E4E37] hover:text-[#1A1817]'
              }`}
            >
              {comp.label}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <label htmlFor="sort-select" className="text-[#5C3928] font-medium">Sort:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSelectSort(e.target.value)}
            className="bg-white border border-[#DFC2B1] text-[#1A1817] text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#9E674C] cursor-pointer"
          >
            <option value="featured">Featured / Best Sellers</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};
