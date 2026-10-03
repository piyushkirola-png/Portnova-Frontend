'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Deal {
  id: number;
  title: string;
  discount: string;
  image: string;
  link: string;
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Men's Caps",
    discount: 'Up to 40% OFF',
    image: '/assets/images/deals/cap.png',
    link: '/products/men-caps',
  },
  {
    id: 2,
    title: "Women's Watches",
    discount: 'Up to 30% OFF',
    image: '/assets/images/deals/watch.png',
    link: '/products/women-watches',
  },
];

const DealsOfTheDay = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-6">
          Deals of the day
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {deals.map((deal) => (
            <Link
              key={deal.id}
              href={deal.link}
              className="group relative overflow-hidden bg-[#F7F3F0] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center p-4 md:p-6 gap-4 md:gap-6">
                {/* Image */}
                <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 relative overflow-hidden bg-[#F0EDEA]">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm md:text-base font-bold text-[#F4762D]">
                    {deal.discount}
                  </p>

                  <h3 className="font-medium text-[#1A1A2E] text-sm md:text-base mt-1">
                    {deal.title}
                  </h3>

                  <p className="text-[#F4762D] text-sm font-medium mt-2 group-hover:translate-x-1 transition-transform">
                    Shop Now →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;