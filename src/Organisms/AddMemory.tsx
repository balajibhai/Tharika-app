import React, { useEffect, useState } from "react";
import DottedSquares from "../Atoms/DottedSquare";
import Text from "../Atoms/Text";
import DateTimePicker from "../Molecules/DateTimePicker";
import PreviewSection from "../Molecules/PreviewSection";
import { DurationType, MediaItem, MediaType } from "../ComponentTypes";
import { PreviewContext } from "../Context";
import CustomButton from "../Atoms/CustomButton";

const AddMemory = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [saveButtonclick, setSaveButtonclick] = useState<boolean>(false);
  const showUploadButton = mediaList.length > 0 && saveButtonclick;

  useEffect(() => {
    if (mediaList.length === 0) {
      setSaveButtonclick(false);
    }
  }, [mediaList.length]);

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
        duration: {
          Date: "",
          Time: "",
        },
      }));
      setMediaList((prev) => [...prev, ...newMedia]);
    }
  };

  const handleDelete = (id: string) => {
    setMediaList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDuration = (value: typeof DurationType) => {
    mediaList[mediaList.length - 1].duration = value;
    setMediaList([...mediaList]);
    setSaveButtonclick(true);
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
      <PreviewContext.Provider value={{ handleDelete }}>
        <PreviewSection mediaList={mediaList} />
      </PreviewContext.Provider>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {showUploadButton && (
          <CustomButton content="Upload" onClick={() => null} />
        )}
      </div>
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
      <DateTimePicker
        handleDuration={handleDuration}
        buttonDisable={mediaList.length === 0}
      />
    </div>
  );
};

export default AddMemory;
