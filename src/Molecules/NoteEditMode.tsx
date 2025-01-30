import { Box, Button } from "@mui/material";
import { useCallback } from "react";
import Note from "../Atoms/Note";
import { DurationType, NoteFields, SelectionType } from "../ComponentTypes";
import { useAppDispatch, useAppSelector } from "../Hooks/customhooks";
import ProfileSelector from "../Organisms/ProfileSelector";
import { addCategory } from "../Redux/categoryselector";
import { addProfile } from "../Redux/profileselector";
import DateTimePicker from "./DateTimePicker";

type NoteEditModeProps = {
  editedFields: NoteFields;
  setEditedFields: React.Dispatch<React.SetStateAction<NoteFields>>;
  handleSave: (event: React.MouseEvent) => void;
  handleCancel: (event: React.MouseEvent) => void;
};

const NoteEditMode = (props: NoteEditModeProps) => {
  const { editedFields, handleCancel, handleSave, setEditedFields } = props;
  const { profiles } = useAppSelector((state) => state.profileSelect);
  const { categories } = useAppSelector((state) => state.categorySelect);
  const dispatch = useAppDispatch();

  const onUpdate = (name: string, type: SelectionType) => {
    if (type === SelectionType.PROFILE) {
      dispatch(addProfile({ id: Date.now(), name }));
    } else {
      dispatch(addCategory({ id: Date.now(), name }));
    }
  };

  const onProfileChange = useCallback(
    (name: string, type: string, id: number) => {
      if (type === SelectionType.PROFILE) {
        setEditedFields((prev) => ({ ...prev, name: name, profileId: id }));
      } else {
        setEditedFields((prev) => ({
          ...prev,
          category: name,
          categoryId: id,
        }));
      }
    },
    [setEditedFields]
  );

  const onTimeChange = useCallback(
    (value: typeof DurationType) => {
      setEditedFields((prev) => ({
        ...prev,
        date: value.Date,
        time: value.Time,
      }));
    },
    [setEditedFields]
  );

  const onNoteChange = (field: "title" | "description", value: string) => {
    if (field === "title") {
      setEditedFields((prev) => ({
        ...prev,
        noteTitle: value,
      }));
    } else {
      setEditedFields((prev) => ({
        ...prev,
        noteDescription: value,
      }));
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <ProfileSelector
        onSelection={onProfileChange}
        type={SelectionType.PROFILE}
        selector={profiles}
        onUpdate={onUpdate}
        activeId={editedFields.profileId}
      />
      <ProfileSelector
        onSelection={onProfileChange}
        type={SelectionType.CATEGORY}
        selector={categories}
        onUpdate={onUpdate}
        activeId={editedFields.categoryId}
      />
      <DateTimePicker handleDuration={onTimeChange} />
      <Note
        title={editedFields.noteTitle}
        description={editedFields.noteDescription}
        onChange={onNoteChange}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default NoteEditMode;
