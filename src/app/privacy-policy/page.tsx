'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 py-16 lg:py-24">
          <div className="container">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl">
              How we collect, use, and protect your information
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="bg-white">
          <div className="container py-12 lg:py-20">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 mb-8">
                Last updated: {lastUpdated || 'Loading...'}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Twyford ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard the information you provide when using our website and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                    We collect information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-600 space-y-2">
                    <li>Submit a contact form or enquiry</li>
                    <li>Place an order through our website</li>
                    <li>Communicate with us via WhatsApp</li>
                    <li>Browse our product catalogue</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                    We use the information you provide to:
                  </p>
                  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-600 space-y-2">
                    <li>Process and fulfil your orders</li>
                    <li>Respond to your enquiries and provide product information</li>
                    <li>Communicate with you about your orders via WhatsApp</li>
                    <li>Arrange delivery and logistics</li>
                    <li>Improve our products and services</li>
                    <li>Provide customer support</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">WhatsApp Communication</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                    Our primary communication channel is WhatsApp. When you:
                  </p>
                  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-600 space-y-2">
                    <li>Submit an order, your order details are sent to our WhatsApp number (254739412906)</li>
                    <li>Send an enquiry, your message is directed to our team via WhatsApp</li>
                    <li>Use the floating WhatsApp button, you initiate a direct conversation with us</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    To exercise these rights, please contact us via WhatsApp at 0739412906.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
