'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function CallToAction() {
  return (
    <section className="bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
            Let's Create Spaces That Inspire
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 lg:mb-10">
            Explore our collections and find the right solutions for your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Products
              </Button>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
