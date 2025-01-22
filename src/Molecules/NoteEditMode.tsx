import { Box, Button, TextField } from "@mui/material";
import { NoteFields } from "../ComponentTypes";

type NoteEditModeProps = {
  editedFields: NoteFields;
  setEditedFields: React.Dispatch<React.SetStateAction<NoteFields>>;
  handleSave: (event: React.MouseEvent) => void;
  handleCancel: (event: React.MouseEvent) => void;
};

const NoteEditMode = (props: NoteEditModeProps) => {
  const { editedFields, handleCancel, handleSave, setEditedFields } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <TextField
        label="Name"
        size="small"
        value={editedFields.name}
        onChange={(e) =>
          setEditedFields((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <TextField
        label="Date"
        size="small"
        value={editedFields.date}
        onChange={(e) =>
          setEditedFields((prev) => ({ ...prev, date: e.target.value }))
        }
      />
      <TextField
        label="Time"
        size="small"
        value={editedFields.time}
        onChange={(e) =>
          setEditedFields((prev) => ({ ...prev, time: e.target.value }))
        }
      />
      <TextField
        label="Category"
        size="small"
        value={editedFields.category}
        onChange={(e) =>
          setEditedFields((prev) => ({
            ...prev,
            category: e.target.value,
          }))
        }
      />
      <TextField
        label="Note Title"
        size="small"
        value={editedFields.noteTitle}
        onChange={(e) =>
          setEditedFields((prev) => ({
            ...prev,
            noteTitle: e.target.value,
          }))
        }
      />
      <TextField
        label="Note Description"
        size="small"
        multiline
        rows={2}
        value={editedFields.noteDescription}
        onChange={(e) =>
          setEditedFields((prev) => ({
            ...prev,
            noteDescription: e.target.value,
          }))
        }
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
