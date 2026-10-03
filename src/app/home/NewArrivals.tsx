'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useGetProductsQuery } from '@/store/api/productsApi';

const NewArrivals = () => {
  const { data: productsData, isLoading } = useGetProductsQuery({});

  const newProducts = (productsData?.data || [])
    .filter((p: any) => p.is_new_arrival === 1 || p.is_new_arrival === true)
    .slice(0, 6);

  // If no products marked as new arrival, fall back to first 6 products
  const displayProducts =
    newProducts.length > 0
      ? newProducts
      : (productsData?.data || []).slice(0, 6);

  if (isLoading) {
    return (
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-6">
            New Arrivals
          </h2>
          <div className="text-center text-[#7A7A7A] py-12">Loading...</div>
        </div>
      </section>
    );
  }

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A2E]">
            New Arrivals
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-[#F4762D] hover:text-[#D45A15] transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {displayProducts.map((product: any) => {
            // Parse images
            let images: string[] = [];
            if (Array.isArray(product.product_images)) {
              images = product.product_images;
            } else if (typeof product.product_images === 'string') {
              try {
                const parsed = JSON.parse(product.product_images || '[]');
                images = Array.isArray(parsed) ? parsed : [];
              } catch {
                images = [];
              }
            }
            const image = images[0] || '/assets/images/placeholder-product.jpg';

            const price =
              Number(product.discount_price) &&
                Number(product.discount_price) < Number(product.price)
                ? Number(product.discount_price)
                : Number(product.price);

            const originalPrice =
              Number(product.discount_price) &&
                Number(product.discount_price) < Number(product.price)
                ? Number(product.price)
                : null;

            const slug =
              product.slug ||
              String(product.name || '')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

            return (
              <Link
                key={product.id}
                href={`/product/${slug}`}
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F0EDEA]">
                  <Image
                    src={image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-[#1A1A2E] group-hover:text-[#F4762D] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-[#7A7A7A]">{product.category}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm font-semibold text-[#1A1A2E]">
                    ₹{price.toLocaleString('en-IN')}
                  </span>
                  {originalPrice && (
                    <span className="text-xs text-[#7A7A7A] line-through">
                      ₹{originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;