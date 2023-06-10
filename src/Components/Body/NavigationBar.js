//styles
import "./Body.css";
//hooks
import { useStateProvider } from "../../Utils/StateProvider";
import useFetchSpotifyData from "../../Hooks/useFetchSpotifyData";
import { useLocation } from "react-router";
//constants
import { SPOTIFY_URLs, reducerCases } from "../../Utils/Constants";
import { SPOTIFY_DATA } from "../../Utils/Constants";
//icons
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  const { userInfo, searchQuery, updateData } = useStateProvider();
  useFetchSpotifyData(SPOTIFY_URLs.userURL, SPOTIFY_DATA.userData);

  useFetchSpotifyData(
    `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist,playlist,track`,
    SPOTIFY_DATA.searchResults
  );
  const pathName = useLocation().pathname;
  return (
    <div className="navbar">
      <div className="both-arrows">
        <IoIosArrowBack className="arrow" />
        <IoIosArrowForward className="arrow" />
        {pathName === "/search" && (
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="search-input"
              onChange={(e) => {
                updateData(e.target.value, reducerCases.SET_SEARCH_QUERY);
              }}
            />
            <MdSearch className="search-icon" />
          </form>
        )}
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
