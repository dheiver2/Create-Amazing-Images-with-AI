import React from 'react';
import { Wand2, Clock, Shield } from 'lucide-react';

const features = [
  { icon: Wand2, title: 'AI Generation', desc: 'State-of-the-art AI models' },
  { icon: Clock, title: 'Fast Results', desc: 'Get images in seconds' },
  { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security' }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <feature.icon className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
