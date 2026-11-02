'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { getCart, removeFromCart, updateCartQuantity, clearCart, getCartTotal, hasAllPrices } from '@/lib/cart';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function CartPage() {
  const [cart, setCart] = useState(getCart());
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const updateCart = () => {
      setCart(getCart());
    };

    updateCart();
    window.addEventListener('storage', updateCart);
    window.addEventListener('cartUpdated', updateCart);

    return () => {
      window.removeEventListener('storage', updateCart);
      window.removeEventListener('cartUpdated', updateCart);
    };
  }, []);

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    setCart(getCart());
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateCartQuantity(productId, quantity);
    setCart(getCart());
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleClearCart = () => {
    clearCart();
    setCart([]);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const subtotal = getCartTotal();
  const allPricesAvailable = hasAllPrices();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 pt-16 lg:pt-20">
          <div className="container py-20">
            <div className="max-w-md mx-auto text-center">
              <ShoppingBag className="w-20 h-20 lg:w-24 lg:h-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Browse our products and add items to your cart
              </p>
              <Link href="/products">
                <Button size="lg">
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        <div className="container py-12 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 lg:space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white border border-gray-200 rounded-xl lg:rounded-2xl p-4 lg:p-6"
                >
                  <div className="flex gap-4 lg:gap-6">
                    <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-blue-600 mb-2 whitespace-nowrap">
                        {item.product.category}
                      </p>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 lg:mb-3 line-clamp-2">
                        {item.product.name}
                      </h3>
                      {item.product.price ? (
                        <div className="mb-3 lg:mb-4">
                          <div className="flex items-center gap-2">
                            <p className="text-lg sm:text-xl font-bold text-gray-900">
                              KES {item.product.price.toLocaleString()}
                            </p>
                            {item.product.originalPrice && (
                              <p className="text-sm text-gray-400 line-through">
                                KES {item.product.originalPrice.toLocaleString()}
                              </p>
                            )}
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm sm:text-base font-medium text-blue-600 mb-3 lg:mb-4">
                          Request Quote
                        </p>
                      )}

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mb-3 lg:mb-4">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.quantity - 1)
                          }
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-base sm:text-lg font-medium w-12 lg:w-16 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.quantity + 1)
                          }
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={handleClearCart}
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl lg:rounded-2xl p-6 lg:p-8 sticky top-24">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6 lg:mb-8">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cart.length} items)</span>
                    {allPricesAvailable ? (
                      <span className="font-medium text-gray-900">
                        KES {subtotal.toLocaleString()}
                      </span>
                    ) : (
                      <span className="font-medium text-blue-600">
                        Subject to Quotation
                      </span>
                    )}
                  </div>
                </div>

                {!allPricesAvailable && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      Some items require a quotation. You will receive final pricing through WhatsApp.
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <Link href="/products">
                    <Button variant="outline" fullWidth>
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    fullWidth
                    onClick={() => setShowCheckout(true)}
                  >
                    Proceed to Order
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      fullWidth
                      className="bg-green-50 text-green-700 border-green-300 hover:bg-green-100"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckout && <CheckoutForm cart={cart} onClose={() => setShowCheckout(false)} />}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function CheckoutForm({ cart, onClose }: { cart: any[]; onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    deliveryLocation: '',
    additionalInstructions: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const { generateWhatsAppOrderMessage, openWhatsApp } = require('@/lib/whatsapp');
    const message = generateWhatsAppOrderMessage(formData, cart);
    openWhatsApp(message);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl lg:rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name *"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />
          <Input
            label="Phone Number *"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            required
          />
          <Input
            label="Email (Optional)"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Delivery Location *"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
            error={errors.deliveryLocation}
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Instructions (Optional)
            </label>
            <textarea
              name="additionalInstructions"
              value={formData.additionalInstructions}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              After clicking Submit, you will be redirected to WhatsApp with your order details. Please press Send in WhatsApp to complete your order.
            </p>
          </div>

          <Button type="submit" size="lg" fullWidth>
            Submit Order via WhatsApp
            <MessageCircle className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
