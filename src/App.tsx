import { Box, styled } from "@mui/material";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";
import { PageNavComp } from "./ComponentTypes";
import { useAppSelector } from "./Hooks/customhooks";

const AppStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

const App = () => {
  const pageSelect = useAppSelector((state) => state.pageSelect.navId);

  const Component = PageNavComp[pageSelect as keyof typeof PageNavComp];
  return (
    <AppStyle>
      <div>
        <Header />
      </div>
      <Component />
      <Footer />
    </AppStyle>
  );
};

export default App;
