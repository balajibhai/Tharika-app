import { useContext, useState } from "react";
import Image from "../Atoms/Image";
import LightBorderCard from "../Atoms/LightBorderCard";
import MediaContainer from "./MediaContainer";
import { ClickHandlerContext } from "../Context";

const imageStyle = {
  width: 80,
  height: 80,
  borderRadius: "100%",
  objectFit: "cover" as const,
};

const borderCardStyle = {
  width: 200,
  height: 200,
  cursor: "pointer",
};

const Subcard = () => {
  const [showMediaContainer, setShowMediaContainer] = useState(false);
  const clickViewAllMedia = () => {
    setShowMediaContainer(!showMediaContainer);
  };
  const onCloseViewAllMedia = () => {
    setShowMediaContainer(!showMediaContainer);
  };
  const { allMedia, setAllMedia } = useContext(ClickHandlerContext);

  return (
    <LightBorderCard sx={borderCardStyle} onClick={clickViewAllMedia}>
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
      <MediaContainer
        showMediaContainer={showMediaContainer}
        onClose={onCloseViewAllMedia}
        title="All media"
        listOfMedia={allMedia}
        setMediaList={setAllMedia}
      />
    </LightBorderCard>
  );
};

export default Subcard;
