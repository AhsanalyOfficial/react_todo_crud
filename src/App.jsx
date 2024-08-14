import "./App.css";
import React, { useEffect } from "react";
import FormTodo from "./components/FormTodo";
import AddForm from "./components/AddForm";
import { useDispatch, useSelector } from "react-redux";
import { setTodosFromLocalStorage } from "./feature/createSlice";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("New_Todo")) || [];
    if (storedTodos && storedTodos.length > 0) {
      dispatch(setTodosFromLocalStorage(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("New_Todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="bg-[#172842] h-auto py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <FormTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <AddForm todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
