import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Users } from "../../dummyData/dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";
import "./SideBar.css";

export function SideBar() {
  return (
    <aside>
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li>
            <Home className="sideBarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="sidebarListItemText">HOME</span>
            </Link>
          </li>
          <li>
            <Search className="sideBarIcon" />
            <span className="sidebarListItemText">SEARCH</span>
          </li>
          <li>
            <Notifications className="sideBarIcon" />
            <span className="sidebarListItemText">ALERT</span>
          </li>
          <li>
            <MessageRounded className="sideBarIcon" />
            <span className="sidebarListItemText">MESSAGE</span>
          </li>
          <li>
            <Bookmark className="sideBarIcon" />
            <span className="sidebarListItemText">BOOKMARK</span>
          </li>
          <li>
            <Person className="sideBarIcon" />
            <Link to="/profile/hojojo" style={{ textDecoration: "none", color: "black" }}>
            <span className="sidebarListItemText">PROFILE</span>
            </Link>
          </li>
          <li>
            <Settings className="sideBarIcon" />
            <span className="sidebarListItemText">SETTING</span>
          </li>
        </ul>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
