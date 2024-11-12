import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  styled,
  Box,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { ArrowBack } from "@mui/icons-material";
import Text from "../Atoms/Text";
import { useContext, useEffect, useState } from "react";
import { PageNavID } from "../ComponentTypes";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { ClickHandlerContext } from "../Context";

const HeaderStyle = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}));

type HeaderProps = {
  navbuttonClick: PageNavID;
};

const RightMostSection = () => {
  return (
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
  );
};

const Header = (props: HeaderProps) => {
  const { navbuttonClick } = props;
  const { clickHandler } = useContext(ClickHandlerContext);
  const [headerName, setHeaderName] = useState(PageNavID.HOME);
  const iconStyle = { fontSize: 40, color: "#5A63F0" };

  useEffect(() => {
    setHeaderName(navbuttonClick);
  }, [navbuttonClick]);

  return (
    <HeaderStyle>
      <AppBar position="static" sx={{ backgroundColor: "white", paddingY: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Icon */}
          <IconButton edge="start" color="inherit">
            {navbuttonClick === PageNavID.MEMORY ? (
              <div onClick={() => clickHandler(PageNavID.HOME)}>
                <ArrowBack sx={iconStyle} />
              </div>
            ) : (
              <PeopleIcon sx={iconStyle} />
            )}
          </IconButton>

          {/* Center Title */}
          <Text
            variant="h5"
            sx={{ color: "#5A63F0", fontWeight: "bold" }}
            content={headerName}
          />
          {navbuttonClick !== PageNavID.MEMORY && <RightMostSection />}
        </Toolbar>
      </AppBar>
    </HeaderStyle>
  );
};

export default Header;
