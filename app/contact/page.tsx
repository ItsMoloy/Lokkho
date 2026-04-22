'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formState.name}! We will contact you soon.`);
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-0">

        {/* --- Contact Hero Section --- */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-accent to-primary-light" />

          {/* Decorative mesh */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
            <FadeIn>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block border border-white/30">Contact Us</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Get in<br />Touch
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-3xl mx-auto">
                Whether you want to enroll your child or join our IT batches, we are here to help. Visit us in Demra or reach out via phone/WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="#contact-form" className="btn-primary flex items-center gap-2 px-10 py-5 bg-accent text-charcoal hover:bg-white hover:text-primary border-none shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
                  Send Message <FaPaperPlane />
                </a>
                <a href="#info" className="btn-secondary flex items-center gap-2 px-10 py-5 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                  <FaPhoneAlt size={14} /> Call Now
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Contact Info Grid --- */}
        <section className="section-padding bg-soft-violet/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Info Column */}
              <div className="col-span-1 space-y-6">
                <FadeIn direction="left">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-primary">
                    <h3 className="text-xl font-bold mb-6 text-charcoal tracking-tight">Contact Information</h3>

                    <div className="space-y-6">
                      <a href="https://google.com/maps?q=Konapara,+Demra,+Dhaka,+1362&hl=en" target="_blank" rel="noopener noreferrer" className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-soft-violet flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0"><FaMapMarkerAlt /></div>
                        <div>
                          <p className="text-[10px] uppercase font-black text-gray-400">Our Location</p>
                          <p className="text-sm font-bold text-charcoal group-hover:text-primary transition-all">Konapara, Demra, Dhaka - 1362, Bangladesh</p>
                        </div>
                      </a>

                      <a href="tel:+8801853102104" className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-soft-violet flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0"><FaPhoneAlt /></div>
                        <div>
                          <p className="text-[10px] uppercase font-black text-gray-400">Call Us</p>
                          <p className="text-sm font-bold text-charcoal group-hover:text-primary transition-all">01853-102104</p>
                        </div>
                      </a>

                      <a href="https://wa.me/+8801853102104" className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shrink-0"><FaWhatsapp /></div>
                        <div>
                          <p className="text-[10px] uppercase font-black text-gray-400">WhatsApp</p>
                          <p className="text-sm font-bold text-charcoal group-hover:text-green-500 transition-all">+880 1853-102104</p>
                        </div>
                      </a>

                      <a href="mailto:info@lokkho.academy" className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-soft-violet flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0"><FaEnvelope /></div>
                        <div>
                          <p className="text-[10px] uppercase font-black text-gray-400">Email</p>
                          <p className="text-sm font-bold text-charcoal group-hover:text-primary transition-all">info@lokkho.academy</p>
                        </div>
                      </a>

                      <a href="https://www.facebook.com/share/18WNfn1SnA/" className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0"><FaFacebook /></div>
                        <div>
                          <p className="text-[10px] uppercase font-black text-gray-400">Facebook</p>
                          <p className="text-sm font-bold text-charcoal group-hover:text-blue-600 transition-all">Lokkho Institute</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Form Column */}
              <div className="col-span-1 lg:col-span-2">
                <FadeIn direction="right">
                  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 text-charcoal">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Full Name</label>
                          <input
                            type="text"
                            required
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm"
                            placeholder="Your Name"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Phone Number</label>
                          <input
                            type="tel"
                            required
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm"
                            placeholder="Your Phone"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Your Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm"
                          placeholder="How can we help you?"
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn-primary w-full md:w-auto px-12 py-5 flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark"
                      >
                        Submit Request <FaPaperPlane size={14} />
                      </button>
                    </form>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* --- Map Placeholder --- */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="h-[400px] w-full bg-soft-violet rounded-3xl overflow-hidden relative border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.271165152203!2d90.498425!3d23.7093229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6ef17f2e519%3A0x6a0a006c00640000!2sDemra%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1713750000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
