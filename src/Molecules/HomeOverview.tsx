import WhiteCard from "../Atoms/WhiteCard";
import BestMoments from "./BestMoments";
import DummySubcard from "./DummySubcard";
import Memories from "./Memories";

const HomeOverview = () => {
  return (
    <WhiteCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "595px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <DummySubcard />
          <Memories />
        </div>
        <BestMoments />
      </div>
    </WhiteCard>
  );
};

export default HomeOverview;
