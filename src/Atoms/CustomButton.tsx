import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type CustomButtonProps = {
  icon: keyof typeof ICON_MAP;
  content: string;
};

const ICON_MAP = {
  AddIcon: AddIcon,
};

const CustomButton = ({ icon, content }: CustomButtonProps) => {
  const Component = ICON_MAP[icon];
  return (
    <Button
      variant="contained"
      startIcon={icon}
      sx={{
        backgroundColor: "#5A63F0", // Matches the purple color
        color: "white",
        borderRadius: "50px", // Makes it fully rounded
        paddingX: 3, // Horizontal padding
        paddingY: 1, // Vertical padding
        textTransform: "none", // Keeps text capitalization as in the image
        fontWeight: "bold",
      }}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
