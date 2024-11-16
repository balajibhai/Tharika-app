import React, { useState } from "react";
import { TextField, Box, MenuItem, InputAdornment } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CustomButton from "../Atoms/CustomButton";

function DateTimePicker() {
  const [time, setTime] = useState<string>("06:00PM");

  const times = [
    "06:00AM",
    "07:00AM",
    "08:00AM",
    "09:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "01:00PM",
    "02:00PM",
    "03:00PM",
    "04:00PM",
    "05:00PM",
    "06:00PM",
    "07:00PM",
    "08:00PM",
    "09:00PM",
  ];

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "0 auto",
        mt: 5,
      }}
    >
      <TextField
        label="Select Date"
        placeholder="DD/MM/YYYY"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Select Time"
        value={time}
        onChange={handleTimeChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
        fullWidth
        select
      >
        {times.map((timeOption) => (
          <MenuItem key={timeOption} value={timeOption}>
            {timeOption}
          </MenuItem>
        ))}
      </TextField>

      <CustomButton content="Save" />
    </Box>
  );
}

export default DateTimePicker;
