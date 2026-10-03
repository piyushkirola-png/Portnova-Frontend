'use client';

import Breadcrumb from '@/components/common/Breadcrumb';

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#F5F5F7] min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Page Header */}
        <div className="mb-8" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2A3A] mb-2">
            Terms & Conditions
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
              Welcome to <strong className="text-[#F4762D]">PORTNOVA TRADE PRIVATE LIMITED</strong>. By accessing and using our services,
              you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms,
              please do not use our services.
            </p>

            <hr className="my-6 border-gray-200" />

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">1. Acceptance of Terms</h2>
            <p className="text-base">
              By accessing and using PORTNOVA TRADE PRIVATE LIMITED services, you accept and agree to be bound by the terms and provisions
              of this agreement. If you do not agree to these terms, please do not use our services.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">2. Use of Service</h2>
            <p className="text-base">
              You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Use the service in any way that violates applicable laws or regulations</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
              <li>Attempt to gain unauthorized access to any portion of the service</li>
              <li>Use the service to transmit any harmful or malicious code</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">3. Account Registration</h2>
            <p className="text-base">
              To use certain features of our service, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate and complete</li>
              <li>Maintain the security of your password and account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">4. Product Information and Pricing</h2>
            <p className="text-base">
              We strive to provide accurate product descriptions and pricing. However:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>We do not warrant that product descriptions or prices are accurate, complete, or error-free</li>
              <li>We reserve the right to correct any errors or inaccuracies and change or update information at any time</li>
              <li>All prices are subject to change without notice</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">5. Orders and Payment</h2>
            <p className="text-base">When you place an order:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>You make an offer to purchase products at the price stated</li>
              <li>We reserve the right to accept or decline your order for any reason</li>
              <li>Payment must be received before we process your order</li>
              <li>You agree to pay all charges incurred by you or any users of your account</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">6. Shipping and Delivery</h2>
            <p className="text-base">We aim to deliver products within the estimated timeframe. However:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Delivery times are estimates and not guaranteed</li>
              <li>We are not responsible for delays caused by shipping carriers or circumstances beyond our control</li>
              <li>Risk of loss passes to you upon delivery to the carrier</li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">7. Returns and Refunds</h2>
            <p className="text-base">
              Our return policy allows returns within 7 days of delivery for eligible products. Please review our detailed
              Return Policy for specific terms and conditions regarding returns, exchanges, and refunds.
            </p>

            {/* Section 8 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">8. Intellectual Property</h2>
            <p className="text-base">
              The service and its original content, features, and functionality are owned by PORTNOVA TRADE PRIVATE LIMITED and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            {/* Section 9 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">9. Limitation of Liability</h2>
            <p className="text-base">
              To the fullest extent permitted by law, PORTNOVA TRADE PRIVATE LIMITED shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>

            {/* Section 10 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">10. Changes to Terms</h2>
            <p className="text-base">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new
              terms on this page. Your continued use of the service after such modifications constitutes acceptance of the updated terms.
            </p>

            {/* Section 11 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">11. Account Suspension and Termination</h2>
            <p className="text-base">
              We reserve the right to suspend, restrict, or permanently terminate any user account found to be in violation of our
              Terms of Use, policies, or applicable laws of India. Reasons for termination include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Fraudulent transactions or activities</li>
              <li>Unauthorized resale of products</li>
              <li>Use of automated bots or scripts</li>
              <li>Violation of intellectual property rights</li>
              <li>Engaging in harassment or abusive behavior</li>
              <li>Any other unlawful activities as defined by Indian law</li>
            </ul>
            <p className="text-base mt-3">
              Upon termination, your right to use our services will immediately cease. You will remain liable for all obligations
              incurred prior to termination.
            </p>

            {/* Section 12 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">12. Force Majeure</h2>
            <p className="text-base">
              PORTNOVA TRADE PRIVATE LIMITED shall not be held liable or responsible for any failure or delay in performance of our
              obligations arising out of or caused by events beyond our reasonable control. Such events may include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Acts of God (natural disasters, earthquakes, floods, storms)</li>
              <li>Pandemics, epidemics, or public health emergencies</li>
              <li>War, terrorism, civil unrest, or riots</li>
              <li>Strikes, lockouts, or labor disputes</li>
              <li>Government restrictions, regulations, or interventions</li>
              <li>Power failures or disruptions in communication systems</li>
              <li>Internet service provider failures or cyber attacks</li>
            </ul>
            <p className="text-base mt-3">
              During such Force Majeure events, our obligations shall be suspended for the duration of the event, and we shall make
              reasonable efforts to resume services as soon as practicable. We will notify users of any significant disruptions when possible.
            </p>

            {/* Section 13 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">13. Governing Law and Jurisdiction</h2>
            <p className="text-base">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its
              conflict of law provisions. Any disputes arising out of or relating to these terms shall be subject to the exclusive
              jurisdiction of the courts located in Kolkata, West Bengal, India.
            </p>
            <p className="text-base mt-3">
              You agree to submit to the personal jurisdiction of such courts and waive any objection to the exercise of jurisdiction
              by such courts or to the venue of any proceeding in such courts.
            </p>

            {/* Section 14 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">14. Dispute Resolution</h2>
            <p className="text-base">
              In the event of any dispute, controversy, or claim arising out of or relating to the use of our platform or services,
              the following dispute resolution process shall apply:
            </p>
            <p className="text-base mt-3"><strong>Step 1: Mediation</strong></p>
            <p className="text-base">
              Parties shall first attempt to resolve the matter amicably through good-faith discussions and mediation within 30 days
              of the dispute arising.
            </p>
            <p className="text-base mt-3"><strong>Step 2: Arbitration</strong></p>
            <p className="text-base">
              If mediation fails, the dispute shall be referred to arbitration under the provisions of the Arbitration and Conciliation
              Act, 1996. The arbitration proceedings shall be conducted in English, and the venue shall be Kolkata, India. The decision
              of the arbitrator shall be final and binding on both parties.
            </p>
            <p className="text-base mt-3"><strong>Step 3: Courts</strong></p>
            <p className="text-base">
              Subject to the above arbitration clause, the courts located in Kolkata, India, shall have exclusive jurisdiction over any
              disputes, and Indian law shall apply.
            </p>

            {/* Section 15 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">15. Grievance Officer</h2>
            <p className="text-base">
              In accordance with the Information Technology Act, 2000 and Consumer Protection (E-Commerce) Rules, 2020, we have appointed
              a Grievance Officer to address user complaints:
            </p>
            <div className="mt-3 p-4 bg-[#F5F5F7] rounded-lg">
              <p className="text-base">
                <strong>Name:</strong> Grievance Officer - PORTNOVA TRADE PRIVATE LIMITED
              </p>
              <p className="text-base">
                <strong>Email:</strong> <a href="mailto:Info@portnovaio.com" className="text-[#F4762D] hover:underline">Info@portnovaio.com</a>
              </p>
              <p className="text-base">
                <strong>Phone:</strong> +91-7217890016, 9217765016
              </p>
              <p className="text-base">
                <strong>Working Hours:</strong> Monday to Friday, 10:00 AM – 6:00 PM
              </p>
            </div>
            <p className="text-base mt-3">
              The Grievance Officer will acknowledge your complaint within 24 hours and resolve it within 15 days from the date of receipt.
            </p>

            {/* Section 16 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">16. Contact Information</h2>
            <p className="text-base">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-[#F5F5F7] rounded-lg">
              <p className="text-base">
                <strong>PORTNOVA TRADE PRIVATE LIMITED</strong>
              </p>
              <p className="text-base">
                <strong>Email:</strong> <a href="mailto:Info@portnovaio.com" className="text-[#F4762D] hover:underline">Info@portnovaio.com</a>
              </p>
              <p className="text-base">
                <strong>Phone:</strong> +91-7217890016, 9217765016
              </p>
              <p className="text-base">
                <strong>Address:</strong> Shop no. 3 DDA MARKET CSC, JAGRITI ENCLAVE SHAHDARA DELHI 110092
              </p>
            </div>

            <hr className="my-6 border-gray-200" />

            <p className="text-sm text-[#6B7280] text-center">
              By using our website, you agree to these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}