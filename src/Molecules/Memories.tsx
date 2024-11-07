import Image from "../Atoms/Image";
import MomentLabel from "./MomentLabel";

const imageStyle = {
  width: 250,
  height: 150,
  borderRadius: "8%",
  objectFit: "cover" as const,
};

const Memories = () => {
  return (
    <div>
      <Image imageStyle={imageStyle} />
      <MomentLabel content="Last Month Memory" time="25 Videos . Sep 2024" />
    </div>
  );
};

export default Memories;
