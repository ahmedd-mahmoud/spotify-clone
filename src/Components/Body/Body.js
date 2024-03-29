//styles
import "./Body.css";
//hooks
import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
import { useStateProvider } from "../../Utils/StateProvider";
//constants
import { SPOTIFY_DATA, SPOTIFY_URLs } from "../../Utils/Constants";
//components
import Navbar from "./NavigationBar";
import MainScreen from "./MainScreen";
import PlaylistDetails from "./PlaylistDetails";

const Body = () => {
  const { selectedPlaylist, mainScreen, selectedPlaylistId } =
    useStateProvider();

  useFetchSpotifyData(
    SPOTIFY_URLs.playlistURL + selectedPlaylistId,
    SPOTIFY_DATA.selectedPlaylistData
  );

  return (
    <div className="body">
      <Navbar />
      {mainScreen && <MainScreen />}

      {selectedPlaylist && !mainScreen && <PlaylistDetails />}
    </div>
  );
};

export default Body;
