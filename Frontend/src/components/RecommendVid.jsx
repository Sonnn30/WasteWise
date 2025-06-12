import React from 'react';
import { Link } from 'react-router-dom';

export default function RecommendVid({ isLatestTutorials }) {
  const latestTutorialVideos = [
    {
      id: 1,
      uploader: 'LookNam',
      date: '08/04/2025',
      title: 'Recycle Plastic Bottles Flower Vase Easy',
      material: 'Plastic',
      rating: 4.2,
      thumbnail: 'dummysampah.svg', 
    },
    {
      id: 2,
      uploader: 'HomeMade',
      date: '26/03/2025',
      title: 'Changing Plastic Bags into a Laptop Bag',
      material: 'Plastic',
      rating: 4.7,
      thumbnail: 'dummysampah.svg',
    },
    {
      id: 3,
      uploader: 'Nixon Raine',
      date: '23/04/2025',
      title: 'Upcycle: Tote Bag Becomes Wall Organizer!',
      material: 'Kain (polypropylene)',
      rating: 4.5,
      thumbnail: 'dummysampah.svg',
    },
  ];

  // Our Latest Video Tutorials

  const videosToDisplay = isLatestTutorials ? latestTutorialVideos : defaultVideos;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {videosToDisplay.map((video) => (
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
              <Link to='/video'>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                Watch Now
              </button>
              </Link>
              <span className="text-sm text-yellow-500 font-bold">⭐ {video.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
