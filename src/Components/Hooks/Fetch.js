import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [jsonData, setJSONData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJSONData(data));
  }, [url]);

  return [jsonData];
};

export default useFetch;
