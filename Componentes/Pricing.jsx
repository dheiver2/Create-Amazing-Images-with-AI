import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    features: ['5 images/day', 'Basic resolution']
  },
  {
    name: 'Pro',
    price: '29',
    features: ['100 images/day', 'HD resolution', 'API access'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited images', '4K resolution', 'Custom features']
  }
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow ${
                plan.popular ? 'border-2 border-purple-600' : ''
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {plan.popular && 'Most Popular'}
              </p>
              <div className="text-4xl font-bold text-purple-600 mb-4">
                {plan.price === 'Custom' ? (
                  <span>Custom</span>
                ) : (
                  `$${plan.price}/month`
                )}
              </div>
              <ul className="space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
