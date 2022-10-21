import "./Songs.css";

const songs = [
  {
    songName: "Cô Đơn Trên Sofa",
    singers: "Hồ Ngọc Hà",
    release: "1 ngày trước",
    isVip: false,
  },
  {
    songName: "Bài này không để đi diễn",
    singers: "Anh Tú Atus",
    release: "3 ngày trước",
    isVip: false,
  },
  {
    songName: "HUNGOVER (feat. Vũ Cát Tường)",
    singers: "MINH, Vũ Cát Tường",
    release: "6 ngày trước",
    isVip: true,
  },
  {
    songName: "909090",
    singers: "Tóc Tiên, Mew Amazing",
    release: "1 ngày trước",
    isVip: false,
  },
  {
    songName: "Hối Duyên",
    singers: "Masew, Khoi Vu, Great",
    release: "5 ngày trước",
    isVip: false,
  },
  {
    songName: "ill",
    singers: "Alexander 23, Kenny Beats",
    release: "6 ngày trước",
    isVip: true,
  },
  {
    songName: "Let It Die",
    singers: "Ellie Goulding",
    release: "1 ngày trước",
    isVip: true,
  },
  {
    songName: "Người Có Còn Thương",
    singers: "Minh Vương M4U, Thương Võ, ACV",
    release: "5 ngày trước",
    isVip: false,
  },
  {
    songName: "Bye Bye",
    singers: "Marshmello, Juice Wrld",
    release: "6 ngày trước",
    isVip: true,
  },
  {
    songName: "Monotonía",
    singers: "Shakira, Ozuna",
    release: "1 ngày trước",
    isVip: false,
  },
  {
    songName: "Hoa Tình Chẳng Nở",
    singers: "Dee Trần",
    release: "5 ngày trước",
    isVip: false,
  },
  {
    songName: "Lời Nói Dối Sau Cùng",
    singers: "Vicky Nhung",
    release: "6 ngày trước",
    isVip: false,
  },
];

songs.forEach((song, index) => {
  song.image = require(`../assets/songs/song_${index}.jpg`);
});

function Songs() {
  return (
    <div className="Songs">
      {songs.map((song, index) => (
        <div key={index} className={song.isVip ? "song vip" : "song"}>
          <button className="foreground play">
            <i class="fa-solid fa-play"></i>
          </button>
          <button className="foreground more">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <img className="song-image" src={song.image} alt={song.songName} />
          <div className="info">
            <span></span>
            <h3 className="title">{song.songName}</h3>
            <span>
              {song.singers.split(", ").map((singer) => (
                <span className="singers">{singer}</span>
              ))}
            </span>
            <span className="release">{song.release}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Songs;
