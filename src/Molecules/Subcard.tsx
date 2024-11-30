import { useCallback, useState } from "react";
import Image from "../Atoms/Image";
import LightBorderCard from "../Atoms/LightBorderCard";
import MediaContainer from "./MediaContainer";
import { useAppSelector } from "../Hooks/customhooks";

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
  const clickViewAllMedia = useCallback(() => {
    setShowMediaContainer(!showMediaContainer);
  }, [showMediaContainer]);
  const onCloseViewAllMedia = useCallback(() => {
    setShowMediaContainer(!showMediaContainer);
  }, [showMediaContainer]);
  const { allMedia } = useAppSelector((state) => state.mediaHandler);

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
        mediaContainerName="allMedia"
      />
    </LightBorderCard>
  );
};

export default Subcard;
