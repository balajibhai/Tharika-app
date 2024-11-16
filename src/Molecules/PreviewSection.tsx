import { useRef } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { MediaType } from "../ComponentTypes";

type MediaItem = {
  id: string;
  type: MediaType;
  url: string;
};

type PreviewSectionProps = {
  mediaList: MediaItem[];
  handleDelete: (id: string) => void;
};

const PreviewSection = (props: PreviewSectionProps) => {
  const { handleDelete, mediaList } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Preview
      </Typography>
      <Box
        ref={scrollRef}
        sx={{
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {mediaList.map((item) => (
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
              title="Jenny Watson"
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
        ))}
      </Box>
    </Box>
  );
};

export default PreviewSection;
