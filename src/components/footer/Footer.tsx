'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl lg:text-3xl font-bold tracking-tight">TWYFORD</div>
            <p className="text-gray-400 text-base leading-relaxed">
              Premium tiles, ceramics, and sanitary ware solutions designed to transform modern spaces. Quality, reliability, and innovation in every product.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-base"
                >
                  <span>WhatsApp: 0739412906</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-base"
                >
                  Send us a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-400 text-base">
              © {currentYear} Twyford. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors text-base"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
