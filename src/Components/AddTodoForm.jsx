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
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={submitToDoHandler}>
        <div className="py-1">
          <span className="hover:border-b-2 border-blue-500">Task Title</span>
        </div>

        <div className="pb-4">
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="p-1.5 rounded-md border-2 hover:border-purple-500  "
          />
        </div>

        <div className="py-1">
          <span className="hover:border-b-2 border-blue-500">
            Task Description
          </span>
        </div>

        <div className="pb-4">
          <input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className=" p-1.5 pb-8 rounded-md border-2 hover:border-blue-500"
          />
        </div>

        <div className="bg-blue-900 text-white flex justify-center rounded-md p-1  border-2 hover:border-purple-500">
          <button>Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
