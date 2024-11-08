import Image from "../Atoms/Image";
import LightBorderCard from "../Atoms/LightBorderCard";

const imageStyle = {
  width: 80,
  height: 80,
  borderRadius: "100%",
  objectFit: "cover" as const,
};

const borderCardStyle = {
  width: 200,
  height: 200,
};

const Subcard = () => {
  return (
    <LightBorderCard sx={borderCardStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "190px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Image imageStyle={imageStyle} />
          <Image imageStyle={imageStyle} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Image imageStyle={imageStyle} />
          <Image imageStyle={imageStyle} />
        </div>
      </div>
    </LightBorderCard>
  );
};

export default Subcard;
