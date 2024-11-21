import { MediaItem, MediaType } from "../ComponentTypes";
import { Box, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import ReactPlayer from "react-player";
import DeleteIcon from "@mui/icons-material/Delete";
import { RefObject } from "react";

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

  return (
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
        title={`Name ${item.duration.Date}  ${item.duration.Time}`}
        action={
          <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
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
  );
};

export default ShowPreview;
