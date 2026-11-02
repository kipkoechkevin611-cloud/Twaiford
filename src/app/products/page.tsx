'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import ProductCard from '@/components/products/ProductCard';
import { getAllProducts, categories } from '@/data/categories';
import { Search, Filter } from 'lucide-react';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');
  const [filteredProducts, setFilteredProducts] = useState(getAllProducts());

  useEffect(() => {
    let products = getAllProducts();

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter(
        (product) => product.categorySlug === selectedCategory
      );
    }

    // Sort products
    products = [...products].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          if (a.price && b.price) return a.price - b.price;
          if (a.price) return -1;
          if (b.price) return 1;
          return 0;
        case 'price-desc':
          if (a.price && b.price) return b.price - a.price;
          if (a.price) return 1;
          if (b.price) return -1;
          return 0;
        default:
          return 0;
      }
    });

    setFilteredProducts(products);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 py-16 lg:py-24">
          <div className="container">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              All Products
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl">
              Browse our complete collection of premium tiles, ceramics, and sanitary ware
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur">
          <div className="container py-4 lg:py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-gray-50">
          <div className="container py-12 lg:py-16">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">
                  Try another search or explore our collections
                </p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-8 lg:mb-12">
                  Showing {filteredProducts.length} products
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
