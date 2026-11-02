const WHATSAPP_NUMBER = "254739412906";

export const generateWhatsAppOrderMessage = (
  customerDetails: {
    fullName: string;
    phoneNumber: string;
    email?: string;
    deliveryLocation: string;
    additionalInstructions?: string;
  },
  cartItems: Array<{ product: any; quantity: number }>
): string => {
  let message = `TWYFORD - NEW PRODUCT ORDER\n\n`;
  message += `Hello Twyford Team,\n`;
  message += `I would like to request the following order.\n\n`;
  
  message += `CUSTOMER DETAILS\n`;
  message += `Full Name: ${customerDetails.fullName}\n`;
  message += `Phone Number: ${customerDetails.phoneNumber}\n`;
  if (customerDetails.email) {
    message += `Email: ${customerDetails.email}\n`;
  }
  message += `Delivery Location: ${customerDetails.deliveryLocation}\n\n`;
  
  message += `ORDER ITEMS\n`;
  
  let total = 0;
  let hasPrices = true;
  
  cartItems.forEach((item, index) => {
    const { product, quantity } = item;
    message += `\n${product.name}\n`;
    message += `Category: ${product.category}\n`;
    message += `Quantity: ${quantity}\n`;
    
    if (product.price) {
      const lineTotal = product.price * quantity;
      message += `Unit Price: KES ${product.price.toLocaleString()}\n`;
      total += lineTotal;
    } else {
      message += `Unit Price: Request Quote\n`;
      hasPrices = false;
    }
  });
  
  message += `\n`;
  
  if (hasPrices && total > 0) {
    message += `Estimated Total: KES ${total.toLocaleString()}\n`;
  } else {
    message += `Estimated Total: Subject to Quotation\n`;
  }
  
  if (customerDetails.additionalInstructions) {
    message += `\nAdditional Instructions:\n${customerDetails.additionalInstructions}\n`;
  }
  
  message += `\nKindly confirm availability, final pricing and delivery arrangements.\n`;
  message += `Thank you.`;
  
  return message;
};

export const generateWhatsAppEnquiryMessage = (product?: {
  name: string;
  category: string;
}): string => {
  if (product) {
    return `Hello Twyford Team,\n\nI would like to enquire about your product:\n\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease provide more information including pricing and availability.\n\nThank you.`;
  }
  
  return `Hello Twyford Team, I would like to enquire about your products.`;
};

export const openWhatsApp = (message: string): void => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
