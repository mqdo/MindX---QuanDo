import "./Newly.css";
import Song from "./Song.js";

function Newly() {
  return (
    <div id="Newly">
      <h2>Mới Phát Hành</h2>
      <div className="mini-navi">
        <div className="song-album">
          <button>Bài hát</button>
          <button>Album</button>
        </div>
        <button>
          Tất cả <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <Song />
    </div>
  );
}

export default Newly;
