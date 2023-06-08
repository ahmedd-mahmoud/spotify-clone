//styles
import "./Search.css";
//components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Body/NavigationBar";
//hooks
import { useStateProvider } from "../../Utils/StateProvider";
import { msToMinutes } from "../../Utils/Reducer";
const Search = () => {
  const { searchResults, searchQuery } = useStateProvider();

  return (
    <div className="search-page">
      <div className="main">
        <Sidebar />
        <div className="search-screen">
          <Navbar />
          {searchQuery && (
            <div className="search-results">
              <div className="top-results">
                <div className="top-result-box">
                  <div className="squares-headline">
                    <span className="title">Top Result</span>
                  </div>
                  <div className="top-result-artist">
                    {searchResults.artists
                      ?.slice(0, 1)
                      .map(({ artistName, artistId, artistImg }) => {
                        return (
                          <div className="top-artist" key={artistId}>
                            <img
                              src={artistImg.url}
                              alt={artistName}
                              className="top-artist-img"
                            />
                            <span className="top-artist-name">
                              {artistName}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="top-songs">
                  <div className="squares-headline">
                    <span className="title">Songs</span>
                  </div>
                  <div className="songs">
                    {searchResults.tracks
                      ?.slice(0, 4)
                      .map(
                        ({
                          trackName,
                          trackId,
                          trackImage,
                          trackArtists,
                          trackTime,
                        }) => {
                          return (
                            <div className="song" key={trackId}>
                              <div className="song-details">
                                <img
                                  src={trackImage}
                                  alt={trackName}
                                  className="track-img"
                                />
                                <div className="track-name-and-artists">
                                  <span className="track-name">
                                    {trackName}
                                  </span>
                                  <span className="track-artists">
                                    {trackArtists}
                                  </span>
                                </div>
                              </div>
                              <span className="track-duration">
                                {msToMinutes(trackTime)}
                              </span>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
              <div className="squares-containers">
                <div className="squares-headline">
                  <span className="title">Artists</span>
                </div>
                <div className="artists-playlists">
                  {searchResults.artists
                    ?.slice(0, 5)
                    .map(({ artistName, artistId, artistImg }) => {
                      return (
                        <div className="square" key={artistId}>
                          <img
                            src={artistImg.url}
                            alt={artistName}
                            className="square-img"
                          />
                          <span className="square-name">
                            {artistName.length > 17
                              ? artistName.slice(0, 17) + "..."
                              : artistName}
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="squares-containers">
                <div className="squares-headline">
                  <span className="title">Playlists</span>
                </div>
                <div className="artists-playlists">
                  {searchResults.playlists
                    ?.slice(0, 5)
                    .map(
                      ({
                        playlistName,
                        playlistId,
                        playlistImg,
                        playlistOwner,
                      }) => {
                        return (
                          <div className="square" key={playlistId}>
                            <img
                              src={playlistImg.url}
                              alt={playlistName}
                              className="square-img"
                            />
                            <span className="square-name">
                              {playlistName.length > 17
                                ? playlistName.slice(0, 17) + "..."
                                : playlistName}
                            </span>
                            <span className="square-desc">
                              {"By " + playlistOwner}
                            </span>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
