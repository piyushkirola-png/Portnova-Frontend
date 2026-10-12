'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

function SuccessRedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams?.get('orderId');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (orderId) {
        router.replace(`/order-success?orderId=${orderId}`);
      } else {
        router.replace('/order-success');
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [router, orderId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FAFAFA]">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
        ✓
      </div>
      <h1 className="mt-6 text-3xl font-heading font-bold text-green-600">
        Payment Successful!
      </h1>
      <p className="mt-2 text-[#6B7280] text-center max-w-md">
        Your order has been placed. Redirecting...
      </p>
      <div className="mt-6 flex items-center gap-2 text-[#F4762D]">
        <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
        <span className="text-sm font-medium">Loading order details...</span>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FAFAFA]">
          <div className="w-16 h-16 border-4 border-[#F4762D] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-[#1A2A3A]">Loading...</p>
        </div>
      }
    >
      <SuccessRedirectContent />
    </Suspense>
  );
}