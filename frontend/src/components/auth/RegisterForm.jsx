import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/api';
import { useAuthStore } from '../../store/authStore';

export function RegisterForm() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      role: formData.get('role'),
      location: formData.get('location'),
    };

    try {
      const { user, token } = await auth.register(userData);
      localStorage.setItem('token', token);
      setUser(user);
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto px-6 py-8 bg-white shadow-lg rounded-xl border border-gray-200">
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 p-4 text-lg"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 p-4 text-lg"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength={6}
          className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 p-4 text-lg"
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-gray-800">Role</label>
        <select
          id="role"
          name="role"
          required
          className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 p-4 text-lg"
        >
          <option value="entrepreneur">Entrepreneur</option>
          <option value="mentor">Mentor</option>
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-gray-800">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 p-4 text-lg"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-600 text-white py-4 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 text-lg"
      >
        {loading ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  );
}
