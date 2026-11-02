'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';
import { getAllProducts } from '@/data/categories';

export default function FeaturedProducts() {
  const featuredProducts = getAllProducts().slice(0, 8);

  return (
    <section className="bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our selection of premium products for your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Link href="/products">
            <Button size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
