import { useRef } from "react";
import { Box } from "@mui/material";
import { MediaItem } from "../ComponentTypes";
import Text from "../Atoms/Text";
import ShowPreview from "./ShowPreview";

type PreviewSectionProps = {
  previewMediaList: MediaItem[];
};

const PreviewSection = (props: PreviewSectionProps) => {
  const { previewMediaList } = props;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box sx={{ padding: "20px" }}>
      <Text content="Preview" variant="h6" sx={{ fontWeight: "bold" }} />
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
        {previewMediaList.map(
          (item) =>
            item.duration.Time && (
              <ShowPreview scrollRef={scrollRef} item={item} />
            )
        )}
      </Box>
    </Box>
  );
};

export default PreviewSection;
