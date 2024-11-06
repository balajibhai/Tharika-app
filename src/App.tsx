import { Box, styled } from "@mui/material";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";
import Home from "./Organisms/Home";

const AppStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

function App() {
  return (
    <AppStyle>
      <Header />
      <Home />
      <Footer />
    </AppStyle>
  );
}

export default App;
