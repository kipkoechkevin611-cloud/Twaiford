import { notFound } from 'next/navigation';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ProductCard from '@/components/products/ProductCard';
import { getCategoryBySlug, categories } from '@/data/categories';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 py-16 lg:py-24">
          <div className="container">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl">
                {category.description}
              </p>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-white">
          <div className="container py-12 lg:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} - Twyford`,
    description: category.description || `Explore our ${category.name} collection`,
  };
}
