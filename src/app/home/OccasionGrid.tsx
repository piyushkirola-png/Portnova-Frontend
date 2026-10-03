'use client';

import Link from 'next/link';

const OCCASIONS = [
  { id: 1, name: 'Wedding', slug: 'wedding', image: '/assets/images/occasions/wedding.png' },
  { id: 2, name: 'Night Out', slug: 'night-out', image: '/assets/images/occasions/night-out.png' },
  { id: 3, name: 'Workwear', slug: 'workwear', image: '/assets/images/occasions/workwear.png' },
  { id: 4, name: 'Gym', slug: 'gym', image: '/assets/images/occasions/gym.png' },
];

const OccasionGrid = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A2E]">
            Shop By Occasion
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-[#F4762D] hover:text-[#D45A15] transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {OCCASIONS.map((occasion) => (
            <Link
              key={occasion.id}
              href={`/products/${occasion.slug}`}
              className="group relative overflow-hidden aspect-[3/4] bg-[#F0EDEA]"
            >
              {/* Image */}
              <img
                src={occasion.image}
                alt={occasion.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

              {/* Centered text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
                <h3 className="font-heading text-lg md:text-2xl font-bold text-[#FFF8F0] uppercase tracking-wider drop-shadow-lg">
                  {occasion.name}
                </h3>
                <p className="text-xs md:text-sm font-medium text-[#FFF8F0] uppercase tracking-[0.2em] underline underline-offset-4 drop-shadow-md">
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionGrid;