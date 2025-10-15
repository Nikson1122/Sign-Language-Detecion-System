// src/pages/Home.jsx
import React from "react";

    const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <header className="bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
    
        <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>

    
        <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Features</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        </nav>
    </div>
    </header>

      {/* Full-page Image below Navbar */}
      <section className="flex-grow w-full">
        <img
          src="images/sign.png"
          alt="Hero Image"
          className="w-full h-[calc(100vh-64px)] object-cover"
        />
      </section>
    </div>
  );
};

export default Home;

