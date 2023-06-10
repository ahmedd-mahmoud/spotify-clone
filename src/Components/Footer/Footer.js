import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
import { SPOTIFY_DATA } from "../../Utils/Constants";
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
  const { currentlyPlayingTrack, playerState } = useStateProvider();
  useFetchSpotifyData(
    "https://api.spotify.com/v1/me/player/currently-playing",
    SPOTIFY_DATA.currentlyPlayingTrack
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
          <BsFillPauseCircleFill className="play-pause-button" />
        ) : (
          <BsFillPlayCircleFill className="play-pause-button" />
        )}
        <CgPlayTrackNext className="next-skip-button" />
        <BsRepeat className="shuffle-repeat-button" />
      </div>
    </div>
  );
};

export default Footer;
