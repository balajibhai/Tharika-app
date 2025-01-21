import React, { useCallback, useState } from "react";
import { TextField, Box, MenuItem, InputAdornment } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CustomButton from "../Atoms/CustomButton";
import { DurationEnumType, DurationType } from "../ComponentTypes";

type DateTimePickerProps = {
  handleDuration: (value: typeof DurationType) => void;
  buttonDisable: boolean;
};

const DateTimePicker = (props: DateTimePickerProps) => {
  const { handleDuration, buttonDisable } = props;
  const [dateTime, setDateTime] = useState<typeof DurationType>({
    Date: "01/01/01",
    Time: "06:00AM",
  });

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

  const handleDateTimeChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      type: DurationEnumType
    ) => {
      setDateTime({
        ...dateTime,
        [type]: event.target.value,
      });
    },
    [dateTime]
  );

  const onSave = useCallback(() => {
    handleDuration(dateTime);
  }, [handleDuration, dateTime]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "0 auto",
        mt: 5,
        marginBottom: "30px",
      }}
    >
      <TextField
        label="Select Date"
        placeholder="DD/MM/YYYY"
        onChange={(e) => handleDateTimeChange(e, DurationEnumType.DATE)}
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
        value={dateTime.Date}
      />

      <TextField
        label="Select Time"
        value={dateTime.Time}
        onChange={(e) => handleDateTimeChange(e, DurationEnumType.TIME)}
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

      <CustomButton content="Save" onClick={onSave} disabled={buttonDisable} />
    </Box>
  );
};

export default DateTimePicker;
