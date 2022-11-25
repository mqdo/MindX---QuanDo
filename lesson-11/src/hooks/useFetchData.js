import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    if (query === "") {
      setLoading(false);
      setError(false);
      setData([]);
      setHasMore(false);
      return
    };
    setLoading(true);
    setError(false);
    let cancel;
    const uri = encodeURI(query);
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}&query=${uri}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData((prevData) => {
          return [...new Set([...prevData, ...res.data.results])];
        });
        setHasMore(res.data.results.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, data, hasMore };
}
