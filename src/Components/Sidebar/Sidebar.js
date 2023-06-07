//components
import Playlists from "../Playlists/Playlists";
//icons
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { LuLibrary, LuPlus } from "react-icons/lu";
import { BiRightArrowAlt } from "react-icons/bi";
//styles
import "./Sidebar.css";
import { useStateProvider } from "../../Utils/StateProvider";
import { reducerCases } from "../../Utils/Reducer";

const Sidebar = () => {
  const { updateData } = useStateProvider();
  return (
    <div className="sidebar">
      <div className="upper-sidebar">
        <div
          className="buttons"
          onClick={() => {
            updateData(true, reducerCases.MAIN_SCREEN);
          }}
        >
          <MdHomeFilled className="icons" />
          <span>Home</span>
        </div>
        <div className="buttons">
          <MdSearch className="icons" />
          <span>Search</span>
        </div>
      </div>
      <div className="lower-sidebar">
        <div className="headline">
          <div className="headline-part1">
            <LuLibrary className="icons" />
            <span>Your Library</span>
          </div>
          <div className="headline-part2">
            <LuPlus className="plus-icon" />
            <BiRightArrowAlt className="arrow-icon" />
          </div>
        </div>

        {/* the button should be a separate component */}
        <div className="filters">
          <button className="filter-button">Playlists</button>
          <button className="filter-button">Albums</button>
          <button className="filter-button">Artists</button>
        </div>
        <Playlists />
      </div>
    </div>
  );
};

export default Sidebar;
