import { TextField } from "@mui/material";
import React from "react";

const ClassicInput = ({
  style,
  placeholder = "Enter a Placeholder",
  setValue,
  value = null,
  size = "small",
}) => {
  return (
    <div className={`bg-white pb-2 pt-1 rounded px-3 ${style}`}>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        size={size}
        label={placeholder}
        variant="standard"
        value={value}
      />
    </div>
  );
};

export default ClassicInput;
