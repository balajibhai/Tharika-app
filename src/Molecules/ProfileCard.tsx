import React from "react";
import Text from "../Atoms/Text";
import WhiteCard from "../Atoms/WhiteCard";

interface ProfileCardProps {
  name: string;
  onClick: () => void;
  isActive: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  onClick,
  isActive,
}) => {
  const cardStyle = {
    background: isActive ? "orange" : "white",
    boxShadow: 3,
    borderRadius: 2,
    height: 40,
  };
  return (
    <WhiteCard cardStyle={cardStyle} onClick={onClick}>
      <Text content={name} variant="subtitle2" />
    </WhiteCard>
  );
};

export default ProfileCard;
