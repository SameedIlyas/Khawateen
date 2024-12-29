import React from 'react';
import { LogOut } from 'lucide-react';

export function UserMenu({ user, onLogout }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-emerald-200">
        Welcome, {user.name}
      </span>
      <button
        onClick={onLogout}
        className="flex items-center space-x-1 hover:text-emerald-200"
      >
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </div>
  );
}
