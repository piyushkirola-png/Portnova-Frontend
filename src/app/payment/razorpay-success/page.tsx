'use client';

import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useVerifyPaymentMutation } from '@/store/api/paymentApi';
import { useClearCartMutation } from '@/store/api/cartApi';
import { useDispatch } from 'react-redux';
import { syncCart } from '@/store/slices/cart';

function RazorpaySuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [verifyPayment] = useVerifyPaymentMutation();
  const [clearCartBackend] = useClearCartMutation();
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const razorpayPaymentId = searchParams.get('razorpay_payment_id');
    const razorpayOrderId = searchParams.get('razorpay_order_id');
    const razorpaySignature = searchParams.get('razorpay_signature');
    const orderIdParam = searchParams.get('orderId');

    // If no payment ID, show error
    if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      setStatus('failed');
      setMessage('Missing payment verification details.');
      return;
    }

    // Parse orderId
    const orderId = orderIdParam ? parseInt(orderIdParam) : undefined;

    // Verify the payment with backend
    verifyPayment({
      razorpay_order_id: razorpayOrderId,
      razorpay_payment_id: razorpayPaymentId,
      razorpay_signature: razorpaySignature,
      ...(orderId && { orderId }),
    })
      .unwrap()
      .then(async (result) => {
        if (result.success) {
          setStatus('success');
          setMessage('Payment verified successfully!');
          try {
            await clearCartBackend(undefined).unwrap();
          } catch (err) {
            console.error('Failed to clear cart on backend:', err);
          }
          dispatch(syncCart([]));
          setTimeout(() => {
            router.push(`/order-success?orderId=${orderId}`);
          }, 2000);
        } else {
          setStatus('failed');
          setMessage(result.message || 'Payment verification failed');
        }
      })
      .catch((error) => {
        setStatus('failed');
        setMessage(error.data?.message || 'Verification error. Please contact support.');
      });
  }, [searchParams, verifyPayment, router]);

  // Loading state
  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FAFAFA]">
        <div className="w-16 h-16 border-4 border-[#F4762D] border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-6 text-xl font-semibold text-[#1A2A3A]">Verifying your payment...</h2>
        <p className="mt-2 text-sm text-[#6B7280]">Please wait while we confirm your transaction.</p>
      </div>
    );
  }

  // Success state
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FAFAFA]">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg animate-bounce">
          ✓
        </div>
        <h1 className="mt-6 text-3xl font-heading font-bold text-green-600">Payment Successful! 🎉</h1>
        <p className="mt-2 text-[#6B7280] text-center max-w-md">{message}</p>
        <p className="mt-4 text-sm text-[#9CA3AF]">Redirecting to order confirmation...</p>
        <div className="mt-6 w-12 h-1 bg-[#F4762D] animate-pulse rounded-full"></div>
      </div>
    );
  }

  // Failure state
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FAFAFA]">
      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
        ✕
      </div>
      <h1 className="mt-6 text-3xl font-heading font-bold text-red-600">Payment Failed</h1>
      <p className="mt-2 text-[#6B7280] text-center max-w-md">{message}</p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => router.push('/cart')}
          className="px-6 py-2.5 bg-[#F4762D] text-[#1A1A2E] rounded-lg font-medium hover:bg-[#D45A15] transition-all hover:scale-[0.97]"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2.5 border border-[#F4762D] text-[#F4762D] rounded-lg font-medium hover:bg-[#FFF4E5] transition-all"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default function RazorpaySuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FAFAFA]">
        <div className="w-16 h-16 border-4 border-[#F4762D] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-[#1A2A3A]">Loading...</p>
      </div>
    }>
      <RazorpaySuccessContent />
    </Suspense>
  );
}