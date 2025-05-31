import React from 'react';

export default function SearchAndHead() {
  return (
    <div className="bg-white p-8 md:p-12 shadow-md mb-10">
     
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-left">
        Find Your New Recycling Idea
      </h1>
      <div className="relative max-w-2xl"> 
        <input
          type="text"
          placeholder="Q what do you have in mind.."
          className="w-full py-3 pl-12 pr-4 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500 text-lg shadow-sm"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}