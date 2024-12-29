import React, { useState } from 'react';
import { LogOut } from 'lucide-react';

export function UserMenu({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* User Info Container */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="relative">
          <img
            src={'/avatar.png'}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-teal-600 cursor-pointer"
            onClick={toggleMenu}
          />
          <div
            className={`absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white transform transition-all duration-200 ${
              isMenuOpen ? 'scale-125' : ''
            }`}
          ></div>
        </div>

        {/* Username */}
        <span className="text-teal-100 font-semibold text-lg cursor-pointer" onClick={toggleMenu}>
          {user.name}
        </span>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-teal-800 text-white rounded-lg shadow-lg p-2 z-10">
          <div
            onClick={onLogout}
            className="py-2 px-4 text-sm text-teal-100 hover:text-teal-200 cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center space-x-2">
              <LogOut size={18} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
