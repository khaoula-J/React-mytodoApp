import React from "react";
import { MuiButton } from "./muiButton";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function DoingList({ doing, onDeleteDoing, onMoveToDone }) {
  return (
    <div className="list">
      <h2>My doing list</h2>
      <List>
        {doing.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText primary={item.description} />

            <MuiButton onClick={() => onDeleteDoing(item.id)}>
              <DeleteIcon />
            </MuiButton>

            <MuiButton className="done" onClick={() => onMoveToDone(item.id)}>
              <HourglassFullIcon />
            </MuiButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
