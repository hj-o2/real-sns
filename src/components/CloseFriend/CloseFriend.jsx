import "./CloseFriend";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className=" Friend">
      <img
        src={PF + user.profilePicture}
        alt="画像2"
        className="sideBarFriendImg"
      />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
}
