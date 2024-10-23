import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-600">BlendIn</h2>
        <nav className="flex space-x-4">
          <a
            href="/"
            className="transition-colors duration-300 hover:text-blue-800"
          >
            Home
          </a>
          <a
            href="/about"
            className="transition-colors duration-300 hover:text-blue-800"
          >
            About Us
          </a>
          <a
            href="/events"
            className="transition-colors duration-300 hover:text-blue-800"
          >
            Events
          </a>
        </nav>
        <div className="flex space-x-4">
          <a
            href="/login"
            className="bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
