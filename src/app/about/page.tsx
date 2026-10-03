import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'About Us - Portnova | Premium Fashion Clothing',
  description:
    'Discover Portnova — your destination for premium fashion clothing, casual wear, ethnic wear, jeans, shirts, kurtas, and curated style essentials. Managed by PORTNOVA TRADE PRIVATE LIMITED.',
};

const stats = [
  { label: 'Styles in Range', value: '500+' },
  { label: 'Happy Customers', value: '25,000+' },
  { label: 'Cities Delivered', value: '75+' },
  { label: 'Curated Categories', value: '8+' },
];

const values = [
  {
    icon: 'SparklesIcon',
    title: 'Curated Quality',
    desc: 'Every piece in our collection is handpicked for quality, design, and craftsmanship. We believe your wardrobe deserves the best.',
  },
  {
    icon: 'HeartIcon',
    title: 'Made with Love',
    desc: 'From casual shirts to ethnic kurtas, each garment is crafted with care and attention to detail. We pour our heart into everything we make.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Trusted & Reliable',
    desc: 'Thousands of customers trust Portnova for their fashion needs. We stand behind every product we sell.',
  },
  {
    icon: 'GiftIcon',
    title: 'Perfect for Gifting',
    desc: 'Our curated collections make gifting easy and memorable. Find the perfect outfit for every occasion.',
  },
];

const timeline = [
  {
    year: '2025',
    title: 'The Beginning',
    desc: 'Portnova was founded on 23 December 2025 under PORTNOVA TRADE PRIVATE LIMITED with a simple vision — to make trendy fashion clothing accessible to everyone.',
  },
  {
    year: '2026',
    title: 'Expanded Collections',
    desc: 'Grew our product range to include casual wear, ethnic wear, jeans, shirts, kurtas, and style essentials. Became a one-stop destination for fashion lovers.',
  },
  {
    year: '2026+',
    title: 'Pan-India Reach',
    desc: 'Partnered with trusted logistics partners to deliver across 75+ cities. Thousands of wardrobes now enjoy our curated collections.',
  },
  {
    year: 'Future',
    title: 'Premium Collections',
    desc: 'Launching luxury collections including designer ethnic wear, premium denim, and exclusive fashion capsules to elevate the style experience.',
  },
];

const categories = [
  { name: 'Men\'s Shirts', icon: 'FireIcon' },
  { name: 'Men\'s Kurtas', icon: 'ClockIcon' },
  { name: 'Men\'s Jeans', icon: 'PhotoIcon' },
  { name: 'Women\'s Shirts', icon: 'BeakerIcon' },
  { name: 'Women\'s Kurtas', icon: 'HomeIcon' },
  { name: 'Women\'s Jeans', icon: 'GiftIcon' },
  { name: 'Casual Wear', icon: 'ViewfinderCircleIcon' },
  { name: 'Ethnic Wear', icon: 'SparklesIcon' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAFA]">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1A1A2E]/5 via-[#F4762D]/10 to-[#FAFAFA] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md overflow-hidden bg-white p-1">
              <Image
                src="/assets/images/logo.png"
                alt="Portnova"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading text-3xl font-bold text-[#1A1A2E]">
              Portnova<span className="text-[#F4762D]"></span>
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[#1A1A2E] sm:text-5xl">
            Our Story
          </h1>
          <p className="mt-5 text-lg text-[#7A7A7A] leading-relaxed max-w-2xl mx-auto">
            From a small passion project to thousands of stylish wardrobes across India —
            Portnova is your destination for premium fashion clothing, casual wear,
            ethnic wear, jeans, and curated style essentials.
          </p>
          <p className="mt-3 text-base font-semibold text-[#F4762D]">
            ✦ Curated with love for your style ✦
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-[#E8E4E0] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-4xl font-bold text-[#F4762D]">{s.value}</p>
                <p className="mt-1 text-sm text-[#7A7A7A]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#1A1A2E] sm:text-3xl">
              Who We Are
            </h2>
            <p className="mt-4 text-[#7A7A7A] leading-relaxed">
              Portnova is a premium fashion clothing brand dedicated to curating the finest
              collection of stylish garments for your wardrobe. From elegant shirts and
              trendy jeans to beautiful ethnic wear and thoughtful style essentials —
              we bring you quality clothing that makes you look and feel special.
            </p>
            <p className="mt-4 text-[#7A7A7A] leading-relaxed">
              <strong className="text-[#1A1A2E]">Portnova is managed and handled by PORTNOVA TRADE PRIVATE LIMITED</strong>,
              a Private Limited Company incorporated on <strong className="text-[#1A1A2E]">23 December 2025</strong>.
              We believe that every outfit tells a story, and our carefully curated
              collections help you tell yours — with pieces that reflect your
              personality, style, and the confidence you carry.
            </p>
            <p className="mt-4 text-[#7A7A7A] leading-relaxed">
              Whether you're looking to refresh your wardrobe, find the perfect outfit, or
              discover something unique for your style — Portnova is here to inspire you.
            </p>
          </div>

          {/* Company Details Panel */}
          <div className="rounded-xl border border-[#E8E4E0] bg-white p-6 space-y-4 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-[#1A1A2E]">About Portnova</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[#7A7A7A]">Founded</p>
                <p className="font-semibold text-[#1A1A2E]">23 Dec 2025</p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Type</p>
                <p className="font-semibold text-[#1A1A2E]">Premium Fashion Clothing</p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Managed By</p>
                <p className="font-semibold text-[#1A1A2E]">PORTNOVA TRADE PRIVATE LIMITED</p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Constitution</p>
                <p className="font-semibold text-[#1A1A2E]">Private Limited</p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Industry</p>
                <p className="font-semibold text-[#1A1A2E]">Fashion & Apparel</p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Products</p>
                <p className="font-semibold text-[#1A1A2E]">500+ Curated Styles</p>
              </div>
              <div className="col-span-2">
                <p className="text-[#7A7A7A]">Registered Address</p>
                <p className="font-semibold text-[#1A1A2E] leading-snug">
                  Shop no. 3 DDA MARKET CSC,<br />
                  JAGRITI ENCLAVE SHAHDARA DELHI 110092
                </p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Delivery</p>
                <p className="font-semibold text-[#1A1A2E]">Pan-India</p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Speciality</p>
                <p className="font-semibold text-[#1A1A2E]">Casual, Ethnic & Denim</p>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Phone</p>
                <a href="tel:+917217890016" className="font-semibold text-[#F4762D] hover:underline">
                  +91-7217890016, 9217765016
                </a>
              </div>
              <div>
                <p className="text-[#7A7A7A]">Orders</p>
                <p className="font-semibold text-[#1A1A2E]">Retail & Bulk</p>
              </div>
            </div>
            <div className="pt-2 border-t border-[#E8E4E0] flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#F4762D] px-4 py-2 text-sm font-medium text-[#1A1A2E] transition-smooth hover:scale-[0.97] hover:bg-[#D45A15]"
              >
                <Icon name="PhoneIcon" size={15} />
                Get in Touch
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md border border-[#E8E4E0] bg-white px-4 py-2 text-sm font-medium text-[#1A1A2E] transition-smooth hover:bg-[#F7F3F0]"
              >
                <Icon name="ShoppingBagIcon" size={15} />
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-[#F7F3F0] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-[#1A1A2E] sm:text-3xl">
              What We Stand For
            </h2>
            <p className="mt-2 text-[#7A7A7A]">The values that guide everything we do.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-[#E8E4E0] bg-white p-6 shadow-sm transition-smooth hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4762D]/10">
                  <Icon name={v.icon as any} size={24} className="text-[#F4762D]" />
                </div>
                <h3 className="font-semibold text-[#1A1A2E]">{v.title}</h3>
                <p className="mt-2 text-sm text-[#7A7A7A] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey / Timeline */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-[#1A1A2E] sm:text-3xl">Our Journey</h2>
          <p className="mt-2 text-[#7A7A7A]">Growing with you, one stylish piece at a time.</p>
        </div>
        <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:h-full before:w-0.5 before:bg-[#E8E4E0] sm:before:left-[calc(50%-1px)]">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
            >
              <div className={`flex-1 pl-14 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                <div className="rounded-lg border border-[#E8E4E0] bg-white p-4 shadow-sm">
                  <span className="text-xs font-bold text-[#F4762D] uppercase tracking-wide">{item.year}</span>
                  <h3 className="mt-1 font-semibold text-[#1A1A2E]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#7A7A7A]">{item.desc}</p>
                </div>
              </div>
              <div className="absolute left-3.5 top-4 flex h-4 w-4 items-center justify-center rounded-full bg-[#F4762D] ring-4 ring-[#FAFAFA] sm:left-[calc(50%-8px)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Product Range */}
      <div className="bg-[#F7F3F0] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-[#1A1A2E] sm:text-3xl">
              What We Offer
            </h2>
            <p className="mt-2 text-[#7A7A7A]">
              500+ curated styles across 8 categories — all carefully selected for your wardrobe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/products`}
                className="flex items-center gap-3 rounded-lg border border-[#E8E4E0] bg-white px-4 py-3 text-sm font-medium text-[#1A1A2E] shadow-sm transition-smooth hover:bg-[#F4762D] hover:text-[#1A1A2E] hover:border-[#F4762D] hover:shadow-md"
              >
                <Icon name={cat.icon as any} size={18} className="flex-shrink-0" />
                {cat.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-[#F4762D] px-6 py-3 font-medium text-[#1A1A2E] transition-smooth hover:scale-[0.97] hover:bg-[#D45A15]"
            >
              <Icon name="ShoppingBagIcon" size={18} />
              Browse Full Catalogue
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1A1A2E] py-12 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Find Your Perfect Style
          </h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Looking for something special? Browse our curated collection of premium fashion clothing,
            casual wear, ethnic wear, jeans, and style essentials.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="rounded-md bg-[#F4762D] px-6 py-2.5 text-sm font-semibold text-[#1A1A2E] transition-smooth hover:scale-[0.97] hover:bg-[#D45A15]"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-smooth hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}