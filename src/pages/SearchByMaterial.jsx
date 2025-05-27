import { Link } from "react-router-dom";
import SearchAndHead from "../components/SearchAndHead";
import Desc from "../components/Desc";
import Comment from "../components/comment";
import RecommendVid from "../components/RecommendVid";

export  default function SearchMaterial() {
  return (
    <>
    <SearchAndHead/>

    <Desc/>

    <Comment/>

    <RecommendVid/>

    </>
  );
}