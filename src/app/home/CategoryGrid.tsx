'use client';

import Link from 'next/link';

const CATEGORIES = [
  { id: 1, name: 'Men Accessories', slug: 'men-accessories', image: '/assets/images/categories/men-accessories.png' },
  { id: 2, name: 'Men Apparel', slug: 'men-apparel', image: '/assets/images/categories/men-apparel.png' },
  { id: 3, name: 'Men Footwear', slug: 'men-footwear', image: '/assets/images/categories/men-footwear.png' },
  { id: 4, name: 'Women Accessories', slug: 'women-accessories', image: '/assets/images/categories/women-accessories.png' },
  { id: 5, name: 'Women Apparel', slug: 'women-apparel', image: '/assets/images/categories/women-apparel.png' },
  { id: 6, name: 'Women Footwear', slug: 'women-footwear', image: '/assets/images/categories/women-footwear.png' },
];

const CategoryGrid = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A2E]">
            Shop By Categories
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-[#F4762D] hover:text-[#D45A15] transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#F0EDEA] transition-all duration-300 group-hover:shadow-lg relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.backgroundColor = '#F0EDEA';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      const text = document.createElement('span');
                      text.className = 'text-[#7A7A7A] font-medium text-sm';
                      text.textContent = category.name;
                      parent.appendChild(text);
                    }
                  }}
                />
              </div>
              <h3 className="mt-2 text-xs md:text-sm font-medium text-center text-[#1A1A2E] group-hover:text-[#F4762D] transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Buy on Email CTA */}
        <div className="mt-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F4762D] hover:text-[#D45A15] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Buy on Email</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;