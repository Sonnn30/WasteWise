import { Link } from "react-router-dom";
import BrowseByMaterial from "../components/BrowseByMaterial";
import LastestVid from "../components/LastestVid";

export default function Search() {
  return (
    <>
      {/* Hapus SearchAndHead jika tidak mau tampil di awal */}
      {/* <SearchAndHead /> */}

      <BrowseByMaterial />
      <LastestVid />

      {/* Tombol navigasi ke halaman detail */}
      <div className="flex justify-center mt-10">
        <Link to="/searchmaterial">
          <button className="bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition">
            View Video & Comments
          </button>
        </Link>
      </div>
    </>
  );
}
