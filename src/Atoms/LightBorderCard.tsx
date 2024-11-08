import { Box, styled, SxProps, Theme } from "@mui/material";
import React from "react";

const LightBorderCardStyle = styled(Box)(({ theme }) => ({
  padding: 3,
  borderRadius: 25,
  border: "1px solid lightgrey",
}));

type LightBorderCardProps = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

const LightBorderCard = ({ children, sx }: LightBorderCardProps) => {
  return <LightBorderCardStyle sx={sx}>{children}</LightBorderCardStyle>;
};

export default LightBorderCard;
