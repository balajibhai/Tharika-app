import WhiteCard from "../Atoms/WhiteCard";
import DummySubcard from "./DummySubcard";
import Memories from "./Memories";

const HomeOverview = () => {
  return (
    <WhiteCard>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <DummySubcard />
        <Memories />
      </div>
    </WhiteCard>
  );
};

export default HomeOverview;
