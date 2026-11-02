'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const message = `TWYFORD - CONTACT ENQUIRY\n\nFull Name: ${formData.fullName}\nPhone Number: ${formData.phoneNumber}\nEmail: ${formData.email || 'Not provided'}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nThank you.`;

    const whatsappUrl = `https://wa.me/254739412906?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 py-16 lg:py-24">
          <div className="container">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl">
              Get in touch with our team for enquiries, orders, and support
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-white">
          <div className="container py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                  Get in Touch
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                  We're here to help you find the perfect products for your project. Reach out to us through WhatsApp or fill out the form below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600 mb-2">0739412906</p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <p className="text-gray-600">0739412906</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-600">Contact us via WhatsApp for fastest response</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8 bg-gray-50 rounded-xl lg:rounded-2xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                    Product Enquiries
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Browse our products and enquire directly about any item. Our team will provide pricing and availability information.
                  </p>
                  <a
                    href="/products"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Browse Products
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white border border-gray-200 rounded-xl lg:rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">
                    Send us a Message
                  </h2>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Your message has been prepared for WhatsApp. Please complete sending it in the WhatsApp window that opened.
                      </p>
                      <Button onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        label="Full Name *"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName}
                        required
                      />
                      <Input
                        label="Phone Number *"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        error={errors.phoneNumber}
                        required
                      />
                      <Input
                        label="Email (Optional)"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Input
                        label="Subject *"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={errors.subject}
                        required
                      />
                      <Textarea
                        label="Message *"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        rows={5}
                        required
                      />

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> After submitting, your message will be sent via WhatsApp for the fastest response.
                        </p>
                      </div>

                      <Button type="submit" size="lg" fullWidth>
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Send via WhatsApp
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
