'use client';

import { ShoppingCart, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      import('@/lib/cart').then(({ addToCart }) => {
        addToCart(product);
        window.dispatchEvent(new Event('cartUpdated'));
      });
    }
  };

  const handleCallToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hello Twyford Team,\n\nI would like to order:\n\nProduct: ${product.name}\nCategory: ${product.category}\nPrice: KES ${product.price?.toLocaleString() || 'Request Quote'}\n\nPlease confirm availability and pricing.\n\nThank you.`;
    const whatsappUrl = `https://wa.me/254739412906?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <a href={`/products/${product.slug}`}>
      <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-sm text-gray-500 mb-2 whitespace-nowrap">{product.category}</p>
          <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 leading-snug">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="mb-4">
            {product.price ? (
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-gray-900">
                  KES {product.price.toLocaleString()}
                </p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    KES {product.originalPrice.toLocaleString()}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-base font-medium text-blue-600">
                Request a Quote
              </p>
            )}
          </div>
          <div className="space-y-2 mt-auto">
            <button
              onClick={handleAddToCart}
              className="w-full px-4 py-3 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4 mr-2 inline" />
              Add to Cart
            </button>
            <button
              onClick={handleCallToOrder}
              className="w-full px-4 py-3 text-sm font-medium border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 inline" />
              Call to Order
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
