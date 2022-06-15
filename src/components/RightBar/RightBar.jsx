import { Users } from "../../dummyData/dummyData";
import Online from "../Online/Online";
import "./RightBar.css";

export default function RightBar({ users }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt="スター画像" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定イベント</b> 開催中!
          </span>
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
      </>
    );
  };

  const ProfileRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <h4 className="rightBarTitle">ユーザー情報</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">出身：</span>
            <span className="rightBarInfoKey">福岡</span>
          </div>
          <h4 className="rightBarTitle">Your Friends</h4>
          <div className="rightBarFollowings">
            <div className="rightBarFollowing">
              <img
                src={`${PF}/person/2.jpeg`}
                alt="フォロワー写真1"
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">sample2</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src={`${PF}/person/3.jpeg`}
                alt="フォロワー写真1"
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">sample3</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src={`${PF}/person/4.jpeg`}
                alt="フォロワー写真1"
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">sample4</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src={`${PF}/person/5.jpeg`}
                alt="フォロワー写真1"
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">sample5</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper"></div>
      {users ? <ProfileRightBar /> : <HomeRightBar />}
    </div>
  );
}
