'use client';
import Breadcrumb from '@/components/common/Breadcrumb';

export default function ReturnPolicyPage() {
  return (
    <main className="bg-[#F5F5F7] min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Page Header */}
        <div className="mb-8" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2A3A] mb-2">
            Return & Refund Policy
          </h1>
          <p className="text-[#6B7280] text-sm">
            Legal Entity: PORTNOVA TRADE PRIVATE LIMITED
          </p>
          <p className="text-[#6B7280] text-sm">
            Last Updated: January 2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 lg:p-10" data-aos="fade-up">
          <div className="prose prose-lg max-w-none text-[#374151]">

            <p className="text-base">
              At <strong className="text-[#F4762D]">Portnova</strong>, we want you to be completely satisfied with your purchase.
              If you are not entirely happy with your order, we are here to help. Please read our return policy carefully
              before initiating a return.
            </p>

            <hr className="my-6 border-gray-200" />

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">1. Return Window</h2>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>You may return most new, unopened items within <strong>7 days</strong> of delivery for a full refund</li>
              <li>We also offer extended return periods during holiday seasons</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">2. Eligible Items for Return</h2>
            <p className="text-base">The following items can be returned:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Unopened items in original packaging</li>
              <li>Defective or damaged products</li>
              <li>Wrong items delivered</li>
              <li>Items significantly different from description</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">3. Non-Returnable Items</h2>
            <p className="text-base">Certain items cannot be returned:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Personal care items and hygiene products</li>
              <li>Perishable goods</li>
              <li>Intimate or sanitary goods</li>
              <li>Customized or personalized items</li>
              <li>Digital products or software</li>
              <li>Items marked as non-returnable at the time of purchase</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">4. How to Return</h2>
            <p className="text-base">To initiate a return:</p>
            <ol className="list-decimal pl-6 space-y-2 text-base text-[#374151]">
              <li>Log in to your Portnova account</li>
              <li>Go to <strong>"My Orders"</strong> and select the order containing the item you wish to return</li>
              <li>Click <strong>"Return Item"</strong> and select your reason for return</li>
              <li>Choose your preferred return method (pickup or drop-off)</li>
              <li>Pack the item securely in its original packaging</li>
              <li>Ship or schedule pickup as instructed</li>
            </ol>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">5. Return Shipping</h2>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li><strong>Free returns:</strong> Defective, damaged, or wrong items</li>
              <li><strong>Customer responsibility:</strong> Change of mind or other personal reasons</li>
              <li>We recommend using a trackable shipping service for returns</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">6. Refund Processing</h2>
            <p className="text-base">Once we receive and inspect your return:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>We will send you an email to notify you of the approval or rejection of your refund</li>
              <li>If approved, refunds will be processed within <strong>3-5 business days</strong></li>
              <li>Refunds will be credited to your original payment method</li>
              <li>Shipping charges are non-refundable (except in cases of defective or wrong items)</li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">7. Exchanges</h2>
            <p className="text-base">We offer exchanges for:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Defective or damaged items</li>
              <li>Size or color exchanges (subject to availability)</li>
            </ul>
            <p className="text-base mt-2">
              To exchange an item, please follow the return process and place a new order for the desired item.
            </p>

            {/* Section 8 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">8. Late or Missing Refunds</h2>
            <p className="text-base">If you haven't received your refund:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Check your bank account again</li>
              <li>Contact your credit card company (processing may take time)</li>
              <li>Contact your bank (processing delays may occur)</li>
              <li>If you've done all of this and still haven't received your refund, contact us</li>
            </ul>

            {/* Section 9 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">9. Damaged or Defective Items</h2>
            <p className="text-base">If you receive a damaged or defective item:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Contact us immediately with photos of the damage</li>
              <li>We will arrange for a replacement or full refund</li>
              <li>Return shipping will be free in these cases</li>
            </ul>

            {/* Section 10 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">10. Contact Us</h2>
            <p className="text-base">
              For questions about returns and refunds, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-[#F5F5F7] rounded-lg">
              <p className="text-base">
                <strong>Email:</strong> <a href="mailto:Info@portnovaio.com" className="text-[#F4762D] hover:underline">Info@portnovaio.com</a>
              </p>
              <p className="text-base">
                <strong>Phone:</strong> +91-7217890016, 9217765016
              </p>
              <p className="text-base">
                <strong>Customer Support:</strong> Available 9 AM - 6 PM (Mon-Sat)
              </p>
              <p className="text-base">
                <strong>Address:</strong> Shop no. 3 DDA MARKET CSC, JAGRITI ENCLAVE SHAHDARA DELHI 110092
              </p>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Quick Tip */}
            <div className="bg-[#FFF4E5] border border-[#F4762D] rounded-lg p-4">
              <p className="text-sm text-[#1A2A3A]">
                <strong className="text-[#F4762D]">💡 Quick Tip:</strong> Please inspect your order immediately upon delivery.
                Report any issues within 48 hours to ensure faster resolution.
              </p>
            </div>

            <p className="text-sm text-[#6B7280] text-center mt-4">
              By placing an order with Portnova, you agree to our Return & Refund Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}