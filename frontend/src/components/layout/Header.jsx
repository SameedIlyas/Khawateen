import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { DesktopNav } from './Header/DesktopNav';
import { MobileNav } from './Header/MobileNav';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      logout();
      navigate('/login');
    };
  
    return (
      <header className="bg-teal-800 text-white">
        <nav className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-white-100 hover:text-teal-300 transition duration-200">
              Khawateen
            </Link>
  
            <DesktopNav user={user} onLogout={handleLogout} />
  
            <button
              className="md:hidden text-teal-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
  
          <MobileNav isOpen={isMenuOpen} user={user} onLogout={handleLogout} />
        </nav>
      </header>
    );
  }
  