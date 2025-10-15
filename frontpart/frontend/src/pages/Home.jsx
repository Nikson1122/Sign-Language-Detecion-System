// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Sign Language Detection System</h1>
      <p className="text-gray-700 text-lg mb-6"></p>
    <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/sign.png" // should be in public/images
          alt="Hero Image"
          className="w-full h-[70vh] object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Home;
