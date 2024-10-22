import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyWebsite
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition duration-300">Home</a>
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition duration-300">About</a>
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition duration-300">Services</a>
          <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition duration-300">Contact</a>
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
