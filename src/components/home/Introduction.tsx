'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
              Welcome to Twyford
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
              Twyford is your trusted partner for premium tiles, ceramics, and sanitary ware solutions in Kenya. We specialize in providing high-quality products that combine exceptional durability with contemporary design, perfect for residential and commercial spaces.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 lg:mb-10">
              From elegant floor tiles to sophisticated bathroom fixtures, our curated collection reflects our commitment to quality craftsmanship and customer satisfaction. We work with leading manufacturers to bring you products that meet international standards.
            </p>
            <Link href="/about">
              <Button size="lg">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="/FLOOR TILES/Floor Tile 40×40 cm (Per Box) 800.webp"
              alt="Premium floor tiles"
              className="w-full h-auto rounded-xl lg:rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
