import { useState } from "react";
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
import { BiVolumeFull } from "react-icons/bi";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";

const Footer = () => {
  const { currentlyPlayingTrack, playerState, updateData, token } =
    useStateProvider();
  const state = playerState ? "play" : "pause";
  const [volume, setVolume] = useState(100);
  const [isActive, setIsActive] = useState(false);

  const ChangeTrack = async (type) => {
    await fetch(SPOTIFY_URLs.playerURL + type, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  };

  useFetchSpotifyData(
    SPOTIFY_URLs.currentlyPlayingURL,
    SPOTIFY_DATA.currentlyPlayingTrack
  );

  useUpdatePlayer(
    SPOTIFY_URLs.playerURL + state,
    SPOTIFY_DATA.playerStateValue
  );

  useUpdatePlayer(SPOTIFY_URLs.volumeURL + volume, SPOTIFY_DATA.volumeValue);

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
        <CgPlayTrackPrev
          className="next-skip-button"
          onClick={() => {
            ChangeTrack("previous");
          }}
        />
        <div className="play-pause-container">
          {playerState ? (
            <BsFillPauseCircleFill
              className="play-pause-button"
              style={{ fontSize: isActive ? "30px" : "xx-large" }}
              onClick={() => {
                updateData(!playerState, reducerCases.SET_PLAYER_STATE);
              }}
              onMouseDown={() => {
                setIsActive(true);
              }}
              onMouseUp={() => {
                setIsActive(false);
              }}
            />
          ) : (
            <BsFillPlayCircleFill
              className="play-pause-button"
              style={{ fontSize: isActive ? "30px" : "xx-large" }}
              onClick={() =>
                updateData(!playerState, reducerCases.SET_PLAYER_STATE)
              }
              onMouseDown={() => {
                setIsActive(true);
              }}
              onMouseUp={() => {
                setIsActive(false);
              }}
            />
          )}
        </div>
        <CgPlayTrackNext
          className="next-skip-button"
          onClick={() => {
            ChangeTrack("next");
          }}
        />
        <BsRepeat className="shuffle-repeat-button" />
      </div>

      <div className="volume">
        <BiVolumeFull className="volume-button" />
        <input
          type="range"
          min={0}
          max={100}
          className="volume-slider"
          onMouseUp={(e) => setVolume(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Footer;
