import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/home">
          <div>
            <h1 className="text-3xl font-bold text-teal-700">BlendIn</h1>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-teal-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-4 items-center`}
        >
          <Link to="/Explore">
            <Button
              variant="ghost"
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
            >
              Explore
            </Button>
          </Link>
          <Link to="/MyGroups">
            <Button
              variant="ghost"
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
            >
              My Groups
            </Button>
          </Link>
          <Link to="/friends">
            <Button
              variant="ghost"
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
            >
              Community
            </Button>
          </Link>
          <Link to="/cultural">
            <Button
              variant="ghost"
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
            >
              Cultural Event
            </Button>
          </Link>
          <Link to="/Profile">
            <Button
              variant="ghost"
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
            >
              Profile
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
