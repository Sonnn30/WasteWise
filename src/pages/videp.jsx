import React from 'react'
import VidAndHead from "../components/VidAndHead";
import Desc from "../components/Desc";
import Comment from "../components/comment";
import RecommedVid2 from '../components/RecommedVid2';

export default function videp() {
  return (
    <>
      <div className="flex mb-20">
        {/* Kiri: Konten utama */}
        <div className="flex-grow">
          <VidAndHead />
          <Desc />
          <Comment />
        </div>
        <div className="bg-gray-500 w-[3px] mr-25 h-[1200px] mt-10">

        </div>

        {/* Kanan: Rekomendasi video */}
        <div className="w-[500px]">
            <RecommedVid2/>
        </div>
      </div>



    </>
  )
}
