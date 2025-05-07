import WhiteCard from "../Atoms/WhiteCard";
import BestMoments from "./BestMoments";
import Subcard from "./Subcard";
import FeaturedMoments from "./FeaturedMoments";
import SpecialMoments from "./SpecialMoments";
import RecentHealthdata from "./RecentHealthdata";
import LastMonthMemorySection from "./LastMonthMemorySection";

const cardStyle = {
  backgroundColor: "white",
  padding: 3,
  boxShadow: 3,
  borderRadius: 2,
  maxWidth: 575,
  height: 620,
  margin: "auto",
};

const Memories = () => {
  return (
    <div>
      <WhiteCard
        sx={{ flex: 1, marginTop: "95px", marginBottom: "50px" }}
        cardStyle={cardStyle}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "595px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Subcard />
            <LastMonthMemorySection />
          </div>
          <BestMoments />
        </div>
      </WhiteCard>
      <FeaturedMoments />
      <SpecialMoments />
      <RecentHealthdata />
    </div>
  );
};

export default Memories;
