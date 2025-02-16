
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'TempMail' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 glass z-50 premium-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 glass animate-fade-in premium-shadow">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-4 text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
