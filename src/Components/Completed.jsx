import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import SingleTodo from "./SingleTodo";
import Addnew from "./Addnew";

const Completed = ({ completed, setTodo }) => {
  // console.log(deletTodo, "completed");
  return (
    <div className=" bg-slate-200 rounded-md">
      <div
        key="header-progress"
        className="w-[90%] mx-auto flex justify-between pt-[10px]"
      >
        <h1 className="text-[17px] font-primary font-semibold">Done</h1>
        <HiDotsHorizontal className="text-[17px]  " />
      </div>
      <div className="flex flex-col gap-2">
        {completed.length &&
          completed.map((ele) => {
            return (
              ele.status === "done" && (
                <SingleTodo todo={ele} setTodo={setTodo} data={completed} />
              )
            );
          })}
      </div>
      <Addnew />
    </div>
  );
};

export default Completed;
