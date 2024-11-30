import { useCallback, useState } from "react";
import Image from "../Atoms/Image";
import MomentLabel from "./MomentLabel";
import MediaContainer from "./MediaContainer";
import { useAppSelector } from "../Hooks/customhooks";

const imageStyle = {
  width: 250,
  height: 150,
  borderRadius: "8%",
  objectFit: "cover" as const,
};

const LastMonthMemorySection = () => {
  const { LastMonthMedia } = useAppSelector((state) => state.mediaHandler);
  const [showMediaContainer, setShowMediaContainer] = useState(false);
  const clickViewAllMedia = useCallback(() => {
    setShowMediaContainer(!showMediaContainer);
  }, [showMediaContainer]);
  const onCloseViewAllMedia = useCallback(() => {
    setShowMediaContainer(!showMediaContainer);
  }, [showMediaContainer]);

  return (
    <div onClick={clickViewAllMedia}>
      <Image imageStyle={imageStyle} />
      <MomentLabel content="Last Month Memory" time="25 Videos . Sep 2024" />
      <MediaContainer
        showMediaContainer={showMediaContainer}
        onClose={onCloseViewAllMedia}
        title="Last month memory"
        listOfMedia={LastMonthMedia}
        mediaContainerName="LastMonthMedia"
      />
    </div>
  );
};

export default LastMonthMemorySection;
