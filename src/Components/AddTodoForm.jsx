import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todoSlice";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo({ title, description }));
    setTitle("")
    setDescription("")
  };
  return (
    <div></div>
  );
};

export default AddTodoForm;
