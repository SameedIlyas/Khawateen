import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { products } from '../../services/api';

export function AddProductForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleFileChange = (e) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setImageFile(file);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        const value = data[key];
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      if (imageFile) {
        formData.append('image', imageFile);
      }

      const newProduct = await products.create(formData);
      reset();
      setImageFile(null);
      onSuccess?.(newProduct);
    } catch (err) {
      setError('Failed to add product. Please try again.');
      console.error('Add product error:', err);
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

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-teal-700">
          Product Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Title is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-teal-700">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description', { required: 'Description is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-teal-700">
          Price (PKR)
        </label>
        <input
          type="number"
          id="price"
          {...register('price', {
            required: 'Price is required',
            min: { value: 0, message: 'Price must be positive' },
          })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        />
        {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-teal-700">
          Category
        </label>
        <select
          id="category"
          {...register('category', { required: 'Category is required' })}
          className="mt-2 block w-full rounded-lg border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        >
          <option value="">Select a category</option>
          <option value="Handicrafts">Handicrafts</option>
          <option value="Food">Food</option>
          <option value="Textiles">Textiles</option>
          <option value="Art">Art</option>
        </select>
        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-teal-700">
          Upload Product Image
        </label>
        <input
          type="file"
          id="imageUrl"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2 block w-full border-teal-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3"
        />
        {imageFile && <p className="mt-2 text-sm text-gray-500">Selected file: {imageFile.name}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 text-lg"
      >
        {isSubmitting ? 'Adding Product...' : 'Add Product'}
      </button>
    </form>
  );
}
