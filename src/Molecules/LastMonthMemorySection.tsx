import { useContext, useState } from "react";
import Image from "../Atoms/Image";
import MomentLabel from "./MomentLabel";
import { ClickHandlerContext } from "../Context";
import MediaContainer from "./MediaContainer";

const imageStyle = {
  width: 250,
  height: 150,
  borderRadius: "8%",
  objectFit: "cover" as const,
};

const LastMonthMemorySection = () => {
  const { LastMonthMedia, setLastMonthMedia } = useContext(ClickHandlerContext);
  const [showMediaContainer, setShowMediaContainer] = useState(false);
  const clickViewAllMedia = () => {
    setShowMediaContainer(!showMediaContainer);
  };
  const onCloseViewAllMedia = () => {
    setShowMediaContainer(!showMediaContainer);
  };

  return (
    <div onClick={clickViewAllMedia}>
      <Image imageStyle={imageStyle} />
      <MomentLabel content="Last Month Memory" time="25 Videos . Sep 2024" />
      <MediaContainer
        showMediaContainer={showMediaContainer}
        onClose={onCloseViewAllMedia}
        title="Last month memory"
        listOfMedia={LastMonthMedia}
        setMediaList={setLastMonthMedia}
      />
    </div>
  );
};

export default LastMonthMemorySection;
