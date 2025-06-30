import React, { useState } from 'react';
import { Instagram, Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="bg-[#3c280d] text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new arrivals, exclusive deals, and youth fashion trends
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-amber-400 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-amber-400 text-[#3c280d] px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>

          <div className="flex justify-center items-center space-x-4">
            <span className="text-gray-200">Follow us on Instagram</span>
            <a 
              href="https://www.instagram.com/fattla_?igsh=MXg2MTlkMDliMGw2cA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;