import RightBar from "../../components/RightBar/RightBar";
import { SideBar } from "../../components/SideBar/SideBar";
import TimeLine from "../../components/TimeLine/TimeLine";
import { TopBar } from "../../components/TopBar/TopBar";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <TimeLine />
        <RightBar />
      </div>
    </>
  );
};
