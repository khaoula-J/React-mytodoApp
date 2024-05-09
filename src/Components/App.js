import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Header } from "./Header";
import { DoingList } from "./DoingList";
import { DoneList } from "./DoneList";
import { ToDoList } from "./ToDoList";
import { Form } from "./Form";
import AlertDialog from "./MuiModal";

export function App() {
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

  const deleteItemToDo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const deleteItemDoing = (id) => {
    setDoing(doing.filter((item) => item.id !== id));
  };
  const deleteItemDone = (id) => {
    setDone(done.filter((item) => item.id !== id));
  };

  return (
    <div>
      <AlertDialog />
      <Header />
      <Form onAddItems={handleAddTodo} />

      <Grid container spacing={2}>
        {/* ToDoList */}
        <Grid item xs={4}>
          <ToDoList
            todos={todos}
            onMoveToDoing={handleMoveToDoing}
            onDelete={deleteItemToDo}
          />
        </Grid>
        {/* DoingList */}
        <Grid item xs={4}>
          <DoingList
            doing={doing}
            onMoveToDone={handleMoveToDone}
            onDeleteDoing={deleteItemDoing}
          />
        </Grid>
        {/* DoneList */}
        <Grid item xs={4}>
          <DoneList done={done} onDelete={deleteItemDone} />
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
