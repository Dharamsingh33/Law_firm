import React from 'react';
import { Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-white" />
              <span className="ml-2 text-white text-xl font-bold">Legal Firm</span>
            </div>
            <p className="mt-4 text-gray-300">
              Providing exceptional legal services with integrity and dedication since 1998.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Corporate Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Family Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Real Estate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Civil Litigation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Legal Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}