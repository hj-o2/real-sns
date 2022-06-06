import "./TopBar.css";
import { Chat, Notifications, Search } from "@mui/icons-material";

export const TopBar: React.FC = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探し物は何ですか？"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarItemIcons">
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">2</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="画像1" className="topBarImg" />
        </div>
      </div>
    </div>
  );
};
