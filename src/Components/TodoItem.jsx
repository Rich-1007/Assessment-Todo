import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  completeToDo,
  editToDo,
  removeToDo,
  updateToDo,
} from "../features/todoSlice";

const TodoItem = ({ id, title, description, isEditable, isCompleted }) => {
  const dispatch = useDispatch();
  const [newDescription, setNewDescription] = useState(description);

  const editTodoHandler = () => {
    dispatch(editToDo(id));
  };
  const updateToDoHandler = () => {
    dispatch(updateToDo({ id, description: newDescription }));
  };

  const deleteToDo = () => {
    dispatch(removeToDo(id));
  };

  const completeTaskHandler = () => {
    dispatch(completeToDo({ id, isCompleted: !isCompleted }));
  };
  const [isToDoOpen, setIsToDoOpen] = useState(false);
  return (
    <div className=" border-gray-300 border rounded-sm p-1.5 hover:ring-2 hover:ring-blue-600 sm:w-96 ">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={completeTaskHandler}
        />

        <span className={`pl-3 flex-grow ${isCompleted && "line-through"}`}>
          {title}
        </span>

        <div onClick={() => setIsToDoOpen((prev) => !prev)}>
          <IoIosArrowDropdown size={24} />
        </div>
      </div>
      <div className={`overflow-hidden max-h-0 ${isToDoOpen && "max-h-max"}`}>
        <hr />

        {isEditable ? (
          <input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        ) : (
          <p>{description}</p>
        )}

        <div className="flex gap-2">
          {isEditable ? (
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
              onClick={updateToDoHandler}
            >
              Update
            </button>
          ) : (
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
              onClick={editTodoHandler}
            >
              Edit
            </button>
          )}

          <button
            className="px-3 py-1 bg-rose-600 text-white rounded-md text-sm"
            onClick={deleteToDo}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
