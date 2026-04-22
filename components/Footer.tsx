import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-3xl font-black text-primary tracking-tighter mb-6 block">
              Lokkho
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premier academic coaching and IT training institute in Demra, Dhaka.
              Empowering students through knowledge and technological innovation since 2020.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/18WNfn1SnA/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
              >
                <FaFacebook size={18} />
              </a>
              <a href="https://wa.me/+8801853102104" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { n: 'Our Programs', h: '/academic' },
                { n: 'IT Training', h: '/it-training' },
                { n: 'Our Teachers', h: '/teachers' },
                { n: 'Events', h: '/events' },
                { n: 'About Us', h: '/about' },
              ].map((link) => (
                <li key={link.n}>
                  <Link href={link.h} className="text-gray-500 hover:text-primary text-sm transition-colors">
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <FaMapMarkerAlt className="mt-1 text-primary shrink-0" />
                <a href="https://google.com/maps?q=Konapara,+Demra,+Dhaka,+1362&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Konapara, Demra, Dhaka - 1362,<br />Bangladesh
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaPhoneAlt className="text-primary shrink-0" />
                <a href="tel:+8801853102104" className="hover:text-primary">01853-102104</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaEnvelope className="text-primary shrink-0" />
                <a href="mailto:info@lokkho.academy" className="hover:text-primary">info@lokkho.academy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-widest text-xs">Admissions</h3>
            <p className="text-gray-500 text-sm mb-4">Admissions open for Class 6-12 and all IT batches.</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white text-xs font-bold px-6 py-3 rounded-lg hover:bg-primary-dark transition-all"
            >
              Get Prospectus
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
          <p>© {currentYear} Lokkho Academic & IT Institute. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
