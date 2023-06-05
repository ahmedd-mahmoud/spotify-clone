import { useCallback, useEffect, useState } from "react";
import { useStateProvider } from "../Utils/StateProvider";
import { reducerCases } from "../Utils/Reducer";

export const SPOTIFY_DATA = {
  playlistsData: "playlistsData",
  userData: "userData",
};
const UseFetchSpotifyData = (url, spotifyData) => {
  const { token, updateData } = useStateProvider();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getPlaylistData = useCallback(
    (data) => {
      const { items } = data;
      const playlists = items.map(({ name, id, images }) => {
        return { name, id, images };
      });
      updateData(playlists, reducerCases.SET_PLAYLISTS);
    },
    [updateData]
  );

  const getUserData = useCallback(
    (data) => {
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        userImg: data.images[0].url,
      };
      updateData(userInfo, reducerCases.SET_USER);
    },
    [updateData]
  );

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();
        setIsPending(false);
        setError(null);
        if (spotifyData === SPOTIFY_DATA.playlistsData) {
          getPlaylistData(data);
        }
        if (spotifyData === SPOTIFY_DATA.userData) {
          getUserData(data);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };
    getData();
  }, [token, url, spotifyData, getPlaylistData, getUserData]);

  return { error, isPending };
};

export default UseFetchSpotifyData;
