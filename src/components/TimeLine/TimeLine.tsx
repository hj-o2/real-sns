import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./TimeLine.css";

export const TimeLine = () => {
  return (
    <div className="timeLine">
      <div className="timeLineWrapper">
        <Share />
        <Post /> 
      </div>
    </div>
  );
};
