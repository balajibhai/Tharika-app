import { Box, Card, CardContent, styled } from "@mui/material";

const WhiteCardStyle = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  marginTop: "60px",
  marginBottom: "50px",
}));

type WhiteCardProps = {
  children: React.ReactNode;
};

const WhiteCard = ({ children }: WhiteCardProps) => {
  return (
    <WhiteCardStyle>
      <Card
        sx={{
          backgroundColor: "white",
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 575,
          height: 620,
          margin: "auto",
          mt: 5, // Adds top margin
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </WhiteCardStyle>
  );
};

export default WhiteCard;
