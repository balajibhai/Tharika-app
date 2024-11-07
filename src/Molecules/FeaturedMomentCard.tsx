import Text from "../Atoms/Text";
import WhiteCard from "../Atoms/WhiteCard";

type FeaturedMomentCardProps = {
  name: string;
  backgroundColor: string;
};

const FeaturedMomentCard = ({
  name,
  backgroundColor,
}: FeaturedMomentCardProps) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    boxShadow: 3,
    borderRadius: 2,
    width: 131,
    height: 90,
  };
  return (
    <WhiteCard sx={{ marginBottom: "50px" }} cardStyle={cardStyle}>
      <Text content={name} variant="subtitle1" />
    </WhiteCard>
  );
};

export default FeaturedMomentCard;
