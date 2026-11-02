'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  '/FLOOR TILES/Floor Tile 40×40 cm (Per Box) 800.webp',
  '/WALL TILES/Glossy Marble Effect Wall Tiles 30×60 cm.webp',
  '/Wash Basins/Undermount Ceramic Sink.webp',
  '/Specialty Products/Urinal - Wall Mounted.webp',
  '/Faucets & Mixers/Basin Mixer Tap (Deck Mounted).webp',
  '/Specialty Products/Marble Sheet - 2400x1200mm.jpg',
];

export default function InspirationGallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

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
            Inspiration Gallery
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore possibilities for your spaces with our product applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl lg:rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={image}
                alt={`Inspiration ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {hoveredImage === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <span className="text-white font-medium text-base lg:text-lg">View Details</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
