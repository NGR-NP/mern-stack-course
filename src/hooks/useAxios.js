import { useEffect, useState } from "react";
import axios from "../api/axios";

const useAxios = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err?.response);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const refetch = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err?.response);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, refetch };
};

export default useAxios;
