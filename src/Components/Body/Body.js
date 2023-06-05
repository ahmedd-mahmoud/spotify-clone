import "./Body.css";

import UseFetchSpotifyData, {
  SPOTIFY_DATA,
} from "../../Hooks/useFetchSpotifyData";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useStateProvider } from "../../Utils/StateProvider";

const Body = () => {
  const { userInfo } = useStateProvider();
  UseFetchSpotifyData("https://api.spotify.com/v1/me", SPOTIFY_DATA.userData);

  return (
    <div>
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
        <div className="songs">Songs</div>
      </div>
    </div>
  );
};

export default Body;
