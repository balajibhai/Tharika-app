import { Box, styled } from "@mui/material";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";
import { ClickHandlerContext } from "./Context";
import { useState } from "react";
import { PageNavComp, PageNavID } from "./ComponentTypes";

const AppStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

function App() {
  const [navbuttonClick, setNavbuttonClick] = useState(PageNavID.HOME);
  const clickHandler = (value: PageNavID) => {
    setNavbuttonClick(value);
  };
  const Component = PageNavComp[navbuttonClick as keyof typeof PageNavComp];
  return (
    <ClickHandlerContext.Provider value={{ clickHandler }}>
      <AppStyle>
        <Header navbuttonClick={navbuttonClick} />
        <Component />
        <Footer />
      </AppStyle>
    </ClickHandlerContext.Provider>
  );
}

export default App;
