import { TopBar } from "../TopBar/TopBar";
import { SideBar } from "../SideBar/SideBar";
import TimeLine from "../TimeLine/TimeLine";
import RightBar from "../RightBar/RightBar";
import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [users, setUsers] = useState({});
  const username = useParams().username;

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUsers(res.data);
    })();
  }, [username]);

  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={users.coverPicture || `${PF}/post/6.jpeg`}
                alt="背景"
                className="profileCoverImg"
              />
              <img
                src={users.profilePicture || `${PF}/person/noAvatar.png`}
                alt="アイコン"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{users.username}</h4>
              <span className="profileInfoDesc ">{users.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine username={username} />
            <RightBar users={users} />
          </div>
        </div>
      </div>
    </>
  );
}
