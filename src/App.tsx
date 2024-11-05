import { Box, styled } from "@mui/material";
import WhiteCard from "./Atoms/WhiteCard";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";

const AppStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

function App() {
  return (
    <AppStyle>
      <Header />
      <WhiteCard />
      <Footer />
    </AppStyle>
  );
}

export default App;
