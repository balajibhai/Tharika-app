import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ListIcon from "@mui/icons-material/List";
import SettingsIcon from "@mui/icons-material/Settings";

const FooterStyle = styled(Box)(({ theme }) => ({
  position: "sticky",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  marginTop: 100,
}));

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <FooterStyle>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={{
          backgroundColor: "white",
          borderTop: "1px solid #e0e0e0",
          boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
          minHeight: "50px", // Reduced height
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon sx={{ fontSize: 24 }} />} // Smaller icon size
          sx={{
            color: value === 0 ? "#5A63F0" : "gray",
            minWidth: 60, // Reduces space each item takes
            padding: "6px 0px", // Less vertical padding
            fontSize: "0.75rem", // Smaller font size
          }}
        />
        <BottomNavigationAction
          label="Gallery"
          icon={<PhotoLibraryIcon sx={{ fontSize: 24 }} />}
          sx={{
            color: value === 1 ? "#5A63F0" : "gray",
            minWidth: 60,
            padding: "6px 0px",
            fontSize: "0.75rem",
          }}
        />
        <BottomNavigationAction
          label="Health"
          icon={<HealthAndSafetyIcon sx={{ fontSize: 24 }} />}
          sx={{
            color: value === 2 ? "#5A63F0" : "gray",
            minWidth: 60,
            padding: "6px 0px",
            fontSize: "0.75rem",
          }}
        />
        <BottomNavigationAction
          label="Notes"
          icon={<ListIcon sx={{ fontSize: 24 }} />}
          sx={{
            color: value === 3 ? "#5A63F0" : "gray",
            minWidth: 60,
            padding: "6px 0px",
            fontSize: "0.75rem",
          }}
        />
        <BottomNavigationAction
          label="Settings"
          icon={<SettingsIcon sx={{ fontSize: 24 }} />}
          sx={{
            color: value === 4 ? "#5A63F0" : "gray",
            minWidth: 60,
            padding: "6px 0px",
            fontSize: "0.75rem",
          }}
        />
      </BottomNavigation>
    </FooterStyle>
  );
};

export default Footer;
