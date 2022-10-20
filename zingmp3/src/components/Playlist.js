import "./Playlist.css";

const playlists = [
  {
    playlistName: "Nhạc Cho Thứ Năm",
    description: "Dành trọn ngày thứ Năm để nghe lại Hits V-Pop những...",
  },
  {
    playlistName: "Nhạc Hoa Lời Việt Hay Nhất",
    description: "Những bài hát nhạc Hoa lời Việt hay nhất mà bạn phải...",
  },
  {
    playlistName: "US-UK: Hits Quốc Dân",
    description: "Những bản Hits dán mác quốc dân của Âu Mỹ",
  },
  {
    playlistName: "Mashup V-Pop",
    description: "Những mảnh ghép tạo nên 1 bản Mashup hoàn hảo",
  },
  {
    playlistName: "Women Of V-Pop",
    description: "Tôn vinh tài năng và những sản phẩm âm nhạc nổi bật...",
  },
];

playlists.forEach((playlist, index) => {
  playlist.image = require(`../assets/playlists/playlist_${index}.jpg`);
});

function Playlist() {
  return (
    <div id="Playlist">
      {playlists.map((playlist, index) => (
        <div key={index} className="playlist">
          <img className="playlist-image" src={playlist.image} alt={playlist.playlistName} />
          <h3 className="title">{playlist.playlistName}</h3>
          <span className="singers">{playlist.description}</span>
        </div>
      ))}
    </div>
  );
}

export default Playlist;