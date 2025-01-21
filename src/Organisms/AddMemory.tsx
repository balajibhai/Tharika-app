import React, { useCallback, useEffect, useState } from "react";
import DottedSquares from "../Atoms/DottedSquare";
import Text from "../Atoms/Text";
import DateTimePicker from "../Molecules/DateTimePicker";
import MediaDisplay from "../Molecules/MediaDisplay";
import {
  DurationType,
  MediaItem,
  MediaType,
  Profile,
  selectionType,
} from "../ComponentTypes";
import CustomButton from "../Atoms/CustomButton";
import SuccessNotification from "../Atoms/SuccessNotification";
import UploadLocationSelector from "../Molecules/UploadLocationSelector";
import ProfileSelector from "./ProfileSelector";
import { useAppDispatch } from "../Hooks/customhooks";
import { handleMediaUpload } from "../Redux/mediauploadhandler";

const AddMemory = () => {
  const [previewMediaList, setPreviewMediaList] = useState<MediaItem[]>([]);
  const [saveButtonclick, setSaveButtonclick] = useState<boolean>(false);
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [openUploadLocation, setOpenUploadLocation] = useState(false);
  const [currentProfile, setCurrentProfile] = useState("");
  const dispatch = useAppDispatch();
  const [profileselector, setProfileSelector] = useState<Profile[]>([
    { id: 1, name: "Jenny" },
    { id: 2, name: "Jacob" },
    { id: 3, name: "Rustyn" },
    { id: 4, name: "Ileana" },
  ]);
  const [categorySelector, setCategorySelector] = useState<Profile[]>([
    { id: 1, name: "Proud moments" },
  ]);

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

  const handleFilePreview = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, type: MediaType) => {
      const files = event.target.files;
      if (files) {
        const newMedia: MediaItem[] = Array.from(files).map((file) => ({
          id: file.name,
          name: "",
          type,
          url: URL.createObjectURL(file),
          duration: {
            Date: "",
            Time: "",
          },
        }));
        setPreviewMediaList((prev) => [...prev, ...newMedia]);
      }
    },
    []
  );

  const handleDuration = useCallback(
    (value: typeof DurationType) => {
      previewMediaList[previewMediaList.length - 1].duration = value;
      previewMediaList[previewMediaList.length - 1].name = currentProfile;
      setPreviewMediaList([...previewMediaList]);
      setSaveButtonclick(true);
    },
    [currentProfile, previewMediaList]
  );

  const handleFileUpload = useCallback(
    (selectedValue: string) => {
      setOpenUploadLocation(!openUploadLocation);
      setShowSuccessNotification(true);
      setShowUploadButton(false);
      dispatch(handleMediaUpload({ list: previewMediaList, selectedValue }));
      setPreviewMediaList([]);
    },
    [openUploadLocation, previewMediaList, dispatch]
  );

  const onNotificationClose = useCallback(() => {
    setShowSuccessNotification(false);
  }, []);

  const selectLocation = useCallback(() => {
    setOpenUploadLocation(!openUploadLocation);
  }, [openUploadLocation]);

  const handleProfileSelection = useCallback((profile: string) => {
    setCurrentProfile(profile);
  }, []);

  const onUpdate = (name: string, type: selectionType) => {
    if (type === selectionType.PROFILE) {
      setProfileSelector([...profileselector, { id: Date.now(), name }]);
    } else {
      setCategorySelector([...categorySelector, { id: Date.now(), name }]);
    }
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
      <ProfileSelector
        onSelection={handleProfileSelection}
        type={selectionType.PROFILE}
        selector={profileselector}
        onUpdate={onUpdate}
      />
      <ProfileSelector
        onSelection={handleProfileSelection}
        type={selectionType.CATEGORY}
        selector={categorySelector}
        onUpdate={onUpdate}
      />
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
