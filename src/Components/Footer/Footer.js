import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
import useUpdatePlayer from "../../Hooks/useUpdatePlayer";
import {
  SPOTIFY_DATA,
  SPOTIFY_URLs,
  reducerCases,
} from "../../Utils/Constants";
import { useStateProvider } from "../../Utils/StateProvider";
import "./Footer.css";
import {
  BsShuffle,
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsRepeat,
} from "react-icons/bs";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";

const Footer = () => {
  const { currentlyPlayingTrack, playerState, updateData } = useStateProvider();
  const state = playerState ? "play" : "pause";

  useFetchSpotifyData(
    SPOTIFY_URLs.currentlyPlayingURL,
    SPOTIFY_DATA.currentlyPlayingTrack
  );

  useUpdatePlayer(
    SPOTIFY_URLs.startPausePlaybackURL + state,
    SPOTIFY_DATA.playerStateValue
  );

  return (
    <div className="player">
      {currentlyPlayingTrack && (
        <div className="track">
          <img
            src={currentlyPlayingTrack.trackImage}
            alt={currentlyPlayingTrack.trackName}
            className="track-img"
          />
          <div className="track-info">
            <span className="track-name">
              {currentlyPlayingTrack.trackName}
            </span>
            <span className="track-artists">
              {currentlyPlayingTrack.trackArtists.join(", ")}
            </span>
          </div>
        </div>
      )}

      <div className="player-controls">
        <BsShuffle className="shuffle-repeat-button" />
        <CgPlayTrackPrev className="next-skip-button" />
        {playerState ? (
          <BsFillPauseCircleFill
            className="play-pause-button"
            onClick={() =>
              updateData(!playerState, reducerCases.SET_PLAYER_STATE)
            }
          />
        ) : (
          <BsFillPlayCircleFill
            className="play-pause-button"
            onClick={() =>
              updateData(!playerState, reducerCases.SET_PLAYER_STATE)
            }
          />
        )}
        <CgPlayTrackNext className="next-skip-button" />
        <BsRepeat className="shuffle-repeat-button" />
      </div>

      <div className="volume">
        <input type="range" min={0} max={100} className="volume-slider" />
      </div>
    </div>
  );
};

export default Footer;
