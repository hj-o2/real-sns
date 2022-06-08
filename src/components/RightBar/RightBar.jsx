import { Users } from "../../dummyData/dummyData";
import Online from "../Online/Online";
import "./RightBar.css";

export const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="スター画像" className="starImg" />
          <span className="eventText">フォロワー限定イベント開催中</span>
        </div>
        <img src="assets/event.jpeg" alt="イベント" className="eventImg" />
        <h4 className="rightBarTitle">オンラインの友達</h4>
        <ul className="rightBarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">PROMOTION</p>
        <img
          src="assets/promotion/pro1.jpeg"
          alt="ショッピングのプロモーション広告"
          className="rightBarPromotionImg"
        />
        <p className="promotionName">SHOPPING</p>
        <img
          src="assets/promotion/pro2.jpeg"
          alt="車のプロモーション広告"
          className="rightBarPromotionImg"
        />
        <p className="promotionName">CAR</p>
        <img
          src="assets/promotion/pro3.jpeg"
          alt="会社のプロモーション広告"
          className="rightBarPromotionImg"
        />
        <p className="promotionName">COMPANY</p>
      </div>
    </div>
  );
};
