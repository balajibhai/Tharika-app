import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { MediaType } from "../ComponentTypes";

type DottedSquareProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  label: string;
};

type DottedSquaresProps = {
  onFileUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: MediaType
  ) => void;
};

const DottedSquare = (props: DottedSquareProps) => {
  const { icon, onClick, label } = props;
  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #5A63F0",
        borderRadius: "8px",
        margin: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {icon}
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

const DottedSquares = (props: DottedSquaresProps) => {
  const { onFileUpload } = props;
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.accept = "image/*";
      inputFileRef.current.click();
    }
  };

  const handleVideoClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.accept = "video/*";
      inputFileRef.current.click();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <DottedSquare
        icon={<AddIcon sx={{ fontSize: 40, color: "#5A63F0" }} />}
        label="Upload Photo"
        onClick={handlePhotoClick}
      />
      <DottedSquare
        icon={<CameraAltIcon sx={{ fontSize: 40, color: "#5A63F0" }} />}
        label="Upload Video"
        onClick={handleVideoClick}
      />
      <input
        style={{ display: "none" }}
        ref={inputFileRef}
        type="file"
        onChange={(event) => {
          const isPhoto = inputFileRef.current?.accept === "image/*";
          onFileUpload(event, isPhoto ? MediaType.PHOTO : MediaType.VIDEO);

          // **Reset the input's value here**
          if (inputFileRef.current) {
            inputFileRef.current.value = "";
          }
        }}
      />
    </Box>
  );
};

export default DottedSquares;
