import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          NewsToday
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">World</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Politics</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Business</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Technology</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="md:hidden text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
