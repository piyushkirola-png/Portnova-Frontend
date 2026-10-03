'use client';

import Link from 'next/link';

const AnnouncementStrip = () => {
  return (
    <div className="w-full bg-[#F4762D] text-white">
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          Upto 40% OFF sitewide
        </p>
        <Link
          href="/products"
          className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementStrip;