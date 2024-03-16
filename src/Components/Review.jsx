import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import SingleTodo from "./SingleTodo";
import Addnew from "./Addnew";
const Review = ({ review, setTodo }) => {
  // console.log(review, "review");
  return (
    <div className="min-h-[400px] bg-slate-200 rounded-md">
      <div
        key="header-progress"
        className="w-[90%] mx-auto flex justify-between pt-[10px]"
      >
        <h1 className="text-[17px] font-primary font-semibold">Review</h1>
        <HiDotsHorizontal className="text-[17px]  " />
      </div>
      <div className="flex flex-col gap-2">
        {review.length &&
          review.map((ele) => {
            return (
              ele.status === "review" && (
                <SingleTodo todo={ele} setTodo={setTodo} data={review} />
              )
            );
          })}
      </div>
      <Addnew />
    </div>
  );
};

export default Review;
