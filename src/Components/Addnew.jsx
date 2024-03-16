import React from "react";
import { IoAdd } from "react-icons/io5";
const Addnew = () => {
  return (
    <div className="w-[90%] mx-auto h-[50px]  my-[10px] flex items-center gap-3 p-2">
      <IoAdd className="text-[18px]" />
      <h1 className="text-[18px] font-primary">Add a card</h1>
    </div>
  );
};

export default Addnew;
