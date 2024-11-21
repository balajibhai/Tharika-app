import { createContext } from "react";
import { MediaItem, PageNavID } from "./ComponentTypes";

type ClickHandlerContextProps = {
  clickHandler: (value: PageNavID) => void;
  handleMediaUpload: (value: MediaItem[]) => void;
  mediaList: MediaItem[];
  setUploadMediaList: React.Dispatch<React.SetStateAction<MediaItem[]>>;
};

export const ClickHandlerContext = createContext<ClickHandlerContextProps>({
  clickHandler: () => {},
  handleMediaUpload: () => {},
  mediaList: [],
  setUploadMediaList: () => {},
});
