import React from 'react';
import { Link } from 'react-router-dom';

export default function BrowseByMaterial() {
  const materials = [
    { name: 'Plastic', icon: '/icons/plastic-icon.svg' },
    { name: 'Paper', icon: '/icons/paper-icon.svg' },
    { name: 'Wood', icon: '/icons/wood-icon.svg' },
    { name: 'Electronic', icon: '/icons/electronic-icon.svg' },
    { name: 'Fabric', icon: '/icons/fabric-icon.svg' },
    { name: 'Iron', icon: '/icons/iron-icon.svg' },
    { name: 'Glass', icon: '/icons/glass-icon.svg' },
    { name: 'Rubber', icon: '/icons/rubber-icon.svg' },
  ];

  return (
    <div className="py-10"> 
      <h2 className="bg-black text-white text-3xl font-bold px-4 py-2 mb-8 inline-block text-left rounded-r-lg">
        Browse by Material
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-start">
        {materials.map((material) => (
          <Link
            key={material.name}
            to="/searchmaterial" 
            state={{ materialType: material.name.toLowerCase() }} 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full max-w-[150px] aspect-square justify-center"
          >
            <img src={material.icon} alt={material.name} className="w-20 h-20 mb-3 object-contain" />
            <span className="text-gray-800 font-semibold text-center">{material.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}