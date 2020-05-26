import React, { useEffect, useState } from "react";

interface useFetchProps {
  endpoint: string;
  method?: string;
  dependencies?: any;
  headers: {
    Authorization: string;
  };
}

const useFetch = ({
  endpoint,
  method = "GET",
  dependencies = [],
  headers,
}: useFetchProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://demo.chainels.com/api/v2${endpoint}`, {
        method,
        headers,
      });
      const json = await res.json();
      
      setData(json);
      setIsLoading(false);
    };

    fetchData();
  }, [endpoint, method, ...dependencies]);

  return { isLoading, data };
};

export default useFetch;
