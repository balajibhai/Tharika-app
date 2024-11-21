import { useRef } from "react";
import { Box } from "@mui/material";
import { MediaItem } from "../ComponentTypes";
import Text from "../Atoms/Text";
import ShowPreview from "./ShowPreview";

type MediaDisplayProps = {
  listOfMedia: MediaItem[];
  sectionName: string;
  setMediaList: React.Dispatch<React.SetStateAction<MediaItem[]>>;
};

const MediaDisplay = (props: MediaDisplayProps) => {
  const { listOfMedia, sectionName, setMediaList } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleDelete = (id: string) => {
    setMediaList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Text content={sectionName} variant="h6" sx={{ fontWeight: "bold" }} />
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
        {listOfMedia.map(
          (item) =>
            item.duration.Time && (
              <ShowPreview
                scrollRef={scrollRef}
                item={item}
                handleDelete={handleDelete}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default MediaDisplay;
