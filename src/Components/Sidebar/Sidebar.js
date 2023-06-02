import "./Sidebar.css";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { LuLibrary, LuPlus } from "react-icons/lu";
import { BiRightArrowAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="upper-sidebar">
        <div className="buttons">
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
            <LuPlus className="icons" />
            <BiRightArrowAlt className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
