import "./Online.css";

export default function Online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          src={user.profilePicture}
          alt="オンライン1"
          className="rightBarProfileImg"
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
}
