import { Link } from "react-router-dom";
import Uploadheader from "../components/Uploadheader";
import UploadFile from "../components/UploadFile";
import DescUpload from "../components/DescUpload";

export default function Upload() {
  return (
    <>
    

    <Uploadheader/>
    <UploadFile/>
    <DescUpload/>
    </>
  );
}