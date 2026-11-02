'use client';

import { motion } from 'framer-motion';
import { Award, Palette, Layers, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality and Craftsmanship',
    description: 'Every product is carefully selected to meet the highest standards of quality and durability.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Contemporary designs that blend seamlessly with modern architectural trends.',
  },
  {
    icon: Layers,
    title: 'Diverse Product Solutions',
    description: 'Comprehensive range of tiles, ceramics, and sanitary ware for all your needs.',
  },
  {
    icon: Users,
    title: 'Customer-Focused Service',
    description: 'Dedicated support to help you find the perfect solutions for your project.',
  },
];

export default function WhyChooseUs() {
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
            Why Choose Twyford
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering excellence in every aspect of our service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full mb-4 lg:mb-6">
                  <feature.icon className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600" />
                </div>
                <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
