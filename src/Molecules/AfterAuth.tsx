import { Box, styled } from "@mui/material";
import Header from "./Header";
import { PageNavComp } from "../ComponentTypes";
import { useAppSelector } from "../Hooks/customhooks";
import Footer from "./Footer";

const AppStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

const AfterAuth = () => {
  const pageSelect = useAppSelector((state) => state.pageSelect.navId);
  const Component = PageNavComp[pageSelect as keyof typeof PageNavComp];

  return (
    <div>
      <AppStyle>
        <div>
          <Header />
        </div>
        <Component />
        <Footer />
      </AppStyle>
    </div>
  );
};

export default AfterAuth;
