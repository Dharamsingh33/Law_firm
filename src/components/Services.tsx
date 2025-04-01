import React from 'react';
import { Briefcase, Home, Users, Building2, Scale, FileText } from 'lucide-react';

const services = [
  {
    name: 'Corporate Law',
    description: 'Expert guidance for businesses of all sizes on corporate governance, mergers, and acquisitions.',
    icon: Building2,
  },
  {
    name: 'Family Law',
    description: 'Compassionate representation in divorce, custody, and other family-related legal matters.',
    icon: Users,
  },
  {
    name: 'Real Estate',
    description: 'Comprehensive legal services for residential and commercial real estate transactions.',
    icon: Home,
  },
  {
    name: 'Business Law',
    description: 'Strategic advice on business formation, contracts, and commercial litigation.',
    icon: Briefcase,
  },
  {
    name: 'Civil Litigation',
    description: 'Skilled representation in civil disputes and litigation proceedings.',
    icon: Scale,
  },
  {
    name: 'Estate Planning',
    description: 'Thorough estate planning services including wills, trusts, and probate matters.',
    icon: FileText,
  },
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Legal Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive legal solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}