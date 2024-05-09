import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { MuiButton } from "./muiButton";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const EditPopup = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(task); // Affiche le contenu de la zone de texte dans la console
  };

  return (
    <div>
      <MuiButton onClick={handleClickOpen}>
        <ModeEditOutlineIcon />
      </MuiButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Form</DialogTitle>
        <DialogContent>
          {/* Your form fields go here */}
          <TextField
            autoFocus
            margin="dense"
            label="Edit task"
            fullWidth
            value={task}
            onChange={handleTaskChange}
          />

          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleFormSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditPopup;
