import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { MuiTypography } from "./MuiTypography";
import { MuiButtonAdd } from "./muiButtonAdd";
import { MuiDoingButton } from "./muiDoingButton";
import { TextField } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import "./index.css";
import { Grid } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function App() {
  const [todos, setTodos] = useState([]); // State to store todo items
  const [doing, setDoing] = useState([]); // State to store doing items
  const [done, setDone] = useState([]); // State to store done items

  const handleAddTodo = (newItem) => {
    setTodos([...todos, newItem]); // Add new item to todos array
  };

  const handleMoveToDoing = (id) => {
    const todoItem = todos.find((item) => item.id === id);
    setTodos(todos.filter((item) => item.id !== id)); // Remove item from todos
    setDoing([...doing, todoItem]); // Add item to doing
  };

  const handleMoveToDone = (id) => {
    const doingItem = doing.find((item) => item.id === id);
    setDoing(doing.filter((item) => item.id !== id)); // Remove item from doing
    setDone([...done, doingItem]); // Add item to done
  };

  return (
    <div>
      <Header />
      <Form onAddItems={handleAddTodo} />

      <Grid container spacing={2}>
        {/* ToDoList */}
        <Grid item xs={4}>
          <ToDoList todos={todos} onMoveToDoing={handleMoveToDoing} />
        </Grid>
        {/* DoingList */}
        <Grid item xs={4}>
          <DoingList doing={doing} onMoveToDone={handleMoveToDone} />
        </Grid>
        {/* DoneList */}
        <Grid item xs={4}>
          <DoneList done={done} />
        </Grid>
      </Grid>
    </div>
    /*<div>
      <Header />
      <Form onAddItems={handleAddTodo} />
     
      <ToDoList todos={todos} onMoveToDoing={handleMoveToDoing} />
      <DoingList doing={doing} onMoveToDone={handleMoveToDone} />
      <DoneList done={done} />}
    </div>*/
  );
}

function Header() {
  return (
    <div className="header">
      <MuiTypography />
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, id: Date.now() };

    onAddItems(newItem); // Call the passed-down function

    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="fullWidth"
        label="Ajouter une tâche ici "
        variant="filled"
      />
      <MuiButtonAdd onClick={handleSubmit}></MuiButtonAdd>
    </form>
  );
}
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
function ToDoList({ todos, onMoveToDoing }) {
  return (
    <div className="list ">
      <h2>My to do list</h2>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} disablePadding>
            <ListItemText primary={todo.description} />
            <MuiDoingButton onClick={() => onMoveToDoing(todo.id)}>
              <HourglassBottomIcon />
            </MuiDoingButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
function DoingList({ doing, onMoveToDone }) {
  return (
    <div className="list">
      <h2>My doing list</h2>
      <List>
        {doing.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText primary={item.description} />{" "}
            <MuiDoingButton
              className="done"
              onClick={() => onMoveToDone(item.id)}
            >
              <HourglassFullIcon />
            </MuiDoingButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

function DoneList({ done }) {
  return (
    <div className="list">
      <h2>My done list</h2>
      <List>
        {done.map((item) => (
          <ListItemText key={item.id}>{item.description}</ListItemText>
        ))}
      </List>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
