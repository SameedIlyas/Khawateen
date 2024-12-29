import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, BookOpen, Users, Home } from 'lucide-react';
import { UserMenu } from './UserMenu';

export function DesktopNav({ user, onLogout }) {
    return (
      <div className="hidden md:flex items-center space-x-8">
        <Link
          to="/dashboard"
          className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          <Home size={20} />
          <span className="text-lg">Dashboard</span>
        </Link>
        <Link
          to="/marketplace"
          className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          <ShoppingBag size={20} />
          <span className="text-lg">Marketplace</span>
        </Link>
        <Link
          to="/learn"
          className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          <BookOpen size={20} />
          <span className="text-lg">Learn</span>
        </Link>
        <Link
          to="/community"
          className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 hover:underline transition duration-200"
        >
          <Users size={20} />
          <span className="text-lg">Community</span>
        </Link>
  
        {user && <UserMenu user={user} onLogout={onLogout} />}
      </div>
    );
  }
  
