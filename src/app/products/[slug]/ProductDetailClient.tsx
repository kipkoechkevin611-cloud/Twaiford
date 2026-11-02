'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';
import { getAllProducts } from '@/data/categories';
import { ShoppingCart, MessageCircle, Minus, Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { generateWhatsAppEnquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import { addToCart } from '@/lib/cart';
import { Product } from '@/types/product';

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = getAllProducts()
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    window.dispatchEvent(new Event('cartUpdated'));
    setQuantity(1);
  };

  const handleWhatsAppEnquiry = () => {
    const message = generateWhatsAppEnquiryMessage(product);
    openWhatsApp(message);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello Twyford Team,\n\nI would like to order:\n\nProduct: ${product.name}\nCategory: ${product.category}\nQuantity: ${quantity}\n\nPlease confirm availability and pricing.\n\nThank you.`;
    openWhatsApp(message);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container">
            <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Product Detail */}
        <section className="bg-white py-12 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Image */}
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-xl lg:rounded-2xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-sm sm:text-base text-blue-600 font-medium mb-3">
                  {product.category}
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                  {product.name}
                </h1>

                {product.description && (
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                )}

                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className="mb-6 lg:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                      Specifications
                    </h3>
                    <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 lg:py-3 border-b border-gray-200 last:border-0 text-sm sm:text-base"
                        >
                          <span className="text-gray-600">{key}</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.price ? (
                  <div className="mb-6 lg:mb-8">
                    <div className="flex items-center gap-3">
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                        KES {product.price.toLocaleString()}
                      </p>
                      {product.originalPrice && (
                        <p className="text-lg sm:text-xl text-gray-400 line-through">
                          KES {product.originalPrice.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-lg sm:text-xl font-medium text-blue-600 mb-6 lg:mb-8">
                    Request a Quote
                  </p>
                )}

                {/* Quantity Selector */}
                <div className="mb-6 lg:mb-8">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 lg:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                    <span className="text-lg sm:text-xl font-medium w-12 lg:w-16 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 lg:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 lg:space-y-4">
                  <Button
                    size="lg"
                    fullWidth
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    onClick={handleWhatsAppOrder}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Order via WhatsApp
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    fullWidth
                    onClick={handleWhatsAppEnquiry}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-gray-50 py-12 lg:py-20">
            <div className="container">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12">
                Related Products
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
