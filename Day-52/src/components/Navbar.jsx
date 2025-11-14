import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Gurveer Singh
          </Link>
          <div className="flex gap-8 items-center">
            <Link 
              to='/' 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              to='/about' 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            <Link 
              to='/product' 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/product') 
                  ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Products
            </Link>
            <Link 
              to='/contact' 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
