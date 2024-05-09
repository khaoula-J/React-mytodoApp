import React from "react";
import { MuiButton } from "./muiButton";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EditPopup from "./editField";

/*
function ToDoList({ todos, onMoveToDoing }) {
  return (
    <div className="list">
      <h2>My to do list</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.description}{" "}
            <MuiDoingButton onClick={() => onMoveToDoing(todo.id)}>
              <HourglassBottomIcon />
            </MuiDoingButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/

export function ToDoList({ todos, onDelete, onMoveToDoing }) {
  return (
    <div className="list ">
      <h2>My to do list</h2>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} disablePadding>
            <ListItemText primary={todo.description} />
            <EditPopup />
            <MuiButton onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </MuiButton>
            <MuiButton onClick={() => onMoveToDoing(todo.id)}>
              <HourglassBottomIcon />
            </MuiButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
