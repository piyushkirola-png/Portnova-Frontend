'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface OrderSummaryData {
  subtotal: number;
  discount: number;
  deliveryCharges: number;
  gstRate: number;
  gstAmount: number;
  total: number;
}

interface OrderSummaryProps {
  summary: OrderSummaryData;
  itemCount: number;
  onApplyPromo: (code: string, discount: number, data?: any) => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api';

export default function OrderSummary({ summary, itemCount, onApplyPromo }: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState('');
  const [promoStatus, setPromoStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [promoMessage, setPromoMessage] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  const getUserId = (): number | null => {
    try {
      const raw = localStorage.getItem('user_data');
      if (!raw) return null;
      const user = JSON.parse(raw);
      return user?.id ?? null;
    } catch {
      return null;
    }
  };

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) {
      setPromoStatus('error');
      setPromoMessage('Please enter a promo code');
      return;
    }

    setIsApplying(true);
    setPromoStatus('idle');
    setPromoMessage('');

    try {
      const response = await fetch(`${API_URL}/coupon/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: promoCode.toUpperCase(),
          cart_total: summary.subtotal,
          user_id: getUserId(),
        }),
      });

      const data = await response.json();

      if (data.success && data.data) {
        setPromoStatus('success');
        setPromoMessage(
          `Promo code applied! You saved ₹${data.data.discount_amount}`
        );
        onApplyPromo(
          data.data.code,
          Number(data.data.discount_amount) || 0,
          data.data
        );

        setTimeout(() => {
          setPromoStatus('idle');
          setPromoMessage('');
        }, 3000);
      } else {
        setPromoStatus('error');
        setPromoMessage(data.message || 'Invalid promo code');
      }
    } catch (err) {
      console.error('Promo validation error:', err);
      setPromoStatus('error');
      setPromoMessage('Failed to validate coupon. Please try again.');
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <div className="sticky top-20 rounded-lg border border-border bg-card p-6 shadow-elevation-2">
      <h2 className="font-heading mb-4 text-xl font-semibold text-card-foreground">
        Order Summary
      </h2>

      {/* Promo Code */}
      <div className="mb-6">
        <label htmlFor="promoCode" className="mb-2 block text-sm font-medium text-card-foreground">
          Promo Code
        </label>
        <div className="flex gap-2">
          <input
            id="promoCode"
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            placeholder="Enter code"
            disabled={isApplying}
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <button
            onClick={handleApplyPromo}
            disabled={isApplying}
            className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-smooth hover:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isApplying ? 'Checking...' : 'Apply'}
          </button>
        </div>
        {promoMessage && (
          <p
            className={`caption mt-2 flex items-center gap-1 ${
              promoStatus === 'success' ? 'text-success' : 'text-error'
            }`}
          >
            <Icon
              name={promoStatus === 'success' ? 'CheckCircleIcon' : 'XCircleIcon'}
              size={16}
            />
            {promoMessage}
          </p>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 border-t border-border pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
          <span className="data-text font-medium text-card-foreground">
            ₹{summary.subtotal.toLocaleString('en-IN')}
          </span>
        </div>

        {summary.discount > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-success">Discount Applied</span>
            <span className="data-text font-medium text-success">
              -₹{summary.discount.toLocaleString('en-IN')}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Delivery Charges</span>
          <span className="data-text font-medium text-card-foreground">
            {summary.deliveryCharges === 0 ? (
              <span className="text-success">FREE</span>
            ) : (
              `₹${summary.deliveryCharges.toLocaleString('en-IN')}`
            )}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">GST ({summary.gstRate}%)</span>
          <span className="data-text font-medium text-card-foreground">
            ₹{summary.gstAmount.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="font-heading text-lg font-semibold text-card-foreground">
          Total Amount
        </span>
        <span className="data-text text-2xl font-bold text-primary">
          ₹{summary.total.toLocaleString('en-IN')}
        </span>
      </div>

      {/* Savings Info */}
      {summary.discount > 0 && (
        <div className="mt-3 rounded-md bg-success/10 p-3">
          <p className="caption flex items-center gap-2 text-success">
            <Icon name="CheckBadgeIcon" size={18} />
            You saved ₹{summary.discount.toLocaleString('en-IN')} on this order!
          </p>
        </div>
      )}

      {/* Checkout Button */}
      <Link
        href="/checkout-process"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-smooth hover:scale-[0.97]"
      >
        <Icon name="ShoppingBagIcon" size={20} />
        Proceed to Checkout
      </Link>

      {/* Secure Payment Icons */}
      <div className="mt-4 flex items-center justify-center gap-3 border-t border-border pt-4">
        <Icon name="LockClosedIcon" size={16} className="text-muted-foreground" />
        <span className="caption text-muted-foreground">Secure Payment</span>
        <div className="flex gap-2">
          <div className="h-6 w-10 rounded bg-muted"></div>
          <div className="h-6 w-10 rounded bg-muted"></div>
          <div className="h-6 w-10 rounded bg-muted"></div>
        </div>
      </div>

      {/* Continue Shopping */}
      <Link
        href="/products"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-2 text-sm font-medium text-foreground transition-smooth hover:bg-muted"
      >
        <Icon name="ArrowLeftIcon" size={16} />
        Continue Shopping
      </Link>
    </div>
  );
}