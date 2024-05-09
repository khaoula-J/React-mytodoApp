import React from "react";
import { IconButton } from "@mui/material";

export const MuiButton = ({ children, onClick }) => {
  return <IconButton onClick={onClick}>{children}</IconButton>;
};
