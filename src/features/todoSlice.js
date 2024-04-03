import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        isEditable: false,
        isCompleted: false,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editToDo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isEditable: true } : todo
      );
    },
    updateToDo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              isEditable: false,
              description: action.payload.description,
            }
          : todo
      );
    },
    completeToDo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: action.payload.isCompleted }
          : todo
      );
    },
  },
});

export const { addToDo, removeToDo, editToDo, updateToDo, completeToDo } =
  todoSlice.actions;
export default todoSlice.reducer;
