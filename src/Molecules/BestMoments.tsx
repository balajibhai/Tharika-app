import { useContext } from "react";
import CustomButton from "../Atoms/CustomButton";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import MomentLabel from "./MomentLabel";
import { ClickHandlerContext } from "../Context";
import { PageNavID } from "../ComponentTypes";

const imageStyle = {
  width: 542,
  height: 256,
  objectFit: "cover" as const,
};

const BestMoments = () => {
  const { clickHandler } = useContext(ClickHandlerContext);
  return (
    <div>
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
            onClick={() => clickHandler(PageNavID.MEMORY)}
          />
        </div>
      </div>
    </div>
  );
};

export default BestMoments;
