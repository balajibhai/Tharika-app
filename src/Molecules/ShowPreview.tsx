import { MediaItem, MediaType } from "../ComponentTypes";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Paper,
} from "@mui/material";
import ReactPlayer from "react-player";
import DeleteIcon from "@mui/icons-material/Delete";
import { RefObject } from "react";
import EditIcon from "@mui/icons-material/Edit";

type ShowPreviewProps = {
  scrollRef: RefObject<HTMLDivElement>;
  item: MediaItem;
  handleDelete: (id: string) => void;
};

const ShowPreview = (props: ShowPreviewProps) => {
  const { item, scrollRef, handleDelete } = props;
  const isInView = (element: HTMLDivElement | null): boolean => {
    if (!element) return false;
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering parent click
    console.log("Edit clicked!");
  };

  const handleDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering parent click
    console.log("Delete clicked!");
  };

  return (
    <Paper
      sx={{
        position: "relative",
        p: 1,
        width: 650,
        height: 250,
        cursor: "pointer",
        // Show annotation icons on hover
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
          action={
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(item.id)}
            >
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
      <Box
        className="annotation-icons"
        sx={{
          position: "absolute",
          top: 8,
          display: "flex",
          gap: 1,
          p: 0.5,
          borderRadius: 1,
          backgroundColor: "background.paper",
          boxShadow: 2,
          opacity: 0,
          visibility: "hidden",
          height: "auto",
          transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{item.name}</div>
          <div>{item.duration.Date}</div>
          <div>{item.duration.Time}</div>
          <div>{item.category}</div>
          <div>{item.note.title}</div>
          <div>{item.note.description}</div>
        </div>

        <IconButton color="primary" size="small" onClick={handleEditClick}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton color="error" size="small" onClick={handleDeleteClick}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ShowPreview;
