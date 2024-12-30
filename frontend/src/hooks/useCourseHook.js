// hooks/useCourses.js
import { useState, useEffect } from 'react';
import { courses } from '../services/api';

export function useCourses() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const data = await courses.getAll();
      setCourseList(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch courses');
      console.error('Error fetching courses:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addCourse = async (courseData) => {
    try {
      setIsLoading(true);
      const newCourse = await courses.create(courseData);
      setCourseList((prev) => [...prev, newCourse]);
      return newCourse;
    } catch (err) {
      setError('Failed to add course');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await courses.delete(courseId);
      setCourseList((prev) => prev.filter((c) => c._id !== courseId));
    } catch (err) {
      setError('Failed to delete course');
      throw err;
    }
  };

  const filterCourses = (courses, filters) => {
    return courses.filter((course) => {
      const languageMatch = 
        filters.languages.length === 0 || 
        filters.languages.includes(course.language);

      const levelMatch = 
        filters.levels.length === 0 || 
        filters.levels.includes(course.difficulty.toLowerCase());

      const typeMatch = 
        filters.types.length === 0 || 
        filters.types.includes(course.type);

      return languageMatch && levelMatch && typeMatch;
    });
  };

  return {
    courseList,
    isLoading,
    error,
    addCourse,
    deleteCourse,
    filterCourses,
    setCourseList,
  };
}