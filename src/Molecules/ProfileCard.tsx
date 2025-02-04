import CloseIcon from "../Atoms/CloseIcon";
import Text from "../Atoms/Text";
import WhiteCard from "../Atoms/WhiteCard";
import { SelectionType } from "../ComponentTypes";
import { useAppDispatch } from "../Hooks/customhooks";
import { removeCategory } from "../Redux/categoryselector";
import { removeProfile } from "../Redux/profileselector";

interface ProfileCardProps {
  name: string;
  onClick: () => void;
  isActive: boolean;
  addCard?: boolean;
  cardID?: number;
  type?: SelectionType;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { name, onClick, isActive, addCard, cardID, type } = props;
  const cardStyle = {
    background: isActive ? "orange" : "white",
    boxShadow: 3,
    borderRadius: 2,
    height: 40,
  };
  const dispatch = useAppDispatch();

  const onDeleteCard = () => {
    if (!cardID) return;
    if (type === "category") {
      dispatch(removeCategory(cardID));
    } else {
      dispatch(removeProfile(cardID));
    }
  };
  return (
    <WhiteCard cardStyle={cardStyle} onClick={onClick}>
      <div style={{ display: "flex" }}>
        <Text content={name} variant="subtitle2" />
        {!addCard && <CloseIcon onClick={onDeleteCard} />}
      </div>
    </WhiteCard>
  );
};

export default ProfileCard;
