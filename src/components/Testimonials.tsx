import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Wilson',
    role: 'Business Owner',
    content: 'The team provided exceptional service in handling our corporate restructuring. Their expertise and attention to detail were invaluable.',
    rating: 5,
  },
  {
    name: 'Lisa Martinez',
    role: 'Real Estate Developer',
    content: 'Outstanding legal support for our real estate transactions. They consistently deliver results while maintaining clear communication.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Family Client',
    content: 'Compassionate and professional handling of our family matter. They made a difficult process much easier to navigate.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600">
            What our clients say about our services
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="mt-4">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}