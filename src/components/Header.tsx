import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/6ctbbd18/Whats-App-Image-2025-06-27-at-10-14-28-PM-removebg-preview.png" 
              alt="Fattla Logo" 
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <h1 className="text-2xl md:text-3xl font-cinzel font-semibold text-[#3c280d]">
              Fattla
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium">
              Contact
            </a>
            <a 
              href="https://www.instagram.com/fattla_?igsh=MXg2MTlkMDliMGw2cA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#3c280d] transition-colors duration-200"
            >
              <span className="font-medium">Follow us</span>
              <Instagram size={20} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#3c280d] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-[#3c280d] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://www.instagram.com/fattla_?igsh=MXg2MTlkMDliMGw2cA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#3c280d] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-medium">Follow us</span>
                <Instagram size={20} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;