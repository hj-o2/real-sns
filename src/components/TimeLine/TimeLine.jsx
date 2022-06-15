import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./TimeLine.css";
// import { Posts } from "../../dummyData/dummyData";

export default function TimeLine({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/629837b906976c72c921a638");
      setPosts(res.data);
    })();
  }, [username]);

  return (
    <div className="timeLine">
      <div className="timeLineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
