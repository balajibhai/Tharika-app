import React, { useState } from "react";
import DottedSquares from "../Atoms/DottedSquare";
import Text from "../Atoms/Text";
import DateTimePicker from "../Molecules/DateTimePicker";
import PreviewSection from "../Molecules/PreviewSection";
import { MediaType } from "../ComponentTypes";

interface MediaItem {
  id: string;
  url: string;
  type: MediaType;
}

const AddMemory = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: MediaType
  ) => {
    const files = event.target.files;
    if (files) {
      const newMedia: MediaItem[] = Array.from(files).map((file) => ({
        id: file.name,
        type,
        url: URL.createObjectURL(file),
      }));
      setMediaList((prev) => [...prev, ...newMedia]);
    }
  };

  const handleDelete = (id: string) => {
    setMediaList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        paddingTop: "100px",
      }}
    >
      <PreviewSection mediaList={mediaList} handleDelete={handleDelete} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "326px",
          }}
        >
          <Text content="Add Photo" variant="h6" sx={{ fontWeight: "bold" }} />
        </div>
      </div>
      <div>
        <DottedSquares onFileUpload={handleFileUpload} />
      </div>
      <DateTimePicker />
    </div>
  );
};

export default AddMemory;
