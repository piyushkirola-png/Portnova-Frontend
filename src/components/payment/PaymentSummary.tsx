'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface PaymentSummaryProps {
  subtotal?: number;
  gst?: number;
  deliveryCharges?: number;
  discount?: number;
  total?: number;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  subtotal: propSubtotal,
  gst: propGst,
  deliveryCharges: propDeliveryCharges,
  discount: propDiscount,
  total: propTotal,
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Subtotal: use prop if provided, else compute from cart
  const subtotal =
    propSubtotal ??
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Discount: use prop if provided, else 0
  const discount = propDiscount ?? 0;

  // Delivery: use prop if provided, else free above ₹1000
  const deliveryCharges =
    propDeliveryCharges ?? (subtotal > 1000 ? 0 : 50);

  // GST: computed on (subtotal - discount + deliveryCharges) — matches cart/checkout
  const gst =
    propGst ?? Math.round((subtotal - discount + deliveryCharges) * 0.18);

  // Total: use prop if provided, else compute
  const total =
    propTotal ?? subtotal - discount + gst + deliveryCharges;

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-[#1A2A3A]">Order Summary</h3>

      <div className="space-y-2 divide-y divide-gray-100">
        <div className="space-y-2 pb-2">
          <div className="flex justify-between text-[#6B7280]">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[#6B7280]">
            <span>GST (18%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[#6B7280]">
            <span>Delivery Charges</span>
            <span>{deliveryCharges === 0 ? 'Free' : `₹${deliveryCharges.toFixed(2)}`}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-2 text-lg font-bold text-[#1A2A3A]">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;