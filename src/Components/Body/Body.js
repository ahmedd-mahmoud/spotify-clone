//styles
import "./Body.css";
//hooks
import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
import { useStateProvider } from "../../Utils/StateProvider";
//constants
import { SPOTIFY_DATA } from "../../Utils/Constants";
//components
import Navbar from "./NavigationBar";
import MainScreen from "./MainScreen";
import PlaylistContents from "./PlaylistDetails";

const Body = () => {
  const { selectedPlaylist, mainScreen, selectedPlaylistId } =
    useStateProvider();

  useFetchSpotifyData(
    `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
    SPOTIFY_DATA.selectedPlaylistData
  );

  return (
    <div className="body">
      <Navbar />
      {mainScreen && <MainScreen />}

      {selectedPlaylist && !mainScreen && <PlaylistContents />}
    </div>
  );
};

export default Body;
