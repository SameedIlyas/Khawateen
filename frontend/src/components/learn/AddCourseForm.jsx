import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { courses } from '../../services/api';

export function AddCourseForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Send data to the courses API
      const newCourse = await courses.create(data);
      reset(); // Reset the form
      onSuccess?.(newCourse); // Call the onSuccess callback
    } catch (err) {
      setError('Failed to add course. Please try again.');
      console.error('Add course error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-teal-200">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Course Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-teal-700">
          Course Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Title is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-teal-700">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description')}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
      </div>

      {/* Type */}
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-teal-700">
          Type
        </label>
        <select
          id="type"
          {...register('type', { required: 'Type is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        >
          <option value="video">Video</option>
          <option value="article">Article</option>
          <option value="course">Course</option>
        </select>
        {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>}
      </div>

      {/* Language */}
      <div>
        <label htmlFor="language" className="block text-sm font-medium text-teal-700">
          Language
        </label>
        <select
          id="language"
          {...register('language', { required: 'Language is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        >
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Pashto">Pashto</option>
        </select>
        {errors.language && <p className="mt-1 text-sm text-red-600">{errors.language.message}</p>}
      </div>

      {/* Difficulty Level */}
      <div>
        <label htmlFor="difficulty" className="block text-sm font-medium text-teal-700">
          Difficulty Level
        </label>
        <select
          id="difficulty"
          {...register('difficulty', { required: 'Difficulty level is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        {errors.difficulty && <p className="mt-1 text-sm text-red-600">{errors.difficulty.message}</p>}
      </div>

      {/* Link */}
      <div>
        <label htmlFor="link" className="block text-sm font-medium text-teal-700">
          Course URL
        </label>
        <input
          type="url"
          id="link"
          {...register('link', { required: 'Course URL is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        />
        {errors.link && <p className="mt-1 text-sm text-red-600">{errors.link.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 text-lg"
      >
        {isSubmitting ? 'Adding Course...' : 'Add Course'}
      </button>
    </form>
  );
}
