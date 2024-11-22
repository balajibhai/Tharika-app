import React, { useState } from "react";
import ProfileCard from "../Molecules/ProfileCard";
import AddMember from "../Molecules/AddMember";
import Text from "../Atoms/Text";
import LightBorderCard from "../Atoms/LightBorderCard";

interface Profile {
  id: number;
  name: string;
}

const borderCardStyle = {
  padding: "20px",
  width: "300px",
};

const ProfileSelector: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([
    { id: 1, name: "Jenny" },
    { id: 2, name: "Jacob" },
    { id: 3, name: "Rustyn" },
    { id: 4, name: "Ileana" },
  ]);

  const [activeProfile, setActiveProfile] = useState<number | null>(null);
  const [isAddingMember, setIsAddingMember] = useState<boolean>(false);

  const handleAddProfile = (name: string) => {
    setProfiles([...profiles, { id: Date.now(), name }]);
    setIsAddingMember(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <LightBorderCard sx={borderCardStyle}>
        <Text
          content="Special Profile"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              isActive={activeProfile === profile.id}
              onClick={() => setActiveProfile(profile.id)}
            />
          ))}
          <ProfileCard
            name="+ Add Member"
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
