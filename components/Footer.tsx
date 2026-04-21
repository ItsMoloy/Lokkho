import Link from 'next/link';
import { FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/academic', label: 'Academic Programs' },
    { href: '/it-training', label: 'IT Training' },
    { href: '/events', label: 'Events & Achievements' },
    { href: '/teachers', label: 'Our Teachers' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Lokkho Academic and IT Institute
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Where Knowledge Meets Technology. Premier education center in Demra, Dhaka 
              offering comprehensive academic coaching and cutting-edge IT training programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/18WNfn1SnA/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 gradient-purple-magenta rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-glow"
              >
                <FaFacebook className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-purple)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-purple)' }}>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-400" style={{ color: 'var(--magenta-accent)' }} />
                <span className="text-gray-300">Demra, Dhaka</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-400" style={{ color: 'var(--magenta-accent)' }} />
                <span className="text-gray-300">+880 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" style={{ color: 'var(--magenta-accent)' }} />
                <span className="text-gray-300">info@lokkho.edu.bd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lokkho Academic and IT Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
