//hooks
import useFetscSpotifyData, {
  SPOTIFY_DATA,
} from "../../Hooks/useFetchSpotifyData";
import { useStateProvider } from "../../Utils/StateProvider";
//constants

//styles
import "./Playlists.css";

const Playlists = () => {
  const { playlists } = useStateProvider();

  useFetscSpotifyData(
    "https://api.spotify.com/v1/me/playlists?limit=20&offset=0",
    SPOTIFY_DATA.playlistsData
  );

  return (
    <div className="all-playlists">
      {playlists.map(({ name, id, images }) => {
        return (
          <div className="single-playlist">
            <img
              src={images[0].url}
              alt={name}
              className="playlist-img"
              key={id + 1}
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
