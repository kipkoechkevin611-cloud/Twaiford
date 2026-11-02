'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { ArrowRight } from 'lucide-react';

export default function ProductCategories() {
  return (
    <section className="bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Product Categories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of premium tiles, ceramics, and sanitary ware solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/categories/${category.slug}`}>
                <div className="group bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-64 lg:h-80 overflow-hidden flex-shrink-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="text-sm sm:text-base text-gray-600 mb-4 lg:mb-6 line-clamp-2">
                        {category.description}
                      </p>
                    )}
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors mt-auto">
                      <span className="font-medium text-base lg:text-lg">Explore Collection</span>
                      <ArrowRight className="ml-2 lg:ml-3 w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
