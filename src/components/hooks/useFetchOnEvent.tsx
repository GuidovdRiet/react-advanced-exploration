import React, { useEffect, useCallback, useRef, useState } from "react";

interface useFetchOnEventProps {
  method?: string;
  endpoint: string;
  dependencies?: any;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
}

const useFetchOnEvent = ({
  method = "GET",
  headers,
  endpoint,
  dependencies = [],
}: useFetchOnEventProps) => {
  const [isSending, setIsSending] = useState(false);
  const [data, setData] = useState<any>([]);
  const isMounted = useRef(true);

  // set isMounted to false when we unmount the component
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return;

    // update state
    setIsSending(true);

    // send the actual request
    const res = await fetch(`https://demo.chainels.com/api/v2${endpoint}`, {
      method,
      headers,
      body: JSON.stringify({
        scope: "",
      }),
    });

    if (method !== "PUT") {
      const json = await res.json();
      setData(json);
    }

    // once the request is sent, update state again
    if (isMounted.current)
      // only update if we are still mounted
      setIsSending(false);
  }, [isSending, ...dependencies]); // update the callback if the state changes

  return { sendRequest, isSending, data };
};

export default useFetchOnEvent;
