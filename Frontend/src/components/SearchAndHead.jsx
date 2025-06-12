import React from 'react';

export default function SearchAndHead() {
  return (
<div className="bg-white p-8 md:p-12 mb-10">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-left">
    Find Your New Recycling Idea
  </h1>

  <div className="w-[1200px] relative"> {/* Container harus relative */}
    <input
      type="text"
      placeholder="What do you have in mind..."
      className="w-full py-3 pl-12 pr-4 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500 text-lg shadow-sm"
    />
    {/* Ikon ditempatkan secara absolute */}
    <img
      src="search.svg"
      alt="Search Icon"
      className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
    />
  </div>
</div>

  );
}