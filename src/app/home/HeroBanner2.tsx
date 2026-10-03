'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroBanner2 = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-1 md:gap-2">
        {/* Big image — 70% */}
        <Link
          href="/products/casual"
          className="group relative md:col-span-7 overflow-hidden h-[400px] md:h-[600px] lg:h-[700px]"
        >
          <Image
            src="/assets/images/hero/hero-1.png"
            alt="Casual Collection"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 70vw"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col items-center justify-end z-10">
            <h3 className="font-heading text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">
              Casual
            </h3>
            <p className="mt-3 text-sm md:text-base font-semibold text-white tracking-[0.2em] uppercase underline underline-offset-4">
              Shop Now
            </p>
          </div>
        </Link>

        {/* Small image — 30% */}
        <Link
          href="/products/fall-tops"
          className="group relative md:col-span-3 overflow-hidden h-[400px] md:h-[600px] lg:h-[700px]"
        >
          <Image
            src="/assets/images/hero/hero-2.png"
            alt="Fall Tops Collection"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 30vw"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col items-center justify-end z-10">
            <h3 className="font-heading text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">
              Fall Tops
            </h3>
            <p className="mt-3 text-sm md:text-base font-semibold text-white tracking-[0.2em] uppercase underline underline-offset-4">
              Shop Now
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner2;