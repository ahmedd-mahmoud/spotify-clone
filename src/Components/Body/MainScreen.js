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

  return (
    <div className="main-screen">
      <div className="start-up">
        <span className="title">Good Morning</span>
      </div>
      <div className="squares-containers">
        <div className="squares-headline">
          <span className="title">Featured Playlists</span>
          <span className="showall-button">Show all</span>
        </div>

        <div className="squares">
          {featuredPlaylists
            ?.slice(0, 5)
            .map(({ name, id, images, description }) => {
              return (
                <div className="square" key={id}>
                  <img src={images[0].url} alt={name} className="square-img" />
                  <span className="square-name">{name}</span>
                  <span className="square-desc">
                    {description.length > 25
                      ? description.slice(0, 25) + "..."
                      : description}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="squares-containers">
        <div className="squares-headline">
          <span className="title">Popular Albums</span>
          <span className="showall-button">Show all</span>
        </div>

        <div className="squares">
          {albums?.map(({ name, id, images, artists }) => {
            return (
              <div className="square" key={id}>
                <img src={images[0].url} alt={name} className="square-img" />
                <span className="square-name">
                  {name.length > 17 ? name.slice(0, 17) + "..." : name}
                </span>
                <span className="square-desc">{artists[0].name}</span>
              </div>
            );
          })}
          {albums?.slice(0, 2).map(({ name, id, images, artists }) => {
            return (
              <div className="square" key={id}>
                <img src={images[0].url} alt={name} className="square-img" />
                <span className="square-name">
                  {name.length > 17 ? name.slice(0, 17) + "..." : name}
                </span>
                <span className="square-desc">{artists[0].name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="squares-containers">
        <div className="squares-headline">
          <span className="title">Popular Artists</span>
          <span className="showall-button">Show all</span>
        </div>

        <div className="squares">
          {artists?.map(({ name, id, images }) => {
            return (
              <div className="square" key={id}>
                <img src={images[0].url} alt={name} className="square-img" />
                <span className="square-name">{name}</span>
              </div>
            );
          })}
          {artists?.slice(0, 2).map(({ name, id, images }) => {
            return (
              <div className="square" key={id}>
                <img src={images[0].url} alt={name} className="square-img" />
                <span className="square-name">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="squares-containers">
        <div className="squares-headline">
          <span className="title">Popular Podcasts</span>
          <span className="showall-button">Show all</span>
        </div>

        <div className="squares">
          {podcasts?.map(({ name, id, images, publisher }) => {
            return (
              <div className="square" key={id}>
                <img src={images[0].url} alt={name} className="square-img" />
                <span className="square-name">{name}</span>
                <span className="square-desc">{publisher}</span>
              </div>
            );
          })}
          {podcasts?.map(({ name, id, images, publisher }) => {
            return (
              <div className="square" key={id}>
                <img src={images[0].url} alt={name} className="square-img" />
                <span className="square-name">{name}</span>
                <span className="square-desc">{publisher}</span>
              </div>
            );
          })}
          {podcasts?.slice(0, 1).map(({ name, id, images, publisher }) => {
            return (
              <div className="square" key={id}>
                <img src={images[0].url} alt={name} className="square-img" />
                <span className="square-name">{name}</span>
                <span className="square-desc">{publisher}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
