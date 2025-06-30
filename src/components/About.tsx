import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <img 
              src="https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Youth Fashion Lifestyle" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="animate-fadeInRight">
            <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-[#3c280d] mb-6">
              About Fattla
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Born from the streets and inspired by youth culture, Fattla represents 
              the bold spirit of the new generation. We create clothing that doesn't 
              just follow trends—it sets them.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower young people to express themselves through 
              fashion that's authentic, comfortable, and unapologetically bold.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-[#3c280d] mb-1">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-[#3c280d] mb-1">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;