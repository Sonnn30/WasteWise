import React from 'react';

export default function RecommendVid() {
  const videos = [
    {
      id: 1,
      uploader: 'LookNam',
      date: '08/04/2025',
      title: 'Recycle Plastic Bottles Flower Vase Easy',
      material: 'Plastic',
      rating: 4.2,
      thumbnail: 'thumbnail.svg', // ganti dengan gambar yang kamu punya
    },
    {
      id: 2,
      uploader: 'HomeMade',
      date: '26/03/2025',
      title: 'Changing Plastic Bags into a Laptop Bag',
      material: 'Plastic',
      rating: 4.7,
      thumbnail: 'thumbnail.svg',
    },
    {
      id: 3,
      uploader: 'Nixon Raine',
      date: '23/04/2025',
      title: 'Upcycle: Tote Bag Becomes Wall Organizer!',
      material: 'Kain (polypropylene)',
      rating: 4.5,
      thumbnail: 'thumbnail.svg',
    },
  ];

  return (
    <div className="pl-4 border-gray-400 mt-20 mr-30 -mx-15">
      {videos.map((video) => (
        <div key={video.id} className="bg-white rounded-lg shadow p-2 mb-4">
          <p className="text-xs text-gray-500 mb-1">Uploaded by {video.uploader}</p>
          <p className="text-xs text-gray-400 mb-2">{video.date}</p>
          <img src={video.thumbnail} alt={video.title} className="rounded mb-2 w-full h-auto" />
          <p className="text-sm font-semibold">{video.title}</p>
          <p className="text-xs text-gray-600">Material: {video.material}</p>
          <div className="flex items-center justify-between mt-2">
            <button className="bg-green-600 text-white px-3 py-1 rounded text-xs">Watch Now</button>
            <span className="text-sm text-yellow-500">⭐ {video.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
