//styles
import "./Body.css";
//hooks
import { useStateProvider } from "../../Utils/StateProvider";
import { msToMinutes } from "../../Utils/Constants";
const PlaylistContents = () => {
  const { selectedPlaylist } = useStateProvider();

  return (
    <div className="playlist-content">
      <div className="playlist-info">
        <img
          src={selectedPlaylist.playlistImage}
          alt={selectedPlaylist.playlistName}
          className="img"
        />
        <div className="playlist-details">
          <span className="playlist-type">Playlist</span>
          <h1 className="playlist-title">{selectedPlaylist.playlistName}</h1>
          <p className="description">{selectedPlaylist.playlistDescription}</p>
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
  );
};

export default PlaylistContents;
