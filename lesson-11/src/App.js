import { useState } from "react";

import MovieList from "./components/MovieList";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="w-full fixed z-10 mx-auto top-0 flex justify-center items-center">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="bg-gray-900 focus:bg-white text-white focus:text-gray-900 p-2 border-[1px] border-t-0 border-gray-300 focus:border-white outline-none rounded-b-lg w-[500px] text-center text-xl"
        />
      </div>
      <MovieList
        query={query}
        pageNumber={pageNumber}
        setPageNumber={pageNumber}
      />
      <div className="fixed bottom-8 right-8">
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
