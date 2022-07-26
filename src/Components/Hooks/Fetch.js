import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [jsonData, setJSONData] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJSONData(data);
        setLoading(false);
      });
  }, [url]);

  return { jsonData, Loading };
};

export default useFetch;
