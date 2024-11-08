import Image from "../Atoms/Image";
import WhiteCard from "../Atoms/WhiteCard";
import BestMoments from "./BestMoments";
import Subcard from "./Subcard";
import FeaturedMoments from "./FeaturedMoments";
import MomentLabel from "./MomentLabel";
import SpecialMoments from "./SpecialMoments";
import RecentHealthdata from "./RecentHealthdata";

const imageStyle = {
  width: 250,
  height: 150,
  borderRadius: "8%",
  objectFit: "cover" as const,
};

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
            <div>
              <Image imageStyle={imageStyle} />
              <MomentLabel
                content="Last Month Memory"
                time="25 Videos . Sep 2024"
              />
            </div>
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
