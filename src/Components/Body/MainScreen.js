//styles
import "./Body.css";
//hooks
import { useStateProvider } from "../../Utils/StateProvider";
import useFetchSpotifyData, {
  SPOTIFY_DATA,
} from "../../Hooks/useFetchSpotifyData";

const MainScreen = () => {
  const { featuredPlaylists, artists, albums, podcasts } = useStateProvider();

  useFetchSpotifyData(
    "https://api.spotify.com/v1/browse/featured-playlists",
    SPOTIFY_DATA.featuredPlaylistsData
  );

  useFetchSpotifyData(
    "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
    SPOTIFY_DATA.artistsData
  );

  useFetchSpotifyData(
    "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc",
    SPOTIFY_DATA.albumsData
  );

  useFetchSpotifyData(
    "https://api.spotify.com/v1/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ",
    SPOTIFY_DATA.podcastsData
  );

  return <div className="main-screen">Main Screen</div>;
};

export default MainScreen;
