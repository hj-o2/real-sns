import { TopBar } from "../TopBar/TopBar";
import { SideBar } from "../SideBar/SideBar";
import { TimeLine } from "../TimeLine/TimeLine";
import { RightBar } from "../RightBar/RightBar";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/6.jpeg"
                alt="背景"
                className="profileCoverImg"
              />
              <img
                src="assets/person/1.jpeg"
                alt="アイコン"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">hojojo</h4>
              <span className="profileInfoDesc ">よろしくお願いします</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
