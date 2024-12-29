import React from 'react';
import { Link } from 'react-router-dom';

export function MobileNav({ isOpen, user, onLogout }) {
    if (!isOpen) return null;
  
    return (
      <div className="md:hidden mt-4 space-y-4 bg-teal-800 p-6 rounded-md shadow-lg">
        <Link
          to="/dashboard"
          className="block py-3 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          Dashboard
        </Link>
        <Link
          to="/marketplace"
          className="block py-3 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          Marketplace
        </Link>
        <Link
          to="/learn"
          className="block py-3 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          Learn
        </Link>
        <Link
          to="/community"
          className="block py-3 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          Community
        </Link>
        {user && (
          <>
            <div className="py-3 text-teal-100 text-lg">Welcome, {user.name}</div>
            <button
              onClick={onLogout}
              className="block w-full text-left py-3 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
            >
              Logout
            </button>
          </>
        )}
      </div>
    );
  }
  
