import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import InspirationGallery from '@/components/home/InspirationGallery';
import CallToAction from '@/components/home/CallToAction';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <ProductCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <InspirationGallery />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
