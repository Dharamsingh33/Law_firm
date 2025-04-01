import React from 'react';

const team = [
  {
    name: 'Dharam_Person1',
    role: 'Managing Partner',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: '20+ years experience in corporate law and civil litigation.',
  },
  {
    name: 'Singh_person2',
    role: 'Senior Partner',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Specializes in real estate law and business transactions.',
  },
  {
    name: 'Vislavath_person3',
    role: 'Partner',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Expert in family law and estate planning.',
  },
];

export function Team() {
  return (
    <div id="team" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Legal Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experienced attorneys dedicated to serving your legal needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {team.map((person) => (
            <div key={person.name} className="space-y-4">
              <div className="aspect-w-3 aspect-h-3">
                <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt={person.name} />
              </div>
              <div className="text-center">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="text-blue-600 font-medium">{person.role}</p>
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  <p>{person.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}