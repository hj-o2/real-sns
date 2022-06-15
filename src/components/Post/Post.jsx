import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import "./Post.css";
// import { Users } from "../../dummyData/dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const user = users.filter((user) => user.id === post.id)[0];

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUsers(res.data);
    })();
  }, [post.userId]);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${users.username}`}>
              <img
                src={users.profilePicture || `${PF}/person/noAvatar.png`}
                alt="プロフィール画像"
                className="postProfileImg"
              />
            </Link>
            <span className="postUserName">{users.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PF + post.img} alt="投稿画像" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/heart.png"
              alt="likeIcon"
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
