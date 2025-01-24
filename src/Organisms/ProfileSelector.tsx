import { useCallback, useEffect, useState } from "react";
import ProfileCard from "../Molecules/ProfileCard";
import AddMember from "../Molecules/AddMember";
import Text from "../Atoms/Text";
import LightBorderCard from "../Atoms/LightBorderCard";
import { Profile, SelectionType } from "../ComponentTypes";

const borderCardStyle = {
  padding: "20px",
  width: "265px",
};

type ProfileSelectorProps = {
  onSelection: (profile: string, type: SelectionType) => void;
  type: SelectionType;
  selector: Profile[];
  onUpdate: (name: string, type: SelectionType) => void;
};

const ProfileSelector = (props: ProfileSelectorProps) => {
  const { onSelection, type, selector, onUpdate } = props;
  const [profiles, setProfiles] = useState<Profile[]>(selector);

  useEffect(() => {
    setProfiles(selector);
  }, [selector]);

  const [activeProfile, setActiveProfile] = useState<number | null>(null);
  const [isAddingMember, setIsAddingMember] = useState<boolean>(false);

  const handleAddProfile = useCallback(
    (name: string) => {
      onUpdate(name, type);
      setIsAddingMember(false);
    },
    [onUpdate, type]
  );

  const profileCardClick = useCallback(
    (id: number | null, name: string) => {
      if (id === activeProfile) {
        setActiveProfile(null);
        onSelection("", type);
      } else {
        setActiveProfile(id);
        onSelection(name, type);
      }
    },
    [onSelection, type, activeProfile]
  );

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "11px" }}
    >
      <LightBorderCard sx={borderCardStyle}>
        <Text
          content={
            type === SelectionType.PROFILE
              ? "Select Profile"
              : "Select Category"
          }
          variant="h6"
          sx={{ fontWeight: "bold" }}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              isActive={activeProfile === profile.id}
              onClick={() => profileCardClick(profile.id, profile.name)}
            />
          ))}
          <ProfileCard
            name={
              type === SelectionType.PROFILE ? "+ Add Member" : "+ Add Category"
            }
            isActive={false}
            onClick={() => setIsAddingMember(true)}
          />
        </div>
        {isAddingMember && <AddMember onAdd={handleAddProfile} />}
      </LightBorderCard>
    </div>
  );
};

export default ProfileSelector;
