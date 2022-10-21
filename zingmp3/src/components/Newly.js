import "./Newly.css";
import Songs from "./Songs.js";

function Newly() {
  return (
    <div className="Newly">
      <h2>Mới Phát Hành</h2>
      <div className="mini-navi">
        <div className="song-album">
          <button className="choosing">Bài hát</button>
          <button className="">Album</button>
        </div>
        <button className="show-all">
          Tất cả <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <Songs />
    </div>
  );
}

export default Newly;
