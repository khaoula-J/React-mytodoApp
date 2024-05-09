import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h1>{"Welcome to My-to-do-App"}</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h2>
              Planning is the best way to achieve your goals ! We hope that you
              enjoy the experience ❤️
            </h2>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Try our application
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
