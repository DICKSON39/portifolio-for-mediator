import { useState } from 'react';
import { Menu, X, Phone, Scale } from 'lucide-react';

// Define the interface for TypeScript
interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="bg-red-700 p-2 rounded-lg">
              <Scale className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                ALBERT KAGWANJA
              </span>
              <span className="text-xs font-semibold text-red-700 uppercase tracking-widest">
                Professional Mediator
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* CHANGED: This now triggers the Modal instead of just calling */}
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-red-800 transition-all transform hover:scale-105 shadow-md"
            >
              <Phone size={18} />
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              {/* CHANGED: Mobile button also triggers the Modal */}
              <button
                onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                }}
                className="flex items-center justify-center gap-2 w-full bg-red-700 text-white px-5 py-3 rounded-lg font-bold"
              >
                <Phone size={20} />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
