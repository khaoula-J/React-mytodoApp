import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { MuiButton } from "./muiButton";

export function DoneList({ done, onDelete }) {
  return (
    <div className="list">
      <h2>My done list</h2>
      <List>
        {done.map((item) => (
          <ListItemText key={item.id}>
            {item.description}

            <MuiButton onClick={() => onDelete(item.id)}>
              <DeleteIcon />
            </MuiButton>
          </ListItemText>
        ))}
      </List>
    </div>
  );
}
