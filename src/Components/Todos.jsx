import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = () => {
  const { todos } = useSelector((store) => store.todo);
  console.log("todos: ", todos);

  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(
    () => {
        setFilteredToDos(todos)
    }, [todos]
  )



  const showAllToDos = () => {
    console.log("All todos")
    setFilteredToDos(todos);
  };

  const showCompletedToDos = () => {
    const completedToDos = todos.filter((todo) => todo.isCompleted === true);
    console.log("completed ToDos: ", completedToDos);
    setFilteredToDos(completedToDos);
  };

  const showIncompeleteToDo = () => {
    const incompleteToDos = todos.filter((todo) => todo.isCompleted == false);
    console.log("incomplete ToDos: ", incompleteToDos);
    setFilteredToDos(incompleteToDos);
  };

  return (
    <div className="w-screen sm:w-6/12 px-4 sm:px-7 py-8 bg-white">
      <div className="text-2xl sm:text-lg pb-3  ">
        <span className="hover:border-b-2 border-blue-500">To do tasks</span>
      </div>

      <div className="flex gap-3 pb-6 ">
        <div className="w-16 flex items-center justify-center border-black outline outline-1 rounded-md py-0.5   ring-0 hover:ring-2 hover:ring-blue-600   ">
          <button className="border-b-2 border-white hover:border-blue-500" onClick={showAllToDos}>
            All
          </button>
        </div>

        <div className="w-16 flex items-center justify-center border-black outline outline-1 rounded-md py-0.5   ring-0 hover:ring-2 hover:ring-blue-600 ">
          <button className="border-b-2 border-white hover:border-blue-500" onClick={showCompletedToDos}>
            Done
          </button>
        </div>

        <div className="w-16 flex items-center justify-center border-black outline outline-1 rounded-md py-0.5   ring-0 hover:ring-2 hover:ring-blue-600 ">
          <button className="border-b-2 border-white hover:border-blue-500" onClick={showIncompeleteToDo}>
            To Do
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {filteredToDos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            isEditable={todo.isEditable}
            isCompleted={todo.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
