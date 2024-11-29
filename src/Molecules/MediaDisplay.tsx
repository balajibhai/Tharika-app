import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { MediaItem } from "../ComponentTypes";
import Text from "../Atoms/Text";
import ShowPreview from "./ShowPreview";
import { useAppDispatch } from "../Hooks/customhooks";
import { handleMediaDelete } from "../Redux/mediauploadhandler";

type MediaDisplayProps = {
  listOfMedia: MediaItem[];
  sectionName: string;
  mediaContainerName?: string;
};

const MediaDisplay = (props: MediaDisplayProps) => {
  const { listOfMedia, sectionName, mediaContainerName } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const [currentMediaName, setCurrentMediaName] = useState("");

  useEffect(() => {
    if (mediaContainerName) {
      setCurrentMediaName(mediaContainerName);
    }
  }, [mediaContainerName]);

  const handleDelete = (id: string) => {
    dispatch(handleMediaDelete({ id, selectedValue: currentMediaName }));
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
