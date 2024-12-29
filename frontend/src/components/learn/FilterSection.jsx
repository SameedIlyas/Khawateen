import React from 'react';

export function FilterSection({ title, options, selectedValues, onChange }) {
  return (
    <div className="p-6 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-teal-700 mb-4">{title}</h2>
      <div className="space-y-2">
        {options.map(({ value, label }) => (
          <label key={value} className="flex items-center text-teal-600 hover:text-indigo-800 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.includes(value)}
              onChange={() => onChange(value)}
              className="form-checkbox text-indigo-600 rounded-md transition-all duration-200"
            />
            <span className="ml-2">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
