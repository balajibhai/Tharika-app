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
  onClick?: () => void;
};

const LightBorderCard = (props: LightBorderCardProps) => {
  const { children, onClick, sx } = props;
  return (
    <LightBorderCardStyle sx={sx} onClick={onClick}>
      {children}
    </LightBorderCardStyle>
  );
};

export default LightBorderCard;
