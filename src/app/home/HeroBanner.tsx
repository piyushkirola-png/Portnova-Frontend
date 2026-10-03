'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[500px] md:min-h-[600px] lg:min-h-[680px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero/background.png"
          alt="Fashion Clothing"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Dark gradient overlay on the LEFT side only, so text is readable but the models on the right stay visible */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4762D] via-[#FFD78A] to-[#F4762D] z-20"></div>

      {/* Left-Aligned Content */}
      <div className="relative z-20 flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[680px] px-6 md:px-12 lg:px-24">
        <div className="text-left max-w-2xl">
          {/* Main heading - White so it pops on the dark gradient */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight italic drop-shadow-lg">
            Fashion
          </h1>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-wide drop-shadow-lg">
            Clothing
          </h1>

          {/* SHOP THE EDIT - Orange (brighter) */}
          <p className="mt-8 text-base md:text-xl font-bold text-[#F4762D] tracking-[0.4em] uppercase drop-shadow-md">
            Shop The Edit
          </p>

          {/* Shop Now Button */}
          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-10 py-3.5 bg-[#F4762D] text-white font-bold text-sm md:text-base tracking-wider uppercase rounded-full hover:bg-[#D45A15] transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Shop Now
            </Link>
          </div>

          {/* Sign Up text - White with subtle underline */}
          <p className="mt-8 text-sm md:text-base font-semibold text-white tracking-wide drop-shadow-md">
            Sign Up &amp; Get Your First Purchase!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;