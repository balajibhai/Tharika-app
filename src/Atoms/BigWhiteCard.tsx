import { Card, CardContent } from "@mui/material";
import CustomButton from "./CustomButton";

const BigWhiteCard = () => {
  return (
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
  );
};

export default BigWhiteCard;
