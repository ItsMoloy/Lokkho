'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaClock,
  FaPaperPlane,
  FaUser
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-violet-600 to-violet-800">
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(135deg, var(--primary-violet) 0%, #8B5CF6 100%)'
            }}
          />
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <FaPhoneAlt size={40} />
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              Get in touch with us to start your learning journey at Lokkho Institute
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Get in Touch"
              subtitle="We're here to help you achieve your educational goals"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 
                  className="text-2xl font-bold mb-8"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-violet)' }}
                    >
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--dark-charcoal)' }}>
                        Address
                      </h4>
                      <p className="text-gray-600">
                        Demra, Dhaka<br />
                        Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-violet)' }}
                    >
                      <FaPhoneAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--dark-charcoal)' }}>
                        Phone
                      </h4>
                      <p className="text-gray-600 mb-2">
                        +880 XXXXXXXXXX
                      </p>
                      <Link
                        href="tel:+880XXXXXXXXXX"
                        className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg font-medium transition-colors duration-200 hover:shadow-lg"
                        style={{ backgroundColor: 'var(--primary-violet)' }}
                      >
                        <FaPhoneAlt className="text-sm" />
                        Call Now
                      </Link>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--dark-charcoal)' }}>
                        WhatsApp
                      </h4>
                      <p className="text-gray-600 mb-2">
                        +880 XXXXXXXXXX
                      </p>
                      <Link
                        href="https://wa.me/880XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg font-medium transition-colors duration-200 hover:shadow-lg"
                        style={{ backgroundColor: '#25D366' }}
                      >
                        <FaWhatsapp className="text-sm" />
                        Chat on WhatsApp
                      </Link>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-violet)' }}
                    >
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--dark-charcoal)' }}>
                        Email
                      </h4>
                      <p className="text-gray-600">
                        info@lokkho.edu.bd
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-violet)' }}
                    >
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--dark-charcoal)' }}>
                        Office Hours
                      </h4>
                      <p className="text-gray-600">
                        Saturday - Thursday: 9:00 AM - 8:00 PM<br />
                        Friday: 3:00 PM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4" style={{ color: 'var(--dark-charcoal)' }}>
                    Follow Us
                  </h4>
                  <Link
                    href="https://www.facebook.com/share/18WNfn1SnA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-blue-700"
                  >
                    <FaFacebook />
                    Facebook
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 
                  className="text-2xl font-bold mb-8"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--dark-charcoal)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--dark-charcoal)' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--dark-charcoal)' }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Find Us"
              subtitle="Visit our campus in Demra, Dhaka"
            />
            <div className="rounded-xl overflow-hidden shadow-xl" style={{ boxShadow: 'var(--box-shadow)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9327408177!2d90.4325!3d23.6850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQxJzA2LjAiTiA5MMKwMjUnMzYuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokkho Institute Location"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Quick Actions"
              subtitle="Explore what Lokkho Institute has to offer"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/academic"
                className="p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaUser className="text-white text-2xl" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Academic Programs
                </h4>
                <p className="text-gray-600">
                  Explore our academic coaching programs
                </p>
              </Link>

              <Link
                href="/it-training"
                className="p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  IT Training
                </h4>
                <p className="text-gray-600">
                  Discover our technology courses
                </p>
              </Link>

              <Link
                href="/teachers"
                className="p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Meet Our Team
                </h4>
                <p className="text-gray-600">
                  Get to know our expert teachers
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
