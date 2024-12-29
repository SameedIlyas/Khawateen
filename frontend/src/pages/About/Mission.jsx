import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-16 bg-teal-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-12">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Empower Women */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center">
            <Target className="w-14 h-14 text-teal-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">Empower Women</h3>
            <p className="text-gray-600">
              Provide rural women entrepreneurs with the tools and resources they need to succeed in business.
            </p>
          </div>
          {/* Build Community */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center">
            <Users className="w-14 h-14 text-teal-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">Build Community</h3>
            <p className="text-gray-600">
              Create a supportive network of mentors and fellow entrepreneurs.
            </p>
          </div>
          {/* Bridge Gaps */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center">
            <Globe className="w-14 h-14 text-teal-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">Bridge Gaps</h3>
            <p className="text-gray-600">
              Connect rural businesses with broader markets and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
