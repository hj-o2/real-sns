import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import { Posts, Users } from "../../dummyData/dummyData";
import "./TimeLine.css";

export const TimeLine = () => {
  return (
    <div className="timeLine">
      <div className="timeLineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
