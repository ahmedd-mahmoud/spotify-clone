//styles
import "./Body.css";
//hooks
import { useStateProvider } from "../../Utils/StateProvider";
import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
//constants
import { SPOTIFY_DATA } from "../../Hooks/useFetchSpotifyData";
//icons
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const { userInfo } = useStateProvider();
  useFetchSpotifyData("https://api.spotify.com/v1/me", SPOTIFY_DATA.userData);

  return (
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
  );
};

export default Navbar;
