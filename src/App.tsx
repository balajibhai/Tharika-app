import { Box, styled } from "@mui/material";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";
import { ClickHandlerContext } from "./Context";
import { useState } from "react";
import { MediaItem, PageNavComp } from "./ComponentTypes";
import { useAppSelector } from "./Hooks/customhooks";

const AppStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

const App = () => {
  const [allMedia, setAllMedia] = useState<MediaItem[]>([]);
  const [LastMonthMedia, setLastMonthMedia] = useState<MediaItem[]>([]);
  const [joyfulMedia, setJoyfulMedia] = useState<MediaItem[]>([]);
  const pageSelect = useAppSelector((state) => state.pageSelect.navId);

  const setStateMap: Record<
    string,
    React.Dispatch<React.SetStateAction<MediaItem[]>>
  > = {
    allMedia: setAllMedia,
    LastMonthMedia: setLastMonthMedia,
    joyfulMedia: setJoyfulMedia,
  };

  const handleMediaUpload = (list: MediaItem[], selectedValue: string) => {
    const setState = setStateMap[selectedValue];
    setState((prev) => [...prev, ...list]);
  };

  const Component = PageNavComp[pageSelect as keyof typeof PageNavComp];
  const contextValue = {
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
          <Header />
        </div>
        <Component />
        <Footer />
      </AppStyle>
    </ClickHandlerContext.Provider>
  );
};

export default App;
