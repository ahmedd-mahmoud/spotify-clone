import { useCallback, useEffect } from "react";
import { useStateProvider } from "../Utils/StateProvider";

const usePostSpotifyData = (url, spotifyData) => {
  const { token } = useStateProvider();

  const PostData = useCallback(async () => {
    await fetch(
      url,
      {},
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  }, [token, url]);

  useEffect(() => {
    PostData();
  }, [PostData]);
};

export default usePostSpotifyData;
