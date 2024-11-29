import { createContext } from "react";
import { MediaItem } from "./ComponentTypes";

type ClickHandlerContextProps = {
  allMedia: MediaItem[];
  setAllMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  setLastMonthMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  setJoyfulMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  joyfulMedia: MediaItem[];
  LastMonthMedia: MediaItem[];
};

export const ClickHandlerContext = createContext<ClickHandlerContextProps>({
  allMedia: [],
  setAllMedia: () => {},
  LastMonthMedia: [],
  joyfulMedia: [],
  setLastMonthMedia: () => {},
  setJoyfulMedia: () => {},
});
