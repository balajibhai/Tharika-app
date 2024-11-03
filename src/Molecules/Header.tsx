import { AppBar, Toolbar, IconButton, Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PeopleIcon from "@mui/icons-material/People";
import Text from "../Atoms/Text";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", paddingY: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Icon */}
        <IconButton edge="start" color="inherit">
          <PeopleIcon sx={{ fontSize: 40, color: "#5A63F0" }} />
        </IconButton>

        {/* Center Title */}
        <Text
          variant="h5"
          sx={{ color: "#5A63F0", fontWeight: "bold" }}
          content="Home"
        />

        {/* Right Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton color="inherit">
            <NotificationsNoneIcon sx={{ color: "black" }} />
          </IconButton>
          <Avatar
            alt="Profile Picture"
            src="https://example.com/path-to-your-image.jpg"
            sx={{ width: 40, height: 40 }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
