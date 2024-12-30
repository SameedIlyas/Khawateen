// components/learn/CourseGrid.js
import React from 'react';
import { CourseCard } from './courseCard';

export function CourseGrid({ courses, onDelete }) {
  if (!courses.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No courses found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard 
          key={course._id} 
          course={course} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}