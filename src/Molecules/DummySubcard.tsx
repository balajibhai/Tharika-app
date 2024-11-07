import { Box, styled } from "@mui/material";
import Image from "../Atoms/Image";

const DummySubcardStyle = styled(Box)(({ theme }) => ({
  padding: 3,
  borderRadius: 25,
  width: 200,
  height: 200,
  border: "1px solid lightgrey",
  mt: 5, // Adds top margin
}));

const imageStyle = {
  width: 80,
  height: 80,
  borderRadius: "100%",
  objectFit: "cover" as const,
};

const DummySubcard = () => {
  return (
    <DummySubcardStyle>
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
    </DummySubcardStyle>
  );
};

export default DummySubcard;
