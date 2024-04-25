import React from "react";
import { IconButton } from "@mui/material";

export const MuiDoingButton = ({ children, onClick }) => {
  return <IconButton onClick={onClick}>{children}</IconButton>;
};
