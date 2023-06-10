//styles
import "./Body.css";
//hooks
import { useStateProvider } from "../../Utils/StateProvider";
import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
import { SPOTIFY_DATA, SPOTIFY_URLs } from "../../Utils/Constants";

const MainScreen = () => {
  const { featuredPlaylists, artists, albums, podcasts, playlists } =
    useStateProvider();

  useFetchSpotifyData(
    SPOTIFY_URLs.featuredPlaylistsURL,
    SPOTIFY_DATA.featuredPlaylistsData
  );

  useFetchSpotifyData(SPOTIFY_URLs.artistsURL, SPOTIFY_DATA.artistsData);

  useFetchSpotifyData(SPOTIFY_URLs.albumsURL, SPOTIFY_DATA.albumsData);

  useFetchSpotifyData(SPOTIFY_URLs.podcastsURL, SPOTIFY_DATA.podcastsData);

  return (
    <div className="main-screen">
      <div className="start-up">
        <div>
          <span className="startup-title">Good Morning</span>
        </div>

        <div className="rectangles">
          {playlists?.slice(0, 3).map(({ name, id, images }) => {
            return (
              <div className="rectangle" key={id}>
                <img src={images[0].url} alt={name} className="rec-img" />
                <span className="rec-name">{name}</span>
              </div>
            );
          })}
        </div>

        <div className="rectangles">
          {playlists?.slice(3, 6).map(({ name, id, images }) => {
            return (
              <div className="rectangle" key={id}>
                <img src={images[0].url} alt={name} className="rec-img" />
                <span className="rec-name">{name}</span>
              </div>
            );
          })}
        </div>
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
