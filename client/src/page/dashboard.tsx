// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-300">Log In</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to BlendIn</h1>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} BlendIn. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
