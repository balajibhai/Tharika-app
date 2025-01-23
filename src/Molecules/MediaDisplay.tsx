import { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { MediaItem } from "../ComponentTypes";
import Text from "../Atoms/Text";
import ShowPreview from "./ShowPreview";
import { useAppDispatch } from "../Hooks/customhooks";
import { handleMediaDelete } from "../Redux/mediauploadhandler";

type MediaDisplayProps = {
  listOfMedia: MediaItem[];
  mediaContainerName: string;
  setMediaList?: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  height: string;
};

const MediaDisplay = (props: MediaDisplayProps) => {
  const { listOfMedia, mediaContainerName, setMediaList, height } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const [currentMediaName, setCurrentMediaName] = useState("");

  useEffect(() => {
    if (mediaContainerName) {
      setCurrentMediaName(mediaContainerName);
    }
  }, [mediaContainerName]);

  const handleDelete = useCallback(
    (id: string) => {
      if (mediaContainerName === "Preview" && setMediaList) {
        setMediaList((prev) => prev.filter((item) => item.id !== id));
      } else {
        dispatch(handleMediaDelete({ id, selectedValue: currentMediaName }));
      }
    },
    [currentMediaName, setMediaList, dispatch, mediaContainerName]
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <Text
        content={mediaContainerName}
        variant="h6"
        sx={{ fontWeight: "bold" }}
      />
      <Box
        ref={scrollRef}
        sx={{
          height: { height },
          width: "700px",
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
