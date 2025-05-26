import { Link } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      {/* abaikan code ini cuma buat cek doang  tapi jangan dihapus*/}
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/search"}>Search</Link>
      <Link to={"/searchmaterial"}>SearchByMaterial</Link>
      <Link to={"/upload"}>Upload</Link> */}
      {/* <Navbar/> */}
      <WelcomeSection/>
      

      
    </>
  );
}
