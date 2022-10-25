import "./Podcast.css";

export default function Podcast({
  id,
  image,
  title,
  author,
  release,
  duration,
}) {
  return (
    <div className="Podcast">
      <button className="foreground play">
        <i class="fa-solid fa-play"></i>
      </button>
      <button className="foreground bookmark">
        <i class="fa-regular fa-bookmark"></i>
      </button>
      <button className="foreground more">
        <i class="fa-solid fa-ellipsis"></i>
      </button>
      <h3 className="rating">{id}</h3>
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <p>
          <span>{release + " • "}</span>
          <span>{duration}</span>
        </p>
      </div>
    </div>
  );
}
