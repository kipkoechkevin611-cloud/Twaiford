'use client';

import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import Button from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 py-16 lg:py-24">
          <div className="container">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              About Twyford
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl">
              Your trusted partner for premium tiles, ceramics, and sanitary ware solutions in Kenya
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                  Our Story
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  Twyford is dedicated to providing exceptional tile and sanitary ware solutions that transform modern spaces. We understand that every project is unique, and we're committed to helping you find the perfect products to bring your vision to life.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our carefully curated collection combines quality craftsmanship with contemporary design, ensuring that every product meets the highest standards of durability and aesthetics.
                </p>
              </div>
              <div>
                <img
                  src="/FLOOR TILES/Floor Tile 40×40 cm (Per Box) 800.webp"
                  alt="Premium tiles"
                  className="w-full h-auto rounded-xl lg:rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Overview */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/WALL TILES/Glossy Marble Effect Wall Tiles 30×60 cm.webp"
                  alt="Wall tiles"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Brand Overview
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Twyford represents excellence in the tiles, ceramics, and sanitary ware industry. We focus on delivering products that combine functionality with sophisticated design, perfect for both residential and commercial applications.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From elegant floor tiles to modern bathroom fixtures, our product range is designed to meet diverse needs while maintaining consistent quality across all categories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Approach */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Approach to Quality
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Quality is at the heart of everything we do. We carefully select our products from trusted manufacturers who share our commitment to excellence. Every item in our collection undergoes thorough evaluation to ensure it meets our stringent standards.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe that our customers deserve products that not only look beautiful but also stand the test of time. This commitment to quality drives our product selection and customer service approach.
                </p>
              </div>
              <div>
                <img
                  src="/Wash Basins/Undermount Ceramic Sink.webp"
                  alt="Quality products"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design and Innovation */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/Faucets & Mixers/Basin Mixer Tap (Deck Mounted).webp"
                  alt="Modern design"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Design and Innovation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We stay at the forefront of design trends, offering products that reflect contemporary aesthetics while maintaining timeless appeal. Our collection features innovative solutions that combine form and function seamlessly.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you're creating a modern bathroom, designing a kitchen, or planning a commercial space, our products provide the foundation for exceptional interiors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Range */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Product Range
              </h2>
              <p className="text-gray-600 text-lg">
                Comprehensive solutions for all your tiling and sanitary ware needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Floor Tiles</h3>
                <p className="text-gray-600">
                  Durable and stylish floor tiles in various sizes and designs for every space.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wall Tiles</h3>
                <p className="text-gray-600">
                  Beautiful wall tiles that add character and elegance to any interior.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wash Basins</h3>
                <p className="text-gray-600">
                  Premium wash basins and sinks combining functionality with modern design.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Faucets & Mixers</h3>
                <p className="text-gray-600">
                  Elegant bathroom fixtures with smooth operation and contemporary styling.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialty Products</h3>
                <p className="text-gray-600">
                  Specialized products including adhesives, tools, and installation accessories.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Solutions</h3>
                <p className="text-gray-600">
                  Everything you need for complete bathroom and flooring projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Commitment */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Customer Commitment
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At Twyford, we are committed to providing exceptional customer service. From helping you select the right products to offering guidance through WhatsApp, we're here to support your project every step of the way. Your satisfaction is our priority.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
