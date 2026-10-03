'use client';

import HeroBanner from './HeroBanner';
import OccasionGrid from './OccasionGrid';
import DealsOfTheDay from './DealsOfTheDay';
import HeroBanner2 from './HeroBanner2';
import NewArrivals from './NewArrivals';
import CategoryGrid from './CategoryGrid';
import BestSellers from './BestSellers';

const HomepageInteractive = () => {
  return (
    <main>
      {/* 1. Hero Banner */}
      <HeroBanner />

      {/* 2. Shop By Occasion (4 cards) */}
      <OccasionGrid />

      {/* 3. Deals of the Day */}
      <DealsOfTheDay />

      {/* 4. Second Hero (70:30, full-width) */}
      <HeroBanner2 />

      {/* 5. New Arrivals */}
      <NewArrivals />

      {/* 6. Shop By Categories (6 cards) */}
      <CategoryGrid />

      {/* 7. Shop Best Sellers */}
      <BestSellers />
    </main>
  );
};

export default HomepageInteractive;