import { Link } from "react-router-dom";
import SearchAndHead from "../components/SearchAndHead";
import Desc from "../components/Desc";
import Comment from "../components/comment";
import RecommendVid from "../components/RecommendVid";

export  default function SearchMaterial() {
  return (
    <>
      <div className="flex mb-20">
        {/* Kiri: Konten utama */}
        <div className="flex-grow">
          <SearchAndHead />
          <Desc />
          <Comment />
        </div>
        <div className="bg-gray-500 w-[3px] mr-25 h-[1200px] mt-10">

        </div>

        {/* Kanan: Rekomendasi video */}
        <div className="w-[500px]">
          <RecommendVid />
        </div>
      </div>



    </>
  );
}