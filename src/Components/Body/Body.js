import "./Body.css";

import useFetchSpotifyData, {
  SPOTIFY_DATA,
} from "../../Hooks/useFetchSpotifyData";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useStateProvider } from "../../Utils/StateProvider";

const Body = () => {
  const {
    userInfo,
    selectedPlaylist,
    selectedPlaylistId,
    mainScreen,
    featuredPlaylists,
    artists,
    albums,
    podcasts,
  } = useStateProvider();

  useFetchSpotifyData("https://api.spotify.com/v1/me", SPOTIFY_DATA.userData);

  useFetchSpotifyData(
    `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
    SPOTIFY_DATA.selectedPlaylistData
  );

  useFetchSpotifyData(
    "https://api.spotify.com/v1/browse/featured-playlists",
    SPOTIFY_DATA.featuredPlaylistsData
  );

  // useFetchSpotifyData(
  //   "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
  //   SPOTIFY_DATA.artistsData
  // );

  // useFetchSpotifyData(
  //   "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc",
  //   SPOTIFY_DATA.albumsData
  // );

  // useFetchSpotifyData(
  //   "https://api.spotify.com/v1/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ",
  //   SPOTIFY_DATA.podcastsData
  // );

  console.log(featuredPlaylists);

  const msToMinutes = (ms) => {
    const min = Math.floor(ms / 60000);
    const sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
  };

  return (
    <div className="body">
      <div className="navbar">
        <div className="both-arrows">
          <IoIosArrowBack className="arrow" />
          <IoIosArrowForward className="arrow" />
        </div>
        <div className="avatar-and-friends">
          <div className="friends-button">
            <HiOutlineUserGroup className="friends-icon" />
          </div>
          <div className="avatar">
            <img
              src={userInfo?.userImg}
              alt={userInfo?.userName}
              className="user-img"
            />
            <span className="user-name">{userInfo?.userName}</span>
          </div>
        </div>
      </div>

      {mainScreen && <div className="main-screen">Main Screen</div>}

      {selectedPlaylist && !mainScreen && (
        <div className="playlist-content">
          <div className="playlist-info">
            <img
              src={selectedPlaylist.playlistImage}
              alt={selectedPlaylist.playlistName}
              className="img"
            />
            <div className="playlist-details">
              <span className="playlist-type">Playlist</span>
              <h1 className="playlist-title">
                {selectedPlaylist.playlistName}
              </h1>
              <p className="description">
                {selectedPlaylist.playlistDescription}
              </p>
            </div>
          </div>

          <div className="list">
            <div className="header">
              <div className="number-title">
                <div className="header-col">
                  <span>#</span>
                </div>
                <div className="header-col">
                  <span>Title</span>
                </div>
              </div>

              <div className="header-col">
                <span>Album</span>
              </div>
              <div className="header-col">
                <span>Date Added</span>
              </div>
              <div className="header-col">
                <span>Duration</span>
              </div>
            </div>
            <div className="tracks">
              {selectedPlaylist.playlistTracks.map(
                (
                  {
                    trackId,
                    trackName,
                    trackDateAdded,
                    trackArtists,
                    trackImage,
                    trackDuration,
                    trackAlbum,
                    trackContext_uri,
                    trackNumber,
                  },
                  index
                ) => {
                  return (
                    <div className="row" key={trackId}>
                      <div className="col-detail">
                        <div className="col">
                          <span>{index + 1}</span>
                        </div>

                        <img
                          src={trackImage}
                          alt={trackImage}
                          className="track-img"
                        />
                        <div className="track-info">
                          <span className="track-name">
                            {trackName.length > 25
                              ? trackName.slice(0, 25) + "..."
                              : trackName}
                          </span>
                          <span className="track-artists">
                            {trackArtists.length > 25
                              ? trackArtists.slice(0, 25) + "..."
                              : trackArtists}
                          </span>
                        </div>
                      </div>
                      <div className="col">
                        <span className="track-album">
                          {trackAlbum.length > 25
                            ? trackAlbum.slice(0, 25) + "..."
                            : trackAlbum}
                        </span>
                      </div>
                      <div className="col">
                        <span className="date-added">
                          {trackDateAdded
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}
                        </span>
                      </div>
                      <div className="col">
                        <span>{msToMinutes(trackDuration)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
