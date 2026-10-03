'use client';
import Breadcrumb from '@/components/common/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F5F5F7] min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Page Header */}
        <div className="mb-8" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2A3A] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#6B7280] text-sm">
            Legal Entity: PORTNOVA TRADE PRIVATE LIMITED
          </p>
          <p className="text-[#6B7280] text-sm">
            Effective Date: 15 January 2026
          </p>
          <p className="text-[#6B7280] text-sm">
            Last Updated: January 2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 lg:p-10" data-aos="fade-up">
          <div className="prose prose-lg max-w-none text-[#374151]">

            <p className="text-base">
              At <strong className="text-[#F4762D]">PORTNOVA TRADE PRIVATE LIMITED</strong>, we value your privacy and are committed to protecting your personal information.
              This policy describes how we collect, use, and safeguard your data through our ecommerce store, mobile application, and social platforms.
              It also explains the purpose of data collection and your rights regarding sharing personal information. We undertake the responsibility to safeguard
              your data under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 by the Government of India.
            </p>

            <p className="text-base">
              All users are advised to read this policy carefully before creating an account on our website or taking part in any other activity as a guest user.
            </p>

            <hr className="my-6 border-gray-200" />

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">1. Information We Collect</h2>
            <p className="text-base">
              To create an account or shop as a guest, we collect user information, including:
            </p>
            <p className="text-base mt-3"><strong>Personal Information of Customers:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Name, email address, phone number, shipping/billing address</li>
              <li>Payment details for online transactions (processed securely through payment partners)</li>
            </ul>

            <p className="text-base mt-3"><strong>Personal Information of Vendors:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Names, email addresses, phone numbers, shipping/billing addresses</li>
              <li>Government-issued IDs and GST registration (if needed)</li>
            </ul>

            <p className="text-base mt-3"><strong>Transactional Data:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Order history, payment details, and product preferences</li>
            </ul>

            <p className="text-base mt-3"><strong>Technical Data:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>IP address, browser type, device information, and cookies for analytics and personalization</li>
            </ul>

            <p className="text-base mt-3"><strong>User-Generated Content:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Reviews, ratings, content posted on social media, and communications with customer support</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">2. How Do We Collect Your Data</h2>
            <p className="text-base">We collect data in the following ways:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Information provided by the user during transactions</li>
              <li>Automatically collected information by accepting cookies from users while interacting on our website</li>
              <li>Data received via email, call, or messaging services for information or customer support</li>
              <li>Automatic information collected by our websites when users interact with third parties using our platform</li>
              <li>Information collected through other platforms like social media websites, after the user agrees to the given user agreement</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">3. How We Use Your Information</h2>
            <p className="text-base">We use the data collected to:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Process orders, payments, and deliveries</li>
              <li>Verify seller identities and ensure compliance with our policies</li>
              <li>Personalize your shopping experience and provide relevant product recommendations</li>
              <li>Communicate updates, promotional offers, and resolve disputes</li>
              <li>Comply with legal obligations and prevent fraud</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">4. Sharing Your Information</h2>
            <p className="text-base">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li><strong>Sellers:</strong> Buyer details (name, address, contact) are shared with sellers to fulfill orders</li>
              <li><strong>Service Providers:</strong> Logistics partners, payment gateways, and cloud service providers assist us in operations</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and users</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">5. Data Security</h2>
            <p className="text-base">
              We use industry-standard encryption and security measures to protect your data. Data security measures include technical and organizational measures
              to keep your data secure and act in case of any data breach. However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security. If you feel any data breach or security threat, please contact our customer support team immediately.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">6. Data Retention</h2>
            <p className="text-base">
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required
              or permitted by law. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li><strong>Account information:</strong> Retained for the duration of your account plus 5 years after closure</li>
              <li><strong>Transaction records:</strong> Retained for 7 years as required by law</li>
              <li><strong>Marketing data:</strong> Retained until you opt-out or for 2 years of inactivity</li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">7. Your Rights for Data Protection & Privacy</h2>
            <p className="text-base">
              When we use your information, we do it only after obtaining consent from you. If you wish to keep your data from us, you can opt out anytime. You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Decline cookies, pixels, or any other technology used for user data collection</li>
              <li>Withdraw any consent provided to us by updating your account settings and preferences</li>
              <li>Access, correct, or delete your personal information via your account or by contacting us</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Complain to us or the appropriate data protection authority if you find a threat to security or a data breach</li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">8. Cookie Policy</h2>
            <p className="text-base">
              At PORTNOVA TRADE PRIVATE LIMITED, we value our users' privacy. We try to be transparent about how we collect and use your data. Cookies are small
              text files that are placed on a user's device when they use any website. These files capture your preferences, browsing history, and experience
              through your web activities.
            </p>

            <p className="text-base mt-3"><strong>How We Use Cookies:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>Understand user preferences and recommend products as per their needs</li>
              <li>Improve user experience and website functionality</li>
              <li>Enable useful features like user login, cart management, saved cards, last seen items, etc.</li>
              <li>Analyze website traffic, usage patterns, and improve website performance</li>
              <li>Deliver personalized experience, recommendations, offers, and ads</li>
            </ul>

            <p className="text-base mt-3"><strong>Types of Cookies We Use:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li><strong>Essential Cookies:</strong> Necessary for basic functioning like secure login, payment transactions, cart management, etc.</li>
              <li><strong>Performance Cookies:</strong> Help us understand user behavior by tracking anonymous data like pages visited, time spent, etc.</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences such as language, viewed products, payment methods, etc.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> Used to display personalized ads and product recommendations</li>
            </ul>

            <p className="text-base mt-3"><strong>Managing Cookie Preferences:</strong></p>
            <p className="text-base">
              When you visit our website, we provide you with the option to accept or reject cookies through a pop-up notice. You can choose to accept all,
              reject all, or customize them as per your choice. You can also control or delete cookies through your browser settings at any time. Disabling
              certain cookies may impact the functionality and performance of the website.
            </p>

            <p className="text-base mt-3"><strong>Third-Party Cookies:</strong></p>
            <p className="text-base">
              We permit trusted third-party service providers like network partners, payment partners, and analytical partners to set cookies on your device.
              These cookies help us deliver adverts and understand their efficiency. We have no control over the use of these third-party cookies.
            </p>

            {/* Section 9 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">9. Children's Privacy</h2>
            <p className="text-base">
              Our services are not intended for children under the age of 18 years. We do not knowingly collect personal information from children under 18.
              If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately. If we become
              aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to remove
              that information from our servers.
            </p>

            {/* Section 10 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">10. Third-Party Links</h2>
            <p className="text-base">
              Our Platform might include links to third-party websites, services, or applications for your information and convenience. These external links are
              not controlled by us and have their own privacy policies, terms of use, and cookie consents. PORTNOVA TRADE PRIVATE LIMITED is not responsible for
              the content, security, or privacy practices of such third-party platforms. We strongly recommend reviewing the privacy statements of any
              third-party websites before submitting personal data. Your use of such third-party websites is at your own risk and discretion.
            </p>

            {/* Section 11 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">11. Legal Compliance</h2>
            <p className="text-base">This Privacy Policy is governed by and complies with:</p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#374151]">
              <li>The Information Technology Act, 2000 and its amendments</li>
              <li>The Digital Personal Data Protection Act (DPDP Act), 2023</li>
              <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
              <li>Consumer Protection (E-Commerce) Rules, 2020</li>
            </ul>

            {/* Section 12 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">12. Changes to This Policy</h2>
            <p className="text-base">
              We may update this Privacy Policy periodically. Changes will be posted to this page with the updated date. We will notify you of any significant
              changes by posting the new policy on this page and updating the "Effective Date" and "Last Updated" date.
            </p>

            {/* Section 13 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">13. Grievance Officer</h2>
            <p className="text-base">
              In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, we have appointed a Grievance Officer
              to address your concerns regarding data privacy and security:
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

            {/* Section 14 */}
            <h2 className="text-xl font-semibold text-[#1A2A3A] mt-8 mb-3">14. Contact Us</h2>
            <p className="text-base">
              For queries related to data safety, privacy, or any other concerns, please contact us at:
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
              By using our website, you consent to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}