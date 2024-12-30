// components/learn/CourseCard.js
import React from 'react';
import { useState } from 'react';
import { Trash2, ExternalLink } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function CourseCard({ course, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false); 
  const { user } = useAuthStore();
  const canDelete = user?.role === 'admin' || user?._id === course.createdBy?._id;

  const handleDelete = async (courseId) => {
    setIsDeleting(true); // Start loading state
    try {
      if (onDelete) {
        await onDelete(courseId); // Call the onDelete handler passed as prop
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    } finally {
      setIsDeleting(false); // End loading state
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-teal-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-teal-700">{course.title}</h3>
        {canDelete && onDelete && (
          <button
          onClick={() => handleDelete(course._id)}
          className={`flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-teal-700 ${isDeleting ? 'bg-teal-400 cursor-not-allowed' : ''}`}
          disabled={isDeleting}
        >
          {isDeleting ? (
            <span className="animate-spin">...</span> 
          ) : (
            <Trash2 size={20} />
          )}
        </button>
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{course.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
          {course.language}
        </span>
        <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
          {course.difficulty}
        </span>
      </div>
      
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-teal-600 hover:text-teal-700"
      >
        <ExternalLink size={16} className="mr-1" />
        View Course
      </a>
    </div>
  );
}