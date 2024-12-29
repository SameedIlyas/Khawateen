import React from 'react';

export function TeamMember({ member }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-md"
      />
      <h3 className="text-xl font-semibold text-teal-700">{member.name}</h3>
      <p className="text-teal-600">{member.role}</p>
      <p className="text-gray-600 mt-4">{member.description}</p>
    </div>
  );
}
