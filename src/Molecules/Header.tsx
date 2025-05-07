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
import { useEffect, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useAppDispatch, useAppSelector } from "../Hooks/customhooks";
import { clickHandler } from "../Redux/pagenavigation";
import { PageNavID } from "../PageNavID";
import CustomButton from "../Atoms/CustomButton";
import { loginHandler } from "../Redux/authentication";

const HeaderStyle = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}));

const RightMostSection = () => {
  const dispatch = useAppDispatch();
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
      <CustomButton
        content="Logout"
        onClick={() => dispatch(loginHandler(false))}
      />
    </div>
  );
};

const Header = () => {
  const pageSelect = useAppSelector((state) => state.pageSelect.navId);
  const dispatch = useAppDispatch();
  const [headerName, setHeaderName] = useState(PageNavID.HOME);
  const iconStyle = { fontSize: 40, color: "#5A63F0" };

  useEffect(() => {
    setHeaderName(pageSelect);
  }, [pageSelect]);

  return (
    <HeaderStyle>
      <AppBar position="static" sx={{ backgroundColor: "white", paddingY: 1 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Left Icon */}
          <Box sx={{ position: "absolute", left: 0 }}>
            <IconButton edge="start" color="inherit">
              {pageSelect === PageNavID.MEMORY ? (
                <div onClick={() => dispatch(clickHandler(PageNavID.HOME))}>
                  <ArrowBack sx={iconStyle} />
                </div>
              ) : (
                <PeopleIcon sx={iconStyle} />
              )}
            </IconButton>
          </Box>

          {/* Center Title */}
          <Text
            variant="h5"
            sx={{ color: "#5A63F0", fontWeight: "bold" }}
            content={headerName}
          />

          {/* Right Section */}
          {pageSelect !== PageNavID.MEMORY && (
            <Box sx={{ position: "absolute", right: 0 }}>
              <RightMostSection />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HeaderStyle>
  );
};

export default Header;
