import { useRef, useCallback } from "react";

import MovieCard from "./MovieCard";
import useFetchData from "../hooks/useFetchData";

const MovieList = ({ query, pageNumber, setPageNumber }) => {
  const { loading, error, data, hasMore } = useFetchData(query, pageNumber);

  const observer = useRef();

  const lastDataElemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );

  return (
    <>
      <div className="py-16 px-4 mx-auto max-w-[500px] md:max-w-[1000px] md:grid md:grid-cols-2 md:gap-4 md:justify-center md:items-start">
        {data.map((movie, index) => {
          if (data.length === index + 1) {
            return (
              <MovieCard
                key={movie.id}
                lastRef={lastDataElemRef}
                movie={movie}
              />
            );
          } else {
            return <MovieCard key={movie.id} movie={movie} />;
          }
        })}
      </div>
      <div className="text-center">{loading && "Loading..."}</div>
      <div className="text-center">{error && "Error"}</div>
    </>
  );
};

export default MovieList;
