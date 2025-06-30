import React from 'react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Urban Streetwear Set",
      price: "$89.99",
      image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Streetwear"
    },
    {
      id: 2,
      name: "Casual Youth Hoodie",
      price: "$49.99",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Hoodies"
    },
    {
      id: 3,
      name: "Trendy Denim Jacket",
      price: "$79.99",
      image: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Jackets"
    },
    {
      id: 4,
      name: "Youth Sport Collection",
      price: "$69.99",
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Sportswear"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-[#3c280d] mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the latest youth fashion trends
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3c280d] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#3c280d]">
                    {product.price}
                  </span>
                  <button className="bg-[#3c280d] text-white px-4 py-2 rounded-lg hover:bg-[#2a1b08] transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;