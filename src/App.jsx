import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageGenerator from './components/ImageGenerator';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageGenerator />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
