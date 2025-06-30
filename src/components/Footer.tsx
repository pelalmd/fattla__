import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://i.ibb.co/6ctbbd18/Whats-App-Image-2025-06-27-at-10-14-28-PM-removebg-preview.png" 
                alt="Fattla Logo" 
                className="h-8 w-8"
              />
              <h3 className="text-2xl font-cinzel font-semibold">Fattla</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering youth through authentic fashion. Bold, comfortable, and 
              unapologetically stylish clothing for the new generation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/fattla_?igsh=MXg2MTlkMDliMGw2cA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-400">info@fattla.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Fattla. All rights reserved. Made with passion for youth fashion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;