import { Box, styled } from "@mui/material";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";
import { ClickHandlerContext } from "./Context";
import { useState } from "react";
import { MediaItem, PageNavComp, PageNavID } from "./ComponentTypes";

const AppStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

const App = () => {
  const [navbuttonClick, setNavbuttonClick] = useState(PageNavID.HOME);
  const [allMedia, setAllMedia] = useState<MediaItem[]>([]);
  const [LastMonthMedia, setLastMonthMedia] = useState<MediaItem[]>([]);
  const [joyfulMedia, setJoyfulMedia] = useState<MediaItem[]>([]);

  const setStateMap: Record<
    string,
    React.Dispatch<React.SetStateAction<MediaItem[]>>
  > = {
    allMedia: setAllMedia,
    LastMonthMedia: setLastMonthMedia,
    joyfulMedia: setJoyfulMedia,
  };

  const clickHandler = (value: PageNavID) => {
    setNavbuttonClick(value);
  };

  const handleMediaUpload = (list: MediaItem[], selectedValue: string) => {
    const setState = setStateMap[selectedValue];
    setState((prev) => [...prev, ...list]);
  };

  const Component = PageNavComp[navbuttonClick as keyof typeof PageNavComp];
  const contextValue = {
    clickHandler,
    handleMediaUpload,
    allMedia,
    setAllMedia,
    LastMonthMedia,
    setLastMonthMedia,
    joyfulMedia,
    setJoyfulMedia,
  };

  return (
    <ClickHandlerContext.Provider value={contextValue}>
      <AppStyle>
        <div>
          <Header navbuttonClick={navbuttonClick} />
        </div>
        <Component />
        <Footer />
      </AppStyle>
    </ClickHandlerContext.Provider>
  );
};

export default App;
