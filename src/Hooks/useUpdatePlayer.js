// import { reducerCases, SPOTIFY_DATA } from "../Utils/Constants";
import { useCallback, useEffect, useState } from "react";
import { useStateProvider } from "../Utils/StateProvider";

const useUpdatePlayer = (url, spotifyData) => {
  const { token } = useStateProvider();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const PutData = useCallback(async () => {
    const controller = new AbortController();
    setIsPending(true);
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      //   const data = await res.json();

      setIsPending(false);
      setError(null);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("The put request was aborted");
      } else {
        setIsPending(false);
        setError("Could not do the put request");
      }
    }
    return () => {
      controller.abort();
    };
  }, [url, token]);

  useEffect(() => {
    PutData();
  }, [PutData]);

  return { error, isPending };
};

export default useUpdatePlayer;
