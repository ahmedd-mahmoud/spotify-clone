//hooks
import { useEffect } from "react";
import { useStateProvider } from "../../Utils/StateProvider";
//constants
import { reducerCases } from "../../Utils/Reducer";
//styles
import "./Playlists.css";

const Playlists = () => {
  const { token, updateData, playlists } = useStateProvider();
  useEffect(() => {
    const getPlaylistsData = async () => {
      const res = await fetch(
        "https://api.spotify.com/v1/me/playlists?limit=20&offset=0",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      const { items } = res;
      const playlists = items.map(({ name, id, images }) => {
        return { name, id, images };
      });
      updateData(playlists, reducerCases.SET_PLAYLISTS);
    };
    getPlaylistsData();
  }, [token, updateData]);

  return (
    <div className="all-playlists">
      {playlists.map(({ name, id, images }) => {
        return (
          <div className="single-playlist">
            <img
              src={images[0].url}
              alt={name}
              className="playlist-img"
              key={id}
            />
            <span key={id} className="playlist-name">
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;
