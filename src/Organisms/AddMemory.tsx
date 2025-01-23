import React, { useCallback, useEffect, useState } from "react";
import DottedSquares from "../Atoms/DottedSquare";
import Text from "../Atoms/Text";
import DateTimePicker from "../Molecules/DateTimePicker";
import MediaDisplay from "../Molecules/MediaDisplay";
import {
  DurationType,
  MediaItem,
  MediaType,
  NoteType,
  Profile,
  SelectionType,
} from "../ComponentTypes";
import CustomButton from "../Atoms/CustomButton";
import SuccessNotification from "../Atoms/SuccessNotification";
import UploadLocationSelector from "../Molecules/UploadLocationSelector";
import ProfileSelector from "./ProfileSelector";
import { useAppDispatch } from "../Hooks/customhooks";
import { handleMediaUpload } from "../Redux/mediauploadhandler";
import Note from "../Atoms/Note";

const AddMemory = () => {
  const [previewMediaList, setPreviewMediaList] = useState<MediaItem[]>([]);
  const [saveButtonclick, setSaveButtonclick] = useState<boolean>(false);
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [openUploadLocation, setOpenUploadLocation] = useState(false);
  const [currentProfile, setCurrentProfile] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
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
  const [note, setNote] = useState<NoteType>({ title: "", description: "" });

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
          category: "",
          type,
          note: { title: "", description: "" },
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
      previewMediaList[previewMediaList.length - 1].category = currentCategory;
      previewMediaList[previewMediaList.length - 1].note = note;
      setPreviewMediaList([...previewMediaList]);
      setSaveButtonclick(true);
    },
    [currentProfile, previewMediaList, currentCategory, note]
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

  const handleProfileSelection = useCallback((name: string, type: string) => {
    if (type === SelectionType.PROFILE) {
      setCurrentProfile(name);
    } else {
      setCurrentCategory(name);
    }
  }, []);

  const onUpdate = (name: string, type: SelectionType) => {
    if (type === SelectionType.PROFILE) {
      setProfileSelector([...profileselector, { id: Date.now(), name }]);
    } else {
      setCategorySelector([...categorySelector, { id: Date.now(), name }]);
    }
  };

  const handleNoteChange = (field: "title" | "description", value: string) => {
    setNote((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        paddingTop: "100px",
      }}
    >
      <div>
        {showUploadButton && (
          <MediaDisplay
            listOfMedia={previewMediaList}
            setMediaList={setPreviewMediaList}
            height="200px"
            mediaContainerName="Preview"
          />
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {showUploadButton && (
            <CustomButton content="Upload" onClick={selectLocation} />
          )}
        </div>
      </div>
      <div>
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
            <Text
              content="Add Photo"
              variant="h6"
              sx={{ fontWeight: "bold" }}
            />
          </div>
        </div>
        <div>
          <DottedSquares onFilePreview={handleFilePreview} />
        </div>
        <ProfileSelector
          onSelection={handleProfileSelection}
          type={SelectionType.PROFILE}
          selector={profileselector}
          onUpdate={onUpdate}
        />
        <ProfileSelector
          onSelection={handleProfileSelection}
          type={SelectionType.CATEGORY}
          selector={categorySelector}
          onUpdate={onUpdate}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Note
            title={note.title}
            description={note.description}
            onChange={handleNoteChange}
          />
        </div>
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
    </div>
  );
};

export default AddMemory;
