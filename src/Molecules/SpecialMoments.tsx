import Text from "../Atoms/Text";
import SpecialMomentsCard from "./SpecialMomentsCard";

const SpecialMoments = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "637px",
            display: "flex",
          }}
        >
          <Text
            content="Special Moments"
            variant="h6"
            sx={{ fontWeight: "bold" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "200px",
        }}
      >
        <SpecialMomentsCard
          content='"When Rustyn laughed heartily while playing with me"'
          time="Oct 01,2024. Jenny Watson"
        />
        <SpecialMomentsCard
          content='"When she won second prize in fancy dress competition"'
          time="Sep 20,2024. Jacob Watson"
        />
      </div>
    </>
  );
};

export default SpecialMoments;
