import React from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const DottedSquare = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Box
      sx={{
        width: 150, // Set width of the square
        height: 150, // Set height of the square
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #5A63F0", // Dotted border color and thickness
        borderRadius: "8px", // Slight border radius
        margin: "10px", // Spacing between the squares
      }}
    >
      {icon}
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

const DottedSquares = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <DottedSquare
        icon={<AddIcon sx={{ fontSize: 40, color: "#5A63F0" }} />}
        label="Upload Photo"
      />
      <DottedSquare
        icon={<CameraAltIcon sx={{ fontSize: 40, color: "#5A63F0" }} />}
        label="Camera"
      />
    </Box>
  );
};

export default DottedSquares;
