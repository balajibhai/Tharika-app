import React, { useCallback, useEffect, useState } from "react";
import CustomButton from "../Atoms/CustomButton";
import DottedSquares from "../Atoms/DottedSquare";
import Note from "../Atoms/Note";
import SuccessNotification from "../Atoms/SuccessNotification";
import Text from "../Atoms/Text";
import {
  DurationType,
  MediacontainerType,
  MediaItem,
  MediaType,
  NoteType,
  SelectionType,
} from "../ComponentTypes";
import { useAppDispatch, useAppSelector } from "../Hooks/customhooks";
import DateTimePicker from "../Molecules/DateTimePicker";
import MediaDisplay from "../Molecules/MediaDisplay";
import UploadLocationSelector from "../Molecules/UploadLocationSelector";
import { PageNavID } from "../PageNavID";
import { addCategory } from "../Redux/categoryselector";
import { handleMediaUpload } from "../Redux/mediauploadhandler";
import { clickHandler } from "../Redux/pagenavigation";
import { addProfile } from "../Redux/profileselector";
import ProfileSelector from "./ProfileSelector";

const AddMemory = () => {
  const [previewMediaList, setPreviewMediaList] = useState<MediaItem[]>([]);
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [openUploadLocation, setOpenUploadLocation] = useState(false);
  const dispatch = useAppDispatch();
  const { profiles } = useAppSelector((state) => state.profileSelect);
  const { categories } = useAppSelector((state) => state.categorySelect);

  const [note, setNote] = useState<NoteType>({ title: "", description: "" });

  useEffect(() => {
    if (previewMediaList.length > 0) {
      setShowUploadButton(true);
    } else {
      setShowUploadButton(false);
    }
  }, [previewMediaList.length]);

  const handleFilePreview = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, type: MediaType) => {
      const files = event.target.files;
      if (files) {
        const newMedia: MediaItem[] = Array.from(files).map((file) => ({
          profileId: 0,
          categoryId: 0,
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
      if (previewMediaList.length) {
        previewMediaList[previewMediaList.length - 1].duration = value;
        setPreviewMediaList([...previewMediaList]);
      }
    },
    [previewMediaList]
  );

  const handleFileUpload = useCallback(
    (selectedValue: string) => {
      setOpenUploadLocation(!openUploadLocation);
      setShowSuccessNotification(true);
      setShowUploadButton(false);
      dispatch(handleMediaUpload({ list: previewMediaList, selectedValue }));
      setTimeout(() => {
        dispatch(clickHandler(PageNavID.HOME));
      }, 1000);
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

  const handleProfileSelection = useCallback(
    (name: string, type: string, id: number) => {
      if (previewMediaList.length === 0) {
        return;
      }
      if (type === SelectionType.PROFILE) {
        previewMediaList[previewMediaList.length - 1].name = name;
        previewMediaList[previewMediaList.length - 1].profileId = id;
      } else {
        previewMediaList[previewMediaList.length - 1].category = name;
        previewMediaList[previewMediaList.length - 1].categoryId = id;
      }
      setPreviewMediaList([...previewMediaList]);
    },
    [previewMediaList]
  );

  const onUpdate = (name: string, type: SelectionType) => {
    if (type === SelectionType.PROFILE) {
      dispatch(addProfile({ id: Date.now(), name }));
    } else {
      dispatch(addCategory({ id: Date.now(), name }));
    }
  };

  const handleNoteChange = (field: "title" | "description", value: string) => {
    setNote((prev) => ({ ...prev, [field]: value }));
    previewMediaList[previewMediaList.length - 1].note[field] = value;
    setPreviewMediaList([...previewMediaList]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        paddingTop: "100px",
        justifyContent: "center",
        width: "60%",
      }}
    >
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
          selector={profiles}
          onUpdate={onUpdate}
          activeId={0}
        />
        <ProfileSelector
          onSelection={handleProfileSelection}
          type={SelectionType.CATEGORY}
          selector={categories}
          onUpdate={onUpdate}
          activeId={0}
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
        <DateTimePicker handleDuration={handleDuration} />
        <UploadLocationSelector
          openContainer={openUploadLocation}
          onSelect={handleFileUpload}
          noSelection={() => setOpenUploadLocation(!openUploadLocation)}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {showUploadButton && (
            <CustomButton content="Upload" onClick={selectLocation} />
          )}
        </div>
      </div>
      <div>
        {showUploadButton && (
          <MediaDisplay
            listOfMedia={previewMediaList}
            setMediaList={setPreviewMediaList}
            height="270px"
            mediaContainerName={MediacontainerType.PREVIEW}
          />
        )}
      </div>
    </div>
  );
};

export default AddMemory;
