import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import "./SideBar.css";

export const SideBar: React.FC = () => (
  <aside>
    <div className="sideBarWrapper">
      <ul className="sideBarList">
        <li>
          <Home className="sideBarIcon" />
          <span className="sidebarListItemText">HOME</span>
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
          <span className="sidebarListItemText">PROFILE</span>
        </li>
        <li>
          <Settings className="sideBarIcon" />
          <span className="sidebarListItemText">SETTING</span>
        </li>
      </ul>
      <hr className="sideBarHr" />
      <ul className="sideBarFriendList">
        <li className="sideBarFriend">
          <img
            src="/assets/person/2.jpeg"
            alt="画像2"
            className="sideBarFriendImg"
          />
          <span className="sideBarFriendName">yamada</span>
        </li>
        <li className="sideBarFriend">
          <img
            src="/assets/person/3.jpeg"
            alt="画像3"
            className="sideBarFriendImg"
          />
          <span className="sideBarFriendName">tanaka</span>
        </li>
        <li className="sideBarFriend">
          <img
            src="/assets/person/4.jpeg"
            alt="画像4"
            className="sideBarFriendImg"
          />
          <span className="sideBarFriendName">sato</span>
        </li>
      </ul>
    </div>
  </aside>
);
