import { Box, Card, CardContent, styled } from "@mui/material";
import CustomButton from "./CustomButton";

const WhiteCardStyle = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  marginTop: "60px",
  marginBottom: "50px",
}));

const WhiteCard = () => {
  return (
    <WhiteCardStyle>
      <Card
        sx={{
          backgroundColor: "white",
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 800,
          height: 500,
          margin: "auto",
          mt: 5, // Adds top margin
        }}
      >
        <CardContent>
          <CustomButton content="Add New Memory" icon={"AddIcon"} />
        </CardContent>
      </Card>
    </WhiteCardStyle>
  );
};

export default WhiteCard;
