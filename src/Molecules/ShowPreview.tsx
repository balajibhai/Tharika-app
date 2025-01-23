import { MediaItem, MediaType, NoteFields } from "../ComponentTypes";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Paper,
} from "@mui/material";
import ReactPlayer from "react-player";
import { RefObject, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/customhooks";
import { PageNavID } from "../PageNavID";
import NoteEditMode from "./NoteEditMode";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteViewMode from "./NoteViewMode";
import { handleMediaDelete } from "../Redux/mediauploadhandler";

type ShowPreviewProps = {
  scrollRef: RefObject<HTMLDivElement>;
  item: MediaItem;
  handleDelete: (id: string) => void;
  handleUpdate?: (updatedItem: MediaItem) => void;
  mediaContainerName: string;
};

const ShowPreview = (props: ShowPreviewProps) => {
  const { item, scrollRef, handleDelete, handleUpdate, mediaContainerName } =
    props;
  const [isEditing, setIsEditing] = useState(false);
  const pageSelect = useAppSelector((state) => state.pageSelect.navId);
  const dispatch = useAppDispatch();
  const cardHeader =
    pageSelect === PageNavID.MEMORY
      ? `${item.name} ${item.duration.Date} ${item.duration.Time} ${item.category} ${item.note.title} ${item.note.description}`
      : "";
  const showNote = pageSelect !== PageNavID.MEMORY && item.note.title !== "";

  // Store edits in local state so we don't overwrite item until Save
  const [editedFields, setEditedFields] = useState<NoteFields>({
    name: item.name,
    date: item.duration.Date,
    time: item.duration.Time,
    category: item.category,
    noteTitle: item.note.title,
    noteDescription: item.note.description,
  });

  // Determine if video is in view
  const isInView = (element: HTMLDivElement | null): boolean => {
    if (!element) return false;
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  // Toggle to edit mode
  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // stops parent onClick
    setIsEditing(true);
  };

  // Cancel editing
  const handleCancel = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Reset the editedFields back to original item data
    setEditedFields({
      name: item.name,
      date: item.duration.Date,
      time: item.duration.Time,
      category: item.category,
      noteTitle: item.note.title,
      noteDescription: item.note.description,
    });
    setIsEditing(false);
  };

  // Save edits
  const handleSave = (event: React.MouseEvent) => {
    event.stopPropagation();

    // If you have a parent callback, call it here
    // to actually update the item in your Redux store or parent state
    const updatedItem: MediaItem = {
      ...item,
      name: editedFields.name,
      duration: {
        Date: editedFields.date,
        Time: editedFields.time,
      },
      category: editedFields.category,
      note: {
        title: editedFields.noteTitle,
        description: editedFields.noteDescription,
      },
    };

    // If there's a parent callback, call it
    if (handleUpdate) {
      handleUpdate(updatedItem);
    }

    // Or you could directly console.log or do some other local update
    console.log("Updated item: ", updatedItem);

    setIsEditing(false);
  };

  // If not editing, the normal Delete click
  const handleDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(
      handleMediaDelete({
        id: item.id,
        selectedValue: mediaContainerName,
        note: true,
      })
    );
  };

  // onClick for the trash icon on the card (deleting the entire media)
  const handleCardDeleteClick = () => {
    handleDelete(item.id);
  };

  return (
    <Paper
      sx={{
        position: "relative",
        p: 1,
        width: 650,
        height: 250,
        cursor: "pointer",
        // Show annotation icons (and text) on hover
        "&:hover .annotation-icons": {
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      <Card
        key={item.id}
        sx={{
          marginBottom: "20px",
          boxShadow: "none",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <CardHeader
          title={cardHeader}
          action={
            <IconButton aria-label="delete" onClick={handleCardDeleteClick}>
              <DeleteIcon />
            </IconButton>
          }
        />
        {item.type === MediaType.PHOTO ? (
          <CardMedia
            component="img"
            height="200"
            image={item.url}
            alt="Uploaded"
            sx={{ borderRadius: "5px" }}
          />
        ) : (
          <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
            <ReactPlayer
              url={item.url}
              playing={isInView(scrollRef.current)}
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </Box>
        )}
      </Card>

      {showNote && (
        <Box
          className="annotation-icons"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            p: 1,
            borderRadius: 1,
            backgroundColor: "background.paper",
            boxShadow: 2,
            opacity: 0,
            visibility: "hidden",
            transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
            maxWidth: 250,
          }}
        >
          {isEditing ? (
            <NoteEditMode
              editedFields={editedFields}
              setEditedFields={setEditedFields}
              handleSave={handleSave}
              handleCancel={handleCancel}
            />
          ) : (
            <NoteViewMode
              item={item}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}
        </Box>
      )}
    </Paper>
  );
};

export default ShowPreview;
