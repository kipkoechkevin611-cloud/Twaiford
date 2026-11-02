import { Suspense } from 'react';
import { getProductBySlug } from '@/data/categories';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductDetailWrapper params={params} />
    </Suspense>
  );
}

async function ProductDetailWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
