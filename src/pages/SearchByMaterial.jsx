import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function SearchMaterial() {
  const location = useLocation();
  const materialType = location.state?.materialType || 'plastic';

  const allMaterialVideos = [
    {
      id: 1,
      uploader: 'ThezDIY',
      date: '28/04/2025',
      title: 'Recycle Plastic Bottle To Coin Storage',
      material: 'Plastic',
      rating: 4.0,
      thumbnail: '/plastic-thumbnails/coin-storage.jpeg',
    },
    {
      id: 2,
      uploader: 'Nikon Alexandra',
      date: '12/02/2025',
      title: 'Upcycle: Tote Bag Becomes Wall Organizer!',
      material: 'Plastic',
      rating: 4.3,
      thumbnail: '/plastic-thumbnails/tote-bag-organizer.jpeg',
    },
    {
      id: 3,
      uploader: 'Craft Be 9',
      date: '20/04/2025',
      title: 'Easy Lamp With Plastic Bottle',
      material: 'Plastic',
      rating: 4.5,
      thumbnail: '/plastic-thumbnails/plastic-lamp.jpeg',
    },
    {
      id: 4,
      uploader: 'Brothers Make',
      date: '24/01/2025',
      title: 'Turn Plastic Into A Wallet',
      material: 'Plastic',
      rating: 4.7,
      thumbnail: '/plastic-thumbnails/plastic-wallet.jpeg',
    },
    {
      id: 5,
      uploader: 'HomeMade',
      date: '26/03/2025',
      title: 'Changing Plastic Bags into a Laptop Bag',
      material: 'Plastic',
      rating: 4.7,
      thumbnail: '/plastic-thumbnails/laptop-bag.jpeg',
    },
    {
      id: 6,
      uploader: 'LookNam',
      date: '08/04/2025',
      title: 'Recycle Plastic Bottles Flower Vase Easy',
      material: 'Plastic',
      rating: 4.2,
      thumbnail: '/plastic-thumbnails/flower-vase.jpeg',
    },
  ];

  const filteredVideos = allMaterialVideos.filter(video =>
    video.material.toLowerCase() === materialType.toLowerCase()
  );

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header dan Search Bar untuk Halaman Material Detail */}
      <div className="bg-white p-8 md:p-12 shadow-md mb-10">
        {/* Logo WasteWise DIHAPUS dari sini, diasumsikan ada di Layout/Navbar */}
        {/* <img src="/LogoWasteWise.svg" alt="WasteWise Logo" className="mb-6 w-32" /> */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-left">
          Material : {materialType.charAt(0).toUpperCase() + materialType.slice(1)}
        </h1>
        <div className="relative max-w-2xl">
          <input
            type="text"
            placeholder={`Q ${materialType} `}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
        <Link to="/search" className="text-green-700 hover:underline mt-4 inline-block text-lg font-semibold">
            &lt; Browse by Material
        </Link>
      </div>

      {/* Daftar Video/Proyek untuk Material Ini */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 pb-2">
                <p className="text-xs text-gray-500 mb-1 flex justify-between">
                  <span>Uploaded by {video.uploader}</span>
                  <span>{video.date}</span>
                </p>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold text-gray-800 mb-1">{video.title}</h3>
                <p className="text-xs text-gray-600 mb-3">Material: {video.material}</p>
                <div className="flex items-center justify-between">
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                    Watch Now
                  </button>
                  <span className="text-sm text-yellow-500 font-bold">⭐ {video.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {[1, 2, 3, '...', 6, 7].map((page, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                page === 1 ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}