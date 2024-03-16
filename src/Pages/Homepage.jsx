import React, { useEffect, useState } from "react";
import Alltodo from "../Components/Alltodo";
import Progress from "../Components/Progress";
import Review from "../Components/Review";
import Completed from "../Components/Completed";

const Homepage = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "Complete homework assignment", status: "progress" },
    { id: 2, text: "Prepare for upcoming interview", status: "progress" },
    ,
    { id: 3, text: "Go for a run in the evening", status: "review" },
    { id: 4, text: "Schedule a meeting with the team", status: "review" },
    { id: 5, text: "Buy groceries for the week", status: "done" },
    { id: 6, text: "Review and update resume", status: "done" },
  ]);

  useEffect(() => {}, [todo]);
  return (
    <div className="py-[50px]">
    
    </div>
  );
};

export default Homepage;
