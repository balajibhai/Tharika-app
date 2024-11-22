import React, { useState } from "react";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";

interface AddMemberProps {
  onAdd: (name: string) => void;
}

const AddMember: React.FC<AddMemberProps> = ({ onAdd }) => {
  const [name, setName] = useState<string>("");

  const handleAdd = () => {
    if (name.trim()) {
      onAdd(name);
      setName("");
    }
  };

  const buttonStyle = {
    border: "1px solid gray",
    borderRadius: "20px",
    padding: "10px 20px",
    margin: "5px",
    background: "white",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter member name"
        style={{
          padding: "10px",
          border: "1px solid gray",
          marginRight: "10px",
        }}
      />
      <Button onClick={handleAdd} style={buttonStyle}>
        <Text content="Save" variant="subtitle2" />
      </Button>
    </div>
  );
};

export default AddMember;
