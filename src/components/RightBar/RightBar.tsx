import "./RightBar.css";

export const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="スター画像" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中
          </span>
        </div>
        <img src="assets/event.jpeg" alt="イベント" className="eventImg" />
        <h4 className="rightBarTitle">オンラインの友達</h4>
        <ul className="rightBarFriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src="assets/person/2.jpeg"
                alt="オンライン1"
                className="rightBarProfileImg"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">yamada</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src="assets/person/3.jpeg"
                alt="オンライン2"
                className="rightBarProfileImg"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">tanaka</span>
          </li>
        </ul>
        <p className="promotionTitle">PROMOTION</p>
        <img
          src="assets/promotion/pro1.jpeg"
          alt="ショッピングのプロモーション広告"
          className="rightBarPromotionImg"
        / >
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
