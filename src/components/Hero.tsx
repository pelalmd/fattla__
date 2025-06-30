import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-[#3c280d] to-[#2a1b08] text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl md:text-6xl font-cinzel font-semibold mb-6 leading-tight">
              Express Your
              <span className="block text-amber-300">Youth</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Discover the latest in youth fashion. Bold, comfortable, and stylish clothing 
              that speaks to your generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-400 text-[#3c280d] px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3c280d] transition-all duration-300">
                View Collection
              </button>
            </div>
          </div>
          <div className="animate-fadeInRight">
            <img 
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Youth Fashion" 
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;