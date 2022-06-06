import { MoreVert } from "@mui/icons-material";
import "./Post.css";

export const Post: React.FC = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt="プロフィール画像"
              className="postProfileImg"
            />
            <span className="postUserName">hojojo</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">SNS作ってます</span>
          <img src="/assets/post/1.jpeg" alt="投稿画像" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/heart.png" alt="likeIcon" className="likeIcon" />
            <span className="postLikeCounter">５人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
