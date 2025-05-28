import { Link } from "react-router-dom";
import VidAndHead from "../components/VidAndHead";
import Desc from "../components/Desc";
import Comment from "../components/comment";
import RecommendVid from "../components/RecommendVid";

export  default function SearchMaterial() {
  return (
    <>
      <div className="flex mb-20">
        <div className="flex-grow">
          <VidAndHead />
          <Desc />
          <Comment />
        </div>
        <div className="bg-gray-500 w-[3px] mr-25 h-[1200px] mt-10">

        </div>

        
        <div className="w-[500px]">
          <RecommendVid />
        </div>
      </div>



    </>
  );
}