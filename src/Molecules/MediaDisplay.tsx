import { useCallback, useRef } from "react";
import { Box } from "@mui/material";
import { MediacontainerType, MediaItem } from "../ComponentTypes";
import Text from "../Atoms/Text";
import ShowPreview from "./ShowPreview";
import { useAppDispatch } from "../Hooks/customhooks";
import { handleMediaDelete } from "../Redux/mediauploadhandler";

type MediaDisplayProps = {
  listOfMedia: MediaItem[];
  mediaContainerName: MediacontainerType;
  setMediaList?: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  height: string;
};

const MediaDisplay = (props: MediaDisplayProps) => {
  const { listOfMedia, mediaContainerName, setMediaList, height } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const previewTitle =
    mediaContainerName === MediacontainerType.PREVIEW
      ? MediacontainerType.PREVIEW
      : "";

  const handleDelete = useCallback(
    (id: string) => {
      if (mediaContainerName === MediacontainerType.PREVIEW && setMediaList) {
        setMediaList((prev) => prev.filter((item) => item.id !== id));
      } else {
        dispatch(handleMediaDelete({ id, selectedValue: mediaContainerName }));
      }
    },
    [setMediaList, dispatch, mediaContainerName]
  );

  return (
    <Box sx={{ padding: "20px", position: "fixed" }}>
      <Text content={previewTitle} variant="h6" sx={{ fontWeight: "bold" }} />
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
        {listOfMedia.map((item) => (
          <ShowPreview
            scrollRef={scrollRef}
            item={item}
            handleDelete={handleDelete}
            mediaContainerName={mediaContainerName}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MediaDisplay;
