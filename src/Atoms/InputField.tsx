import React from "react";
import TextField from "@mui/material/TextField";

type InputFieldProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField = (props: InputFieldProps) => {
  const { label, onChange, value, error, type } = props;
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      fullWidth
      margin="normal"
    />
  );
};

export default InputField;
