'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src="/Inspiration gallery.jpeg"
          alt="Premium tiles and sanitary ware"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50" />
      </div>

      {/* Content */}
      <div className="relative container z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Twyford
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-4 lg:mb-6 leading-relaxed">
            Designing Spaces. Defining Quality.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 lg:mb-8 leading-relaxed">
            Discover exceptional tile and sanitary ware solutions designed to transform modern spaces.
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-10">
            Call Us: 0739412906
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Collections
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
