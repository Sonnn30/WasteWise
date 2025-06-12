import React, { useState } from 'react';

export default function Desc() {
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(20);
  const [userAction, setUserAction] = useState(null); // 'liked', 'disliked', or null

  const handleLike = () => {
    if (userAction === 'liked') {
      setLikes(likes - 1);
      setUserAction(null);
    } else if (userAction === 'disliked') {
      setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserAction('liked');
    } else {
      setLikes(likes + 1);
      setUserAction('liked');
    }
  };

  const handleDislike = () => {
    if (userAction === 'disliked') {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else if (userAction === 'liked') {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserAction('disliked');
    } else {
      setDislikes(dislikes + 1);
      setUserAction('disliked');
    }
  };

  return (
    <div className="p-5 ml-23">
      {/* Description Section */}
      <div className="mb-3 w-[745px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="border-2 px-1.5 py-1 w-[120px] font-semibold rounded-lg text-[18px]">
            Description
          </h3>
          {/* Like and Dislike */}
          <div className="border px-4 py-2 rounded-md flex gap-4 items-center">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 ${
                  userAction === 'liked' ? 'text-green-700 font-semibold' : 'text-green-600'
                } hover:scale-105 transition`}
              >
                <img src="like.svg" className="w-5 h-5" alt="Like" />
                <span>{likes}</span>
              </button>
              <button
                onClick={handleDislike}
                className={`flex items-center gap-1 ${
                  userAction === 'disliked' ? 'text-red-700 font-semibold' : 'text-red-600'
                } hover:scale-105 transition`}
              >
                <img src="dislike.svg" className="w-5 h-5" alt="Dislike" />
                <span>{dislikes}</span>
              </button>
          </div>
        </div>
        <p>
          This video shows how to turn an old shopping bag into a useful hanging organizer.
          It's an easy and eco-friendly DIY project that helps you recycle while keeping your
          things neat and tidy. Perfect for organizing makeup, tools, or small items at home.
        </p>
      </div>

      {/* Uploader + Like/Dislike Section */}
      <div className="mt-5">
        <h3 className="border-2 px-4 py-1 w-[120px] text-[18px] font-semibold rounded-lg">
          Uploader
        </h3>

        <div className="flex items-center justify-between mt-3 w-[745px]">
          {/* Uploader Info */}
          <div className="flex items-center gap-3">
            <img src="pf1.svg" className="rounded-full w-12 h-12" alt="Uploader" />
            <span className="text-base font-medium">Brothers Make</span>
          </div>

          {/* Rating */}
          <div className="flex items-center text-[17px] font-medium text-black">
            <img src="star.svg" alt="star" className="w-5 h-5 mr-1" />
            4.7
          </div>

        </div>
      </div>
    </div>
  );
}
