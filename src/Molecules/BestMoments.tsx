import { useCallback, useState } from "react";
import CustomButton from "../Atoms/CustomButton";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import MomentLabel from "./MomentLabel";
import MediaContainer from "./MediaContainer";
import { clickHandler } from "../Redux/pagenavigation";
import { useAppDispatch, useAppSelector } from "../Hooks/customhooks";
import { PageNavID } from "../PageNavID";
import { MediacontainerType } from "../ComponentTypes";

const imageStyle = {
  width: 542,
  height: 256,
  objectFit: "cover" as const,
};

const BestMoments = () => {
  const [showMediaContainer, setShowMediaContainer] = useState(false);
  const clickViewAllMedia = useCallback(() => {
    setShowMediaContainer(!showMediaContainer);
  }, [showMediaContainer]);
  const onCloseViewAllMedia = useCallback(() => {
    setShowMediaContainer(!showMediaContainer);
  }, [showMediaContainer]);
  const { joyfulMedia } = useAppSelector((state) => state.mediaHandler);
  const dispatch = useAppDispatch();
  return (
    <div onClick={clickViewAllMedia}>
      <Text content="Best Moments" variant="h6" sx={{ fontWeight: "bold" }} />
      <Image imageStyle={imageStyle} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <MomentLabel content="Joyful Moments" time="350 Photos . Oct 2024" />
        </div>
        <div>
          <CustomButton
            content="Add New Memory"
            icon={"AddIcon"}
            onClick={() => dispatch(clickHandler(PageNavID.MEMORY))}
          />
        </div>
      </div>
      <MediaContainer
        showMediaContainer={showMediaContainer}
        onClose={onCloseViewAllMedia}
        title="Joyful Moments"
        listOfMedia={joyfulMedia}
        mediaContainerName={MediacontainerType.JOYFUL}
      />
    </div>
  );
};

export default BestMoments;
