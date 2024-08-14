import React, { useState } from "react";
import { removeTodo, updateTodo, completeTodo } from "../feature/createSlice";
import { useDispatch } from "react-redux";
const AddForm = ({ todo }) => {
  const [newText, setNewText] = useState(todo.text);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const editTodo = () => {
    dispatch(updateTodo({ id: todo.id, text: todo.newText }));
    setEdit(false);
  };
  const toggleCompleted = () => {
    dispatch(completeTodo({ id: todo.id }));
  };
  return (
    <>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          style={{ width: "30px" }}
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          value={newText}
          className={`border outline-none w-full bg-transparent rounded-lg
          ${edit ? "border-black/10 px-2" : "border-transparent"}
          ${todo.completed ? "bg-[#aec69d]" : "bg-[#4f4d51]"}
          `}
          readOnly={!edit}
          onChange={(e) => setNewText(e.target.value)}
        />
        {/* <button className="inline-flex w-auto h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
          {todo.date}
        </button> */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (edit) {
              editTodo();
            } else setEdit((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {edit ? "📁" : "✏️"}
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default AddForm;
