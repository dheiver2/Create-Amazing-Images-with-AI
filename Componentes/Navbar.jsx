import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <span className="font-bold text-xl">AI Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600">Features</a>
          <a href="#pricing" className="text-gray-600">Pricing</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
