import React from 'react';
import { Link } from 'react-router-dom';

const materials = [
  { id: 'plastic', name: 'Plastic' },
  { id: 'paper', name: 'Paper' },
  { id: 'metal', name: 'Metal' },
  { id: 'glass', name: 'Glass' },
  { id: 'fabric', name: 'Fabric' },
  { id: 'wood', name: 'Wood' },
  { id: 'electronics', name: 'Electronics' },
];

export default function BrowseByMaterial() {
  return (
    <div className="mx-10 my-10 p-8 bg-green-50 rounded-2xl shadow-md max-w-5xl">
      <h2 className="text-4xl font-bold text-green-900 mb-6">Browse Projects by Material</h2>
      <p className="text-green-800 mb-8 text-lg max-w-xl">
        Select a material below to explore eco-friendly projects made from that material. Find inspiration and learn how to recycle creatively!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {materials.map(material => (
          <Link
            key={material.id}
            to={`/searchmaterial?material=${material.id}`}
            className="bg-green-700 hover:bg-green-800 text-white text-center py-4 rounded-xl font-semibold shadow-md transition"
          >
            {material.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
