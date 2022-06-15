import "./Online.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          src={PF + user.profilePicture}
          alt="オンライン1"
          className="rightBarProfileImg"
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
}
