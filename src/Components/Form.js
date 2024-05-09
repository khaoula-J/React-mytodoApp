import React, { useState } from "react";
import { MuiButtonAdd } from "./muiButtonAdd";
import { TextField } from "@mui/material";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  console.log(description);

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, id: Date.now() };

    onAddItems(newItem); // Call the passed-down function

    setDescription("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="fullWidth"
        label="Add a task here ... "
        variant="filled"
      />
      <MuiButtonAdd onClick={handleSubmit}></MuiButtonAdd>
    </form>
  );
}
