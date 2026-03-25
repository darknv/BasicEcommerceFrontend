import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Upgrade Your Lifestyle</h1>
        <p className="text-xl mb-8 text-gray-300">Discover premium products curated just for you.</p>
        <Link 
          to="/product" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Categories */}
      <section className="p-12">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Electronics', 'Fashion', 'Accessories'].map((cat) => (
            <div key={cat} className="bg-white p-10 rounded-xl shadow-md text-center hover:shadow-lg transition cursor-pointer border border-gray-200">
              <h3 className="text-xl font-semibold">{cat}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;