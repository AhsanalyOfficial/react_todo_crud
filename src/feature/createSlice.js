import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: nanoid(),
        text: "Learn React",
        completed: false,
      },
      {
        id: nanoid(),
        text: "Learn Redux",
        completed: false,
      },
      {
        id: nanoid(),
        text: "Learn Redux Toolkit",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => {
        todo.id === id;
      });
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
    completeTodo: (state, action) => {
      const { id } = action.payload;
      const todoToggle = state.todos.find((todo) => todo.id === id);
      if (todoToggle) {
        todoToggle.completed = !todoToggle.completed;
      }
    },
    setTodosFromLocalStorage: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  completeTodo,
  setTodosFromLocalStorage,
} = todoSlice.actions;
export default todoSlice.reducer;
