import { createContext } from "react";
import { PageNavID } from "./ComponentTypes";

type ClickHandlerContextProps = {
  clickHandler: (value: PageNavID) => void;
};

export const ClickHandlerContext = createContext<ClickHandlerContextProps>({
  clickHandler: () => {},
});
