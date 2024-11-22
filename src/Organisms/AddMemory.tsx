import React, { useContext, useEffect, useState } from "react";
import DottedSquares from "../Atoms/DottedSquare";
import Text from "../Atoms/Text";
import DateTimePicker from "../Molecules/DateTimePicker";
import MediaDisplay from "../Molecules/MediaDisplay";
import { DurationType, MediaItem, MediaType } from "../ComponentTypes";
import { ClickHandlerContext } from "../Context";
import CustomButton from "../Atoms/CustomButton";
import SuccessNotification from "../Atoms/SuccessNotification";
import UploadLocationSelector from "../Molecules/UploadLocationSelector";
import ProfileSelector from "./ProfileSelector";

const AddMemory = () => {
  const [previewMediaList, setPreviewMediaList] = useState<MediaItem[]>([]);
  const [saveButtonclick, setSaveButtonclick] = useState<boolean>(false);
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [openUploadLocation, setOpenUploadLocation] = useState(false);
  const { handleMediaUpload } = useContext(ClickHandlerContext);

  useEffect(() => {
    if (previewMediaList.length === 0) {
      setSaveButtonclick(false);
    }
    if (previewMediaList.length > 0 && saveButtonclick) {
      setShowUploadButton(true);
    } else {
      setShowUploadButton(false);
    }
  }, [previewMediaList.length, saveButtonclick]);

  const handleFilePreview = (
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
      setPreviewMediaList((prev) => [...prev, ...newMedia]);
    }
  };

  const handleDuration = (value: typeof DurationType) => {
    previewMediaList[previewMediaList.length - 1].duration = value;
    setPreviewMediaList([...previewMediaList]);
    setSaveButtonclick(true);
  };

  const handleFileUpload = (selectedValue: string) => {
    setOpenUploadLocation(!openUploadLocation);
    setShowSuccessNotification(true);
    setShowUploadButton(false);
    handleMediaUpload(previewMediaList, selectedValue);
    setPreviewMediaList([]);
  };

  const onNotificationClose = () => {
    setShowSuccessNotification(false);
  };

  const selectLocation = () => {
    setOpenUploadLocation(!openUploadLocation);
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
      {showUploadButton && (
        <MediaDisplay
          listOfMedia={previewMediaList}
          sectionName="Preview"
          setMediaList={setPreviewMediaList}
        />
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {showUploadButton && (
          <CustomButton content="Upload" onClick={selectLocation} />
        )}
      </div>
      <SuccessNotification
        onNotificationClose={onNotificationClose}
        showSuccessNotification={showSuccessNotification}
      />
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
        <DottedSquares onFilePreview={handleFilePreview} />
      </div>
      <ProfileSelector />
      <DateTimePicker
        handleDuration={handleDuration}
        buttonDisable={previewMediaList.length === 0}
      />
      <UploadLocationSelector
        openContainer={openUploadLocation}
        onSelect={handleFileUpload}
        noSelection={() => setOpenUploadLocation(!openUploadLocation)}
      />
    </div>
  );
};

export default AddMemory;
