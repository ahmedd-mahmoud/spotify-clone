import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = () => {
    const clientId = "abea8d10e9c74c6f951ad8afa0a1555d";
    const redirectUrl = "https://spotify-clone-ea626.web.app";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };

  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify-logo"
        className="logo"
      />
      <Link to={"/"}>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default Login;
