import Text from "../Atoms/Text";
import RecentHealthdataCard from "./RecentHealthdataCard";

const RecentHealthdata = () => {
  return (
    <div style={{ marginTop: "18px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "637px",
            display: "flex",
          }}
        >
          <Text
            content="Recent Health data"
            variant="h6"
            sx={{ fontWeight: "bold" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "637px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "480px",
              marginTop: "5px",
            }}
          >
            <RecentHealthdataCard content="102.3cm" icon="HeightOutlinedIcon" />
            <RecentHealthdataCard content="4.5Kg" icon="FitnessCenterIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentHealthdata;
