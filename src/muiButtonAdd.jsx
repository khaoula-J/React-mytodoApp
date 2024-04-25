import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const MuiButtonAdd = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<AddIcon />}
      onClick={onClick}
    >
      Add Task
    </Button>
  );
};
