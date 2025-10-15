// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
      <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </li>
     <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/features" className="hover:text-blue-600">Features</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
