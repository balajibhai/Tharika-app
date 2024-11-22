import AddMemory from "./Organisms/AddMemory";
import Home from "./Organisms/Home";

export enum PageNavID {
  MEMORY = "Memory",
  SETTINGS = "Settings",
  HEALTH = "Health",
  HOME = "Home",
}

export const PageNavComp = {
  [PageNavID.MEMORY]: AddMemory,
  [PageNavID.HOME]: Home,
};

export enum MediaType {
  PHOTO = "photo",
  VIDEO = "video",
}

export enum DurationEnumType {
  TIME = "Time",
  DATE = "Date",
}

export const DurationType = {
  Date: "",
  Time: "",
};

export interface MediaItem {
  id: string;
  name: string;
  type: MediaType;
  url: string;
  duration: typeof DurationType;
}
