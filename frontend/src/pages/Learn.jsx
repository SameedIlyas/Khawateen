// pages/Learn.js
import React, { useState } from 'react';
import { FilterSection } from '../components/learn/FilterSection';
import { CourseGrid } from '../components/learn/CourseGrid';
import { AddCourseForm } from '../components/learn/AddCourseForm';
import { useCourses } from '../hooks/useCourseHook';
import { useAuthStore } from '../store/authStore';

const LANGUAGE_OPTIONS = [
  { value: 'English', label: 'English' },
  { value: 'Urdu', label: 'Urdu' },
  { value: 'Pashto', label: 'Pashto' }
];

const TYPE_OPTIONS = [
  { value: 'Video', label: 'Video' },
  { value: 'Article', label: 'Article' },
  { value: 'Course', label: 'Course' }
];

const LEVEL_OPTIONS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' }
];

export function Learn() {
  const { user } = useAuthStore();
  const { courseList, isLoading, error, addCourse, deleteCourse, filterCourses, setCourseList } = useCourses();
  
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({
    languages: [],
    types: [],
    levels: [],
  });

  const toggleFilter = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      languages: [],
      types: [],
      levels: [],
    });
  };

  const handleCourseCreated = async (courseData) => {
    console.log("Creating course with data:", courseData);
    try {
      await addCourse(courseData);
      setShowForm(false);
    } catch (error) {
      console.error('Failed to create course:', error.response?.data || error.message);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);
      const updatedCourseList = courseList.filter((course) => course._id !== courseId);
      setcourseList(updatedCourseList);
    } catch (error) {
      console.error('Failed to delete course:', error);
    }
  };

  const filteredCourses = filterCourses(courseList, filters);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-lg text-teal-600">Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-teal-700">Learning Resources</h1>
        {Object.values(filters).some(arr => arr.length > 0) && (
          <button
            onClick={clearFilters}
            className="text-sm text-teal-600 hover:text-teal-700"
          >
            Clear all filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FilterSection
          title="Filter by Language"
          options={LANGUAGE_OPTIONS}
          selectedValues={filters.languages}
          onChange={(value) => toggleFilter('languages', value)}
        />
        <FilterSection
          title="Filter by Type"
          options={TYPE_OPTIONS}
          selectedValues={filters.types}
          onChange={(value) => toggleFilter('types', value)}
        />
        <FilterSection
          title="Filter by Level"
          options={LEVEL_OPTIONS}
          selectedValues={filters.levels}
          onChange={(value) => toggleFilter('levels', value)}
        />
      </div>

      {['mentor', 'admin'].includes(user?.role) && (
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          >
            {showForm ? 'Cancel' : 'Add New Course'}
          </button>

          {showForm && (
            <div className="mt-4">
              <AddCourseForm onSuccess={handleCourseCreated} />
            </div>
          )}
        </div>
      )}

      <CourseGrid 
        courses={filteredCourses}
        onDelete={handleDeleteCourse}
      />
    </div>
  );
}