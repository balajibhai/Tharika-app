import AddMemory from "./Organisms/AddMemory";
import Home from "./Organisms/Home";
import { PageNavID } from "./PageNavID";

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
  category: string;
  type: MediaType;
  url: string;
  duration: typeof DurationType;
  note: NoteType;
}

export enum SelectionType {
  CATEGORY = "category",
  PROFILE = "profile",
}

export interface Profile {
  id: number;
  name: string;
}

export interface NoteType {
  title: string;
  description: string;
}

export interface NoteFields {
  name: string;
  date: string;
  time: string;
  category: string;
  noteTitle: string;
  noteDescription: string;
}
