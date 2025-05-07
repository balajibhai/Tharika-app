import Icon, { ICON_MAP } from "../Atoms/Icon";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import WhiteCard from "../Atoms/WhiteCard";

const cardStyle = {
  backgroundColor: "white",
  boxShadow: 3,
  borderRadius: 2,
  width: 231,
  height: 90,
};

const imageStyle = {
  width: 36,
  height: 36,
  borderRadius: "100%",
  objectFit: "cover" as const,
};

type RecentHealthdataCardProps = {
  content: string;
  icon: keyof typeof ICON_MAP;
};

const RecentHealthdataCard = ({ content, icon }: RecentHealthdataCardProps) => {
  return (
    <WhiteCard sx={{ marginBottom: "50px" }} cardStyle={cardStyle}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Image imageStyle={imageStyle} />
          <Text content={content} variant="subtitle1" />
        </div>
        <div>
          <Icon icon={icon} />
        </div>
      </div>
    </WhiteCard>
  );
};

export default RecentHealthdataCard;
