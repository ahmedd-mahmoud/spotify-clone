//hooks
import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
import { SPOTIFY_DATA } from "../../Utils/Constants";
import { useStateProvider } from "../../Utils/StateProvider";
import { reducerCases } from "../../Utils/Constants";
//styles
import "./Playlists.css";

const Playlists = () => {
  const { playlists, updateData } = useStateProvider();

  useFetchSpotifyData(
    "https://api.spotify.com/v1/me/playlists?limit=20&offset=0",
    SPOTIFY_DATA.playlistsData
  );

  return (
    <div className="all-playlists">
      {playlists.map(({ name, id, images }) => {
        return (
          <div
            className="single-playlist"
            key={id}
            onClick={() => {
              updateData(false, reducerCases.MAIN_SCREEN);
              updateData(id, reducerCases.SET_PLAYLIST_ID);
            }}
          >
            <img src={images[0].url} alt={name} className="playlist-img" />
            <span className="playlist-name">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;
