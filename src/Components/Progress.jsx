import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import SingleTodo from "./SingleTodo";
import Addnew from "./Addnew";
const Progress = ({ progress, setTodo }) => {
  // console.log(progress, "progress");
  return (
    <div className="min-h-[400px] bg-slate-200 rounded-md">
      <div
        key="header-progress"
        className="w-[90%] mx-auto flex justify-between pt-[10px]"
      >
        <h1 className="text-[17px] font-primary font-semibold">In Progress</h1>
        <HiDotsHorizontal className="text-[17px]  " />
      </div>
      <div className="flex flex-col gap-2">
        {progress.length &&
          progress.map((ele) => {
            return (
              ele.status === "progress" && (
                <SingleTodo todo={ele} setTodo={setTodo} data={progress} />
              )
            );
          })}
      </div>
      <Addnew />
    </div>
  );
};

export default Progress;
