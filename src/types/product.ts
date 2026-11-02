export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  images?: string[];
  description?: string;
  specifications?: Record<string, string>;
  price?: number;
  originalPrice?: number;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  deliveryLocation: string;
  additionalInstructions?: string;
}
