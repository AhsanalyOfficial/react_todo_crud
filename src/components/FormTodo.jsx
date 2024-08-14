import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/createSlice";

const FormTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleAdd} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Todo"
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button className="rounded-l-none px-3 py-1 bg-green-600 text-white shrink-0">
          Add
        </button>
      </form>
    </>
  );
};

export default FormTodo;
