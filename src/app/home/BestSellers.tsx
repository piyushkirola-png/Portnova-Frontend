'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BestSeller {
  id: number;
  title: string;
  options: string;
  price: string;
  image: string;
  link: string;
}

const bestSellers: BestSeller[] = [
  {
    id: 1,
    title: "Men's Casual Wear",
    options: '10+ Options',
    price: 'Starting at Just Rs. 499',
    image: '/assets/images/bestsellers/men-shirt.webp',
    link: '/products/men-casual',
  },
  {
    id: 2,
    title: "Men's Ethnic Wear",
    options: '10+ Options',
    price: 'Starting at Just Rs. 699',
    image: '/assets/images/bestsellers/men-kurta.png',
    link: '/products/men-ethnic',
  },
  {
    id: 3,
    title: "Men's Jeans",
    options: '10+ Options',
    price: 'Starting at Just Rs. 799',
    image: '/assets/images/bestsellers/men-jeans.png',
    link: '/products/men-jeans',
  },
  {
    id: 4,
    title: "Women's Casual Wear",
    options: '10+ Options',
    price: 'Starting at Just Rs. 499',
    image: '/assets/images/bestsellers/women-shirt.png',
    link: '/products/women-casual',
  },
  {
    id: 5,
    title: "Women's Ethnic Wear",
    options: '10+ Options',
    price: 'Starting at Just Rs. 699',
    image: '/assets/images/bestsellers/women-kurta.png',
    link: '/products/women-ethnic',
  },
  {
    id: 6,
    title: "Women's Jeans",
    options: '10+ Options',
    price: 'Starting at Just Rs. 799',
    image: '/assets/images/bestsellers/women-jeans.png',
    link: '/products/women-jeans',
  },
];

const BestSellers = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-6">
          Shop Best Sellers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {bestSellers.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#F0EDEA] transition-all duration-300 group-hover:shadow-lg relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/images/placeholder-product.jpg';
                  }}
                />
              </div>

              <h3 className="mt-2 text-sm font-semibold text-[#1A1A2E] group-hover:text-[#F4762D] transition-colors line-clamp-1">
                {item.title}
              </h3>

              <p className="text-xs text-[#7A7A7A]">
                {item.options}
              </p>

              <p className="text-xs text-[#F4762D] font-medium mt-0.5">
                {item.price}
              </p>
            </Link>
          ))}
        </div>

        {/* Buy on Email */}
        <div className="mt-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F4762D] hover:text-[#D45A15] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Buy on Email</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;