//hooks
import useFetchSpotifyData, {
  SPOTIFY_DATA,
} from "../../Hooks/useFetchSpotifyData";
import { useStateProvider } from "../../Utils/StateProvider";
//styles
import "./Playlists.css";

const Playlists = () => {
  const { playlists } = useStateProvider();

  useFetchSpotifyData(
    "https://api.spotify.com/v1/me/playlists?limit=20&offset=0",
    SPOTIFY_DATA.playlistsData
  );

  return (
    <div className="all-playlists">
      {playlists.map(({ name, id, images }) => {
        return (
          <div className="single-playlist" key={id}>
            <img src={images[0].url} alt={name} className="playlist-img" />
            <span className="playlist-name">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;
