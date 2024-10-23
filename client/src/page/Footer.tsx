import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} BlendIn. All rights reserved.</p>
        </div>
        <nav className="flex space-x-4">
          <a href="/privacy-policy" className="hover:underline" aria-label="Privacy Policy">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline" aria-label="Terms of Service">
            Terms of Service
          </a>
          <a href="/feedback" className="hover:underline" aria-label="Contact Us">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
