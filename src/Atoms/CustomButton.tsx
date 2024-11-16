import { Button } from "@mui/material";
import Icon, { ICON_MAP } from "./Icon";
import { useContext } from "react";
import { ClickHandlerContext } from "../Context";
import { PageNavID } from "../ComponentTypes";

type CustomButtonProps = {
  icon?: keyof typeof ICON_MAP;
  content: string;
};

const CustomButton = ({ icon, content }: CustomButtonProps) => {
  const { clickHandler } = useContext(ClickHandlerContext);
  const iconComponent = icon && <Icon icon={icon} />;
  return (
    <Button
      variant="contained"
      startIcon={iconComponent}
      sx={{
        backgroundColor: "#5A63F0", // Matches the purple color
        color: "white",
        borderRadius: "50px", // Makes it fully rounded
        paddingX: 3, // Horizontal padding
        paddingY: 1, // Vertical padding
        textTransform: "none", // Keeps text capitalization as in the image
        fontWeight: "bold",
      }}
      onClick={() => clickHandler(PageNavID.MEMORY)}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
