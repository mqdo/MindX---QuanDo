import placeholderImage from "../assets/placeholder.png";

const MovieCard = ({ lastRef, movie }) => {
  return (
    <div ref={lastRef ? lastRef : null} className="pt-4 flex flex-col gap-4">
      <div className="flex flex-nowrap gap-2 md:gap-4 justify-between">
        <h3
          className={`basis-3/4 text-xl font-semibold ${
            movie.adult ? "text-red-500" : ""
          } truncate`}
        >
          {movie.title}
        </h3>
        <p className="basis-1/4 text-lg font-semibold bg-gray-400 text-gray-900 px-2 rounded-md text-center">
          {movie.vote_average}{" "}
          <span className="text-gray-800 font-light">({movie.vote_count})</span>
        </p>
      </div>
      <div className="relative w-full object-cover rounded-lg">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : placeholderImage
          }
          className=" rounded-lg"
          alt={movie.title}
        />
        <div className="bg-gray-900 opacity-0 hover:opacity-90 absolute top-0 left-0 right-0 bottom-0 px-4 py-8">
          <h3 className="text-xl mb-4">
            {movie.original_title} ({movie.original_language})
          </h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
