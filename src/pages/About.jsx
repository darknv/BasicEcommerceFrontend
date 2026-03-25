import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 border-b-4 border-gray-500 inline-block">
        About Our Store
      </h1>
      
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our E-commerce platform. This project is built using the 
        <span className="font-bold text-blue-600"> MERN Stack</span> (MongoDB, Express, React, and Node.js). 
        Our mission is to provide a seamless shopping experience with a fast, modern interface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Who We Are</h3>
          <p className="text-gray-600">A passionate team of developers dedicated to building high-performance web applications.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Our Promise</h3>
          <p className="text-gray-600">Quality products, secure payments, and 24/7 customer support for every user.</p>
        </div>
      </div>
    </div>
  );
};

export default About;