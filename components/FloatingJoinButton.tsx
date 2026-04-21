import Link from 'next/link';
import { FaUserPlus } from 'react-icons/fa';

const FloatingJoinButton = () => {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 md:hidden flex items-center gap-2 px-4 py-3 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-glow gradient-purple-magenta"
    >
      <FaUserPlus className="text-sm" />
      <span className="font-medium">Join Now</span>
    </Link>
  );
};

export default FloatingJoinButton;
