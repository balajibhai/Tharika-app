import Image from "../Atoms/Image";
import LightBorderCard from "../Atoms/LightBorderCard";
import Text from "../Atoms/Text";

const borderCardStyle = {
  display: "flex",
  justifyContent: "center",
  width: 431,
  height: 66,
};

const imageStyle = {
  width: 36,
  height: 36,
  borderRadius: "100%",
  objectFit: "cover" as const,
};

type SpecialMomentsCardProps = {
  content: string;
  time: string;
};

const SpecialMomentsCard = ({ content, time }: SpecialMomentsCardProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          width: "632px",
        }}
      >
        <LightBorderCard sx={borderCardStyle}>
          <div>
            <div>
              <Text content={content} variant="subtitle1" />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <Image imageStyle={imageStyle} />
              </div>
              <div style={{ marginTop: "5px" }}>
                <Text variant="subtitle2" content={time} />
              </div>
            </div>
          </div>
        </LightBorderCard>
      </div>
    </div>
  );
};

export default SpecialMomentsCard;
