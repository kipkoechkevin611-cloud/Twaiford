'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/categories';
import { getCartItemCount } from '@/lib/cart';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartItemCount());
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
              TWYFORD
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Categories
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* WhatsApp Button - Desktop */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-3">Categories</p>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="block py-3 pl-4 text-lg text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
