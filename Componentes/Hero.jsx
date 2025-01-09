import React from 'react';

const Hero = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Create Amazing Images with AI
        </h1>
        <p className="text-xl mb-8">
          Transform your ideas into stunning visuals instantly
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold">
          Try It Now
        </button>
      </div>
    </header>
  );
};

export default Hero;
