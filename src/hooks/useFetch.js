import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (error) {
      setError(null);
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setData(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
