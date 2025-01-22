import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import { MediaItem } from "../ComponentTypes";

type NoteViewModeProps = {
  item: MediaItem;
  handleEditClick: (event: React.MouseEvent) => void;
  handleDeleteClick: (event: React.MouseEvent) => void;
};

const NoteViewMode = (props: NoteViewModeProps) => {
  const { handleDeleteClick, handleEditClick, item } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
      {/* Static text fields */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div>{item.name}</div>
        <div>{item.duration.Date}</div>
        <div>{item.duration.Time}</div>
        <div>{item.category}</div>
        <div>{item.note.title}</div>
        <div>{item.note.description}</div>
      </Box>

      {/* Edit / Delete icons (for the annotation overlay) */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <IconButton color="primary" size="small" onClick={handleEditClick}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton color="error" size="small" onClick={handleDeleteClick}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NoteViewMode;
