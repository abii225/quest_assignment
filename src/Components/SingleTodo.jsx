import React, { useState } from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { MdOutlineModeComment } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
const SingleTodo = ({ todo, setTodo, data }) => {
  console.log(todo, data, "hey");
  const [colors, setColors] = useState([
    "green",
    "blue",
    "orange",
    "red",
    "yellow",
    "violet",
    "purple",
  ]);
  //   console.log(Math.floor(Math.random() * colors.length));
  const deleteTodo = (id) => {
    console.log(id);
    let newTodos = data.filter((ele) => {
      return ele.id != id;
    });
    console.log(newTodos);
    setTodo((prev) => {
      return [...newTodos];
    });
  };
  return (
    <div
      key={todo.id}
      className="w-[90%] mx-auto p-2  rounded-md min-h-[50px] shadow bg-white"
    >
      <div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        className="w-[10%] h-2 rounded-full  "
      ></div>
      <h1 className="text-[15px] font-primary ">{todo?.text}</h1>
      <br />
      <div className="flex flex-row gap-3 items-center">
        <RxDragHandleHorizontal className="cursor-pointer" />
        <div className="flex items-center gap-1">
          {" "}
          <MdOutlineModeComment className="cursor-pointer" />
          <h4>{Math.floor(Math.random() * 10)}</h4>
        </div>
        <MdDeleteSweep
          className="text-red-600 cursor-pointer"
          onClick={(e) => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
};

export default SingleTodo;
