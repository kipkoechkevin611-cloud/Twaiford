import { CartItem, Product } from '@/types/product';

const CART_STORAGE_KEY = 'twyford_cart';

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
    return [];
  }
};

export const saveCart = (cart: CartItem[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export const addToCart = (product: Product, quantity: number = 1): CartItem[] => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.product.id === product.id);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  
  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId: string): CartItem[] => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.product.id !== productId);
  saveCart(updatedCart);
  return updatedCart;
};

export const updateCartQuantity = (productId: string, quantity: number): CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart(productId);
  }
  
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.product.id === productId);
  
  if (itemIndex > -1) {
    cart[itemIndex].quantity = quantity;
    saveCart(cart);
  }
  
  return cart;
};

export const clearCart = (): void => {
  saveCart([]);
};

export const getCartItemCount = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => {
    if (item.product.price) {
      return total + (item.product.price * item.quantity);
    }
    return total;
  }, 0);
};

export const hasAllPrices = (): boolean => {
  const cart = getCart();
  return cart.every(item => item.product.price !== undefined);
};
