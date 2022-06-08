import "./CloseFriend";

export default function CloseFriend({ user }) {
  console.log(user);

  return (
    <li className="sideBarFriend">
      <img src={user.profilePicture} alt="画像2" className="sideBarFriendImg" />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
}
