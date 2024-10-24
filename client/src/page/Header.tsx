import React from 'react';
import {Link }from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white text-black p-4 shadow-md z-50 mb-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to={"/"}><h2 className="text-3xl font-bold text-teal-700">BlendIn</h2></Link>

       

        {/* Auth Buttons */}
        <div className="flex space-x-4">
  <a
    href="/login"
    className="bg-black text-white py-2 px-6 rounded-full border-2 border-transparent hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 shadow-lg"
  >
    Login
  </a>
  <a
    href="/signup"
    className="bg-gray-700 text-white py-2 px-6 rounded-full border-2 border-transparent hover:bg-gray-600 hover:border-gray-500 transition-all duration-300 shadow-lg"
  >
    Sign Up
  </a>
</div>


        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <button className="text-blue-600 focus:outline-none">
            {/* Icon for mobile menu (you can use a hamburger icon here) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
