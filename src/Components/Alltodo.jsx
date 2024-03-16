import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import SingleTodo from "./SingleTodo";
import Addnew from "./Addnew";
const Alltodo = ({ alltodo, setTodo }) => {
  // console.log(alltodo, "alltodo");
  return (
    <div className="min-h-[400px] bg-slate-200 rounded-md">
      <div
        key="header-alltodo"
        className="w-[90%] mx-auto flex justify-between pt-[10px]"
      >
        <h1 className="text-[17px] font-primary font-semibold">To Do</h1>
        <HiDotsHorizontal className="text-[17px]  " />
      </div>

      {/* ---------------------  map our todos ---------------------- */}
      <div className="flex flex-col gap-2">
        {alltodo.length &&
          alltodo.map((ele) => {
            return <SingleTodo todo={ele} setTodo={setTodo} data={alltodo} />;
          })}
      </div>
      <Addnew />
    </div>
  );
};

export default Alltodo;
